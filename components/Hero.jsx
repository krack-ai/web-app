"use client"
const Hero = () => {
  return (
  <section className="relative overflow-hidden max-w-7xl mx-auto px-6 bg-[#0B1225]">
    {/* Background Glow*/}
    <div
  className="
  absolute
  top-[-117px]
  left-[-128px]
  w-[512px]
  h-[468px]
  rounded-xl
  bg-[#3B82F6]
  blur-[222px]
  opacity-20
"
/>
<div
  className="
  absolute
  right-[-128px]
  bottom-[120px]
  w-[512px]
  h-[468px]
  rounded-xl
  bg-[#8B5CF6]
  blur-[222px]
  opacity-20
"
/>
    <div className="relative z-10  flex flex-col items-center justify-center text-center py-14"> 

      {/* Badge */}
      <div
        className="
    inline-flex
    items-center
    gap-2
    px-6
    py-3
    border
    border-[#414751]
    rounded-full
    bg-[#121C33]
    shadow-sm
    mb-10
  "
      >
        <span className="text-[#40DEA3] text-lg">✦</span>
        <span className="font-medium text-[#DAE2FD]">
          Full Coding Interview Support
        </span>
      </div>

      {/* Heading */}
      <h1
        className="
    max-w-5xl
    text-6xl
    md:text-8xl
    font-extrabold
    leading-none
    tracking-tight
  "
      >
        <span className="text-[#DAE2FD]">Your Real-Time AI</span>
        <br/>
        <span className="text-[#A4CDFF] whitespace-nowrap"><span className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#40DEA3] bg-clip-text text-transparent"> Interview Assistant</span></span>
          
      
        
          

       

        {/* <span className="text-[#020826]">
          With AI Support
        </span> */}
      </h1>

      {/* Description */}
      <p
        className="
    max-w-3xl
    mt-10
    text-2xl
    text-[#C1C7D3]
    leading-relaxed
  "
      >
        Automatically get an answer to every interview question with advanced
        AI.An interview copilot that's real-time and completely private.

      </p>

      {/* CTA */}
      <div className="flex flex-col md:flex-row gap-5 mt-12">
        <button
          className="
            px-14
            py-5
            rounded-full
            text-xl
            font-semibold
            text-[#0B1225]
    bg-[#40DEA3]
            hover:scale-105
            transition"
        >
          Try For Free
        </button>

        <button
          className="
        px-14
        py-5
        rounded-full
        border
        border-gray-200
        bg-transparent
        text-xl
        font-semibold
        text-[#C1C7D3]
      "
        >
          No Credit Card Required
        </button>
      </div>

      {/* Users */}
      <div
        id="reviews"
        className="flex items-center gap-5 mt-16 flex-wrap justify-center"
      >
        <div className="flex -space-x-3">
          <div className="w-12 h-12 rounded-full bg-[#3B82F6] border-4 border-[#0B1225]" />
          <div className="w-12 h-12 rounded-full bg-[#6366F1] border-4 border-[#0B1225]" />
          <div className="w-12 h-12 rounded-full bg-[#A4CDFF] border-4 border-[#0B1225]" />
          <div className="w-12 h-12 rounded-full bg-[#40DEA3] border-4 border-[#0B1225]" />
        </div>
        <p className="text-[#C1C7D3] text-xl">
        <span className="font-bold text-[#C1C7D3]">
         1,534,135+
        </span>{" "}
         users •{" "}
        <span className="font-bold text-[#40DEA3]">
        4.86 ⭐
       </span>{" "}
       from{" "}
       <span className=" text-[#C1C7D3]">
       340,066+ reviews
      </span>
      </p>
        
      </div>
    </div>
  </section>)

}

export default Hero