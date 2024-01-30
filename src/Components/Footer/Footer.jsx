import React from "react";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className="md:mt-24">
      {/* footer title  */}
      <div className="md:h-44 bg-cream">
        <div className="flex justify-around items-center">
          <div>
            <h1>Get notified when I publish new articles</h1>
            <p>
              Stay up to date with the latest news, announcements, and articles.
            </p>
          </div>
          <div className="flex md:gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
