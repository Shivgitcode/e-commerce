import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Bar from "@/components/Bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-[70%] px-5 mx-auto font-mont text-sm">
          <Navbar></Navbar>
          <div className="flex mt-[50px]">
            <Sidebar></Sidebar>
            {/* <Bar></Bar> */}

            <div className="w-full">
              {children}


            </div>
          </div>


        </div>
      </body>
    </html>
  );
}
