import React, { useRef, useState } from "react";

const Demmo2 = () => {
  const [y, setY] = useState(0);
  let x = 10;
  const ref = useRef(0);
  //{current:0}
  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            setY(y + 1);
            console.log(x);
          }}
        >
          Increase y
        </button>
        <span className="font-bold text-xl">State = {y}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">ref = {ref.current}</span>
      </div>
    </div>
  );
};

export default Demmo2;
