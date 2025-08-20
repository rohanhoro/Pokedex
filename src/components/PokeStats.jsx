export default function PokeStats({ data }) {
  const stats = data.stats;
  
  const statValues = [];

  stats.map((stat) => statValues.push(stat.base_stat));
  let maxValue = Math.max(...statValues);

  const hpValue = Math.round((stats[0].base_stat / maxValue) * 100);
  const attackValue = Math.round((stats[1].base_stat / maxValue) * 100);
  const defenceValue = Math.round((stats[2].base_stat / maxValue) * 100);
  const speedValue = Math.round((stats[5].base_stat / maxValue) * 100);

  const statItems = [
    {
      id: 1,
      name: "HP",
      value: hpValue,
      barColor: "bg-[#78e27d]",
    },
    {
      id: 2,
      name: "Attack",
      value: attackValue,
      barColor: "bg-[#e95757]",
    },
    {
      id: 3,
      name: "Defence",
      value: defenceValue,
      barColor: "bg-[#f0ee7f]",
    },
    {
      id: 4,
      name: "Speed",
      value: speedValue,
      barColor: "bg-[#81c8e9]",
    },
  ];

  return (
    <div>
      {statItems.map((item, index) => (
        <div key={index} className="flex items-center justify-between ">
          <div className="w-20">{item.name}</div>
          <div className="h-2 w-full bg-white rounded-full overflow-clip">
            <div
              style={{
                width: `${item.value}%`, //for some reason tailwind class was not working
              }}
              className={`h-2 ${item.barColor} rounded-full`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
