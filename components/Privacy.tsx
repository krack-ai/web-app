import { Check, Shield } from "lucide-react";

export default function Privacy() {
  const privacyFeatures = [
    "Privacy-focused design",
    "Secure audio processing",
    "User-controlled data",
    "Built with security best practices",
  ];

  return (
    <section id="privacy" className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#020826]">
              Built With
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
                Privacy & Security
              </span>
            </h2>

            <p className="mt-8 text-2xl leading-relaxed text-slate-500 max-w-xl">
              Our AI interview assistant is designed with privacy,
              security, and user control in mind, helping you
              prepare for coding interviews with confidence.
            </p>

            <div className="mt-12 space-y-6">
              {privacyFeatures.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <Check
                    size={24}
                    className="text-pink-500"
                  />

                  <span className="text-2xl font-medium text-[#020826]">
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
                from-pink-500
                via-orange-400
                to-amber-300
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