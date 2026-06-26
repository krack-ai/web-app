"use client"
import {
  Download,
  Monitor,
  Laptop,
  BookOpen,
  CheckCircle,
} from "lucide-react";


export default function DownloadPage() {
  return (
    <main className="relative overflow-hidden bg-[#0B1326]">
      {/* hero*/}
      <section className="relative py-24 overflow-hidden bg-[#0B1326]">

      {/* Background Blur Effects*/}
       <div
      className="
      absolute
      left-[15%]
      top-[100px]
      w-[512px]
      h-[468px]
      rounded-[12px]
      bg-[#3B82F6]/40
      blur-[222px]
      "
    />
      {/* Background Blur Effects */}
      <div
      className="
      absolute
      left-1/2
      top-[240px]
      -translate-x-1/2
      w-[512px]
      h-[468px]
      rounded-[12px]
      bg-[#8B5CF6]/40
      blur-[263px]
      "/>
       {/* Existing content */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
    
          <h1 className="text-5xl md:text-7xl font-extrabold ">
            <span className="text-[#3B82F6]">
            Download
            </span>{" "}
            <span className="text-[#DAE2FD]">
              Krack-AI
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-[#C3C6D3] leading-relaxed">
            Realtime AI interview assistant for coding,
            technical, and system design interviews.
            Get instant guidance, coding help, and
            smart answers directly from your desktop.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">

            <a
              href="/api/download/windows"
              download
              className="
                inline-flex
                items-center
                justify-center
                gap-4
                px-8
                py-4
                rounded-lg
                bg-[#D4E4FF]
                border border-[#43474F]
                text-[#171F33]
                font-semibold
              "
            >
              <Download size={20} className="text-[#171F33]" />
              Download for Windows
            </a>

            <a
              href="/api/download/mac"
              download
              className="
                inline-flex
                items-center
                justify-center
                gap-4
                px-8
                py-4
                rounded-lg
                bg-[#171F33]
                border border-[#43474F]
                text-[#D4E4FF]
                font-semibold
              "
            >
              <Download size={20} className="text-[#D4E4FF]" />
              Download for Mac
            </a>

          </div>
        </div>
      </section>

      {/* DOWNLOAD OPTIONS */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {/* WINDOWS */}
            <div className="bg-[#0B1225] border border-[#414751]/30 rounded-3xl p-8 shadow-sm">
              <Monitor
                size={50}
                className="text-[#40DEA3]"
              />

              <h3 className="text-3xl font-bold mt-5 text-[#DAE2FD]">
                Windows
              </h3>

              <p className="text-[#A3AED0] mt-3">
                Windows 10 & 11 Supported
              </p>

              <a
                href="/api/download/windows"
                className="
                  mt-8
                  inline-block
                  w-full
                  text-center
                  py-4
                  rounded-lg
                  bg-[#D4E4FF]
                  border border-[#43474F]
                text-[#171F33]
                  font-semibold
                "
              >
                Download .exe
              </a>
            </div>

            {/* MAC */}

            <div className="bg-[#0B1225] border border-[#414751]/30 rounded-3xl p-8 shadow-sm">
              <Laptop
                size={50}
                className="text-[#40DEA3]"
              />

              <h3 className="text-3xl font-bold mt-5 text-[#DAE2FD]">
                macOS
              </h3>

              <p className="text-[#A3AED0] mt-3">
                Intel & Apple Silicon
              </p>

              <a
                href="/api/download/mac"
                download
                className="
                  mt-8
                  inline-block
                  w-full
                  text-center
                  py-4
                  rounded-lg
                  bg-[#171F33]
                  border border-[#43474F]
                  text-[#D4E4FF]
                  font-semibold
                "
              >
                Download .dmg
              </a>
            </div>

            {/* MANUAL */}

            <div className="bg-[#0B1225] border border-[#414751]/30 rounded-3xl p-8 shadow-sm">
              <BookOpen
                size={50}
                className="text-[#40DEA3]"
              />

              <h3 className="text-3xl font-bold mt-5 text-[#DAE2FD]">
                User Manual
              </h3>

              <p className="text-[#A3AED0] mt-3">
                Installation & Usage Guide
              </p>

              <a
                href="https://github.com/JonathanRaju/overlay-ai/releases/download/v1.0.0/Krack-AI.Manual.pdf"
                className="
                  mt-8
                  inline-block
                  w-full
                  text-center
                  py-4
                  rounded-full
                  bg-[#A4CDFF]
                  text-[#0B1225]
                  font-semibold
                  hover:bg-[#A4CDFF]/90
                  transition
                "
              >
                Download PDF
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="py-24 bg-[#0B1225]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16 text-[#DAE2FD]">
            Why Krack-AI?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Realtime AI Support",
              "Coding Assistance",
              "Interview Guidance",
              "Auto Type in Any Editor",
            ].map((item) => (
              <div
                key={item}
                className="border border-[#414751]/30 rounded-3xl p-8"
              >
                <CheckCircle
                  className="text-[#40DEA3]"
                  size={32}
                />

                <h3 className="font-bold text-xl mt-4 text-[#DAE2FD]">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* INSTALLATION */}

      <section className="py-24 bg-[#0B1225]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16 text-[#DAE2FD]">
            Installation Guide
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* WINDOWS */}

            <div className="bg-[#0B1225] rounded-3xl border border-[#414751]/30 p-8">

              <h3 className="text-3xl font-bold mb-8 text-[#DAE2FD]">
                Windows
              </h3>

              <div className="space-y-4 text-[#A3AED0]">

                <p>1. Download the .exe installer.</p>

                <p>
                  2. Click "More Info" →
                  "Run Anyway" if Windows blocks it.
                </p>

                <p>
                  3. Run installer as Administrator.
                </p>

                <p>
                  4. Grant permissions if requested.
                </p>

                <p>
                  5. Launch Krack-AI.
                </p>

              </div>

            </div>

            {/* MAC */}

            <div className="bg-[#0B1225] rounded-3xl border border-[#414751]/30 p-8">

              <h3 className="text-3xl font-bold mb-8 text-[#DAE2FD]">
                macOS
              </h3>

              <div className="space-y-4 text-[#A3AED0]">

                <p>1. Download the .dmg file.</p>

                <p>2. Move app to Applications.</p>

                <p>
                  3. Open Terminal and run:
                </p>

                <div className="bg-[#131b2e] text-[#40DEA3] p-4 rounded-xl font-mono">
                  xattr -cr
                  {" "}
                  /Applications/Krack-AI.app
                </div>

                <p>
                  4. Launch the application.
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24 bg-[#0B1225]">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-[#DAE2FD]">
            Ready to Crack Your Interview?
          </h2>

          <p className="mt-6 text-xl text-[#A3AED0]">
            Download Krack-AI and get realtime AI
            assistance during technical interviews.
          </p>

          <a
            href="/api/download/windows"
            download
            className="
              mt-10
              inline-flex
              items-center
              justify-center
              gap-3
              px-8
              py-4
              rounded-full
              text-[#0B1225]
              font-bold
              bg-gradient-to-r
              from-[#3882F6]
              to-[#40DEA3]
            "
          >
            <Download size={20} className="text-[#0B1225]" />
            Download for Windows
          </a>

        </div>
      </section>
      

    </main>
  );
}