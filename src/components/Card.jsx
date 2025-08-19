import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import PokemonType from "./PokemonType";
import PokeStats from "./PokeStats";

export default function Card() {
  const [pokeData, setPokeData] = useState();
  const [pokeId, setPokeId] = useState(25);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const playAudio = async () => {
    setIsPlaying(true);

    audioRef.current.play();
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audioElement.addEventListener("ended", handleEnded);

    return () => audioElement.removeEventListener("ended", handleEnded);
  }, [isPlaying]);

  useEffect(() => {
    const handleApiCall = async () => {
      try {
        const response = (await axiosInstance.get(`/pokemon/${pokeId}`)).data;
        setPokeData(response);
        console.log(pokeId);
        console.log(pokeData);
      } catch (error) {
        console.error(error);
      }
    };
    handleApiCall();
  }, [pokeId]);

  const handleOnClick = () => {
    let num = Math.floor(Math.random() * 1025) + 1;
    setPokeId(num);
  };

  return (
    <div className="text-white border-r-0 border-b-0 hover:scale-101 shadow-xl hover:shadow-2xl transition w-100 min-h-150 rounded-lg backdrop-blur-sm py-4 px-8">
      {pokeData && (
        <div>
          <div>
            <img
              src={pokeData.sprites.other.home.front_default}
              alt={`${pokeData.name}_img`}
            />
          </div>
          <div className="text-center capitalize font-bold text-4xl mt-4">
            {pokeData.name}{" "}
            <span className="font-normal text-3xl text-gray-200">
              #{pokeData.id}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div>{pokeData.height / 10} m</div>
              <div>Height</div>
            </div>
            <PokemonType id={pokeId} />
            <div>
              <div>{pokeData.weight / 10} kg</div>
              <div>Weight</div>
            </div>
          </div>
          <div>
            <PokeStats data={pokeData}/>
          </div>
          <div>
            <button className="border-2 cursor-pointer" onClick={handleOnClick}>
              Random
            </button>
            <button className="cursor-pointer" onClick={playAudio}>
              {isPlaying ? <Pause fill="white" /> : <Play fill="white" />}
            </button>
            <audio src={pokeData.cries.latest} ref={audioRef} />
          </div>
        </div>
      )}
    </div>
  );
}
