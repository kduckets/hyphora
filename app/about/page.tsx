import Image from "next/image"
import { ArrowRight, Users, Leaf, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                We create digital experiences with purpose
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Hyphora is a web agency dedicated to serving organizations that are making a positive impact on our
                world.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our team"
                  width={800}
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

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-green-600 mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-[800px]">
              Founded in 2018, Hyphora was born from a desire to use our digital skills to support organizations making
              a positive impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-muted-foreground mb-6">
                Our founders, with backgrounds in both technology and environmental activism, saw a gap in the market
                for web design that truly understood the needs of mission-driven organizations.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We started by working with local environmental nonprofits, helping them create digital platforms that
                amplified their message and connected them with supporters.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we've expanded our services to support a diverse range of clients across the nonprofit,
                environmental, and music sectors, while staying true to our core mission of creating digital experiences
                with purpose.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Our journey"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-green-600 mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-[800px]">
              These core principles guide everything we do at Hyphora
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-green-950/40 p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We believe in creating digital solutions that are not only sustainable in their design but also promote
                environmental sustainability in the world.
              </p>
            </div>
            <div className="bg-white dark:bg-green-950/40 p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We work closely with our clients, treating them as partners in the creative process to ensure their
                vision and mission are authentically represented.
              </p>
            </div>
            <div className="bg-white dark:bg-green-950/40 p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Impact</h3>
              <p className="text-muted-foreground">
                We measure our success not just by client satisfaction, but by the positive impact our work helps create
                in communities and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-green-600 mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-[800px]">
              A diverse group of designers, developers, and strategists passionate about making a difference
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="flex flex-col items-center">
                <div className="aspect-square w-full max-w-[250px] overflow-hidden rounded-full bg-muted mb-4">
                  <Image
                    src={`/placeholder.svg?height=250&width=250`}
                    alt={`Team Member ${member}`}
                    width={250}
                    height={250}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Team Member Name</h3>
                <p className="text-muted-foreground mb-2">Position</p>
                <p className="text-sm text-center text-muted-foreground">
                  Brief bio about the team member and their background.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 dark:bg-green-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Want to work with us?</h2>
            <p className="text-xl text-white/80 max-w-[700px] mb-8">
              We're always looking for new challenges and opportunities to create meaningful digital experiences.
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

