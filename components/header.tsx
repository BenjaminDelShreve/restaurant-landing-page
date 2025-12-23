"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#on-tap", label: "On Tap" },
    { href: "#contact", label: "Contact" },
    { href: "#reservations", label: "Reservations" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/uptown-logo.jpeg"
              alt="Uptown Kitchen + Taphouse"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-accent hover:bg-accent/90">
                <a href="#reservations">Reserve a Table</a>
              </Button>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isMobileMenuOpen && (
          <nav className="md:hidden pb-6 pt-2 border-t border-border mt-2">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-accent hover:bg-accent/90 w-full">
                <a href="#reservations" onClick={() => setIsMobileMenuOpen(false)}>
                  Reserve a Table
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
