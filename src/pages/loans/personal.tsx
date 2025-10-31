import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, User, Shield, Clock, CheckCircle2, Wallet, CreditCard, Home as HomeIcon, Heart } from "lucide-react"
import { MobileNavigation } from "@/components/MobileNavigation"

export default function PersonalLoanPage() {
  return (
    <>
      <Head>
        <title>Personal Loans - Flexible financing for life's moments | ClearCompare</title>
        <meta name="description" content="Get personal loans for debt consolidation, home improvements, or unexpected expenses. Compare rates from trusted lenders in 2 minutes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialProduct",
              "name": "Personal Loans",
              "category": "Personal Loan",
              "provider": {
                "@type": "Organization",
                "name": "ClearCompare"
              },
              "description": "Compare personal loan rates and get approved with trusted Australian lenders"
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-white font-opensans">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-black text-white hover:bg-gray-800 border-black font-opensans-medium">
                  <User className="w-4 h-4 mr-1" />
                  Personal Loans
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-opensans-bold mb-6 text-dark-gray leading-tight">
                  Get Personalised Quotes in <span className="text-primary-orange">60 Seconds</span>
                </h1>
                
                <p className="text-xl text-medium-gray mb-8 leading-relaxed font-opensans">
                  Whether it's debt consolidation, home improvements, or unexpected expenses, get competitive personal loan rates from trusted Australian lenders.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/loans/personal/apply">
                    <Button size="lg" className="gradient-orange hover:opacity-90 text-white text-lg px-12 py-6 rounded-2xl shadow-2xl hover:shadow-primary-orange/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 border-0 font-opensans-medium">
                      Compare Now
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-4 flex items-center justify-start">
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

              {/* Hero Image with Person */}
              <div className="relative">
                <div className="w-full h-96 rounded-3xl overflow-hidden relative">
                  <Image
                    src="public/task_01k8w3gpmqf4n94wsa1gdrbcnw_1761879876_img_1 (1).webp"
                    alt="Woman in orange sweater smiling while using mobile phone"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-secondary-orange/20 mix-blend-multiply"></div>
                  <div className="absolute top-6 left-6 w-20 h-20 bg-white/20 rounded-2xl rotate-12 backdrop-blur-sm"></div>
                  <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/20 rounded-xl -rotate-6 backdrop-blur-sm"></div>
                  <div className="absolute top-20 right-20 w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm"></div>
                  <div className="absolute bottom-20 left-20 w-8 h-8 bg-white/20 rounded-lg rotate-45 backdrop-blur-sm"></div>
                </div>
              </div>
            </div>

            {/* Abstract Background Graphics */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-light-orange/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary-orange/15 rounded-full blur-3xl -z-10"></div>
          </div>
        </section>

        {/* What is a Personal Loan Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-white to-light-orange/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-opensans-bold mb-6 text-dark-gray">
                  What is a Personal Loan?
                </h2>
                <p className="text-lg text-medium-gray mb-8 leading-relaxed font-opensans">
                  A personal loan is an unsecured loan that provides flexible financing for various needs. No collateral required, with fixed repayment terms to help you budget with confidence.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-light-orange flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-primary-orange" />
                    </div>
                    <p className="text-medium-gray font-opensans">
                      <span className="font-opensans-medium text-dark-gray">No collateral:</span> Unsecured loan with no asset at risk
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-light-orange flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-primary-orange" />
                    </div>
                    <p className="text-medium-gray font-opensans">
                      <span className="font-opensans-medium text-dark-gray">Fast access:</span> Get approved and access funds quickly
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-light-orange flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-primary-orange" />
                    </div>
                    <p className="text-medium-gray font-opensans">
                      <span className="font-opensans-medium text-dark-gray">Flexible use:</span> Use for any purpose from $2,000 to $50,000
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl hover:shadow-primary-orange/5 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary-orange flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-opensans-medium text-dark-gray mb-2">Debt Consolidation</h4>
                    <p className="text-sm text-medium-gray font-opensans">Combine multiple debts into one payment</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl hover:shadow-primary-orange/5 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary-orange flex items-center justify-center mx-auto mb-4">
                      <HomeIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-opensans-medium text-dark-gray mb-2">Home Improvements</h4>
                    <p className="text-sm text-medium-gray font-opensans">Renovate and upgrade your living space</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl hover:shadow-primary-orange/5 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary-orange flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-opensans-medium text-dark-gray mb-2">Medical Expenses</h4>
                    <p className="text-sm text-medium-gray font-opensans">Cover unexpected healthcare costs</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl hover:shadow-primary-orange/5 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary-orange flex items-center justify-center mx-auto mb-4">
                      <Wallet className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-opensans-medium text-dark-gray mb-2">Special Purchases</h4>
                    <p className="text-sm text-medium-gray font-opensans">Finance weddings, travel, or education</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How ClearCompare Helps */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-opensans-bold mb-6 text-dark-gray">
                How ClearCompare helps you get the best personal loan
              </h2>
              <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed font-opensans">
                We make personal loan comparison simple, fast, and transparent. Get matched with the right lender for your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group border-0 shadow-lg hover:shadow-2xl hover:shadow-primary-orange/10 transition-all duration-500 bg-white rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary-orange flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-opensans-medium mb-4 text-dark-gray">Smart Matching</h3>
                  <p className="text-medium-gray leading-relaxed font-opensans">
                    Our algorithm matches you with lenders most likely to offer you competitive rates, protecting your credit score.
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-lg hover:shadow-2xl hover:shadow-secondary-orange/10 transition-all duration-500 bg-white rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-secondary-orange flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-opensans-medium mb-4 text-dark-gray">Fast Process</h3>
                  <p className="text-medium-gray leading-relaxed font-opensans">
                    Get pre-qualified in just 2 minutes. Quick questions to find your best personal loan options fast.
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-lg hover:shadow-2xl hover:shadow-light-orange/10 transition-all duration-500 bg-white rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-light-orange flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-8 h-8 text-primary-orange" />
                  </div>
                  <h3 className="text-xl font-opensans-medium mb-4 text-dark-gray">Real Offers</h3>
                  <p className="text-medium-gray leading-relaxed font-opensans">
                    Receive genuine pre-qualified offers from multiple lenders. Compare real rates and terms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 bg-light-orange/10">
          <div className="max-w-7xl mx-auto">
            <Card className="border-0 shadow-lg bg-white rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-lg font-opensans-bold mb-4 text-dark-gray">Important Information</h3>
                
                <div className="space-y-4 text-sm text-medium-gray font-opensans">
                  <p>
                    Subject to our lenders products, Clear Compares comparable interest rates range from 6.28% p.a. to 48% p.a. (Comparison Rate: 6.28% p.a. to 48% p.a.) and are offered based on the individual borrower's credit assessment according to our lenders product eligibility and pricing.
                  </p>
                  
                  <div className="bg-light-orange/20 border-l-4 border-primary-orange p-4 rounded">
                    <p className="font-opensans-medium text-dark-gray">
                      <strong>WARNING:</strong> The comparison rate applies only to the example given. Different amounts and terms will result in different comparison rates. Costs such as fees or early repayment fees, and cost savings such as fee waivers are to be communicated directly with the chosen lenders.
                    </p>
                  </div>
                  
                  <p>
                    <strong className="text-dark-gray">Example:</strong> Personal Loan of $30,000 borrowed for 60 months, with a fixed rate of 6.28% p.a. (comparison rate 6.28%), would result in a total repayment of $35,033.88 (made up of $30,000 principal, $5,033.88 in interest, and $0 establishment fee), assuming the match of a lender and borrower based on eligibility.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
