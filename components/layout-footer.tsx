export function Footer() {
  return (
    <footer className="mt-8 w-full border-t bg-background/80 py-4 text-xs text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 md:flex-row">
        <span>
          &copy; {new Date().getFullYear()} Modern Portfolio. All rights
          reserved.
        </span>
        <span>
          Built with{" "}
          <a
            href="https://nextjs.org/"
            className="underline hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          &amp;{" "}
          <a
            href="https://ui.shadcn.com/"
            className="underline hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            shadcn/ui
          </a>
        </span>
      </div>
    </footer>
  )
}
