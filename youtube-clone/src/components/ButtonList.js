import React from "react";
import Button from "./Button";

const buttonList = [
  { key: "01", value: "All" },
  { key: "02", value: "Gaming" },
  { key: "03", value: "Songs" },
  { key: "04", value: "Live" },
  { key: "05", value: "Cricket" },
  { key: "06", value: "Soccer" },
  { key: "07", value: "Valentines" },
  { key: "08", value: "Cooking" },
];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonList.map((buttonName) => (
        <Button key={buttonName.key} buttonName={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
