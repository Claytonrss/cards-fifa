import Card from "../components/card";
import players from "../data/fifa-players.json";

export default function Home() {
  return (
    <div className="container">
      {players.map((player) => (
        <Card
          key={player["Full Name"]}
          photo={player["Image Link"]}
          overall={player["Overall"]}
          position={player["Best Position"]}
          flag={player["National Team Image Link"]}
          name={player["Known As"]}
        />
      ))}
    </div>
  );
}
