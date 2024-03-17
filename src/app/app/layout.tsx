import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Link from "next/link";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "grid grid-cols-[260px_1fr] min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <aside className="flex flex-col gap-6 px-4 py-6">
          <nav>
            <ul>
              <li>
                <Link href="/app">Dashboard</Link>
              </li>
            </ul>
          </nav>
        </aside>
        {children}
      </body>
    </html>
  );
}
