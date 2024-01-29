import zigzag from "../../assets/resourse/zigzag.svg";
import icon1 from "../../assets/resourse/book.svg";
import icon2 from "../../assets/resourse/massage.svg";
import icon3 from "../../assets/resourse/people.svg";
const Intro = () => {
  return (
    <div className="px-5 md:px-36 md:py-24 ">
      <img className="md:pb-4  pt-5 pb-2 w-20" src={zigzag} alt="" />
      {/* upper intro  */}
      <div className="md:flex justify-between md:py-4">
        <h1 className="md:w-1/2 text-primary text-xl mb-2 md:text-5xl font-bold flex flex-col">
          <span>I can help you in</span>
          <span>these particular areas.</span>
        </h1>
        <span className="text-base md:w-1/2">
          <p className="pb-2 md:pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.{" "}
          </p>
        </span>
      </div>
      {/* lower intro card  */}
      <div className="md:flex  my-5 md:my-0">
        {/* card 1 */}
        <div className="md:p-10 my-5">
          <img className="md:mb-8" src={icon1} alt="" />
          <h1 className="text-primary font-bold text-2xl md:pb-4">
            1:1 Coaching
          </h1>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
        {/* card 2 */}
        <div className="md:p-10 my-5">
          <img className="md:mb-8" src={icon2} alt="" />
          <h1 className="text-primary font-bold text-2xl md:pb-4">
            Consultation
          </h1>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
        {/* card 3 */}
        <div className="md:p-10 my-5">
          <img className="md:mb-8" src={icon3} alt="" />
          <h1 className="text-primary font-bold text-2xl md:pb-4">
            Group Coaching Sessions
          </h1>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
