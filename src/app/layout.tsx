import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/providers/redux-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import ReactQueryProvider from "@/providers/query-client-provider";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto Task",
  description: "Project by subhash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ReactQueryProvider>
          <NuqsAdapter>
            <ReduxProvider>
              <Analytics />
              <SpeedInsights />
              <Toaster />
              {children}
            </ReduxProvider>
          </NuqsAdapter>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
