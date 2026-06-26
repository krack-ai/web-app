import { Check, Shield } from "lucide-react";

export default function Privacy() {
  return (
    <section id="privacy" className="py-32 bg-[#0B1225]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#DAE2FD]">
              Your privacy is
              <br />
              <span className="text-[#DAE2FD]">
                non-negotiable
              </span>
            </h2>

            <p className="mt-8 text-2xl leading-relaxed text-[#C1C7D3] max-w-xl">
              Audio is processed on your device. We never
              store recordings or transcripts of your
              interviews. Your edge — your data.
            </p>

            <div className="mt-12 space-y-6 text-[#DAE2FD] ">
              {[
                "End-to-end encrypted",
                "No recordings stored",
                "Undetectable to interviewers",
                "GDPR & SOC2 ready",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <Check
                    size={24}
                    className="text-[#40DEA3]"
                  />

                  <span className="text-2xl font-medium text-[#DAE2FD]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div>
            <div
              className="
                h-[600px]
                rounded-[40px]
                bg-gradient-to-br
                from-[#3882F6]
                to-[#40DEA3]
                flex
                items-center
                justify-center
                shadow-xl
              "
            >
              <Shield
                size={140}
                strokeWidth={1.5}
                className="text-white"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}