"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { 
  Award, 
  Users, 
  Globe, 
  Clock,
  Target,
  CheckCircle,
  TrendingUp,
  MapPin,
  Building,
  Shield
} from "lucide-react"
import { companyInfo } from "@/lib/company-data"

const iconMap = {
  Award,
  Users,
  Globe,
  Clock,
  Target,
  CheckCircle,
  TrendingUp,
  MapPin,
  Building,
  Shield
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                About {companyInfo.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {companyInfo.description}
              </p>
              <div className="flex justify-center space-x-8 pt-6">
                {companyInfo.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Executive Summary
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Five decades of excellence in connecting Pakistan with regional and international markets
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="prose prose-lg">
                    <p className="text-gray-600 leading-relaxed">
                      Established in 1974 in Quetta, Pakistan, A.K. Traders (Regd.) has grown from a local 
                      customs clearance agent into one of Pakistan's most respected and experienced freight 
                      forwarding and logistics service providers.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      With over five decades of uninterrupted service, the company has built a strong reputation 
                      for reliability, compliance, and innovation in handling general cargo, project logistics, 
                      Afghan transit trade, CIS transportation, multimodal forwarding, and customs clearance.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      A.K. Traders is uniquely positioned in the region, serving as a gateway for Pakistan's trade 
                      with Afghanistan, Iran, and Central Asian Republics (CIS).
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Award className="h-16 w-16 text-blue-600 mx-auto" />
                      <div className="text-2xl font-bold text-blue-800">Since 1974</div>
                      <div className="text-blue-700">Connecting Markets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Our Journey Through Time
                </h2>
                <p className="text-lg text-gray-600">
                  Key milestones in our five-decade journey of excellence
                </p>
              </div>

              <div className="space-y-8">
                {companyInfo.timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-20 text-right">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {item.year}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Goals */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {companyInfo.mission.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {companyInfo.mission.description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Globe className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {companyInfo.vision.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {companyInfo.vision.description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {companyInfo.goals.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {companyInfo.goals.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Our Core Values
                </h2>
                <p className="text-lg text-gray-600">
                  These values guide everything we do and shape our commitment to excellence
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {companyInfo.values.map((value) => {
                  const IconComponent = iconMap[value.icon as keyof typeof iconMap]
                  return (
                    <Card key={value.id} className="h-full hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Memberships & Achievements */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Memberships */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Memberships & Affiliations
                  </h2>
                  <div className="space-y-6">
                    {companyInfo.memberships.map((membership) => (
                      <Card key={membership.id} className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Award className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold text-gray-900">{membership.name}</h3>
                              <Badge variant="secondary">{membership.year}</Badge>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{membership.fullName}</p>
                            <p className="text-gray-600 text-sm">{membership.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Key Achievements
                  </h2>
                  <div className="space-y-6">
                    {companyInfo.achievements.map((achievement) => (
                      <Card key={achievement.id} className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="h-6 w-6 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                              <Badge variant="outline">{achievement.year}</Badge>
                            </div>
                            <p className="text-gray-600 text-sm">{achievement.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose A.K. Traders?
                </h2>
                <p className="text-lg text-gray-600">
                  Our competitive advantages that set us apart in the logistics industry
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {companyInfo.whyChooseUs.map((item) => {
                  const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                  return (
                    <Card key={item.id} className="h-full hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}