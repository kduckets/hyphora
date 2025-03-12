import Image from "next/image"
import { ArrowRight, Users, Leaf, Globe, Zap, Heart } from "lucide-react"

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
                About Hyphora Solutions: Growing with Purpose
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                At Hyphora Solutions, we're more than a digital agency – we're a collective of passionate individuals
                driven by a shared commitment to creating positive change. Inspired by the interconnectedness and
                resilience of mycelium networks, we believe in fostering strong partnerships and building digital
                solutions that have a meaningful impact on the world.
              </p>
              <p className="text-xl text-muted-foreground mb-8">
                We specialize in working with organizations that are making a difference – from environmental advocates
                and nonprofits to social enterprises and creative collectives. We understand the unique challenges and
                opportunities you face, and we're here to provide the expertise and support you need to thrive in the
                digital age.
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

      {/* Our Mission & Values */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Our Mission & Values: Guiding Our Impact
            </h2>
            <div className="w-20 h-1 bg-green-600 mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-[800px]">
              Our mission is to empower organizations that are creating a better world by providing them with innovative
              digital solutions and strategic guidance that amplify their impact and foster sustainable growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-green-950/40 p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Impact</h3>
              <p className="text-muted-foreground">
                We're driven by a passion for creating positive change and measuring our success by the impact we
                achieve for our clients and the world.
              </p>
            </div>
            <div className="bg-white dark:bg-green-950/40 p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in working closely with our clients as partners, fostering open communication, and building
                strong, lasting relationships.
              </p>
            </div>
            <div className="bg-white dark:bg-green-950/40 p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to creating digital solutions that are not only effective but also sustainable,
                accessible, and ethically sound.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white dark:bg-green-950/40 p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We're constantly exploring new technologies and approaches to provide our clients with the most
                effective and cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-green-950/40 p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-muted-foreground">
                We believe in open communication, honesty, and accountability in all our interactions with clients and
                partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Our Story: From Inspiration to Impact
            </h2>
            <div className="w-20 h-1 bg-green-600 mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-[800px]">
              Inspired by nature's most powerful networks, we're building connections that matter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-muted-foreground mb-6">
                Hyphora Solutions was born from a vision to use digital technology as a force for positive change. Our
                founders, with backgrounds in both technology and social impact, saw a gap in the market for a digital
                agency that truly understood the unique needs and challenges of mission-driven organizations.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                The name "Hyphora" draws inspiration from hyphae, the intricate growth and communication mechanisms of
                mycelium networks. Just as these networks connect and nourish entire ecosystems, we aim to foster deep
                connections with our clients, ensuring seamless collaboration and a profound understanding of their
                missions and needs.
              </p>
              <p className="text-lg text-muted-foreground">
                Since our founding, we've grown into a diverse team of designers, developers, strategists, and
                change-makers united by a shared commitment to creating meaningful impact through digital excellence.
                We've had the privilege of working with organizations across various sectors, helping them amplify their
                missions and achieve their goals.
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

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Our Team: The People Behind the Impact
            </h2>
            <div className="w-20 h-1 bg-green-600 mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-[800px]">
              Hyphora Solutions is powered by a team of talented and passionate individuals with diverse backgrounds and
              expertise. We're united by a shared commitment to creating positive change and a belief in the power of
              digital to make a difference.
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Ready to learn more about how we can help?
            </h2>
            <p className="text-xl text-white/80 max-w-[700px] mb-8">
              Contact us today to schedule a free consultation and discover how Hyphora Solutions can help you achieve
              your mission.
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

