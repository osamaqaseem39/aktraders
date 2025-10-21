"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { companyInfo } from "@/lib/company-data"

type QuoteForm = {
  name: string
  company: string
  email: string
  phone: string
  serviceId: string
  origin: string
  destination: string
  incoterms: string
  weight: string
  volume: string
  details: string
}

export default function QuotePage() {
  const [form, setForm] = useState<QuoteForm>({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceId: companyInfo.services[0]?.id || "",
    origin: "",
    destination: "",
    incoterms: "",
    weight: "",
    volume: "",
    details: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 800))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const services = companyInfo.services

  return (
    <section className="py-16 bg-white">
      <div className="container space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Request a Quote</h1>
          <p className="text-lg text-gray-600">
            Tell us about your shipment and we will get back to you with the best
            possible solution.
          </p>
        </div>

        {/* Form */}
        <Card className="border-gray-200 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">Shipment Details</CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="text-2xl font-semibold text-gray-900">Thank you!</div>
                <p className="text-gray-600">Your request has been received. Our team will contact you shortly.</p>
                <Button asChild>
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input id="name" name="name" required value={form.name} onChange={onChange} />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <Input id="company" name="company" value={form.company} onChange={onChange} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input id="email" type="email" name="email" required value={form.email} onChange={onChange} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input id="phone" name="phone" value={form.phone} onChange={onChange} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="serviceId" className="block text-sm font-medium text-gray-700 mb-2">Service *</label>
                    <select
                      id="serviceId"
                      name="serviceId"
                      value={form.serviceId}
                      onChange={onChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>{s.shortName || s.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-2">Origin *</label>
                    <Input id="origin" name="origin" required value={form.origin} onChange={onChange} placeholder="City, Country" />
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">Destination *</label>
                    <Input id="destination" name="destination" required value={form.destination} onChange={onChange} placeholder="City, Country" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="incoterms" className="block text-sm font-medium text-gray-700 mb-2">Incoterms</label>
                    <Input id="incoterms" name="incoterms" value={form.incoterms} onChange={onChange} placeholder="EXW / FOB / CIF ..." />
                  </div>
                  <div>
                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                    <Input id="weight" name="weight" value={form.weight} onChange={onChange} />
                  </div>
                  <div>
                    <label htmlFor="volume" className="block text-sm font-medium text-gray-700 mb-2">Volume (m³)</label>
                    <Input id="volume" name="volume" value={form.volume} onChange={onChange} />
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    value={form.details}
                    onChange={onChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Cargo description, dimensions, hazardous info, deadlines, etc."
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-lg">
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


