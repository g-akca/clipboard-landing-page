import computerImg from "/images/image-computer.png";

function SnippetsSection() {
  return (
    <section className="flex flex-col gap-18 text-center items-center tablet:gap-24 desktop:gap-16">
      <div className="flex flex-col gap-4 max-w-182.5">
        <h2 className="font-semibold text-[28px] tablet:text-[36px] leading-[125%] tracking-[-0.5px] tablet:tracking-[-0.6px] text-gray-700">Keep track of your snippets</h2>
        <p className="tracking-base">Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
      </div>

      <div className="flex flex-col gap-18 items-center tablet:gap-24 desktop:flex-row desktop:text-start desktop:-translate-x-37.5">
        <img src={computerImg} alt="Computer image" />

        <div className="flex flex-col gap-14 tablet:gap-16 max-w-87.5">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-[24px] leading-[125%] tracking-[-0.4px] text-gray-700">Quick Search</h3>
            <p className="text-base leading-base tracking-base">Easily search your snippets by content, category, web address, application, and more.</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-[24px] leading-[125%] tracking-[-0.4px] text-gray-700">iCloud Sync</h3>
            <p className="text-base leading-base tracking-base">Instantly saves and syncs snippets across all your devices.</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-[24px] leading-[125%] tracking-[-0.4px] text-gray-700">Complete History</h3>
            <p className="text-base leading-base tracking-base">Retrieve any snippets from the first moment you started using the app.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SnippetsSection;