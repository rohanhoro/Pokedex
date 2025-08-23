import HeroCard from "./HeroCard";
import PokeDexButtons from "./PokeDexButtons";

export default function PokemonDetailedCard() {
  return (
    <div className="flex flex-col gap-1">
      <PokeDexButtons />
      <HeroCard />
    </div>
  );
}
