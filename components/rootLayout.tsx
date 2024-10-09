"use client";
import { main } from "framer-motion/client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./footer";

const RootLayout2 = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");
  return (
    <>
      {isAuthPage ? (
        <main className="flex grainy-light items-center justify-center min-h-screen">
          {children}
        </main>
      ) : (
        <>
          <Navbar />
          <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
            <div className="flex-1 flex h-full flex-col">{children}</div>
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default RootLayout2;
