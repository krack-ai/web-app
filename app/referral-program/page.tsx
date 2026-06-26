
import {
  Gift,
  Users,
  Copy,
  Trophy,
  CheckCircle,
} from "lucide-react";

export default function ReferralProgramPage() {
  return (
    <main className="relative overflow-hidden bg-[#0B1225] min-h-screen">

      {/* HERO */}

      <section className="relative py-24 overflow-hidden">
       {/* Blue Blur */}
  <div
    className="
      absolute
      left-1/2
      top-[200px]
      -translate-x-1/2
      w-[700px]
      h-[700px]
      rounded-full
      bg-[#3B82F6]/20
      blur-[220px]
      pointer-events-none
    "
  />
  <div className="relative z-10"></div> 
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 border border-[#40DEA3]/30 bg-[#0B1225] text-[#40DEA3] px-5 py-2 rounded-full font-semibold">
            <Gift size={18} />
            Referral Rewards
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-[#DAE2FD]">
            Earn FREE{" "}
            <span className="bg-gradient-to-r from-[#3882F6] to-[#40DEA3] bg-clip-text text-transparent">
              Interview Minutes
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-[#A3AED0] leading-relaxed">
            Invite your friends to Krack-AI.
            When they purchase any plan using your
            referral link, you'll receive bonus AI
            interview minutes absolutely free.
          </p>

        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14 text-[#DAE2FD]">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#141C31]/80 backdrop-blur-xl rounded-[32px] border border-white/10 p-8 text-center text-[#DAE2FD]">
              <Copy
                size={48}
                className="mx-auto text-[#40DEA3]"
              />

              <h3 className="font-bold text-2xl mt-5">
                Share Your Link
              </h3>

              <p className="text-[#A3AED0] mt-3">
                Copy your personal referral link
                and share it with friends.
              </p>
            </div>

            <div className="bg-[#141C31]/80 backdrop-blur-xl rounded-[32px] border border-white/10 p-8 text-center text-[#DAE2FD]">
              <Users
                size={48}
                className="mx-auto text-[#40DEA3]"
              />

              <h3 className="font-bold text-2xl mt-5">
                Friend Registers
              </h3>

              <p className="text-[#A3AED0] mt-3">
                Your friend creates an account
                using your referral link.
              </p>
            </div>

            <div className="bg-[#141C31]/80 backdrop-blur-xl rounded-[32px] border border-white/10 p-8 text-center text-[#DAE2FD]">
              <Gift
                size={48}
                className="mx-auto text-[#40DEA3]"
              />

              <h3 className="font-bold text-2xl mt-5">
                Earn Rewards
              </h3>

              <p className="text-[#A3AED0] mt-3">
                When they purchase a plan,
                bonus minutes are instantly
                credited to your account.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* REWARD TABLE */}

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-[#0B1225] rounded-3xl border border-[#414751]/30 overflow-hidden text-[#DAE2FD]">

            <div className="bg-gradient-to-r from-[#3882F6] to-[#40DEA3] px-8 py-6">
              <h2 className="text-3xl font-bold text-[#0B1225]">
                Referral Rewards
              </h2>
            </div>

            <div className="p-8">

              <div className="space-y-6">

                <div className="flex items-center justify-between border-b border-[#414751]/30 pb-4">
                  <span className="font-semibold">
                    Friend Purchases Any Plan
                  </span>

                  <span className="font-bold text-[#40DEA3]">
                    +10 FREE Minutes
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#414751]/30 pb-4">
                  <span className="font-semibold">
                    5 Successful Referrals
                  </span>

                  <span className="font-bold text-[#40DEA3]">
                    +60 FREE Minutes
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold">
                    10 Successful Referrals
                  </span>

                  <span className="font-bold text-[#40DEA3]">
                    +120 FREE Minutes
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14 text-[#DAE2FD]">
            Why Refer Friends?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Earn bonus AI interview minutes",
              "No limit on referrals",
              "Rewards are credited automatically",
              "Help friends prepare for interviews",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#141C31]/80 backdrop-blur-xl rounded-[32px] border border-white/10 p-6 flex items-center gap-4 text-[#DAE2FD]"
              >
                <CheckCircle
                  className="text-[#40DEA3]"
                  size={28}
                />

                <span className="font-medium text-lg">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

       {/* CTA */}

       <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="bg-gradient-to-r from-[#3882F6] to-[#40DEA3] rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-[#0B1225]">
              Start Earning Free Interview Minutes
            </h2>

            <p className="mt-4 text-[#0B1225]/80 text-lg">
              Share your referral link and earn
              rewards every time a friend purchases
              a Krack-AI plan.
            </p>

            <button
              className="
                mt-8
                bg-[#A4CDFF]
                text-[#0B1225]
                px-8
                py-4
                rounded-full
                font-bold
                hover:bg-[#A4CDFF]/90
                transition
                shadow-lg
              "
            >
              Get My Referral Link
            </button>

          </div>

        </div>
      </section>

      {/* LEADERBOARD PREVIEW */}

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-[#141C31]/80 blackdrop-blur-xl border border-white/10 rounded-[32px] p-10 text-[#DAE2FD]">

            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-yellow-400" />
              <h2 className="text-3xl font-bold">
                Top Referrers
              </h2>
            </div>

            <p className="text-[#A3AED0] mb-8">
              Coming Soon: Monthly leaderboard
              with special bonus rewards for top
              referrers.
            </p>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>#1 Santosh</span>
                <span className="text-[#40DEA3]">
                  180 Bonus Minutes
                </span>
              </div>

              <div className="flex justify-between">
                <span>#2 Rajesh</span>
                <span>
                  120 Bonus Minutes
                </span>
              </div>

              <div className="flex justify-between">
                <span>#3 Sunil</span>
                <span>
                  100 Bonus Minutes
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

     

    </main>
  );
}