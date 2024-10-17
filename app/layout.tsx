import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import { Recursive } from "next/font/google";
import { constructMetadata } from "@/lib/utils";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = constructMetadata();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Providers>
          <Navbar />
          <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
            <div className="flex-1 flex h-full flex-col">{children}</div>
          </main>
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
