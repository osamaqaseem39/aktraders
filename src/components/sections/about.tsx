"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Target, 
  Users, 
  CheckCircle, 
  TrendingUp,
  Award,
  Clock,
  Shield,
  Globe
} from "lucide-react"
import { companyInfo } from "@/lib/company-data"
// Framer Motion removed for now - can be added back later

const iconMap = {
  Target,
  Users,
  CheckCircle,
  TrendingUp,
  Award,
  Clock,
  Shield,
  Globe,
}

export function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            About A.K. Traders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five decades of excellence in freight forwarding and customs clearance,
            connecting businesses to global markets with reliability and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                {companyInfo.mission.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {companyInfo.mission.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                {companyInfo.vision.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {companyInfo.vision.description}
              </p>
            </div>

            <Button size="lg" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <Award className="h-16 w-16 text-blue-600 mx-auto" />
                <div className="text-2xl font-bold text-blue-800">50+ Years</div>
                <div className="text-blue-700">of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose A.K. Traders?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine decades of experience with modern technology to deliver
              exceptional logistics solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyInfo.whyChooseUs.map((item) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap]
              
              return (
              <div key={item.id}>
                  <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These values guide everything we do and shape our commitment to
                excellence in logistics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyInfo.values.map((value) => {
                const IconComponent = iconMap[value.icon as keyof typeof iconMap]
                
                return (
              <div key={value.id} className="text-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}