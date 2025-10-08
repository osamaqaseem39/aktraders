"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ArrowRight, CheckCircle } from "lucide-react"
import { companyInfo } from "@/lib/company-data"
// Framer Motion removed for now - can be added back later

export function Hero() {

  return (
    <section className="relative bg-white py-20 lg:py-32">
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Trusted Freight Forwarding & Customs Clearance Since 1974
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {companyInfo.tagline} — connecting Pakistan with Afghanistan, Iran, and the CIS through reliable, compliant, and end‑to‑end logistics solutions.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Customs Clearance Experts",
                "Afghan Transit & CIS Routes",
                "Door-to-Door Logistics",
                "Project Logistics & Heavy Lift"
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

          {/* Right Content - Illustration */}
          <div className="hidden lg:block">
            <div className="w-full h-full flex items-center justify-center">
              <img src="/images/heroimage.jpg" alt="Logistics operations" className="rounded-xl w-full h-auto max-w-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats are displayed via the dedicated Stats section on the homepage */}
    </section>
  )
}