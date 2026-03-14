import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex-shrink-0 text-lg font-bold tracking-tight"
        >
          Modern Portfolio
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          <MainNav />
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
        </div>
      </div>
      {/* Mobile nav below header */}
      <div className="border-t bg-background/95 md:hidden">
        <div className="container mx-auto flex justify-center px-4 py-2">
          <MainNav />
        </div>
      </div>
    </header>
  )
}
