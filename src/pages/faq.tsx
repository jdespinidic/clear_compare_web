import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, HelpCircle } from "lucide-react"
import { MobileNavigation } from "@/components/MobileNavigation"

export default function FAQPage() {
  const faqData = [
    {
      question: "How does ClearCompare work?",
      answer: "ClearCompare uses smart technology to match you with lenders who are most likely to offer you competitive rates. Simply tell us about yourself and what you're looking for, and we'll show you personalised offers from our network of trusted Australian lenders."
    },
    {
      question: "Is ClearCompare free to use?",
      answer: "Yes, ClearCompare is completely free for borrowers. We don't charge any fees for our comparison service. Our platform is funded by lenders who pay us a commission when you successfully take out a loan through our service."
    },
    {
      question: "What types of loans can I compare?",
      answer: "You can compare home loans (including first home buyer, refinancing, and investment loans), car loans (new and used vehicles), and personal loans (for debt consolidation, home improvements, holidays, and more)."
    },
    {
      question: "How quickly can I get pre-qualified?",
      answer: "Most people get pre-qualified in under 2 minutes. You'll answer a few quick questions about your financial situation and loan requirements, and we'll show you offers you're likely to be approved for."
    },
    {
      question: "Will checking my options affect my credit score?",
      answer: "No, getting pre-qualified through ClearCompare is a 'soft' credit check that doesn't impact your credit score. Only when you decide to proceed with a lender directly will they perform a 'hard' credit check."
    },
    {
      question: "Are the offers I see real or just estimates?",
      answer: "The offers you see are genuine pre-qualified offers based on your profile. These aren't marketing estimates - they're real rates and terms from lenders who have indicated they're likely to work with you."
    },
    {
      question: "What information do I need to provide?",
      answer: "To get started, you'll need basic information like your income, employment status, the loan amount you're looking for, and some personal details. When you proceed with a lender, they'll request additional documents like payslips, bank statements, and ID."
    },
    {
      question: "Can I compare rates if I have bad credit?",
      answer: "Yes, our platform includes lenders who specialise in helping people with less-than-perfect credit. We'll match you with lenders who are more likely to work with you based on your specific circumstances."
    },
    {
      question: "How do I know which lenders I'm matched with?",
      answer: "We'll show you which lenders have provided offers, along with their rates, terms, and key features. All our partner lenders are licensed Australian financial institutions with strong reputations."
    },
    {
      question: "What happens after I choose an offer?",
      answer: "Once you select an offer, you'll be connected directly with that lender to complete their process. They'll guide you through their requirements and help you finalise your loan."
    },
    {
      question: "Can I get help choosing the right loan?",
      answer: "Absolutely! Our platform provides clear comparisons and explanations to help you understand your options. You can also contact our support team if you need guidance choosing between offers."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we use bank-level security to protect your information. All data is encrypted and stored securely. We only share your information with lenders you choose to connect with, and we never sell your data to third parties."
    },
    {
      question: "Can I save my comparison and come back later?",
      answer: "Yes, you can save your progress and return to complete your comparison later. We'll send you a secure link to pick up where you left off."
    },
    {
      question: "What if I'm not approved by the lender?",
      answer: "If you're not approved by your chosen lender, you can go back and try other offers from your results. Each lender has different criteria, so you may still be approved elsewhere."
    },
    {
      question: "Are there any hidden fees?",
      answer: "ClearCompare doesn't charge any fees to borrowers. However, loans themselves may have fees (like establishment fees, ongoing fees, or early exit fees). These will be clearly disclosed in each lender's offer."
    }
  ]

  return (
    <>
      <Head>
        <title>FAQ - ClearCompare | Frequently Asked Questions</title>
        <meta name="description" content="Get answers to common questions about ClearCompare's loan comparison service. Learn how our platform works, security measures, and what to expect." />
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
                <Link href="/loans/car" className="text-medium-gray hover:text-primary-orange transition-colors font-opensans-medium">
                  Car Loans
                </Link>
                <Link href="/loans/personal" className="text-medium-gray hover:text-primary-orange transition-colors font-opensans-medium">
                  Personal Loans
                </Link>
                <Link href="/about" className="text-medium-gray hover:text-primary-orange transition-colors font-opensans-medium">
                  About
                </Link>
              </nav>

              <Button className="hidden md:flex gradient-orange hover:opacity-90 text-white shadow-lg hover:shadow-primary-orange/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-0 font-opensans-medium px-6 py-3 text-base rounded-xl focus-ring">
                <Link href="https://sg-0f274595-d499-48c5-94a5-800918f0.vercel.app/whitelabel/test-partner" className="flex items-center">
                  Compare Loans Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-12 sm:pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 sm:mb-6 bg-light-orange text-primary-orange hover:bg-secondary-orange border-light-orange font-opensans-medium text-xs sm:text-sm">
                <HelpCircle className="w-4 h-4 mr-1" />
                Frequently Asked Questions
              </Badge>
              
              <h1 className="text-fluid-4xl sm:text-fluid-5xl font-opensans-bold mb-4 sm:mb-6 text-dark-gray leading-tight">
                Got <span className="text-primary-orange">questions</span>?
              </h1>
              
              <p className="text-fluid-lg sm:text-fluid-xl text-medium-gray mb-8 sm:mb-10 leading-relaxed font-opensans">
                Find answers to the most common questions about our loan comparison service.
              </p>
            </div>

            <div className="absolute top-10 left-10 w-32 sm:w-64 h-32 sm:h-64 bg-light-orange/20 rounded-full blur-2xl sm:blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-48 sm:w-96 h-48 sm:h-96 bg-secondary-orange/15 rounded-full blur-2xl sm:blur-3xl -z-10"></div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-gradient-to-r from-white to-light-orange/10">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mobile-card"
                >
                  <AccordionTrigger className="px-6 sm:px-8 py-6 text-left font-opensans-semibold text-fluid-base sm:text-fluid-lg text-dark-gray hover:no-underline hover:text-primary-orange transition-colors [&[data-state=open]>svg]:rotate-180 btn-mobile-friendly focus-ring">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 sm:px-8 pb-6 text-medium-gray leading-relaxed font-opensans text-fluid-sm sm:text-fluid-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-fluid-2xl sm:text-fluid-3xl font-opensans-bold mb-4 sm:mb-6 text-dark-gray">
              Still have questions?
            </h2>
            <p className="text-fluid-base sm:text-fluid-lg text-medium-gray mb-6 sm:mb-8 leading-relaxed font-opensans">
              Our friendly team is here to help. Get in touch and we'll answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white transition-all duration-300 rounded-xl font-opensans-medium btn-mobile-friendly focus-ring"
              >
                <Link href="/contact" className="flex items-center">
                  Contact Support
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="gradient-orange hover:opacity-90 text-white shadow-lg hover:shadow-primary-orange/25 transition-all duration-300 rounded-xl font-opensans-medium btn-mobile-friendly focus-ring"
              >
                <Link href="https://sg-0f274595-d499-48c5-94a5-800918f0.vercel.app/whitelabel/test-partner" className="flex items-center">
                  Start Comparing Loans
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
