"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ArrowRight, CheckCircle } from "lucide-react"
import { companyInfo } from "@/lib/company-data"
// Framer Motion removed for now - can be added back later

export function Hero() {
  const [trackingId, setTrackingId] = useState("")

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingId) {
      window.location.href = `/track?id=${trackingId}`
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Trusted{" "}
                <span className="text-blue-600">Logistics Partner</span>{" "}
                Since 1974
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {companyInfo.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "50+ Years Experience",
                "Global Network Coverage",
                "24/7 Customer Support",
                "Real-time Tracking"
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/quote">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Track Shipment Card */}
          <div>
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Track Your Shipment
                    </h3>
                    <p className="text-gray-600">
                      Enter your tracking number to get real-time updates
                    </p>
                  </div>

                  <form onSubmit={handleTrack} className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Enter tracking number (e.g., AKT123456)"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        className="pl-10 h-12 text-lg"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 text-lg">
                      Track Shipment
                    </Button>
                  </form>

                  <div className="text-sm text-gray-500">
                    Don&apos;t have a tracking number?{" "}
                    <Link href="/quote" className="text-blue-600 hover:underline">
                      Request a quote
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-blue-600 text-white py-8 mt-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {companyInfo.stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}