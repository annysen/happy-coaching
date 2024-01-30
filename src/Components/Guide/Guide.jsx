import guideImg from "../../assets/resourse/Frame.png";
import Button from "../Button/Button";

const Guide = () => {
  return (
    <div className="md:my-40 flex flex-col md:flex-row md:items-center md:justify-between md:gap-6 px-5 py-10 md:px-36">
      {/* guide text  */}
      <div className="md:w-1/2 pb-5 md:pb-0">
        <h1 className="font-bold text-primary text-xl md:text-5xl">
          Don’t miss out on my ‘Live life at the full potential’ free guide
        </h1>
        <h3 className="text-secondary md:text-xl md:py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
        </h3>
        <p className="text-secondary md:text-lg md:mb-5 py-3 md:py-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.{" "}
        </p>
        <Button>Get your free guide now</Button>
      </div>
      {/* guide img  */}
      <div className="md:w-1/2">
        <img src={guideImg} alt="" />
      </div>
    </div>
  );
};

export default Guide;
