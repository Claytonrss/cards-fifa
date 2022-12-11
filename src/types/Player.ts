// export interface Player {
//   'Known As': string
//   'Full Name': string
//   Overall: number
//   Potential: number
//   'Value(in Euro)': number
//   'Positions Played': string
//   'Best Position': string
//   Nationality: string
//   'Image Link': string
//   Age: number
//   'Height(in cm)': number
//   'Weight(in kg)': number
//   TotalStats: number
//   BaseStats: number
//   'Club Name': string
//   'Wage(in Euro)': number
//   'Release Clause': number
//   'Club Position': string
//   'Contract Until': number
//   'Club Jersey Number': number
//   'Joined On': number
//   'On Loan': string
//   'Preferred Foot': string
//   'Weak Foot Rating': number
//   'Skill Moves': number
//   'International Reputation': number
//   'National Team Name': string
//   'National Team Image Link': string
//   'National Team Position': string
//   'National Team Jersey Number': number
//   'Attacking Work Rate': string
//   'Defensive Work Rate': string
//   'Pace Total': number
//   'Shooting Total': number
//   'Passing Total': number
//   'Dribbling Total': number
//   'Defending Total': number
//   'Physicality Total': number
//   Crossing: number
//   Finishing: number
//   'Heading Accuracy': number
//   'Short Passing': number
//   Volleys: number
//   Dribbling: number
//   Curve: number
//   'Freekick Accuracy': number
//   LongPassing: number
//   BallControl: number
//   Acceleration: number
//   'Sprint Speed': number
//   Agility: number
//   Reactions: number
//   Balance: number
//   'Shot Power': number
//   Jumping: number
//   Stamina: number
//   Strength: number
//   'Long Shots': number
//   Aggression: number
//   Interceptions: number
//   Positioning: number
//   Vision: number
//   Penalties: number
//   Composure: number
//   Marking: number
//   'Standing Tackle': number
//   'Sliding Tackle': number
//   'Goalkeeper Diving': number
//   'Goalkeeper Handling': number
//   GoalkeeperKicking: number
//   'Goalkeeper Positioning': number
//   'Goalkeeper Reflexes': number
//   'ST Rating': number
//   'LW Rating': number
//   'LF Rating': number
//   'CF Rating': number
//   'RF Rating': number
//   'RW Rating': number
//   'CAM Rating': number
//   'LM Rating': number
//   'CM Rating': number
//   'RM Rating': number
//   'LWB Rating': number
//   'CDM Rating': number
//   'RWB Rating': number
//   'LB Rating': number
//   'CB Rating': number
//   'RB Rating': number
//   'GK Rating': number
// }

export interface Player {
  photo: string
  overall: number
  position: string
  flag: string
  name: string
  PAC: number
  SHO: number
  PAS: number
  DRI: number
  DEF: number
  PHY: number
  VIS: number
  age: number
  weight: number
  height: number
  team: string
}
