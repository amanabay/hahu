import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "@/components/modals/exit-modal";
import "./globals.css";
import { HeartsModal } from "@/components/modals/hearts-modal";
import { PracticeModal } from "@/components/modals/practice-modal";

const font = Nunito({ subsets: ['latin'], display: 'swap', adjustFontFallback: false})

export const metadata: Metadata = {
  title: "Hahu",
  description: "Amharic Language Learning Platform",
  icons: {
    icon: [
      {
        url: "/hahulogo2.png",
        href: "/hahulogo2.png",
      },
    ],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
