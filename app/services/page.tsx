import Image from "next/image"
import { ArrowRight, Leaf, Heart, Music, Globe, Code, BarChart } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Services</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Tailored digital solutions for organizations making a positive impact on our world.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our services"
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

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-green-600 mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-[800px]">
              Comprehensive digital solutions tailored to your organization's unique needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 dark:bg-green-950/30 p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Website Design & Development</h3>
              <p className="text-muted-foreground mb-4">
                Beautiful, functional websites that tell your story and connect with your audience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Responsive design for all devices</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Accessibility-first approach</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Content management systems</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Strategy</h3>
              <p className="text-muted-foreground mb-4">
                Strategic planning to maximize your online impact and reach your goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Audience research and analysis</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Content strategy</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Digital ecosystem planning</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
              <p className="text-muted-foreground mb-4">
                Targeted campaigns that amplify your message and drive meaningful engagement.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Social media strategy</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Email marketing</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">SEO and content marketing</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Industries We Serve</h2>
            <div className="w-20 h-1 bg-green-600 mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-[800px]">
              Specialized expertise for organizations making a positive impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Environmental Organizations</h3>
              <p className="text-muted-foreground mb-6">
                Digital solutions for conservation groups, climate action organizations, sustainable businesses, and
                other environmental advocates.
              </p>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/placeholder.svg?height=450&width=800"
                  alt="Environmental project"
                  width={800}
                  height={450}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nonprofit Organizations</h3>
              <p className="text-muted-foreground mb-6">
                Impactful digital experiences for charities, foundations, community organizations, and social
                enterprises.
              </p>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/placeholder.svg?height=450&width=800"
                  alt="Nonprofit project"
                  width={800}
                  height={450}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Music className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Music Industry</h3>
              <p className="text-muted-foreground mb-6">
                Creative digital solutions for independent artists, labels, music collectives, and music-focused
                businesses.
              </p>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/placeholder.svg?height=450&width=800"
                  alt="Music industry project"
                  width={800}
                  height={450}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Process</h2>
            <div className="w-20 h-1 bg-green-600 mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-[800px]">
              A collaborative approach that ensures your vision comes to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="pt-12 pb-8 px-6 bg-green-50 dark:bg-green-950/30 rounded-lg text-center h-full">
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-muted-foreground">
                  We learn about your organization, mission, goals, and audience to understand your unique needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="pt-12 pb-8 px-6 bg-green-50 dark:bg-green-950/30 rounded-lg text-center h-full">
                <h3 className="text-xl font-bold mb-2">Strategy</h3>
                <p className="text-muted-foreground">
                  We develop a comprehensive plan that aligns with your goals and maximizes your impact.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div className="pt-12 pb-8 px-6 bg-green-50 dark:bg-green-950/30 rounded-lg text-center h-full">
                <h3 className="text-xl font-bold mb-2">Creation</h3>
                <p className="text-muted-foreground">
                  Our team designs and develops your digital solution with regular check-ins and feedback.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                4
              </div>
              <div className="pt-12 pb-8 px-6 bg-green-50 dark:bg-green-950/30 rounded-lg text-center h-full">
                <h3 className="text-xl font-bold mb-2">Launch & Support</h3>
                <p className="text-muted-foreground">
                  We launch your project and provide ongoing support to ensure continued success.
                </p>
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

