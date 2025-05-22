import { ThemeToggle } from '@/integrations/theme'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-6">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 flex-row">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} rxliuli. All rights reserved.
        </p>

        <ThemeToggle />
      </div>
    </footer>
  )
}
