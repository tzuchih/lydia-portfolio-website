// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lydia Hsu Portfolio",
  description: "Apple-style scroll highlight hero",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className="min-h-screen bg-white text-black antialiased"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
