import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
      <div className="absolute inset-0 bg-[url('/rustic-restaurant-interior-warm-lighting.jpg')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 py-32 relative z-10 text-center">
        <div className="mb-8 flex justify-center animate-fade-in-up">
          <Image
            src="/images/image.png"
            alt="Uptown Kitchen + Taphouse"
            width={600}
            height={200}
            className="w-full max-w-2xl h-auto"
            priority
          />
        </div>
        {/* </CHANGE> */}

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance animate-fade-in-up">
          Uptown Kitchen + Taphouse
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed animate-fade-in-up animation-delay-200">
          Where Northwest Arkansas gathers for craft beer, scratch-made burgers, and unforgettable moments. Experience
          upscale-casual dining at its finest.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <a href="#menu">View Menu</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            <a href="#reservations">Make Reservation</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
