import {
  Chart as ChartJS,
  Filler,
  LineElement,
  PointElement,
  RadialLinearScale,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler)

const RadarOptions = {
  scales: {
    r: {
      max: 100,
      min: 0,
      ticks: {
        stepSize: 20,
      },
      angleLines: {
        color: 'rgba(255, 255, 255,0.2)',
      },
      gridLine: {
        color: 'rgba(255, 255, 255,0.2)',
      },
      grid: {
        color: 'rgba(255, 255, 255,0.2)',
      },

      pointLabels: {
        color: '#c4f750',
        font: {
          size: 22,
          family: 'Oswald',
        },
      },
    },
  },
}

type ChartRadarType = {
  DEF: number
  PHY: number
  PAC: number
  SHO: number
  VIS: number
  DRI: number
  PAS: number
}

const ChartRadar = (props: ChartRadarType) => {
  const data = {
    labels: ['SHO', 'PHY', 'PAC', 'DEF', 'VIS', 'DRI', 'PAS'],
    datasets: [
      {
        data: [
          props.SHO,
          props.PHY,
          props.PAC,
          props.DEF,
          props.VIS,
          props.DRI,
          props.PAS,
        ],
        backgroundColor: 'rgba(196, 247, 80, 0.4)',
        borderColor: 'rgba(196, 247, 80, 1)',
        borderWidth: 1,
      },
    ],
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltips: {
      display: false,
    },
  }

  return <Radar className={`radar`} data={data} options={RadarOptions} />
}

export default ChartRadar
