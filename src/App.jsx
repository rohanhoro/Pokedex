import "./App.css";
import bg from "./assets/pokemon_bg.jpg";
import Card from "./components/Card";

function App() {
  return (
    <div
      className="flex justify-center items-center bg-teal-950 min-h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: `URL(${bg})`,
      }}
    >
      <Card />
    </div>
  );
}

export default App;
