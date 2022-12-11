import Image from 'next/image'
import { flagExternalToLocal } from '../../../utils/transform'
import { NationalityContainer } from './style'

type NationalityType = {
  flag: string
}

const Nationality = ({ flag }: NationalityType) => {
  const { country, flagURL } = flagExternalToLocal(flag)

  return (
    <NationalityContainer>
      <h6 className="title">Nationality</h6>
      <Image
        src={flagURL}
        alt={country}
        className="photo"
        width={80}
        height={60}
        loading={'lazy'}
        placeholder={'empty'}
      />
    </NationalityContainer>
  )
}

export default Nationality
