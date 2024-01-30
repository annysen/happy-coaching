import Button from "../Button/Button";
import zigzaggreen from "../../assets/resourse/zigzag-green.svg";
import target from "../../assets/resourse/protection-target 1.svg";
import CoverPhoto from "../../assets/resourse/cover-photo.jpg";
const Cover = () => {
  return (
    <div className=" mt-5 py-5 md:py-0  md:mt-2  px-5 md:px-20 bg-cream">
      <div className=" md:static flex justify-between items-center">
        <img className="md:pt-20 md:-ml-10 pb-5" src={zigzaggreen} alt="" />

        <div className="md:absolute bottom-96 right-96 md:flex bg-white p-5 hidden ">
          <img className="h-10 pl-2" src={target} alt="" />
          <span>
            <h1 className="font-extrabold text-primary text-2xl">100%</h1>
            <p className="text-sm">Success rate this year</p>
          </span>
        </div>
      </div>

      {/* lower sectoion  */}
      <div className="md:static md:flex md:items-center md:justify-between">
        {/* cover text  */}
        <div className="mb-5">
          <p className="text-gray-800 opacity-40">
            Proven strategies backed by science for success.
          </p>
          <h1 className="text-3xl md:text-7xl text-primary font-bold flex flex-col  pt-2">
            <span>Live life at the</span> <span>full potential</span>
          </h1>
          <span className=" md:py-4 py-2 text-secondary md:flex flex-col">
            <p>
              I help people to discover their true potential and live a
              fulfilling
            </p>
            <p>life... Discover the simple 3 steps that I discovered to hack</p>
            <p>
              productivity. It just works and it is begin using backed by
              science.
            </p>
            <p>Wanna transform your life?</p>
          </span>
          <Button>Get your free guide now</Button>
        </div>
        {/* cover image  */}
        <div className="md:pr-40 md:-mb-28  overflow-hidden   md:right-0">
          <img className="md:h-96" src={CoverPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cover;
