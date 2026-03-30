import logo from "/images/logo.svg";

function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-16">
      <img src={logo} alt="Logo image" className="w-31.25" />

      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-semibold text-[32px] leading-[125%] tracking-[-0.5px] text-gray-700">A history of everything you copy</h1>
          <p className="tracking-base">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
        </div>

        <div className="flex flex-col gap-6 items-center">
          <button 
            type="button" 
            className="cursor-pointer bg-green-500 w-full max-w-100 h-14 rounded-[28px] inset-shadow-[0_-3px_rgba(0,0,0,0.15)] 
            text-white font-semibold text-[20px] leading-base tracking-[0.5px]"
          >
            Download for iOS
          </button>

          <button 
            type="button" 
            className="cursor-pointer bg-blue-500 w-full max-w-100 h-14 rounded-[28px] inset-shadow-[0_-3px_rgba(0,0,0,0.15)] 
            text-white font-semibold text-[20px] leading-base tracking-[0.5px]"
          >
            Download for Mac
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;