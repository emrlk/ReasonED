import { notosans } from "@/app/ui/fonts";
import "./globals.css";

export const metadata = {
  title: "ReasonED",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notosans.className} antialiased`}>{children}</body>
    </html>
  );
}
