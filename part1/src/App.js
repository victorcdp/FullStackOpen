import {useState} from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ value }) => (
  <div>
    <div>
      good {value.good}
    </div>
    <div>
      neutral {value.neutral}
    </div>
    <div>
      bad {value.bad}
    </div>
    <div>
      all {value.total}
    </div>
    <div>
      average {(value.good + value.bad * -1) / value.total}
    </div>
    <div>
      positive {(value.good / value.total) * 100} %
    </div>
  </div>
)

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
