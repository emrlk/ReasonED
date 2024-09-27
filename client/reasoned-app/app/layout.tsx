import "./globals.css";
import { notosans } from "./ui/fonts";

export const metadata = {
  title: "ReasonED",
  description: "A logical fallacy game-based learning site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notosans.className} antialiased`}>{children}</body>
    </html>
  );
}
