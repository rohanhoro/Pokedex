import HeroCard from "./HeroCard";
import PokeDexButtons from "./PokeDexButtons";

export default function PokemonDetailedCard() {
  return (
    <div className="flex flex-col gap-1 m-4">
      <PokeDexButtons />
      <HeroCard />
    </div>
  );
}
