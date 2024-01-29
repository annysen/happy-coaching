const NavItems = () => {
  return (
    <>
      <ul className="md:flex md:items-center gap-7 text-base text-gray-700">
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
            <button className="py-2.5 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded ">
              Get your free guide now
            </button>
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavItems;
