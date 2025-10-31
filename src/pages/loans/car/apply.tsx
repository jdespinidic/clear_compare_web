import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { MobileNavigation } from "@/components/MobileNavigation"

export default function CarLoanApplyPage() {
  return (
    <>
      <Head>
        <title>Compare Car Loans | ClearCompare</title>
        <meta name="description" content="Compare car loan offers from multiple lenders and find your best rate." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white font-opensans">
        {/* Header */}
        <header className="border-b border-light-orange bg-white/95 backdrop-blur-sm sticky top-0 z-50 safe-area-inset-top">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/noBgColor (3).png" 
                  alt="ClearCompare Logo" 
                  width={360} 
                  height={120}
                  className="object-contain w-48 h-16 sm:w-60 sm:h-20 md:w-72 md:h-24"
                  priority
                />
              </Link>
              
              <div className="md:hidden">
                <MobileNavigation />
              </div>
              
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/loans/home" className="text-medium-gray hover:text-primary-orange transition-colors font-opensans-medium">
                  Home Loans
                </Link>
                <Link href="/loans/car" className="text-primary-orange font-opensans-medium">
                  Car Loans
                </Link>
                <Link href="/loans/personal" className="text-medium-gray hover:text-primary-orange transition-colors font-opensans-medium">
                  Personal Loans
                </Link>
                <Link href="/about" className="text-medium-gray hover:text-primary-orange transition-colors font-opensans-medium">
                  About
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Comparison Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-opensans-bold text-dark-gray mb-4">
                Compare Car Loans
              </h1>
              <p className="text-lg text-medium-gray leading-relaxed font-opensans">
                Get matched with competitive car loan offers from trusted lenders
              </p>
              <div className="mt-4 flex items-center justify-center">
                <p className="text-sm text-medium-gray font-opensans flex items-center">
                  Powered by{" "}
                  <span className="text-primary-orange font-opensans-medium ml-1">RateMatch</span>
                  <Image 
                    src="/symbol.png" 
                    alt="RateMatch Symbol" 
                    width={16} 
                    height={16}
                    className="ml-2"
                  />
                </p>
              </div>
            </div>

            {/* RateMatch Iframe */}
            <div className="bg-white overflow-hidden relative" style={{ height: "calc(100vh - 200px)", minHeight: "700px" }}>
              <div className="absolute inset-0 overflow-hidden">
                <iframe src="https://platform.ratematch.ai/embed/clear-compare/apply/car"
                  className="w-full border-0"
                  style={{ 
                    height: "calc(100% + 100px)",
                    marginTop: "-100px"
                  }}
                  title="Car Loan Comparison"
                  allow="geolocation; microphone; camera"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
