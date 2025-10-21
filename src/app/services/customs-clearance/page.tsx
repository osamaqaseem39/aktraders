import ServiceDetail from "../_components/ServiceDetail"
import { companyInfo } from "@/lib/company-data"

export default function Page() {
  const service = companyInfo.services.find(s => s.id === "customs-clearance")!
  return <ServiceDetail service={service} />
}


