import Button from "./Button";

import logo from "/images/logo.svg";

function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-16 tablet:gap-14 max-w-182.5">
      <img src={logo} alt="Logo image" className="w-31.25" />

      <div className="flex flex-col gap-14 tablet:gap-12">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-semibold text-[32px] tablet:text-[40px] desktop:text-[46px] leading-[125%] tracking-[-0.5px] tablet:tracking-[-0.75px] text-gray-700">A history of everything you copy</h1>
          <p className="tracking-base">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
        </div>

        <div className="flex flex-col gap-6 justify-center items-center tablet:flex-row tablet:gap-4">
          <Button className="bg-green-500 hover:bg-green-300">
            Download for iOS
          </Button>

          <Button className="bg-blue-500 hover:bg-blue-400">
            Download for Mac
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;