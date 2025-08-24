import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import usePokeContext from "../hooks/usePokeContext";
import PokemonType from "./PokemonType";
import PokeStats from "./PokeStats";
import StatsChart from "./StatsChart";

export default function HeroCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { pokeData } = usePokeContext();

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

  return (
    <div className="text-black border-r-0 border-b-0 hover:shadow-2xl  hover:scale-101 transition shadow-xl w-100 min-h-150 rounded-lg backdrop-blur-sm bg-[#f2f2f2] py-4 px-8">
      {pokeData && (
        <div>
          <div>
            <img
              src={pokeData.sprites.other.home.front_default}
              alt={`${pokeData.name}_img`}
              className="drop-shadow-[0px_0px_8px_#5e5e5f]"
            />
          </div>
          <div className="flex justify-center items-end gap-4 capitalize font-bold text-4xl mt-4">
            <div>{pokeData.name} </div>
            <span className="font-normal text-3xl text-gray-500">
              #{pokeData.id}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div>{pokeData.height / 10} m</div>
              <div>Height</div>
            </div>
            <PokemonType data={pokeData} />
            <div>
              <div>{pokeData.weight / 10} kg</div>
              <div>Weight</div>
            </div>
          </div>
          <div>
            <button
              className="cursor-pointer bg-[#a0e1ff] p-2 rounded-md active:bg-[#6cd0ff]"
              onClick={playAudio}
            >
              {isPlaying ? (
                <Pause fill="white" stroke="none" />
              ) : (
                <Play fill="white" stroke="none" />
              )}
            </button>
            <audio src={pokeData.cries.latest} ref={audioRef} />
          </div>
          <div>
            {/* <PokeStats data={pokeData} /> */}
            <StatsChart />
          </div>
        </div>
      )}
    </div>
  );
}
