import React from "react";
import Number from "./Number.js";

function NumberList({ numbers, removeNumber }) {
  return (
    <div>
      {numbers.map((number) => (
            <Number  
              key={number.id}
              number={number}
              removeNumber={removeNumber}
            ></Number>
      ))}
    </div>
  );
}

export default NumberList;
