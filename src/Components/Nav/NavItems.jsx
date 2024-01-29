import Button from "../Button/Button";

const NavItems = () => {
  return (
    <>
      <ul className="md:flex md:items-center mb-5 gap-7 text-base text-gray-700">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/service">Service</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/extra">Extra Salespage</a>
        </li>
        <li>
          <a href="/guide">
            <Button>Get your free guide now</Button>
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavItems;
