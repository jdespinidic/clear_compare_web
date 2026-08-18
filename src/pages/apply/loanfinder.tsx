import WebflowPage, { WebflowData } from '@/components/WebflowPage'
import data from '@/webflow/apply-loanfinder.json'

// /apply/loanfinder — the LeadMarket application page. Same chrome as the
// other apply pages, but the form is the embedded CreditSense application
// (static.creditsense.com.au mlm-loader) instead of the RateMatch iframe. The
// affiliate code is environment-specific — see CREDITSENSE_AFF in
// WebflowPage.tsx.
export default function LoanFinderApply() {
  return <WebflowPage data={data as WebflowData} />
}
