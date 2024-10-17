"use server";

import { db } from "@/app/db";
import { auth } from "@/auth";
import { BASE_PRICE, PRODUCTS_PRICE } from "@/config/product";
import { stripe } from "@/lib/stripe";
import { Order } from "@prisma/client";
import Stripe from "stripe";

export const createCheckOutSession = async ({
  configId,
}: {
  configId: string;
}) => {
  const configuration = await db.configuration.findUnique({
    where: {
      id: configId,
    },
  });

  if (!configuration) {
    throw new Error("No such configuration found");
  }

  const session = await auth();
  const user = session?.user;

  if (!user) {
    throw new Error("You need to be logged in!");
  }

  const { finish, material } = configuration;

  let price = BASE_PRICE;
  if (finish === "textured") price += PRODUCTS_PRICE.finish.textured;
  if (material === "polycarbonate")
    price += PRODUCTS_PRICE.material.polycarbonate;

  let order: Order | undefined = undefined;

  const existingOrder = await db.order.findFirst({
    where: {
      userId: user.id,
      configurationId: configuration.id,
    },
  });

  if (existingOrder) {
    order = existingOrder;
  } else {
    order = await db.order.create({
      data: {
        userId: user.id as string,
        amount: price / 100,
        configurationId: configuration.id,
      },
    });
  }

  const product = await stripe.products.create({
    name: "Custom iPhone Case",
    images: [configuration.imageUrl],
    default_price_data: {
      currency: "USD",
      unit_amount: price,
    },
  });

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  if (!serverUrl) throw new Error("NEXT_PUBLIC_SERVER_URL is not defined");

  if (
    !product?.default_price ||
    !order?.id ||
    !configuration?.id ||
    !user?.id
  ) {
    throw new Error("Missing required values to create a Stripe session");
  }

  const sessionParams: Stripe.Checkout.SessionCreateParams = {
    success_url: `${serverUrl}/thank-you?orderId=${order.id}`,
    cancel_url: `${serverUrl}/configure/preview?id=${configuration.id}`,
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["NP", "US", "IN", "DE"],
    },
    metadata: {
      userId: user.id,
      orderId: order.id,
    },
    line_items: [{ price: product.default_price as string, quantity: 1 }],
    mode: "payment",
  };

  const stripeSession = await stripe.checkout.sessions.create(sessionParams);

  return { url: stripeSession.url };
};
