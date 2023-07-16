import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
import React from "react";

const Result = ({ data }) => {
  const playAudio = () => {
    const audio = new Audio(data[0].phonetics[0].audio);
    audio.play();
  };

  return (
    <div className="mt-10  grid gap-y-5">
      <div className="flex justify-between text-center">
        <h3 className="text-2xl font-semibold text-black capitalize">
          {data[0].word}
        </h3>
        {/* <audio src={data[0].phonetics[0].audio} controls /> */}
        <button onClick={playAudio}>
          {" "}
          <SpeakerWaveIcon className="w-5 h-5 md:w-8 md:h-8 text-purple-500" />
        </button>
      </div>
      <div className="flex gap-5 text-gray-500 text-sm">
        <p> {data[0].meanings[0].partOfSpeech} </p>
        <p>{data[0].phonetic}</p>
      </div>

      <div className="mt-5 flex flex-col gap-y-3">
        <p className="text-base text-gray-500">
          {data[0].meanings[0].definitions[0].definition}
        </p>
        <p className="text-gray-500 font-serif border-l-4 border-purple-500 pl-5 mt-5">
          {data[0].meanings[0].definitions[0].example || " "}
        </p>
      </div>
    </div>
  );
};

export default Result;
