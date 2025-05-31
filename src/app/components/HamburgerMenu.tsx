import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";

export default function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger className="mt-8 mr-10">
        <Menu className="w-12 h-12 text-[#CBBFA1]" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-zinc-900 text-white">
        <SheetHeader>
          <SheetTitle className="sr-only">メニュー</SheetTitle>
        </SheetHeader>

        {/* メニュー項目 */}
        <nav className="mt-6 flex flex-col gap-4">
          <a href="#home">ホーム</a>
          <a href="#features">特徴</a>
          <a href="#about">このアプリについて</a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
