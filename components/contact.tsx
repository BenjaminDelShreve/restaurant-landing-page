"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form:", formData)
    alert("Thank you for reaching out! We will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">We&apos;d love to hear from you</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 flex items-start gap-4">
              <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-muted-foreground leading-relaxed">
                  123 Main Street
                  <br />
                  Northwest Arkansas, AR 72701
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4">
              <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-muted-foreground leading-relaxed">(479) 555-0123</p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4">
              <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Hours</h3>
                <div className="text-muted-foreground leading-relaxed space-y-1">
                  <p>Monday - Thursday: 11am - 10pm</p>
                  <p>Friday - Saturday: 11am - 11pm</p>
                  <p>Sunday: 10am - 9pm</p>
                </div>
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card className="h-64 bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Map Placeholder</p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
