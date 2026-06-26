import Link from "next/link";

function ReferralBanner () {

    return(
        <Link
        href="/referral-program"
        className="
          block
          border-y
          border-[#414751]/30
          bg-[#0B1225]
          hover:bg-[#0B1225]/80
          transition
        "
      >
        <div className="max-w-7xl mx-auto px-6 py-3">
      
          <div className="flex items-center justify-center gap-2">
      
            <span className="text-yellow-400">
              🎁
            </span>
      
            <span className="text-[#DAE2FD] font-semibold">
              Earn FREE Interview Minutes
            </span>
      
            <span className="text-[#A3AED0]">
              for every friend who purchases a plan
            </span>
      
            <span className="text-[#40DEA3] font-semibold">
              Learn More →
            </span>
      
          </div>
      
        </div>
      </Link>
    )
}

export default ReferralBanner