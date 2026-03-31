import Button from "./Button";

function DownloadSection() {
  return (
    <section className="flex flex-col gap-14 tablet:gap-12 text-center max-w-182.5">
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-[28px] tablet:text-[36px] leading-[125%] tracking-[-0.5px] tablet:tracking-[-0.6px] text-gray-700">Clipboard for iOS and Mac OS</h2>
        <p className="tracking-base">Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</p>
      </div>

      <div className="flex flex-col gap-6 items-center tablet:flex-row tablet:gap-4 tablet:justify-center">
        <Button className="bg-green-500 hover:bg-green-300">
          Download for iOS
        </Button>

        <Button className="bg-blue-500 hover:bg-blue-400">
          Download for Mac
        </Button>
      </div>
    </section>
  )
}

export default DownloadSection;