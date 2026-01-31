import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/10">
      {/* Header */}
      <nav className="flex h-16 w-full items-center justify-center border-b px-6">
        <div className="flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <img
              src="https://framerusercontent.com/assets/EztLhg3vcflCOvwHjGHVIxtnA.svg"
              alt="Bleenk Logo"
              className="h-8 w-auto dark:hidden"
            />
            <img
              src="https://framerusercontent.com/assets/xygwYSDxkD88YD9zVy6YgThptYA.svg"
              alt="Bleenk Logo"
              className="h-8 w-auto hidden dark:block"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://beta-app.bleenk.pro/">Sign In</a>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white px-4" asChild>
              <a href="https://beta-app.bleenk.pro/">Get Started</a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        {/* Simple background glow using official brand colors */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] -z-10" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-[100px] -z-10" />

        <div className="flex max-w-4xl flex-col items-center gap-8">
          <Badge variant="secondary" className="px-3 py-1 font-medium bg-secondary/10 text-secondary border-secondary/20">
            Official Bleenk Template
          </Badge>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
            Build the Next Web. <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Effortlessly.
            </span>
          </h1>

          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
            The foundation for production-ready applications. <br className="hidden sm:block" />
            Designed with the official Bleenk identity and modern best practices.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="h-12 px-8 text-base font-semibold shadow-lg shadow-primary/25 bg-primary hover:bg-primary/90" asChild>
              <a href="https://beta-app.bleenk.pro/">
                Start Building <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold hover:bg-accent/5 transition-colors border-border" asChild>
              <a href="https://bleenk.app/docs">Documentation</a>
            </Button>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="w-full border-t py-8 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <img
              src="https://framerusercontent.com/assets/9W6Fk3KF07L2U31WLrEX8unn2o4.svg"
              alt="Bleenk Icon"
              className="h-5 w-5"
            />
            <span className="font-semibold text-foreground">Bleenk</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Bleenk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
