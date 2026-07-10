import WebflowPage, { WebflowData } from '@/components/WebflowPage'
import data from '@/webflow/index.json'

export default function Home() {
  return <WebflowPage data={data as WebflowData} />
}
