import {useState} from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <div>{text} {value}</div>
)

const Statistics = ({ value }) => {
  if (value.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value={value.good} />
      <StatisticLine text="neutral" value={value.neutral} />
      <StatisticLine text="bad" value={value.bad} />
      <StatisticLine text="all" value={value.total} />
      <StatisticLine text="average" value={(value.good + value.bad * -1) / value.total} />
      <StatisticLine text="positive" value={(value.good / value.total) * 100 + " %"} />
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0, total: 0
  })

  const handleGoodClick = () => 
    setClicks({ ...clicks, good: clicks.good + 1, total: clicks.total + 1})

  const handleNeutralClick = () => 
    setClicks({ ...clicks, neutral: clicks.neutral + 1, total: clicks.total + 1})

  const handleBadClick = () => 
    setClicks({ ...clicks, bad: clicks.bad + 1, total: clicks.total + 1})

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics value={clicks} />
</div>
  )
}

export default App
