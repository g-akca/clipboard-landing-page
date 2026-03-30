import blacklistIcon from "/images/icon-blacklist.svg";
import textIcon from "/images/icon-text.svg";
import previewIcon from "/images/icon-preview.svg";

function ToolsSection() {
  return (
    <section className="flex flex-col gap-22 text-center">
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-[28px] leading-[125%] tracking-[-0.5px] text-gray-700">Supercharge your workflow</h2>
        <p className="tracking-base">We’ve got the tools to boost your productivity.</p>
      </div>

      <div className="flex flex-col gap-16 items-center">
        <div className="flex flex-col gap-10 items-center">
          <img src={blacklistIcon} alt="Blacklist icon" />

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[24px] leading-[125%] tracking-[-0.4px] text-gray-700">Create blacklists</h3>
            <p className="tracking-base">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center">
          <img src={textIcon} alt="Text icon" />

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[24px] leading-[125%] tracking-[-0.4px] text-gray-700">Plain text snippets</h3>
            <p className="tracking-base">Remove unwanted formatting from copied text for a consistent look.</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center">
          <img src={previewIcon} alt="Preview icon" />

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[24px] leading-[125%] tracking-[-0.4px] text-gray-700">Sneak preview</h3>
            <p className="tracking-base">Quick preview of all snippets on your Clipboard for easy access.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ToolsSection;