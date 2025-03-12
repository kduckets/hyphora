import Image from "next/image"
import { ArrowRight, Leaf, Music, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-black">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <div className="space-y-3 mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              <span className="text-green-600 dark:text-green-400">Hyphora</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto">
              Digital experiences for those making a difference
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Our Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">We build digital experiences for</h2>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              Organizations that are making a positive impact on our world
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Environmental Organizations</h3>
              <p className="text-center text-muted-foreground">
                Websites that inspire action and showcase the important work of environmental advocates.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nonprofit Organizations</h3>
              <p className="text-center text-muted-foreground">
                Digital platforms that amplify your mission and connect you with supporters.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Music className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Music Industry</h3>
              <p className="text-center text-muted-foreground">
                Creative digital experiences for artists, labels, and music-focused businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              A selection of our recent projects for mission-driven organizations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={`/placeholder.svg?height=450&width=800`}
                    alt={`Project ${item}`}
                    width={800}
                    height={450}
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Project Title</h3>
                    <p className="text-white/80">Environmental Organization</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" variant="outline">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Approach</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe in creating digital experiences that are not only beautiful but also sustainable, accessible,
                and impactful.
              </p>
              <ul className="space-y-4">
                {[
                  "Sustainable web design",
                  "Accessibility-first approach",
                  "Impact-focused strategy",
                  "Collaborative process",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-4 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 bg-green-600 hover:bg-green-700 text-white">Learn More About Us</Button>
            </div>
            <div className="relative">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Our team at work"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-lg bg-green-600" />
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-lg bg-green-200 dark:bg-green-800" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-[700px]">Hear from the organizations we've helped</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-green-950/40 p-8 rounded-lg shadow-sm">
              <p className="italic text-muted-foreground mb-6">
                "Hyphora transformed our digital presence. Their understanding of our environmental mission was evident
                in every design choice and feature they implemented."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-muted mr-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Client"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">EcoAction Foundation</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-green-950/40 p-8 rounded-lg shadow-sm">
              <p className="italic text-muted-foreground mb-6">
                "Working with Hyphora was a collaborative and inspiring experience. They created a website that
                perfectly captures our music collective's ethos and has significantly increased our audience
                engagement."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-muted mr-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Client"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Marcus Rivera</h4>
                  <p className="text-sm text-muted-foreground">Harmony Collective</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 dark:bg-green-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Ready to make an impact?</h2>
            <p className="text-xl text-white/80 max-w-[700px] mb-8">
              Let's create a digital experience that amplifies your mission and connects with your audience.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

