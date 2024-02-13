import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log("Rendering............");
  //heavy operations to

  const prime = useMemo(() => findPrime(text), [text]);
  //   const prime = find(text);
  //useMemo is used for memorioing the heavy operation
  // useMemo let you cache the result of calculation between the re-renders
  return (
    <div
      className={
        "m-4 p-2 w-96 h-9 border border-black" +
        (isDarkTheme && "bg-gray-900 text-white ")
      }
    >
      {" "}
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4">nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
