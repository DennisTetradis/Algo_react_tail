import React from "react";

function Number({ number, removeNumber }) {
  const handleRemoveNumber = () => {
    removeNumber(number.id);
  };

  return (
    <div>
      <div className="space" key={number.id}>
        <div className="flex items-end">  
          <span className="m-4">{number.length_part}</span>
          <span className="m-4">{number.number_part}</span>
          <button className="text-red-600 m-4" onClick={handleRemoveNumber}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default Number;
