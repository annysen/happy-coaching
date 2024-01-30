import Button from "../Button/Button";

const NavItems = () => {
  return (
    <>
      <ul className="md:flex md:items-center mb-5 gap-7 text-base text-gray-700">
        <li>
          <a className="hover:text-teal-500 " href="/home">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-teal-500 " href="/service">
            Service
          </a>
        </li>
        <li>
          <a className="hover:text-teal-500 " href="/about">
            About Us
          </a>
        </li>
        <li>
          <a className="hover:text-teal-500  " href="/extra">
            Extra Salespage
          </a>
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
