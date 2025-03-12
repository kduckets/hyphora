"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })

    setFormData({
      name: "",
      email: "",
      organization: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Contact Us: Let's Start a Conversation
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              We're excited to learn more about your mission and discuss how Hyphora Solutions can help you achieve your
              goals. Please use the form below to get in touch, or feel free to reach out to us directly using the
              contact information provided.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.org"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization Name</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your Organization"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How Can We Help?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="Tell us about your project or goals..."
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="marketing-opt-in"
                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <Label htmlFor="marketing-opt-in" className="text-sm">
                      I'd like to receive occasional updates and insights from Hyphora Solutions
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out to us through any of the following channels:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-green-600 dark:text-green-400 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">123 Impact Street, Portland, OR 97201</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-green-600 dark:text-green-400 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-green-600 dark:text-green-400 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">hello@hyphora.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Let's Discuss Your Impact Goals</h2>
                <p className="text-muted-foreground mb-4">
                  We're always interested in hearing about new projects and potential collaborations.
                </p>
                <p className="text-muted-foreground">
                  Whether you have a specific project in mind or just want to learn more about our services, we'd love
                  to chat about how we can help your organization achieve its impact goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground max-w-[700px]">Visit our office in Portland, Oregon</p>
          </div>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted">
            {/* This would be replaced with an actual map component in a real implementation */}
            <div className="w-full h-full bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center flex items-center justify-center">
              <div className="bg-white dark:bg-black p-4 rounded-lg shadow-lg">
                <p className="font-bold">Hyphora Solutions</p>
                <p className="text-sm text-muted-foreground">123 Impact Street, Portland, OR 97201</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

