import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ImpactPage() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Environmental Nonprofit Rebrand",
      category: "Case Study",
      description:
        "A comprehensive digital transformation for a leading environmental nonprofit, focusing on donation conversion and program awareness.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Community Engagement Platform",
      category: "Case Study",
      description:
        "A digital platform for a community organization, enabling deeper engagement and volunteer coordination.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Sustainable Business Growth",
      category: "Case Study",
      description:
        "An integrated marketing strategy for a sustainable business, driving awareness and customer acquisition.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "Nonprofit CRM Implementation",
      category: "Case Study",
      description:
        "A comprehensive CRM solution for a nonprofit, streamlining operations and improving donor management.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: "Impact Measurement Dashboard",
      category: "Case Study",
      description:
        "A custom dashboard for impact measurement and reporting, helping an organization showcase their results.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      title: "Email Marketing Automation",
      category: "Case Study",
      description:
        "A sophisticated email marketing system for an advocacy organization, driving engagement and action.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Impact</h1>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              We've helped numerous impact-driven organizations achieve their goals. Here are a few examples:
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
                      View Case Study
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
                <span className="text-sm font-medium text-green-600 dark:text-green-400 mb-2 block">
                  Environmental Nonprofit
                </span>
                <h3 className="text-2xl font-bold mb-4">Environmental Nonprofit Rebrand</h3>
                <p className="text-muted-foreground mb-6">
                  This environmental nonprofit came to us with a challenge: their website wasn't effectively
                  communicating their mission or driving donations. We worked closely with their team to create a new
                  digital experience that clearly articulated their impact and made it easy for supporters to get
                  involved.
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
                    alt="Environmental Nonprofit Rebrand"
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
                  Community Organization
                </span>
                <h3 className="text-2xl font-bold mb-4">Community Engagement Platform</h3>
                <p className="text-muted-foreground mb-6">
                  This community organization needed a digital platform that would enable deeper engagement with their
                  members and streamline volunteer coordination. We developed a custom solution that integrated with
                  their existing systems and provided powerful new tools for community building.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                    <span className="text-sm">Increased volunteer participation by 60%</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                    <span className="text-sm">Streamlined event management and coordination</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                    <span className="text-sm">Improved member communication and engagement</span>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white">Read Case Study</Button>
              </div>
              <div className="order-1">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Community Engagement Platform"
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
                "Hyphora Solutions transformed our digital presence. Their understanding of our mission was evident in
                every design choice and feature they implemented. The new website has significantly increased our
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
                  <p className="text-sm text-muted-foreground">Executive Director, Environmental Nonprofit</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 p-8 rounded-lg">
              <p className="italic text-muted-foreground mb-6">
                "Working with Hyphora Solutions was a collaborative and inspiring experience. They created a platform
                that perfectly captures our community's needs and has significantly increased our member engagement.
                Their technical expertise combined with their understanding of our mission made them the perfect
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
                  <p className="text-sm text-muted-foreground">Director, Community Organization</p>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Let's Connect</h2>
            <p className="text-xl text-white/80 max-w-[700px] mb-8">
              We'd love to hear from you and discuss how we can help your organization achieve its impact goals.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Contact us today
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

