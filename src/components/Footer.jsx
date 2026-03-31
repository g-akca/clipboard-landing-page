import logo from "/images/logo.svg";

import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";
import InstagramIcon from "./icons/InstagramIcon";

function Footer() {
  return (
    <footer className="bg-gray-50 h-125 flex justify-center items-center">
      <div className="flex flex-col gap-8 items-center">
        <img src={logo} alt="Logo image" className="w-13.75" />

        <ul className="flex flex-col gap-6 text-center text-[20px] leading-base tracking-base text-gray-700">
          <li><a href="#" className="hover:text-green-500 transition-all">FAQs</a></li>
          <li><a href="#" className="hover:text-green-500 transition-all">Contact Us</a></li>
          <li><a href="#" className="hover:text-green-500 transition-all">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-green-500 transition-all">Press Kit</a></li>
          <li><a href="#" className="hover:text-green-500 transition-all">Install Guide</a></li>
        </ul>

        <div className="flex justify-center items-center gap-10">
          <FacebookIcon className="cursor-pointer transition-all text-gray-700 hover:text-green-500" />
          <TwitterIcon className="cursor-pointer transition-all text-gray-700 hover:text-green-500" />
          <InstagramIcon className="cursor-pointer transition-all text-gray-700 hover:text-green-500" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;