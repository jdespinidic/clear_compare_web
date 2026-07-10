import WebflowPage, { WebflowData } from '@/components/WebflowPage'
import data from '@/webflow/personal-loan.json'

export default function PersonalLoanApply() {
  return <WebflowPage data={data as WebflowData} />
}
