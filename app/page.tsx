import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Menu } from "@/components/menu"
import { OnTap } from "@/components/on-tap"
import { Reservations } from "@/components/reservations"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <OnTap />
        <Reservations />
        <Contact />
      </main>
    </div>
  )
}
