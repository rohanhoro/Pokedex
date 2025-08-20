const cardBg = (bgColor, primaryColor) => {
  return `<svg
      width="152"
      height="184"
      viewBox="0 0 152 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_27_7)">
        <rect width="152" height="184" fill='${bgColor}' />
        <path
          d="M126.522 125.777C122.929 161.967 92.3965 190.23 55.2617 190.23C18.1269 190.23 -12.4066 161.967 -16 125.777H18.7119C22.0513 142.917 37.1447 155.855 55.2617 155.855C73.3787 155.855 88.4712 142.917 91.8105 125.777H126.522ZM55.2617 47C92.3968 47.0001 122.929 75.2645 126.522 111.454H91.8105C88.4715 94.3136 73.379 81.3751 55.2617 81.375C37.1445 81.3751 22.052 94.3136 18.7129 111.454H-16C-12.407 75.2645 18.1266 47.0001 55.2617 47Z"
          fill='${primaryColor}'
        />
        <circle cx="55.2616" cy="118.615" r="22.9169" fill='${primaryColor}' />
      </g>
      <defs>
        <clipPath id="clip0_27_7">
          <rect width="152" height="184" fill="white" />
        </clipPath>
      </defs>
    </svg>`;
};

// const [bgColor, primaryColor] = renderTypeColor(list);

export default function Card({ data: pokeList }) {
  console.log(pokeList);

  const renderTypeColor = (list) => {
    switch (list.data.types[0].type.name) {
      case "normal":
        return ["#acadac", "#ffffff26"]; //done
      case "fire":
        return ["#e66767", "#ffffff26"]; //done
      case "fighting":
        return ["#e79d2c", "#ffffff26"]; //done
      case "water":
        return ["#689fe7", "#ffffff26"]; //done
      case "flying":
        return ["#b4d4f1", "#ffffff26"]; //done
      case "grass":
        return ["#6ac057", "#ffffff26"]; //done
      case "poison":
        return ["#ad74d6", "#ffffff26"]; //done
      case "electric":
        return ["#dddb54", "#ffffff26"]; //done
      case "ground":
        return ["#b97b4c", "#ffffff26"]; //done
      case "psychic":
        return ["#f180a6", "#ffffff26"]; //done
      case "rock":
        return ["#afa981", "#ffffff26"]; //done
      case "ice":
        return ["#6ed4ee", "#ffffff26"]; //done
      case "bug":
        return ["#b5c064", "#ffffff26"]; //done
      case "dragon":
        return ["#7480d6", "#ffffff26"]; //done
      case "ghost":
        return ["#aa6aaa", "#ffffff26"]; //done
      case "dark":
        return ["#865569", "#ffffff26"]; //done
      case "steel":
        return ["#77b3c9", "#ffffff26"]; //done
      case "fairy":
        return ["#eb83eb", "#ffffff26"]; //done
      case "stellar":
        return ["#40b5a5", "#ffffff26"];
      default:
        return [];
    }
  };

  return (
    <>
      {pokeList.map((list, index) => {
        const [bgColor, primaryColor] = renderTypeColor(list);

        return (
          <div
            key={index}
            className="flex flex-col justify-center gap-2 h-46 w-38 rounded-lg p-4"
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
                cardBg(bgColor, primaryColor)
              )}")`,
            }}
          >
            <div className="flex justify-between">
              <div>{list.data.name}</div>
              <div className="text-gray-200">#{index + 1}</div>
            </div>
            <div>
              <img
                src={list.data.sprites.other.home.front_default}
                alt={list.data.name}
                className="w-30"
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
