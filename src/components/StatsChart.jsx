import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js/auto";
import { Radar } from "react-chartjs-2";
import usePokeContext from "../hooks/usePokeContext";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function StatsChart() {
  const { pokeData } = usePokeContext();

  const hpValue = pokeData.stats[0].base_stat;
  const attackValue = pokeData.stats[1].base_stat;
  const defenceValue = pokeData.stats[2].base_stat;
  const splAttack = pokeData.stats[3].base_stat;
  const splDefence = pokeData.stats[5].base_stat;
  const speedValue = pokeData.stats[5].base_stat;

  const data = {
    labels: ["Hp", "Attack", "Defence", "Speed", "Sp. Def", "Sp. Atk"],
    datasets: [
      {
        label: "Pokemon stats",
        clip: 100,
        data: [
          hpValue,
          attackValue,
          defenceValue,
          speedValue,
          splDefence,
          splAttack,
        ],
        fill: true,
        backgroundColor: "#5cb4e765",
        borderColor: "#5cb4e7",
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 255,
        ticks: {
          stepSize: 51,
          display: false,
        },
        pointLabels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div>
      <Radar data={data} redraw={false} options={options} />
    </div>
  );
}
