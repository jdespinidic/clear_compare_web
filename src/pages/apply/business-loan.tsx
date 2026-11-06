import WebflowPage, { WebflowData } from '@/components/WebflowPage'
import data from '@/webflow/business-loan.json'

export default function BusinessLoanApply() {
  return <WebflowPage data={data as WebflowData} />
}
