import React, {useState} from "react";
import "./App.css";
import NumberForm from "./components/NumberForm.js";
import NumberList from "./components/NumberList.js";
import axios from "axios";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [bar_length, setBar_length] = useState();
  const [trim, setTrim] = useState();
  const [kerf, setKerf] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let newNumbers = numbers.map(obj => {
      return {
        id: obj.id,
        length_part: parseInt(obj.length_part),
        number_part: parseInt(obj.number_part)
      };
    });

    var data = JSON.stringify({
      "settings": {
        "kerf": kerf,
        "trim": {
          "left": trim / 2,
          "right": trim / 2
        },
        "bar_length": bar_length
      },
      "parts": newNumbers 
    });

    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/optimizations',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const addNumber = (number) => {
    console.log("Added");
    setNumbers([number, ...numbers]);
  };

  const removeNumber = (id) => {
    setNumbers(numbers.filter((number) => number.id !== id));
  };

  return (
    <div className="flex justify-center -mx-3 bg-no-repeat h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 px-3 mb-6 md:mb-0 h-screen bg-no-repeat"
      >
        <label
          className="flex items-center justify-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Bar Length
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="number"
          placeholder="100cm"
          onChange={(e) => {
            setBar_length(e.target.value);
          }}
        />

        <label
          className="flex items-center justify-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Trim
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="number"
          placeholder="100cm"
          onChange={(e) => {
            setTrim(e.target.value);
          }}
        />

        <label
          className="flex items-center justify-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Kerf
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="number"
          placeholder="100cm"
          onChange={(e) => {
            setKerf(e.target.value);
          }}
        />
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>
        <label
          className="flex items-center justify-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Piecies
        </label>
        <div>
        <NumberForm addNumber={addNumber}></NumberForm>
        <NumberList numbers={numbers} removeNumber={removeNumber}></NumberList>
        </div>
      </div>
    </div>
  );
}

export default App;
