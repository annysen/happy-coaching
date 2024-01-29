import user1 from "../../assets/resourse/clients/2.png";
import user2 from "../../assets/resourse/clients/3.png";
import user3 from "../../assets/resourse/clients/1.png";
import StarGold from "../../assets/resourse/Star.svg";
import star from "../../assets/resourse/Star.png";

const FeedBack = () => {
  return (
    <div className="px-5 py-10 md:px-36 md:py-24 bg-cream">
      <h1 className=" text-primary text-xl mb-2 md:text-5xl font-bold md:flex md:flex-col">
        <span>Hear out what my</span>
        <span> clients say about me.</span>
      </h1>
      {/* feedback card  */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 md:gap-9 md:mt-9">
        {/* card 1  */}
        <div className="bg-white p-10 my-5 md:p-12">
          <p className="text-secondary">
            "I gained so much <span className="font-bold">confidence</span> in
            my ability to connect and deepen my relationships with people. "
          </p>
          <h1 className="font-bold text-secondary my-2 md:my-4">Jane</h1>
          <img src={user2} alt="" />
          <span className="flex gap-1 mt-4">
            <img src={StarGold} alt="" />
            <img src={StarGold} alt="" />
            <img src={StarGold} alt="" />
            <img src={StarGold} alt="" />
            <img src={StarGold} alt="" />
          </span>
        </div>
        {/* card 2  */}
        <div className="bg-white p-10 my-5 md:p-12">
          <p className="text-secondary">
            "I gained so much <span className="font-bold">confidence</span> in
            my ability to connect and deepen my relationships with people."
          </p>
          <h1 className="font-bold text-secondary my-2 md:my-4">Catherine</h1>
          <img src={user1} alt="" />
          <span className="flex gap-1 mt-4">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </span>
        </div>
        {/* card 3  */}
        <div className="bg-white p-10 my-5 md:p-12">
          <p className="text-secondary">
            "I gained so much <span className="font-bold">confidence</span> in
            my ability to connect and deepen my relationships with people. "
          </p>
          <h1 className="font-bold text-secondary my-2 md:my-4">Jane</h1>
          <img src={user3} alt="" />
          <span className="flex gap-1 mt-4">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
