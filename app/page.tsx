import { HoodieCard } from "@/components/hoodie-card"
import { AutoSliderBanner } from "@/components/auto-slider-banner"

export default function Home() {
  const hoodies = [
    {
      id: 1,
      name: "GHP Classic Black",
      price: 96.87,
      image1: "./Glory-honor-pain-front.png",
      image2: "./Glory-honor-pain.png",
    },
    {
      id: 2,
      name: "CC Premium Gray",
      price: 128.99,
      image1: "./Hoodie1.png",
      image2: "CCBACK.png",
    },
    {
      id: 3,
      name: "Nocturnal Signature Navy",
      price: 112.48,
      image1: "./Nocturnal front.png",
      image2: "./Nocturnal backside.png",
    },
    {
      id: 4,
      name: "APR Limited Edition",
      price: 169.56,
      image1: "./APR SKULL.png",
      image2: "./APR HOODIE BACKSIDE.png",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Full-screen Auto-sliding Banner */}
      <AutoSliderBanner />

      {/* Product Section */}
      <section id="product-section" className="w-full py-12 md:py-24 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">Latest Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hoodies.map((hoodie) => (
              <HoodieCard key={hoodie.id} {...hoodie} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

