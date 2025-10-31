import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-dark-gray text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 safe-area-inset-bottom">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <Image 
                src="/noBgColor (3).png" 
                alt="ClearCompare Logo" 
                width={80} 
                height={32}
                className="object-contain w-16 h-6 sm:w-20 sm:h-8"
              />
            </div>
            <p className="text-light-orange leading-relaxed font-opensans text-fluid-sm">
              Making loan comparison simple, transparent, and fast for all Australians.
            </p>
          </div>
          
          <div>
            <h4 className="font-opensans-bold mb-4 text-fluid-base">Loan Types</h4>
            <ul className="space-y-2 text-light-orange">
              <li><Link href="/loans/home" className="hover:text-white transition-colors font-opensans text-fluid-sm focus-ring">Home Loans</Link></li>
              <li><Link href="/loans/car" className="hover:text-white transition-colors font-opensans text-fluid-sm focus-ring">Car Loans</Link></li>
              <li><Link href="/loans/personal" className="hover:text-white transition-colors font-opensans text-fluid-sm focus-ring">Personal Loans</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-opensans-bold mb-4 text-fluid-base">Company</h4>
            <ul className="space-y-2 text-light-orange">
              <li><Link href="/about" className="hover:text-white transition-colors font-opensans text-fluid-sm focus-ring">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors font-opensans text-fluid-sm focus-ring">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-opensans-bold mb-4 text-fluid-base">Legal</h4>
            <ul className="space-y-2 text-light-orange">
              <li><Link href="/terms" className="hover:text-white transition-colors font-opensans text-fluid-sm focus-ring">Terms &amp; Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors font-opensans text-fluid-sm focus-ring">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors font-opensans text-fluid-sm focus-ring">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Legal Disclaimer Section */}
        <div className="border-t border-medium-gray pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="max-w-5xl">
            <h5 className="font-opensans-bold text-base sm:text-lg mb-4 text-white">Disclaimer</h5>
            <div className="space-y-4 text-light-orange text-xs sm:text-sm leading-relaxed font-opensans">
              <p>
                Clear Compare is an online technology platform that connects consumers with licensed lenders who can assist in finding suitable credit options. We do not provide financial, credit, or lending advice. Any quotes or offers you receive will come directly from the participating broker or lender. If you proceed with a product or service, your ongoing relationship will be managed directly with that provider.
              </p>
              <p>
                We partner with another technology partner called Rate Match AI Pty Ltd to facilitate this service. Neither Rate Match nor Clear Compare charges consumers a fee for using our service. We may receive a one-off referral or technology fee from a participating lender for facilitating the introduction. Rate Match does not compare every product or lender in the market. Product availability, eligibility, and comparison coverage may vary from time to time. The information provided on this website is general in nature and should not be considered a substitute for independent professional or credit advice or assistance.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-medium-gray pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-orange text-xs sm:text-sm font-opensans">
            © 2025 ClearCompare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
