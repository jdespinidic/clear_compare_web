import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, ArrowRight, Home, Car, User } from "lucide-react"

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const navigationItems = [
    {
      name: "Home Loans",
      href: "/loans/home",
      icon: <Home className="w-5 h-5" />,
      description: "Compare home loan rates"
    },
    {
      name: "Car Loans", 
      href: "/loans/car",
      icon: <Car className="w-5 h-5" />,
      description: "Find your perfect car loan"
    },
    {
      name: "Personal Loans",
      href: "/loans/personal", 
      icon: <User className="w-5 h-5" />,
      description: "Flexible personal financing"
    }
  ]

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden touch-target focus-ring"
        aria-label="Open navigation menu"
      >
        <Menu className="w-6 h-6 text-medium-gray" />
      </Button>
    )
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden touch-target focus-ring"
          aria-label="Open navigation menu"
        >
          <Menu className="w-6 h-6 text-medium-gray" />
        </Button>
      </SheetTrigger>
      
      <SheetContent side="left" className="w-full sm:w-80 p-0 bg-white border-r-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-light-orange/30">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image 
                src="/noBgColor (3).png" 
                alt="ClearCompare Logo" 
                width={120} 
                height={40}
                className="object-contain"
              />
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="touch-target focus-ring"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6 text-medium-gray" />
            </Button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 p-6 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-light-orange/10 transition-colors focus-ring group touch-target"
              >
                <div className="w-12 h-12 rounded-xl bg-light-orange flex items-center justify-center group-hover:bg-primary-orange transition-colors">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-opensans-semibold text-dark-gray text-fluid-base">
                    {item.name}
                  </h3>
                  <p className="text-sm text-medium-gray font-opensans">
                    {item.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-medium-gray group-hover:text-primary-orange transition-colors" />
              </Link>
            ))}

            <div className="pt-6 space-y-3">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block p-3 text-medium-gray hover:text-primary-orange transition-colors font-opensans-medium touch-target focus-ring"
              >
                About Us
              </Link>
              <Link
                href="/faq"
                onClick={() => setIsOpen(false)}
                className="block p-3 text-medium-gray hover:text-primary-orange transition-colors font-opensans-medium touch-target focus-ring"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="p-6 border-t border-light-orange/30">
            <Button 
              className="w-full gradient-orange hover:opacity-90 text-white shadow-lg btn-mobile-friendly font-opensans-medium focus-ring"
              onClick={() => setIsOpen(false)}
            >
              <Link 
                href="https://sg-0f274595-d499-48c5-94a5-800918f0.vercel.app/whitelabel/test-partner" 
                className="flex items-center justify-center w-full"
              >
                Compare Loans Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
