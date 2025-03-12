import Image from "next/image"
import { ArrowRight, Zap, Palette, BarChart } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Our Services: Digital Solutions for Impactful Growth
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Hyphora Solutions offers a comprehensive suite of digital services designed to empower organizations
                that are making a difference. We combine creativity, technology, and strategy to deliver impactful
                solutions that help you achieve your mission and grow your impact.
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

      {/* Web Design & Development */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Web Design & Development</h2>
            <div className="w-20 h-1 bg-green-600 mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-[800px]">
              Beautiful, functional websites that engage your audience and amplify your message
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Your website is often the first point of contact between your organization and your audience. We create
                custom websites that not only look beautiful but also drive meaningful engagement and action.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span>Responsive design for all devices</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span>Accessibility-first approach</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span>Content management systems</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span>User-centered design</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span>Search engine optimization</span>
                </li>
              </ul>
              <Button className="bg-green-600 hover:bg-green-700 text-white">View Web Projects</Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Web Design & Development"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Implementations & Integrations */}
      <section className="py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">CRM Implementations & Integrations</h2>
            <div className="w-20 h-1 bg-green-600 mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-[800px]">
              Streamlining and consolidating your tools and processes for maximum efficiency
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-muted-foreground mb-6">
                Effective relationship management is crucial for impact-driven organizations. We help you implement and
                optimize CRM systems that streamline your operations and enhance your relationships with supporters,
                donors, and community members.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span>System selection and setup</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span>Data migration and integration</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span>Custom workflow development</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span>Training and ongoing support</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span>Integration with other tools and platforms</span>
                </li>
              </ul>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="CRM Implementations"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Marketing & Communications */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Email Marketing & Communications</h2>
            <div className="w-20 h-1 bg-green-600 mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-[800px]">
              Building lasting relationships through personalized communications and content
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Email remains one of the most effective channels for engaging with your audience. We help you develop
                and implement email marketing strategies that build relationships, drive action, and advance your
                mission.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span>Campaign strategy and planning</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span>Email template design</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span>Content creation and copywriting</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span>Automation and personalization</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span>Performance analysis and optimization</span>
                </li>
              </ul>
              <Button className="bg-green-600 hover:bg-green-700 text-white">See Our Approach</Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Email Marketing"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Additional Services</h2>
            <div className="w-20 h-1 bg-green-600 mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-[800px]">
              Comprehensive solutions to support your organization's digital needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-green-950/30 p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sales & Marketing Automation</h3>
              <p className="text-muted-foreground mb-4">
                Automate your outreach, engagement, and analysis efforts for greater efficiency and impact.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Workflow automation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Lead nurturing sequences</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Reporting and analytics</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
            <div className="bg-white dark:bg-green-950/30 p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
              <p className="text-muted-foreground mb-4">
                Visually stunning assets that elevate your brand and resonate with your community.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Brand identity and guidelines</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Marketing collateral and assets</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Digital and print design</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
            <div className="bg-white dark:bg-green-950/30 p-8 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Growth & Performance Marketing</h3>
              <p className="text-muted-foreground mb-4">
                Optimizing your digital presence to reach the right people through the right channels.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Digital strategy development</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Channel optimization</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                  <span className="text-sm">Conversion rate optimization</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Ready to discuss your project?</h2>
            <p className="text-xl text-white/80 max-w-[700px] mb-8">
              Contact us today for a free consultation to explore how we can help your organization achieve its impact
              goals.
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

