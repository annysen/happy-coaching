import React from "react";
import Button from "../Button/Button";
import bookNowImg from "../../assets/resourse/bookNowCover.jpeg";

const BookNow = () => {
  return (
    <div className=" bg-cream h-auto md:h-80 px-5 mb-5 py-10 md:py-24 md:flex items-center md:space-between rounded-lg md:mx-10">
      {/* title  */}
      <div className="md:w-1/2 mb-5 md:px-36">
        <h1 className="font-bold text-primary md:text-4xl">
          Get 15-Minutes Complimentary online session.
        </h1>
        <p className="text-secondary opacity-40 py-2 md:pt-5 md:pb-8">
          Limited Period Offer. Claim Now.
        </p>
        <Button>Book Now</Button>
      </div>
      {/* cover img  */}
      <div className=" w-1/2 md:pr-0 h-full md:rounded-b-xl ">
        <img className="h-full w-full object-cover" src={bookNowImg} alt="" />
      </div>
    </div>
  );
};

export default BookNow;
