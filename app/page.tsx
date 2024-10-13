import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";
import Phone from "@/components/Phone";
import { Icons } from "@/components/Icons";
import { Reviews } from "@/components/Reviews";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" ">
      <section className="grainy-light bg-slate-50">
        <MaxWidthWrapper className=" lg:grid lg:grid-cols-3 pb-24 pt-10 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute -top-20 left-0 w-28 hidden lg:block">
                <img src="/snake-1.png" className="w-full" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100" />
              </div>

              <h1 className="relative tracking-tighter w-fit text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-[#16a349] text-white "> Custom </span>
                Phone Case
              </h1>

              <p className="mt-8  text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,
                <span className="font-semibold"> one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>

              <ul className="mt-8 text-left font-medium flex flex-col">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"></Check>
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"></Check>5
                    year print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"></Check>
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                  />
                </div>

                <div className="flex flex-col  justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
                  </div>

                  <p className="">
                    <span className="font-semibold">1,250+ </span>happy
                    customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute  w-40 -top-20 left-56 lg:w-52 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />

              <Phone className="w-64" imgSrc="/testimonials/1.jpg"></Phone>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition section */}

      <section className="bg-slate-100 grainy-dark py-24">
        <MaxWidthWrapper className="mx-auto h-full flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center lg:gap-6 gap-4">
            <h2 className="text-5xl md:text-6xl text-center order-1 mt-2 tracking-tight font-bold text-gray-900 !leading-tight  ">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>
              say
            </h2>
            <img src="/snake-2.png" className=" w-24 order-0 lg:order-2 " />
          </div>

          <div className="mx-auto grid max-w-2xl lg:max-w-none grid-cols-1 lg:grid-cols-2 px-4 lg:mx-0 gap-y-16">
            <div className="flex flex-col flex-auto  gap-6 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="text-green-600 fill-green-600 h-5 w-5"></Star>
                <Star className="text-green-600 fill-green-600 h-5 w-5"></Star>
                <Star className="text-green-600 fill-green-600 h-5 w-5"></Star>
                <Star className="text-green-600 fill-green-600 h-5 w-5"></Star>
                <Star className="text-green-600 fill-green-600 h-5 w-5"></Star>
              </div>
              <div className="leading-8 text-lg">
                <p className="font-semibold">
                  "The case feels durable and I even got a compliment on the
                  design. Had the case for two and a half months now and{" "}
                  <span className="bg-slate-800 text-white p-0.5">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it."
                </p>
              </div>

              <div className="flex gap-4 mt-2 items-center">
                <img
                  src="/users/user-1.png"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Abbaish Khan</p>
                  <div className="flex gap-1.5 items-center  font-semibold text-zinc-600">
                    <Check className="text-green-600 w-4 h-4 stroke-[3px]" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* second review user */}

            <div className="flex flex-col flex-auto  gap-6">
              <div className="flex gap-0.5 mb-2">
                <Star className="text-green-600 fill-green-600 h-5 w-5"></Star>
                <Star className="text-green-600 fill-green-600 h-5 w-5"></Star>
                <Star className="text-green-600 fill-green-600 h-5 w-5"></Star>
                <Star className="text-green-600 fill-green-600 h-5 w-5"></Star>
                <Star className="text-green-600 fill-green-600 h-5 w-5"></Star>
              </div>
              <div className="leading-8 text-lg">
                <p className="font-semibold">
                  "I usually keep my phone together with my keys in my pocket
                  and that led to some pretty heavy scratchmarks on all of my
                  last phone cases. This one, besides a barely noticeable
                  scratch on the corner,{" "}
                  <span className="bg-slate-800 p-0.5 text-white">
                    looks brand new after about half a year
                  </span>
                  . I dig it."
                </p>
              </div>

              <div className="flex gap-4 mt-2 items-center">
                <img
                  src="/users/user-2.png"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Annash khan</p>
                  <div className="flex gap-1.5 items-center  font-semibold text-zinc-600">
                    <Check className="text-green-600 w-4 h-4 stroke-[3px]" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        {/* what people are buying section  */}

        <div className="pt-16">
          <Reviews></Reviews>
        </div>
      </section>

      <section className="bg-slate-50 grainy-light">
        <MaxWidthWrapper className="py-24 h-full mx-auto max-w-screen-xl w-full px-2.5 md:px-20">
          <div className="mb-12 px-6 lg:px-12">
            <div className="mx-auto max-w-2xl sm:text-center">
              <p className="mt-2 text-balance order-1 text-5xl md:text-6xl w-fit tracking-tighter !leading-tight font-bold text-center text-gray-900">
                Upload your photo and get{" "}
                <span className="bg-green-600 text-white relative px-2">
                  your own case
                </span>{" "}
                now
              </p>
            </div>
          </div>

          <div className="mx-auto px-6 lg:px-8 max-w-6xl">
            <div className=" relative flex flex-col items-center mx-auto md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                className="absolute rotate-90 md:rotate-0 top-[25rem] md:top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 z-10"
              />
              <div className="relative h-80 w-full md:h-full max-w-sm md:justify-self-end shadow-2xl rounded-xl lg:rounded-2xl ring-inset bg-gray-900/5 ring-gray-900/10">
                <img
                  src="/horse.jpg"
                  className="h-full w-full shadow-2xl rounded-md ring-1 ring-gray-900/10 object-cover bg-white"
                />
              </div>
              <Phone imgSrc="/horse_phone.jpg" className="w-60"></Phone>
            </div>
            <ul className="text-left font-medium mx-auto max-w-prose sm:text-lg w-fit mt-12">
              <div className="space-y-2">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="text-green-600 h-5 w-5 shrink-0"></Check>
                  High-quality silicone material
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="text-green-600 h-5 w-5 shrink-0"></Check>
                  Scratch- and fingerprint resistant coating
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="text-green-600 h-5 w-5 shrink-0"></Check>
                  Wireless charging compatible
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="text-green-600 h-5 w-5 shrink-0"></Check>5
                  year print warranty
                </li>
              </div>
              <div className="flex justify-center mt-10">
                <Link href={"/configure/upload"}>
                  <Button className="flex gap-1.5 px-10 py-6">
                    Create your own case <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </ul>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
