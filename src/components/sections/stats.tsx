"use client"

// Framer Motion removed for now - can be added back later
import { companyInfo } from "@/lib/company-data"

export function Stats() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our track record speaks for itself - delivering excellence in logistics
            for over five decades.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companyInfo.stats.map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-white">
                {stat.number}
              </div>
              <div className="text-blue-100 text-sm lg:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}