"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Leaf, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
            <span className="font-bold text-xl">Hyphora Solutions</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/work"
              className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Our Impact
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button className="hidden md:inline-flex bg-green-600 hover:bg-green-700 text-white">Let's Connect</Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="flex items-center space-x-2">
                      <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                      <span className="font-bold text-xl">Hyphora Solutions</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col space-y-6 flex-1">
                    <Link
                      href="/about"
                      className="text-lg font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      About
                    </Link>
                    <Link
                      href="/services"
                      className="text-lg font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      Services
                    </Link>
                    <Link
                      href="/work"
                      className="text-lg font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      Our Impact
                    </Link>
                    <Link
                      href="/blog"
                      className="text-lg font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/contact"
                      className="text-lg font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      Contact
                    </Link>
                  </nav>
                  <Button className="mt-auto bg-green-600 hover:bg-green-700 text-white">Let's Connect</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

