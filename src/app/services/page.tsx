"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { 
  Globe, 
  ArrowRight,
  CheckCircle,
  Package,
  MapPin
} from "lucide-react"
import Image from "next/image"
import { companyInfo } from "@/lib/company-data"

// Icon mapping for services (currently unused but kept for future use)
// const iconMap = {
//   Ship,
//   Globe,
//   Truck,
//   Package,
//   Warehouse,
//   Shield,
//   Calculator,
//   MapPin
// }

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive logistics solutions across multiple industries and regions. 
                We provide one-window integrated services that empower businesses to compete 
                in regional and global markets.
              </p>
              <Button size="lg" asChild>
                <Link href="/quote">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Comprehensive Logistics Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We believe logistics is more than moving cargo from one point to another — 
                  it is about providing seamless, secure, and cost-efficient solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {companyInfo.services.map((service) => {
                  const iconImage: string | undefined = service.iconImage
                  const solidBgClass = (service.iconColor?.replace("text-", "bg-") || "bg-gray-900").trim()
                  return (
                    <Card key={service.id} className="h-full hover:shadow-lg transition-all duration-300 group">
                      <CardHeader className="pb-4">
                        <div className={`w-16 h-16 rounded-full ${solidBgClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          {iconImage ? (
                            <Image src={iconImage} alt={service.shortName || service.name} width={32} height={32} className="h-8 w-8" />
                          ) : (
                            <Package className="h-7 w-7 text-white" />
                          )}
                        </div>
                        <CardTitle className="text-lg">{service.shortName || service.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                          <div className="space-y-1">
                            {service.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                                <span className="text-xs text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 text-sm">Coverage:</h4>
                          <div className="flex flex-wrap gap-1">
                            {service.coverage.slice(0, 3).map((area, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {area}
                              </Badge>
                            ))}
                            {service.coverage.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{service.coverage.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                      <div className="px-6 pb-6">
                        <Button className="w-full btn-primary" asChild>
                          <Link href={`/services/${service.id}`}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service Descriptions */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Afghan Transit Trade - Featured Service */}
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        Specialized Service
                      </Badge>
                      <h3 className="text-3xl font-bold text-gray-900">
                        Afghan Transit Trade (ATT)
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        A.K. Traders is widely recognized as a pioneer in Afghan Transit Trade, 
                        offering a one-stop solution for organizations moving cargo into Afghanistan. 
                        Our expertise spans multiple border crossings and route combinations.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Transit Routes:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-blue-600" />
                            <span className="text-sm text-gray-700">Chaman Border</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-blue-600" />
                            <span className="text-sm text-gray-700">Torkham Border</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-blue-600" />
                            <span className="text-sm text-gray-700">Taftan-Islam Qala</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-blue-600" />
                            <span className="text-sm text-gray-700">Nimruz Border</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Case Example:</strong> During humanitarian relief operations, we successfully 
                        transported bulk shipments of food, medicine, and essential supplies from Karachi 
                        to Kabul and Kandahar, ensuring timely delivery in challenging environments.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden">
                      <Image 
                        src="/images/afghantransit.jpg" 
                        alt="Afghanistan Transit Trade" 
                        fill 
                        className="object-cover"
                      />
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* CIS Transportation - Featured Service */}
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative order-2 lg:order-1">
                    <div className="aspect-[4/3] bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <MapPin className="h-16 w-16 text-cyan-600 mx-auto" />
                        <div className="text-2xl font-bold text-cyan-800">Since 1993</div>
                        <div className="text-cyan-700">CIS Pioneer</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 order-1 lg:order-2">
                    <div className="space-y-4">
                      <Badge className="bg-cyan-100 text-cyan-800 border-cyan-200">
                        Pioneer Since 1993
                      </Badge>
                      <h3 className="text-3xl font-bold text-gray-900">
                        CIS Transportation
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        In 1993, A.K. Traders became one of the first Pakistani companies to pioneer 
                        multimodal freight forwarding to CIS countries via Iran, marking a significant 
                        milestone in regional trade connectivity.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">CIS Coverage:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {["Turkmenistan", "Uzbekistan", "Tajikistan", "Kazakhstan"].map((country) => (
                          <Badge key={country} variant="outline" className="justify-center">
                            {country}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="text-sm text-cyan-800">
                        <strong>Competitive Edge:</strong> Few logistics companies in Pakistan have 
                        comparable historical experience with CIS markets. Our early involvement has 
                        given us unmatched insights into the complexities of these routes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Industries We Serve
                </h2>
                <p className="text-lg text-gray-600">
                  Tailored logistics solutions across diverse sectors and client requirements
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {companyInfo.industries.map((industry) => (
                  <Card key={industry.id} className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${industry.color} flex items-center justify-center mb-4`}>
                        <Package className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{industry.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {industry.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 text-sm">Services:</h4>
                        <div className="flex flex-wrap gap-1">
                          {industry.services.slice(0, 3).map((service, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Contact us today to discuss your logistics requirements and discover 
                how our 50+ years of experience can benefit your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                  <Link href="/quote">Request a Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}