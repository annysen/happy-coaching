import Button from "../Button/Button";
import CoverPhoto from "../../assets/resourse/cover-photo.jpg";
const Cover = () => {
  return (
    <div className="mt-5  md:mt-2 md:flex md:items-center md:justify-between px-5 md:px-20 bg-cream">
      {/* cover text  */}
      <div className="mb-5">
        <p className="text-gray-800 opacity-40">
          Proven strategies backed by science for success.
        </p>
        <h1 className="text-3xl md:text-7xl text-primary font-bold flex flex-col  pt-2">
          <span>Live life at the</span> <span>full potential</span>
        </h1>
        <p className="py-4 text-secondary md:flex flex-col">
          <span>
            {" "}
            I help people to discover their true potential and live a fulfilling
          </span>
          <span>
            life... Discover the simple 3 steps that I discovered to hack
          </span>
          <span>
            productivity. It just works and it is begin using backed by science.
          </span>
          <span>Wanna transform your life?</span>
        </p>
        <Button>Get your free guide now</Button>
      </div>
      {/* cover image  */}
      <div className="md:pr-40 ">
        <img src={CoverPhoto} alt="" />
      </div>
    </div>
  );
};

export default Cover;
