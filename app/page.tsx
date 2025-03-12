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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              <span className="text-green-600 dark:text-green-400">Cultivating Impact:</span> Digital Solutions for a
              Better World
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px] mx-auto">
              We believe in fostering meaningful connections and driving impactful growth.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              See Our Impact <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Start Your Project
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Empowering Change-Makers: Digital Solutions for Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              We offer a comprehensive suite of services designed to empower impact-driven organizations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Environmental Organizations</h3>
              <p className="text-center text-muted-foreground">
                High-impact websites that drive action for environmental causes.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nonprofit Organizations</h3>
              <p className="text-center text-muted-foreground">
                Engaging digital platforms that amplify your mission and build stronger communities.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Music className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Creative & Cultural Organizations</h3>
              <p className="text-center text-muted-foreground">
                Innovative digital experiences that connect artists, audiences, and communities.
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
              A curated selection of projects demonstrating our commitment to impactful digital solutions.
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

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Approach</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're committed to crafting digital experiences that are beautiful, sustainable, accessible, and drive
                meaningful impact.
              </p>
              <ul className="space-y-4">
                {[
                  "Sustainable Design & Development",
                  "Inclusive Accessibility Practices",
                  "Data-Driven Impact Strategies",
                  "Collaborative Partnership Approach",
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
                  alt="About Hyphora Solutions"
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

      {/* Blog Section */}
      <section className="py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Insights & Inspiration</h2>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              Stay up-to-date on the latest trends and best practices in impact-driven marketing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-green-950/40 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">The Power of Purpose-Driven Marketing</h3>
              <p className="text-muted-foreground mb-6">
                In today's crowded digital landscape, purpose-driven organizations have a unique advantage: authentic
                stories that resonate deeply with audiences seeking meaning and impact...
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-muted mr-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Author"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Emma Johnson</h4>
                  <p className="text-sm text-muted-foreground">Marketing Strategist</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-green-950/40 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Building Community Through Digital Engagement</h3>
              <p className="text-muted-foreground mb-6">
                For impact-driven organizations, community isn't just a nice-to-have—it's essential. Learn how to
                leverage digital tools to build and nurture a community that amplifies your mission...
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-muted mr-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Author"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Marcus Rivera</h4>
                  <p className="text-sm text-muted-foreground">Community Engagement Specialist</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" variant="outline">
              Read our blog <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-[700px]">Hear from the organizations we've helped</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 dark:bg-green-950/40 p-8 rounded-lg shadow-sm">
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
            <div className="bg-green-50 dark:bg-green-950/40 p-8 rounded-lg shadow-sm">
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Ready to Amplify Your Impact?</h2>
            <p className="text-xl text-white/80 max-w-[700px] mb-8">
              Partner with us to build a digital presence that drives meaningful change and fosters lasting connections.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

