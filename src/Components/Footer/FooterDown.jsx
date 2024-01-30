import logo from "../../assets/resourse/logo/Logo.png";

const FooterDown = () => {
  return (
    <div className="p-5 md:p-0 md:mx-10 md:mt-16 flex flex-col md:flex-row md:justify-between md:mb-12 md:px-36">
      {/* logo section  */}
      <div className="md:mr-16 md:w-80 pt-5 md:pt-0">
        <a href="/">
          <img className="w-36 h-7" src={logo} alt="" />
        </a>
        <p className="text-secondary opacity-50 md:pt-8">
          Design amazing digital experiences that create more happy in the
          world.
        </p>
      </div>
      {/* pages section  */}
      <div className="md:mr-8 md:w-96 pt-5 md:pt-0">
        <h1 className="font-bold text-sm text=primary md:mb-4">Page</h1>

        <div className="flex flex-col">
          <a href="/home" className="text-secondary opacity-50 text-sm md:mb-3">
            Home
          </a>
          <a
            href="/services"
            className="text-secondary opacity-50 text-sm md:mb-3"
          >
            Services
          </a>
          <a
            href="/about"
            className="text-secondary opacity-50 text-sm md:mb-3"
          >
            About Us
          </a>
          <a
            href="/sales"
            className="text-secondary opacity-50 text-sm md:mb-3"
          >
            Extra Sales/Landingpage
          </a>
          <a
            href="/guide"
            className="text-secondary opacity-50 text-sm md:mb-3"
          >
            Free guide
          </a>
        </div>
      </div>
      {/* Contact */}
      <div className="pt-5 md:pt-0">
        <h1 className="font-bold text-sm text=primary md:mb-4">Contact</h1>
        <p className="text-secondary opacity-50 text-sm md:mb-3">
          +123 456 789
        </p>
        <p className="text-secondary opacity-50 text-sm md:mb-3">
          hello@happydigital.nl
        </p>
        <p className="text-secondary opacity-50 text-sm md:mb-3">Instagram</p>
        <p className="text-secondary opacity-50 text-sm md:mb-3">LinkedIn</p>
      </div>
    </div>
  );
};

export default FooterDown;
