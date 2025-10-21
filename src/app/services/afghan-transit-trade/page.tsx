import ServiceDetail from "../_components/ServiceDetail"
import { companyInfo } from "@/lib/company-data"

export default function Page() {
  const service = companyInfo.services.find(s => s.id === "afghan-transit-trade")!
  return <ServiceDetail service={service} heroImagePath="/images/afghantransit.jpg" />
}


