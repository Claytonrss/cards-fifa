import { OverallContainer } from './style'

type OverallType = {
  value: number
}

const Overall = ({ value }: OverallType) => {
  return (
    <OverallContainer>
      <div>
        <p>{value}</p>
      </div>
    </OverallContainer>
  )
}

export default Overall
