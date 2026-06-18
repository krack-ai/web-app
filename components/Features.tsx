import {
  Mic,
  Brain,
  Shield,
  Zap,
  Monitor,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Interview Question Capture",
    description:
      "Capture interview questions from voice or audio in real time.",
  },
  {
    icon: Brain,
    title: "AI Interview Assistance",
    description:
      "Get AI-powered guidance and suggestions for technical and behavioral interview questions.",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description:
      "Built with privacy in mind to help protect your interview data and conversations.",
  },
  {
    icon: Zap,
    title: "Fast Responses",
    description:
      "Receive quick interview guidance to stay focused during preparation and practice.",
  },
  {
    icon: Monitor,
    title: "Multi-Platform Support",
    description:
      "Use alongside popular video meeting and communication platforms.",
  },
  {
    icon: Sparkles,
    title: "Personalized Interview Help",
    description:
      "Customize assistance based on your role, experience, and technology stack.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#fafafa] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#020826]">
            AI Tools For
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              Interview Preparation
            </span>
          </h2>

          <p className="mt-8 text-2xl text-slate-500 max-w-4xl mx-auto">
            Prepare for coding interviews with AI-powered guidance,
            interview question analysis, and personalized support
            for software engineering roles.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-[32px]
                  p-10
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-r
                    from-pink-500
                    to-orange-300
                    flex
                    items-center
                    justify-center
                    mb-8
                  "
                >
                  <Icon
                    size={28}
                    className="text-white"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#020826] mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-500 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}