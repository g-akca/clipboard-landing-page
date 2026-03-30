import Button from "./Button";

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
          <Button className="bg-green-500">
            Download for iOS
          </Button>

          <Button className="bg-blue-500">
            Download for Mac
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;