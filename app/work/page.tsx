import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function WorkPage() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "EcoAction Foundation",
      category: "Environmental",
      description:
        "A comprehensive website redesign for a leading environmental nonprofit, focusing on donation conversion and program awareness.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Harmony Collective",
      category: "Music Industry",
      description:
        "A digital platform for an independent music collective, showcasing artists and enabling direct fan engagement.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Ocean Conservation Trust",
      category: "Environmental",
      description:
        "An interactive educational platform highlighting marine conservation efforts and volunteer opportunities.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "Community Outreach Network",
      category: "Nonprofit",
      description: "A community-focused website connecting volunteers with local service opportunities and resources.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: "Sustainable Fashion Collective",
      category: "Environmental",
      description: "An e-commerce platform for sustainable fashion brands with impact tracking for each purchase.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      title: "Indie Record Label",
      category: "Music Industry",
      description:
        "A brand identity and website for an independent record label featuring artist profiles and music releases.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Work</h1>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              Explore our portfolio of digital experiences created for organizations making a positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div>
                    <span className="text-sm font-medium text-green-400 mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 mb-4 text-sm">{project.description}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-green-600"
                    >
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Featured Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              Dive deeper into some of our most impactful projects
            </p>
          </div>
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-sm font-medium text-green-600 dark:text-green-400 mb-2 block">Environmental</span>
                <h3 className="text-2xl font-bold mb-4">EcoAction Foundation</h3>
                <p className="text-muted-foreground mb-6">
                  EcoAction Foundation came to us with a challenge: their website wasn't effectively communicating their
                  mission or driving donations. We worked closely with their team to create a new digital experience
                  that clearly articulated their impact and made it easy for supporters to get involved.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                    <span className="text-sm">Increased donation conversion by 45%</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                    <span className="text-sm">Improved user engagement with interactive impact maps</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                    <span className="text-sm">Streamlined volunteer sign-up process</span>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white">Read Case Study</Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="EcoAction Foundation Project"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2">
                <span className="text-sm font-medium text-green-600 dark:text-green-400 mb-2 block">
                  Music Industry
                </span>
                <h3 className="text-2xl font-bold mb-4">Harmony Collective</h3>
                <p className="text-muted-foreground mb-6">
                  Harmony Collective needed a digital platform that would showcase their diverse roster of independent
                  artists while creating direct connections with fans. We developed a custom solution that integrated
                  streaming, merchandise sales, and event ticketing.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                    <span className="text-sm">Created a unified platform for 20+ artists</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                    <span className="text-sm">Increased direct-to-fan revenue by 60%</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                    <span className="text-sm">Simplified content management for the collective's team</span>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white">Read Case Study</Button>
              </div>
              <div className="order-1">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Harmony Collective Project"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-[700px]">What our clients say about working with us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 dark:bg-green-950/30 p-8 rounded-lg">
              <p className="italic text-muted-foreground mb-6">
                "Hyphora transformed our digital presence. Their understanding of our environmental mission was evident
                in every design choice and feature they implemented. The new website has significantly increased our
                donations and volunteer sign-ups."
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
                  <p className="text-sm text-muted-foreground">Executive Director, EcoAction Foundation</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 p-8 rounded-lg">
              <p className="italic text-muted-foreground mb-6">
                "Working with Hyphora was a collaborative and inspiring experience. They created a website that
                perfectly captures our music collective's ethos and has significantly increased our audience engagement.
                Their technical expertise combined with their understanding of the music industry made them the perfect
                partner."
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
                  <p className="text-sm text-muted-foreground">Founder, Harmony Collective</p>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Ready to start your project?</h2>
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

