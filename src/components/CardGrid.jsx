import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import Card from "./Card";

export default function CardGrid() {
  const [pokeList, setPokeList] = useState([]);
  useEffect(() => {
    const getPokemonList = async () => {
      try {
        const res = (await axiosInstance.get("/pokemon?limit=20&offset=940")).data
          .results;

        const detailedPokeData = await Promise.all(
          res.map(async (data) => {
            const res = await axios.get(data.url);
            return res;
          })
        );
        setPokeList(detailedPokeData);
      } catch (error) {
        console.error(error);
      }
    };

    getPokemonList();
  }, []);

  return (
    <div className="grid grid-cols-4 mt-8 gap-2">
      <Card data={pokeList} />
    </div>
  );
}
