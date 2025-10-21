"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
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
            const iconImage: string | undefined = (service as { iconImage?: string }).iconImage

            return (
              <div key={service.id} className="flip-card group animate-fade-in min-h-[280px] md:min-h-[320px]">
                <div className="flip-inner h-full group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <Card className="h-full transition-all duration-200 border border-gray-200 shadow-sm hover:shadow-md flip-front overflow-hidden flex items-center justify-center text-center p-6">
                    <div>
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${solidBgClass} flex items-center justify-center`}>
                        {iconImage ? (
                          <Image src={iconImage} alt={service.shortName || service.name} width={48} height={48} className="h-12 w-12" />
                        ) : (
                          <IconComponent className="h-12 w-12 text-white" />
                        )}
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {service.name}
                      </CardTitle>
                    </div>
                  </Card>

                  {/* Back */}
                  <Card className="h-full border border-gray-200 shadow-md flip-back overflow-hidden flex items-center justify-center p-6 text-center">
                    <div className="max-w-md space-y-4">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                      <Button 
                        className="w-full btn-primary"
                        asChild
                      >
                        <Link href={`/services/${service.id}`}>
                          View Service Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </div>
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