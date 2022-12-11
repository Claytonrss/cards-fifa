import Card from '../components/card'
import Modal from '../components/modal'
import players from '../data/fifa-players-test.json'

export default function Home() {
  return (
    <>
      <Modal />
      <div className="container">
        {players.map((player, index) => (
          <Card
            key={index}
            photo={player['Image Link']}
            overall={player['Overall']}
            position={player['Best Position']}
            flag={player['National Team Image Link']}
            name={player['Known As']}
            age={player['Age']}
            height={player['Height(in cm)']}
            weight={player['Weight(in kg)']}
            team={player['Club Name']}
            PAC={player['Pace Total']}
            DEF={player['Defending Total']}
            DRI={player['Dribbling Total']}
            PAS={player['Passing Total']}
            PHY={player['Physicality Total']}
            SHO={player['Shooting Total']}
            VIS={player['Vision']}
          />
        ))}
      </div>
    </>
  )
}
