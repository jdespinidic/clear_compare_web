import WebflowPage, { WebflowData } from '@/components/WebflowPage'
import data from '@/webflow/home-loan.json'

// /apply/home-loan — the home-loan RateMatch application. Same as the
// personal-loan apply page with formType=home; the form URL comes from
// NEXT_PUBLIC_RATEMATCH_FORM_URL (see WebflowPage).
export default function HomeLoanApply() {
  return <WebflowPage data={data as WebflowData} />
}
