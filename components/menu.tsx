"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"
import { ChevronRight } from "lucide-react"

const burgers = [
  {
    name: "The Classic",
    description: "Pure perfection: premium beef, lettuce, tomato, pickles, special sauce",
    price: "$14",
    image: "/burger-pic.webp",
  },
  {
    name: "The Blues Burger",
    description: "Bold and tangy with crumbled bleu cheese, caramelized onions, bacon",
    price: "$16",
    image: "/bleu-cheese-burger-1.jpg",
  },
  {
    name: "The Shroom Master",
    description: "Savory sautéed mushrooms, Swiss cheese, garlic aioli, arugula",
    price: "$15",
    image: "/shroom-burger.jpeg",
  },
  {
    name: "Sunrise",
    description: "Start your day right: fried egg, bacon, cheddar, hash brown patty",
    price: "$16",
    image: "/sunrise-burger.jpeg",
  },
  {
    name: "The Inferno Burger",
    description: "Spicy jalapeños, pepper jack, sriracha mayo, crispy onion strings",
    price: "$15",
    image: "/Inferno-burger.jpeg",
  },
]

export function Menu() {
  const isMobile = useMobile()
  const [pressedBurger, setPressedBurger] = useState<string | null>(null)

  const handlePointerDown = (burgerName: string) => {
    setPressedBurger(burgerName)
  }

  const handlePointerUp = () => {
    setPressedBurger(null)
  }

  const handlePointerCancel = () => {
    setPressedBurger(null)
  }

  return (
    <section id="menu" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">Our Menu</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Signature burgers crafted from scratch daily</p>

        {/* Desktop Grid */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {burgers.map((burger) => (
              <Card
                key={burger.name}
                className="overflow-hidden group cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] select-none"
                onPointerDown={() => handlePointerDown(burger.name)}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerCancel}
              >
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-1">
                      <h3 className="text-lg font-semibold group-hover:underline">{burger.name}</h3>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <span className="text-base font-semibold text-accent">{burger.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{burger.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">Click & hold to preview</p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Mobile List */}
        {isMobile && (
          <div className="space-y-3 max-w-2xl mx-auto">
            {burgers.map((burger) => (
              <Card
                key={burger.name}
                className="overflow-hidden cursor-pointer transition-transform duration-200 active:scale-[0.98] select-none"
                onPointerDown={() => handlePointerDown(burger.name)}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerCancel}
                onTouchStart={() => handlePointerDown(burger.name)}
                onTouchEnd={handlePointerUp}
                onTouchCancel={handlePointerCancel}
              >
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-1">
                      <h3 className="text-lg font-semibold">{burger.name}</h3>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-base font-semibold text-accent">{burger.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{burger.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">Tap & hold to preview</p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Image Preview Overlay */}
        {pressedBurger && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 touch-none"
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onTouchEnd={handlePointerUp}
            onTouchCancel={handlePointerCancel}
          >
            <div className="relative w-full max-w-2xl aspect-video rounded-lg overflow-hidden pointer-events-none">
              <Image
                src={burgers.find((b) => b.name === pressedBurger)?.image || "/placeholder.jpg"}
                alt={pressedBurger}
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="absolute bottom-8 text-white/80 text-sm">Release to close</p>
          </div>
        )}
      </div>
    </section>
  )
}
