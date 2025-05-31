import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import HamburgerMenu from "@/app/components/HamburgerMenu";

export const metadata: Metadata = {
  title: "Seen - 誰にも見られないSNS風アプリ",
  description:
    "Seenは、感情を投稿できる“クローズドSNS風”アプリ。誰にも見られない安心感の中で、本音を書き出せる場所を提供します。",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className="bg-zinc-950 text-[#CBBFA1] overflow-hidden bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/hero-bg.png")' }}
      >
        <div className="flex h-screen overflow-hidden">
          {/* 固定背景 */}
          <div className="w-1/2 h-screen relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 mt-25 z-10 space-y-6 ">
              <Image
                src="/images/title-main.svg"
                alt="Seenのロゴ"
                width={474}
                height={128}
                priority
              />
              <p className="text-2xl leading-[1.7] tracking-[0.11em] ShipporiMincho-Regular">
                Seenは、感情を投稿できる。
                <br />
                だけど誰にも見られない。
                <br />
                そんな“SNS風”アプリです。
              </p>
            </div>
          </div>

          {/* スクロールUI */}
          <div className="w-1/2 h-screen flex items-center justify-center relative mt-8">
            <div className="w-1/2 h-screen overflow-y-scroll no-scrollbar bg-[#143841] rounded-[32px] shadow-xl">
              {children}
            </div>
          </div>
          <div>
            {/* ハンバーガーメニュー */}
            <HamburgerMenu />
          </div>
        </div>
      </body>
    </html>
  );
}
