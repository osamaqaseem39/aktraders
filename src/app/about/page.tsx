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
                      customs clearance agent into one of Pakistan&apos;s most respected and experienced freight 
                      forwarding and logistics service providers.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      With over five decades of uninterrupted service, the company has built a strong reputation 
                      for reliability, compliance, and innovation in handling general cargo, project logistics, 
                      Afghan transit trade, CIS transportation, multimodal forwarding, and customs clearance.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      A.K. Traders is uniquely positioned in the region, serving as a gateway for Pakistan&apos;s trade 
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

        {/* Detailed Company Profile */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 not-prose mb-6">
                Company Profile & Philosophy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For more than five decades, {companyInfo.fullName} has remained dedicated to a simple, durable idea: logistics is not merely the art of moving cargo—it is the science of earning and safeguarding trust. Founded in Quetta in {companyInfo.established}, our company learned early that the shortest route between two points is not always a straight line on a map. In real markets, especially across South and Central Asia, the shortest route is the one with the fewest uncertainties, the greatest clarity in documentation, and the strongest relationships at every node in the chain. That understanding continues to shape our operating philosophy today. We invest heavily in process discipline, regulatory literacy, and people who can make good decisions under pressure. We believe that reliability is designed, not improvised; it is the outcome of systems that are continuously refined to absorb volatility—whether it stems from seasonal congestion at ports, shifting border protocols, or the urgent timelines that define humanitarian and project logistics.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our journey from a specialized customs clearance agent to a comprehensive logistics partner mirrors the transformation of trade corridors that connect Pakistan with Afghanistan, Iran, and the CIS countries. We built competence in complex, multimodal operations—Sea–Road, Sea–Rail, and Road–Rail—precisely because our clients needed dependable options when one corridor became constrained or when a specialized cargo demanded a distinct sequence of handling. The hallmark of our service is optionality: multiple viable routes, multiple contingency plans, and the ability to pivot while preserving both cost discipline and compliance integrity. In markets where uncertainty is a constant, optionality is not a luxury; it is a competitive advantage we systematize for every client engagement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We measure our performance by three metrics: schedule adherence, documentation accuracy, and the quality of communication with stakeholders—from customs officials and terminal operators to our clients’ procurement and finance teams. The interplay between these metrics determines the true cost of logistics. A slight error in documentation can erase the savings of a favorable freight rate; a missing update can cascade into production downtime for a factory line or service interruptions for a relief mission. Our operating model therefore focuses on closing information gaps, standardizing repeatable tasks, and elevating exception handling as a first-class capability. When circumstances change—as they often do—we work with facts, not assumptions, and we communicate early with precise options.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 not-prose mt-12 mb-4">Regional Expertise That Reduces Risk</h3>
              <p className="text-gray-700 leading-relaxed">
                Our head office in Quetta enables us to manage end-to-end flows that many international forwarders must subcontract. In Afghan transit and CIS trade, distance is only one dimension of difficulty; the other dimensions are regulatory nuance, seasonal variability, geopolitics, and the unique operational tempo at border crossings. We have learned how to plan for bridge closures, account for convoy protocols, anticipate document verification cycles, and maintain compliance continuity amid evolving requirements. The result is a logistics experience that feels predictable in environments that are anything but predictable. This is why NGOs, government entities, and private sector clients rely on us for mission-critical movements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Karachi Port and Port Qasim anchor our sea freight operations, from where we design inland routes to border points or industrial centers. For Kabul-bound shipments, we assess whether Chaman, Torkham, or Taftan–Islam Qala best fits the consignment profile and risk tolerance. We consider security advisories, road conditions, permissible convoy sizes, and local holiday calendars that might affect customs staffing. In CIS-bound movements via Iran, we plan multimodal handoffs that preserve schedule fidelity while respecting local regulations and terminal cut-offs. Every route plan is documented, and every document is audited; we do not confuse speed with haste. When we move fast, it is because we prepared to move fast long before the shipment arrived.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 not-prose mt-12 mb-4">Service Capabilities & Operating Standards</h3>
              <p className="text-gray-700 leading-relaxed">
                Our core services—freight forwarding, customs clearance, overland transportation, warehousing and CFS, project logistics, duty drawback advisory, and CIS transportation—operate on shared standards: document completeness, chain-of-custody integrity, milestone-based tracking, and clear escalation paths. We design SOPs that are practical for field teams yet rigorous enough for audit trails. The same discipline that helps a humanitarian agency deliver medical supplies to remote provinces also enables a manufacturer to control landed costs on a just-in-time import or a heavy-equipment project to meet a commissioning date.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Freight Forwarding:</strong> Multimodal routing with carrier, port, and terminal coordination. Emphasis on transit time reliability, equipment availability, and pre-alert accuracy.</li>
                <li><strong>Customs Clearance:</strong> End-to-end document preparation and representation with authorities. We design bill of entry strategies that reflect HS codes, exemptions, valuation norms, and audit resilience.</li>
                <li><strong>Overland Transportation:</strong> Bonded and unbonded options with vetted carriers, GPS-enabled visibility where applicable, and loading protocols tailored to cargo sensitivity.</li>
                <li><strong>Warehousing & CFS:</strong> Verification, segregation, and container stuffing with inventory controls appropriate for both export consolidation and import deconsolidation.</li>
                <li><strong>Project Logistics:</strong> Route surveys, axle-load planning, permits and NOCs, lift plans, and on-site coordination with EPC teams and safety officers.</li>
                <li><strong>Duty Drawback:</strong> Advisory on eligibility, documentation precision, and digital claim tracking to reduce cycle times and improve cash flow predictability.</li>
                <li><strong>CIS Transportation:</strong> Multimodal corridor planning via Iran with long-distance handoffs engineered to maintain schedule integrity over thousands of kilometers.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 not-prose mt-12 mb-4">Process Discipline: How We Deliver Predictability</h3>
              <p className="text-gray-700 leading-relaxed">
                Predictability is a process outcome. We begin with a shipment blueprint that defines scope, parties, milestones, and decision rights. Pre-shipment, we validate documents against current requirements and known edge cases. In-transit, we use milestone checkpoints—gate-in, customs lodgment, examination (if applicable), release, handover—to create a clear picture of progress. Post-delivery, we complete reconciliation, ensuring that every expected document (bill of lading, commercial invoice, packing list, COO, permits, inspection reports) is archived and available for internal or external audit. When exceptions arise, they are classified (regulatory, operational, weather/security, carrier-related) and resolved via documented playbooks. This continuous loop of planning, execution, review, and learning allows us to improve outcomes shipment after shipment.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 not-prose mt-12 mb-4">Compliance, Governance, and Documentation Integrity</h3>
              <p className="text-gray-700 leading-relaxed">
                Our compliance posture is proactive. We monitor regulatory notices, engage with authorities, and update internal guidance so that clients are not surprised by procedural shifts. Documentation integrity is a non-negotiable principle; we treat each document as both an operational instrument and a legal artifact. Accuracy in HS classification, declared values, country of origin, and licensing terms protects clients from penalties and protects supply chains from avoidable delays. Our teams are trained to identify anomalies early and to raise clarifying queries before submission, not after rejection. Over decades, this discipline has earned us credibility with officials who recognize careful work when they see it.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 not-prose mt-12 mb-4">Technology, Visibility, and Communication</h3>
              <p className="text-gray-700 leading-relaxed">
                We apply technology with purpose. Where GPS visibility is possible, we enable it; where it is not, we compensate with tighter manual controls and more frequent updates. We standardize communication templates for pre-alerts, milestone notifications, and exception reports, so that information is consistent across teams and time zones. We understand that our updates feed into client systems—production schedules, financial forecasts, stock allocations—and we therefore optimize for clarity over verbosity. A good update tells you what changed, why it changed, and what your options are—in time to choose the best one.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 not-prose mt-12 mb-4">Case Snapshots</h3>
              <p className="text-gray-700 leading-relaxed">
                In humanitarian missions, speed and predictability can be matters of life and well-being. For a relief agency operating in Afghanistan, we orchestrated consolidated shipments of medical supplies and nutrition packs through Karachi with inland routes calibrated to border dynamics. We synchronized customs clearance, convoy timing, and last-mile delivery windows to ensure cold-chain integrity where needed and on-time arrivals despite fluctuating local conditions. In project logistics, we supported heavy-lift components for energy infrastructure by conducting route surveys, securing permits, and coordinating specialized handling equipment—all while sequencing the movements to align with site readiness and safety protocols. For exporters seeking duty drawback, we designed documentation routines that reduced claim rejections and introduced transparent status tracking to accelerate recoveries.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 not-prose mt-12 mb-4">Sustainability & Responsibility</h3>
              <p className="text-gray-700 leading-relaxed">
                Sustainability in logistics begins with avoiding waste: wasted time at terminals, wasted movements due to rework, and wasted materials from poor handling. Our approach reduces these forms of waste through better planning and tighter execution. We encourage modal choices that balance cost, speed, and environmental impact, and we maintain equipment and handling standards that protect cargo integrity, thereby reducing spoilage and disposal. Responsibility also means contributing positively to the communities in which we operate. We invest in training local teams, upskilling staff on safety and compliance, and supporting initiatives that strengthen the resilience of border communities that are vital to regional trade.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 not-prose mt-12 mb-4">People, Training, and Culture</h3>
              <p className="text-gray-700 leading-relaxed">
                Our people are our most reliable infrastructure. We recruit for judgment and train for discipline. New team members learn how to think about logistics as a system—how a small delay in document issuance can ripple through a vessel cut-off, how a change in HS classification can alter duty liabilities, how a border advisory should influence convoy planning. We run scenario drills and after-action reviews so that learning compounds. We celebrate small wins—like a flawlessly prepared document set—because in logistics, small wins accumulate into big advantages. Culture, for us, is the consistent practice of careful work under variable conditions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 not-prose mt-12 mb-4">Client Partnership Model</h3>
              <p className="text-gray-700 leading-relaxed">
                We engage clients as partners. That means we align on objectives—cost ceilings, schedule priorities, risk tolerances—and we design service levels that reflect those objectives. We are transparent about trade-offs: when a faster route increases cost or risk, we say so clearly; when a slower route protects the budget without compromising deadlines, we recommend it confidently. Our proposals are structured to make choices obvious and to keep surprises to a minimum. During execution, we designate single points of contact who are accountable for the whole journey, not just a segment. After completion, we review performance against agreed KPIs and refine the operating plan for the next movement.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 not-prose mt-12 mb-4">Industries We Serve</h3>
              <p className="text-gray-700 leading-relaxed">
                From government entities and international aid organizations to manufacturers, private importers, and multinational corporations, our portfolio reflects the diversity of Pakistan’s economy and its trading partners. Government projects demand procedural rigor and security coordination; humanitarian missions demand agility and sensitivity to local operating contexts; industrial exports demand consistent lead times and cost control. We adapt our playbooks to each sector while preserving the core standards that keep shipments moving: documentation accuracy, milestone visibility, and disciplined exception handling.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 not-prose mt-12 mb-4">Frequently Asked Questions</h3>
              <p className="text-gray-700 leading-relaxed"><strong>What documents do I need for Afghan transit?</strong> Requirements vary by commodity and route, but a typical set includes the commercial invoice, packing list, bill of lading or airway bill, certificate of origin (if applicable), transit permit, and any special licenses tied to the cargo. We provide an upfront document checklist and pre-validate submissions to reduce rework.</p>
              <p className="text-gray-700 leading-relaxed"><strong>How do you manage delays at borders?</strong> We plan for them. Our routes incorporate buffer time aligned with historical patterns, and our teams escalate early if queues or inspections exceed thresholds. Where possible, we re-sequence handoffs or re-route to preserve delivery commitments.</p>
              <p className="text-gray-700 leading-relaxed"><strong>Do you support temperature-sensitive cargo?</strong> Yes. We coordinate appropriate equipment and handling protocols and build monitoring into the plan. If the corridor cannot support continuous electronic tracking, we substitute with tighter physical checks and handover documentation.</p>
              <p className="text-gray-700 leading-relaxed"><strong>Can you help with duty drawback claims?</strong> Our Duty Drawback Division provides advisory, document preparation, and digital claim tracking. We standardize submissions to minimize rejections and shorten recovery cycles.</p>
              <p className="text-gray-700 leading-relaxed"><strong>What makes your CIS operations different?</strong> Experience and repeatability. We have planned and executed long-distance, multimodal routes via Iran since the early 1990s. Our handoff protocols and documentation standards are designed for endurance across multiple jurisdictions.</p>

              <h3 className="text-2xl font-bold text-gray-900 not-prose mt-12 mb-4">Commitment to the Next 50 Years</h3>
              <p className="text-gray-700 leading-relaxed">
                The next chapter of regional trade will be shaped by digitization, evolving regulatory frameworks, and the need for resilient supply chains. We are investing accordingly: better data, better training, and deeper partnerships. Our purpose remains unchanged—to be the logistics partner that makes complexity manageable and outcomes reliable. Whether your cargo is humanitarian aid, industrial machinery, consumer goods, or specialized project components, our promise is the same: thoughtful planning, careful execution, and transparent communication from origin to destination.
              </p>
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