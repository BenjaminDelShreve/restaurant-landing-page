"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Reservations() {
  const [formData, setFormData] = useState({
    partySize: "",
    date: "",
    time: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle reservation request
    console.log("Reservation request:", formData)
    alert("Thank you! Your reservation request has been submitted. We will contact you shortly to confirm.")
  }

  return (
    <section id="reservations" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">Reserve Your Table</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Join us for an unforgettable dining experience
        </p>

        <Card className="max-w-2xl mx-auto p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="party-size">Party Size</Label>
              <Select
                value={formData.partySize}
                onValueChange={(value) => setFormData({ ...formData, partySize: value })}
              >
                <SelectTrigger id="party-size">
                  <SelectValue placeholder="Select party size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5">5 Guests</SelectItem>
                  <SelectItem value="6">6 Guests</SelectItem>
                  <SelectItem value="7+">7+ Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                <SelectTrigger id="time">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                  <SelectItem value="5:30 PM">5:30 PM</SelectItem>
                  <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                  <SelectItem value="6:30 PM">6:30 PM</SelectItem>
                  <SelectItem value="7:00 PM">7:00 PM</SelectItem>
                  <SelectItem value="7:30 PM">7:30 PM</SelectItem>
                  <SelectItem value="8:00 PM">8:00 PM</SelectItem>
                  <SelectItem value="8:30 PM">8:30 PM</SelectItem>
                  <SelectItem value="9:00 PM">9:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
              Request Reservation
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
