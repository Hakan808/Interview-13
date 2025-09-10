import React, { useEffect, useState } from "react";

function App() {
  return <CustomProgram />;
}

const half = (number) => number / 2;
const double = (number) => number * 2;
const increment = (number) => number + 1;
const decrement = (number) => number - 1;

const CustomProgram = () => {
  // KODUNUZU BURAYA EKLEYİN

  const [value, setValue] = useState("");
  const [program, setProgram] = useState([]);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    if(!value) alert("Lütfen bir değer giriniz");
    e.preventDefault();
    let num = parseFloat(value);
    if (isNaN(value)) return alert("Lütfen geçerli bir değer giriniz");

    const result = program.reduce((prev, operation) => operation.type(prev), num);
    setResult(result);
    setValue("");
    setProgram([]);
  };

  const handleProgram = (type) => {
    setProgram([...program, { id: crypto.randomUUID(), type }]);
  };
  return (
    <div className="flex justify-center items center flex-wrap gap-3 py-10  m-3 shadow  rounded-md ">
      <form
        className="flex justify-center items-start gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border-none px-3 py-1 rounded-md border-2 shadow shadow-sky-500 outline-none text-sky"
        />
        <button className="border px-3 py-1 bg-green-500 text-white rounded-md font-semibold hover:scale-95 transition duration-300">
          Çalıştır
        </button>
      </form>
      <div className="flex flex-col justify-center gap-2 flex-wrap">
        <div className="flex justify-center gap-2 flex-wrap">
          <button
            className="border border-indigo-500 px-3 py-1 bg-sky-500 border-2 rounded-md text-white font-semibold hover:scale-95 transition duration-300"
            onClick={() => handleProgram(increment)}
          >
            Arttırma
          </button>
          <button
            className="border border-indigo-500 px-3 py-1 bg-sky-500 border-2 rounded-md text-white font-semibold hover:scale-95 transition duration-300"
            onClick={() => handleProgram(decrement)}
          >
            Azaltma
          </button>
          <button
            className="border border-indigo-500 px-3 py-1 bg-sky-500 border-2 rounded-md text-white font-semibold hover:scale-95 transition duration-300"
            onClick={() => handleProgram(double)}
          >
            İki katı
          </button>
          <button
            className="border border-indigo-500 px-3 py-1 bg-sky-500 border-2 rounded-md text-white font-semibold hover:scale-95 transition duration-300"
            onClick={() => handleProgram(half)}
          >
            Yarım
          </button>
        </div>

        <div>
          <ul>
            {program.map((item) => {
              if (item.type === increment) {
                return <li>Arttır</li>;
              } else if (item.type === decrement) {
                return <li>Azalt</li>;
              } else if (item.type === half) {
                return <li>Yarım</li>;
              } else {
                return <li>İki katı</li>;
              }
            })}
          </ul>
          <div>{result ? `Sonuç :  ${result}` : null}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
