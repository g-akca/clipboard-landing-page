import googleLogo from "/images/logo-google.png";
import ibmLogo from "/images/logo-ibm.png";
import microsoftLogo from "/images/logo-microsoft.png";
import hpLogo from "/images/logo-hp.png";
import vgLogo from "/images/logo-vector-graphics.png";

function LogosSection() {
  return (
    <section className="flex flex-col items-center gap-14 tablet:flex-row tablet:flex-wrap tablet:justify-center tablet:gap-x-20">
      <img src={googleLogo} alt="Google logo" className="w-34.75" />
      <img src={ibmLogo} alt="IBM logo" className="w-30.25" />
      <img src={microsoftLogo} alt="Microsoft logo" className="w-33.75" />
      <img src={hpLogo} alt="Hewlett Packard logo" className="w-28.25" />
      <img src={vgLogo} alt="Vector Graphics logo" className="w-26.25" />
    </section>
  )
}

export default LogosSection;