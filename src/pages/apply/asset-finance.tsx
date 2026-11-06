import WebflowPage, { WebflowData } from '@/components/WebflowPage'
import data from '@/webflow/asset-finance.json'

export default function AssetFinanceApply() {
  return <WebflowPage data={data as WebflowData} />
}
