import WebflowPage, { WebflowData } from '@/components/WebflowPage'
import data from '@/webflow/business.json'

// /business — the business finance landing page. Same design as the
// personal-loan landing page (src/pages/index.tsx) with business copy; its
// CTAs and tiles go to /apply/business-loan and /apply/asset-finance. The
// consumer sections (lender logos, reviews, rate claims) are left out, and the
// footer is the business variant, pending compliance sign-off.
export default function BusinessFinance() {
  return <WebflowPage data={data as WebflowData} />
}
