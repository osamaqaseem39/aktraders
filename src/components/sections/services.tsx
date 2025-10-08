"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Ship, 
  Plane, 
  Truck, 
  Warehouse, 
  Shield, 
  Globe,
  Package,
  Calculator,
  MapPin,
  ArrowRight 
} from "lucide-react"
import { companyInfo } from "@/lib/company-data"
// Framer Motion removed for now - can be added back later

const iconMap = {
  Ship,
  Plane,
  Truck,
  Warehouse,
  Shield,
  Globe,
  Package,
  Calculator,
  MapPin,
}

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to meet your business needs
            with reliability, efficiency, and global reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {companyInfo.services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Globe
            const solidBgClass = (service.iconColor?.replace("text-", "bg-") || "bg-gray-900").trim()
            const iconImage: string | undefined = (service as any).iconImage

            return (
              <div key={service.id}>
                <Card className="h-full transition-all duration-200 group border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-14 h-14 mx-auto mb-3 rounded-full ${solidBgClass} flex items-center justify-center`}>
                      {iconImage ? (
                        <img src={iconImage} alt={service.shortName || service.name} className="h-7 w-7" />
                      ) : (
                        <IconComponent className="h-7 w-7 text-white" />
                      )}
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors duration-150"
                      asChild
                    >
                      <Link href={`/services/${service.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of logistics experts can create tailored solutions for your
              specific business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/quote">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Our Experts</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}