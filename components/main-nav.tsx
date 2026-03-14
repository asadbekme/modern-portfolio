import Link from "next/link"
import { navLinks } from "@/data/navLinks"

export function MainNav() {
  return (
    <nav className="flex items-center gap-6">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
