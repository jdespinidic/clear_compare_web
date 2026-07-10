import WebflowPage, { WebflowData } from '@/components/WebflowPage'
import data from '@/webflow/car-loans.json'

export default function CarLoansApply() {
  return <WebflowPage data={data as WebflowData} />
}
