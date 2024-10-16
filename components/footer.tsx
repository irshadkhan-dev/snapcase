import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="h-20 bg-white relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />
        <div className="h-full flex justify-center md:justify-between items-center flex-col md:flex-row ">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              ©{new Date().getFullYear()} SnapCase, Inc. All rights reversed.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link
                href={"/"}
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Terms
              </Link>
              <Link
                href={"/"}
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Pricacy Policy
              </Link>
              <Link
                href={"/"}
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
