import WebflowPage, { WebflowData } from '@/components/WebflowPage'
import data from '@/webflow/home.json'

// /home — the home-loan landing page. Identical to the personal-loan landing
// page (src/pages/index.tsx), with the copy switched to home-loan wording.
export default function HomeLoans() {
  return <WebflowPage data={data as WebflowData} />
}
