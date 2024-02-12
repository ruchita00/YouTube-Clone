import React from "react";

const Button = ({ buttonName }) => {
  return (
    <div className="flex">
      <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg">
        {buttonName.value}
      </button>
    </div>
  );
};

export default Button;
