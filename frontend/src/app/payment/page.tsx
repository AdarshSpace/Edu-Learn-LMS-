"use client";

import Image from "next/image";
import { ShieldCheck, CreditCard, BadgeCheck, Wallet, Ticket } from "lucide-react";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-[#F8F5FF] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#2E1065]">
            Complete Your Purchase
          </h1>
          <p className="mt-2 text-sm md:text-base text-[#6D28D9]">
            Secure checkout to unlock your course instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Summary */}
            <div className="rounded-3xl border border-purple-100 bg-white p-5 shadow-sm md:p-6">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="relative h-40 w-full overflow-hidden rounded-2xl md:w-64">
                  <Image
                    src="/course-thumbnail.jpg"
                    alt="Course"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-[#6D28D9]">
                    Development
                  </span>

                  <h2 className="mt-3 text-xl font-semibold text-[#2E1065]">
                    Full Stack LMS Development Masterclass
                  </h2>

                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                    <BadgeCheck className="h-4 w-4 text-[#7C3AED]" />
                    Lifetime access included
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="rounded-3xl border border-purple-100 bg-white p-5 shadow-sm md:p-6">
              <h3 className="mb-5 text-lg font-semibold text-[#2E1065]">
                Payment Method
              </h3>

              <div className="space-y-4">
                <button className="flex w-full items-center justify-between rounded-2xl border border-purple-200 p-4 transition hover:border-[#7C3AED] hover:bg-purple-50">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-[#7C3AED]" />
                    <span className="font-medium text-[#2E1065]">Credit / Debit Card</span>
                  </div>
                </button>

                <button className="flex w-full items-center justify-between rounded-2xl border border-purple-200 p-4 transition hover:border-[#7C3AED] hover:bg-purple-50">
                  <div className="flex items-center gap-3">
                    <Wallet className="h-5 w-5 text-[#7C3AED]" />
                    <span className="font-medium text-[#2E1065]">UPI / Wallet</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Coupon */}
            <div className="rounded-3xl border border-purple-100 bg-white p-5 shadow-sm md:p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#2E1065]">
                Apply Coupon
              </h3>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="h-12 flex-1 rounded-2xl border border-purple-200 px-4 outline-none focus:border-[#7C3AED]"
                />

                <button className="flex h-12 items-center justify-center rounded-2xl bg-[#7C3AED] px-6 font-medium text-white transition hover:bg-[#6D28D9]">
                  <Ticket className="mr-2 h-4 w-4" />
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div className="sticky top-6 rounded-3xl border border-purple-100 bg-white p-5 shadow-sm md:p-6">
              <h3 className="text-lg font-semibold text-[#2E1065]">
                Order Summary
              </h3>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Original Price</span>
                  <span>₹4,999</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹2,000</span>
                </div>

                <div className="h-px w-full bg-purple-100" />

                <div className="flex justify-between text-base font-semibold text-[#2E1065]">
                  <span>Total</span>
                  <span>₹2,999</span>
                </div>
              </div>

              <button className="mt-6 h-12 w-full rounded-2xl bg-[#7C3AED] text-base font-medium text-white transition hover:bg-[#6D28D9]">
                Pay Now
              </button>

              <div className="mt-5 flex items-start gap-3 rounded-2xl bg-purple-50 p-4">
                <ShieldCheck className="h-5 w-5 text-[#7C3AED]" />
                <p className="text-sm text-gray-600">
                  Your payment is encrypted and secured with trusted payment gateways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}