import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { companyInfo } from "@/lib/company-data"

type Service = (typeof companyInfo.services)[number]

function getServiceById(id: string): Service | undefined {
  return companyInfo.services.find((s) => s.id === id)
}

export function generateStaticParams() {
  return companyInfo.services.map((s) => ({ id: s.id }))
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = getServiceById(params.id)
  if (!service) return notFound()

  const heroImage = `/images/services/${service.id}-hero.jpg`
  const suggestedAssets = [
    `${service.id}-hero.jpg`,
    `${service.id}-process.jpg`,
    `${service.id}-map.jpg`,
    `${service.id}-team.jpg`,
  ]

  return (
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
              <img src={heroImage} alt={`${service.shortName || service.name} hero`} className="w-full h-full object-cover" />
            </div>
            <div className="mt-3 text-sm text-gray-600">
              Add an image at <code className="bg-gray-100 px-1 py-0.5 rounded">{heroImage}</code>
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

        {/* Suggested assets */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">Suggested Image Filenames</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            <p className="mb-2">Place these under <code className="bg-gray-100 px-1 py-0.5 rounded">/public/images/services/</code>:</p>
            <ul className="list-disc pl-6 space-y-1">
              {suggestedAssets.map((name) => (
                <li key={name}><code className="bg-gray-100 px-1 py-0.5 rounded">{name}</code></li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Back link */}
        <div>
          <Button variant="outline" asChild>
            <Link href="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}



