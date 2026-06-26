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
    title: "Real-Time Transcription",
    description:
      "Captures every question instantly with crystal-clear accuracy.",
  },
  {
    icon: Brain,
    title: "Smart AI Answers",
    description:
      "Generates thoughtful, tailored answers within seconds.",
  },
  {
    icon: Shield,
    title: "100% Private",
    description:
      "Runs locally on your device. Nothing is shared or recorded.",
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    description:
      "Sub-second response times — never miss a beat.",
  },
  {
    icon: Monitor,
    title: "Works Everywhere",
    description:
      "Zoom, Meet, Teams, phone calls — any interview platform.",
  },
  {
    icon: Sparkles,
    title: "Custom Personas",
    description:
      "Tune the AI to match your background and voice.",
  },
];

export default function Features() {
  return (
    <section id="features" className=" bg-[#0B1225]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#DAE2FD]">
            Everything you need to{" "}
            <span className="text-[#DAE2FD]">
              ace
            </span>
            <br />
            <span className="text-[#DAE2FD]">
              the interview
            </span>
          </h2>

          <p className="mt-8 text-2xl text-[#C1C7D3]">
            Built to feel invisible to the interviewer and
            indispensable to you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  bg-gradient-to-b
                  from-[#171F33]
                  to-[#0B1326]
                  border
                  border-[#334155]
                  rounded-[32px]
                  p-10
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
                    from-[#3882F6]
                    to-[#40DEA3]
                    flex
                    items-center
                    justify-center
                    mb-8
                  "
                >
                  <Icon
                    size={28}
                    className="text-[#DAE2FD]"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#DAE2FD] mb-4">
                  {feature.title}
                </h3>

                <p className="text-[#C1C7D3] text-xl leading-relaxed">
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