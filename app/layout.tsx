import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "一般社団法人 結 | 人と人を結ぶ、健康づくりの輪。",
  description:
    "一般社団法人 結は、食・動・美・心の調和から、毎日の暮らしをやさしく整える健康づくりの場を育てます。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
