import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

type Service = {
  id: string
  name: string
  shortName?: string
  description: string
  features: string[]
  coverage?: string[]
  detailedContent?: {
    overview: string
    process: string[]
    benefits: string[]
    industries: string[]
    requirements: string[]
    caseStudies?: string[]
    faq?: { question: string; answer: string }[]
  }
}

export default function ServiceDetail({ service, heroImagePath }: { service: Service; heroImagePath?: string }) {
  const heroImage = heroImagePath || `/images/services/${service.id}-hero.jpg`

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
      <section className="py-16 bg-white">
      <div className="container space-y-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">{service.name}</h1>
              <p className="text-lg text-gray-700">{service.description}</p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="w-full">
            <div className="aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <Image src={heroImage} alt={`${service.shortName || service.name} hero`} width={800} height={450} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Features */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="mt-2 mr-3 inline-block w-2 h-2 rounded-full bg-gray-900" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Coverage (optional) */}
        {service.coverage?.length ? (
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Typical Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {service.coverage.map((loc, i) => (
                  <span key={i} className="text-sm bg-gray-100 text-gray-800 px-2.5 py-1 rounded-md border border-gray-200">
                    {loc}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : null}

        {/* Detailed Content Sections */}
        {service.detailedContent && (
          <>
            {/* Overview */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Service Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>{service.detailedContent.overview}</p>
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Our Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {service.detailedContent.process.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.detailedContent.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Industries Served */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Industries We Serve</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.detailedContent.industries.map((industry, idx) => (
                    <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-800 rounded-lg border border-blue-200">
                      {industry}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Requirements & Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.detailedContent.requirements.map((requirement, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="mt-2 mr-3 inline-block w-2 h-2 rounded-full bg-gray-900" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Case Studies */}
            {service.detailedContent.caseStudies && service.detailedContent.caseStudies.length > 0 && (
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Success Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {service.detailedContent.caseStudies.map((study, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-700">{study}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* FAQ */}
            {service.detailedContent.faq && service.detailedContent.faq.length > 0 && (
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {service.detailedContent.faq.map((faq, idx) => (
                      <div key={idx} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}

        <div>
          <Button variant="outline" asChild>
            <Link href="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    </section>
      </main>
      <Footer />
    </div>
  )
}


