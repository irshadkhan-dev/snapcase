import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MaxWidthWrapper className="flex flex-col justify-center items-center gap-20 sm:gap-32">
      <div className=""></div>
      {children}
    </MaxWidthWrapper>
  );
}
