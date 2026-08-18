import WebflowPage, { WebflowData } from '@/components/WebflowPage'
import data from '@/webflow/loanfinder.json'

// /loanfinder — the LeadMarket landing page. Same design as the personal-loan
// landing page (src/pages/index.tsx) with the LeadMarket funnel changes: the
// CTAs read "Apply Now" and route to /apply/loanfinder (the CreditSense form),
// lender/partner brand logos are removed from the hero and social-proof
// sections, and the hero rate claim is replaced with "Check eligibility
// instantly". The JSON is derived from index.json.
export default function LoanFinder() {
  return <WebflowPage data={data as WebflowData} />
}
