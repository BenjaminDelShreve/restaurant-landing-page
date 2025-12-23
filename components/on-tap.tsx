import { Card } from "@/components/ui/card"
import { Beer } from "lucide-react"

const beers = [
  { name: "Ozark Pale Ale", type: "Local IPA", abv: "6.2%" },
  { name: "Trail Amber", type: "Amber Ale", abv: "5.5%" },
  { name: "Northwest Porter", type: "Porter", abv: "6.8%" },
  { name: "Crystal Lager", type: "Lager", abv: "4.8%" },
  { name: "Hopyard IPA", type: "IPA", abv: "7.1%" },
  { name: "Sunset Wheat", type: "Wheat Ale", abv: "5.2%" },
  { name: "Mountain Stout", type: "Stout", abv: "6.5%" },
  { name: "Valley Pilsner", type: "Pilsner", abv: "5.0%" },
]

export function OnTap() {
  return (
    <section id="on-tap" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">On Tap</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Rotating selection of craft beers from local and national breweries
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {beers.map((beer) => (
            <Card key={beer.name} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <Beer className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{beer.name}</h3>
                  <p className="text-sm text-muted-foreground">{beer.type}</p>
                  <p className="text-sm text-accent font-semibold mt-2">{beer.abv} ABV</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto bg-accent/10 border-accent/20 p-8 text-center">
          <Beer className="h-12 w-12 text-accent mx-auto mb-4" />
          <p className="text-lg font-medium">Our taps rotate regularly with seasonal favorites and new discoveries.</p>
          <p className="text-muted-foreground mt-2">Ask your server about today&apos;s featured selections!</p>
        </Card>
      </div>
    </section>
  )
}
