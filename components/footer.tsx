import Link from "next/link"
import { Leaf, Mail, MapPin, Phone, Instagram, Twitter, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-green-900 dark:bg-green-950 text-white">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-green-400" />
              <span className="font-bold text-xl">Hyphora Solutions</span>
            </div>
            <p className="text-green-200 dark:text-green-300">
              Empowering impact-driven organizations through technology, engagement, and growth solutions.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-green-200 hover:text-white hover:bg-green-800"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-green-200 hover:text-white hover:bg-green-800"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-green-200 hover:text-white hover:bg-green-800"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-green-200 dark:text-green-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-green-200 dark:text-green-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-green-200 dark:text-green-300 hover:text-white transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-green-200 dark:text-green-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-200 dark:text-green-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-green-400 mt-0.5" />
                <span className="text-green-200 dark:text-green-300">123 Impact Street, Portland, OR 97201</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-400" />
                <span className="text-green-200 dark:text-green-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-400" />
                <span className="text-green-200 dark:text-green-300">hello@hyphora.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-green-200 dark:text-green-300 mb-4">
              Subscribe to our newsletter for insights on impact-driven marketing.
            </p>
            <div className="space-y-2">
              <Input
                placeholder="Your email"
                className="bg-green-800 border-green-700 text-white placeholder:text-green-400"
              />
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-300 text-sm">© {new Date().getFullYear()} Hyphora Solutions. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-green-300 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-green-300 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

