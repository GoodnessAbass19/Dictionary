import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Result from "./Result";

function App() {
  const [data, setData] = useState(null);
  const [word, setWord] = useState("");
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(data);
      setData(data);
      setError(false);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  const handleSearch = () => {
    fetchData();
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
      <div className="bg-white w-[90vmin] rounded-xl shadow-xl px-10 mx-auto md:py-24 py-16">
        <div className="flex justify-between w-full items-center">
          <input
            type="text"
            placeholder="Search word here"
            onChange={(e) => setWord(e.target.value)}
            className="p-1.5 w-3/4 text-base outline-none border-b-4 border-purple-500"
          />
          <button
            onClick={handleSearch}
            className="p-2 md:w-24 flex flex-col justify-center items-center rounded-md bg-purple-500 border-none outline-none text-white"
          >
            <MagnifyingGlassIcon className="w-8 h-8 text-white" />
          </button>
        </div>
        {error ? (
          <div className="flex justify-center mt-4">
            <h3 class="text-center text-red-500 text-base">
              {" "}
              Couldn't Find The Word{" "}
            </h3>
          </div>
        ) : (
          data && <Result data={data} />
        )}
      </div>
    </div>
  );
}

export default App;
