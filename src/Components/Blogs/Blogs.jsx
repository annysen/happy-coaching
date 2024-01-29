import img1 from "../../assets/resourse/blogs/1.jpeg";
import img2 from "../../assets/resourse/blogs/2.jpeg";
import img3 from "../../assets/resourse/blogs/3.jpeg";
import Button from "../Button/Button";
const Blogs = () => {
  return (
    <div className="px-5 py-10 md:px-36 md:py-24">
      {/* blogs title section  */}
      <div className=" text-center md:flex md:flex-col text-primary text-xl mb-2 md:text-5xl font-bold">
        <span>Stay Motivated, read the</span>
        <span>weekly blog articles.</span>
      </div>
      {/* blog card  */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7  md:mt-16">
        {/* card 1 */}
        <div className="border mt-7">
          <img className="w-full h-40" src={img1} alt="" />
          <div className="py-3 md:py-6 px-7 flex flex-col justify-center">
            <h1 className="font-bold text-primary">
              Balancing your love and work life.
            </h1>
            <p className="text-secondary pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="border mt-7">
          <img className="w-full h-40" src={img2} alt="" />
          <div className="py-3 md:py-6 px-7 flex flex-col justify-center">
            <h1 className="font-bold text-primary">
              Balancing your love and work life.
            </h1>
            <p className="text-secondary pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="border mt-7">
          <img className="w-full h-40" src={img3} alt="" />
          <div className="py-3 md:py-6 px-7 flex flex-col justify-center">
            <h1 className="font-bold text-primary">
              Balancing your love and work life.
            </h1>
            <p className="text-secondary pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
        </div>
      </div>
      {/* btn section  */}
      <div className="mt-5 md:mt-14 text-center">
        <Button>Read more blogs</Button>
      </div>
    </div>
  );
};

export default Blogs;
