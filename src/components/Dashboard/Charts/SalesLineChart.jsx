import { Chart } from 'react-google-charts'
import { PropTypes } from 'prop-types'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../../Shared/LoadingSpinner'

const options = {
  title: 'Sales Over Time',
  curveType: 'function',
  legend: { position: 'bottom' },
  series: [{ color: '#F43F5E' }],
}
// eslint-disable-next-line react/prop-types
const SalesLineChart = ({ chartData }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return (
    <>
      {loading ? (
        <LoadingSpinner smallHeight></LoadingSpinner>
      ) : // eslint-disable-next-line react/prop-types
      chartData?.length > 1 ? (
        <Chart
          chartType="LineChart"
          width="100%"
          data={chartData}
          options={options}
        />
      ) : (
        <>
          <LoadingSpinner smallHeight></LoadingSpinner>
          <p className="text-center">
            Not enough data available for this section.
          </p>
        </>
      )}
    </>
  )
}

export default SalesLineChart

SalesLineChart.protoTypes = {
  chartData: PropTypes.array,
  length: PropTypes.number,
}
