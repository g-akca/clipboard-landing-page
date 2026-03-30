import devicesImg from "/images/image-devices.png";

function AccessSection() {
  return (
    <section className="flex flex-col gap-18 text-center">
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-[28px] leading-[125%] tracking-[-0.5px] text-gray-700">Access Clipboard Anywhere</h2>
        <p className="tracking-base">Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
      </div>
      
      <img src={devicesImg} alt="Image of a tablet and phone" />
    </section>
  )
}

export default AccessSection;