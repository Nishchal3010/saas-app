"use client"

import { PricingTable } from "@clerk/nextjs"  // ← Add this!

const Subscription = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <PricingTable />
    </div>
  )
}

export default Subscription