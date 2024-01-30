import logo from "../../assets/resourse/logo/Logo.png";
import Button from "../Button/Button";
import FooterDown from "./FooterDown";

const Footer = () => {
  return (
    <div className="md:mt-24 ">
      {/* footer title  */}
      <div className="md:h-44 p-5 bg-cream flex md:flex-row flex-col md:justify-around md:items-center">
        <div className="pb-5">
          <h1 className="font-bold text-primary text-3xl pb-4">
            Get notified when I publish new articles
          </h1>
          <p className="text-secondary">
            Stay up to date with the latest news, announcements, and articles.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-4">
          <input
            type="text"
            placeholder="Enter your email"
            className=" input input-bordered w-full max-w-xs"
          />
          <span className="pt-5 md:pt-0">
            <Button>Subscribe</Button>
          </span>
        </div>
      </div>
      {/* footer down */}
      <FooterDown />

      <div className="flex flex-col md:flex-row justify-between  px-5 md:px-36">
        <div className="flex">
          <h1 className="pr-3">made with by a</h1>
          <img className="w-36 h-7" src={logo} alt="" />
        </div>
        <div className="text-secondary opacity-50">
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a className="px-6" href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-solid fa-globe"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
