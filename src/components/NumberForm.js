import React, { useState } from "react";

function NumberForm({ addNumber }) {
  const [number, setNumber] = useState({
    id: 0,
    length_part: 0,
    number_part: 0,
  });

  let handleChangeL = (e) => {
    e.preventDefault();
    setNumber({...number, length_part: e.target.value });
  };

  let handleChangeN = (e) => {
    e.preventDefault();
    setNumber({...number, number_part: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (number.length_part.trim()) {
      addNumber({ ...number, id: Math.floor(Math.random() * 2000) });
    }
    // setNumber({ ...number, task: "" });
  };

  return (
    <form className="flex flex-row" onSubmit={handleSubmit}>
      <input
        onChange={handleChangeL}
        type="number"
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        placeholder="Type length here:"
        value={number.task}
      ></input>
      <input
        onChange={handleChangeN}
        type="number"
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        placeholder="Type number of parts here:"
        value={number.task}
      ></input>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 w-14 text-xs rounded h-12"
        type="submit"
      >
        Add Number
      </button>
    </form>
  );
}

export default NumberForm;
