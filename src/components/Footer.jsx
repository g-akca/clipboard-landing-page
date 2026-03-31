import logo from "/images/logo.svg";
import facebookIcon from "/images/icon-facebook.svg";
import twitterIcon from "/images/icon-twitter.svg";
import instagramIcon from "/images/icon-instagram.svg";

function Footer() {
  return (
    <footer className="bg-gray-50 h-125 flex justify-center items-center">
      <div className="flex flex-col gap-8 items-center">
        <img src={logo} alt="Logo image" className="w-13.75" />

        <ul className="flex flex-col gap-6 text-center text-[20px] leading-base tracking-base text-gray-700">
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Press Kit</a></li>
          <li><a href="#">Install Guide</a></li>
        </ul>

        <div className="flex justify-center items-center gap-10">
          <img src={facebookIcon} alt="Facebook icon" className="cursor-pointer" />
          <img src={twitterIcon} alt="Twitter icon" className="cursor-pointer" />
          <img src={instagramIcon} alt="Instagram icon" className="cursor-pointer" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;