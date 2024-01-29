const Button = (props) => {
  return (
    <div>
      <button className="py-2.5 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded ">
        {props.children}
      </button>
    </div>
  );
};

export default Button;
