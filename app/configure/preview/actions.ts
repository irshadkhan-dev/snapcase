"use server";

import { db } from "@/app/db";

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
};
