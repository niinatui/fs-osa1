import { useState } from 'react'

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const total = props.allClicks.length

  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
  <div>
    <h1>statistics</h1>
    <table>
    <tbody>
    <StatisticLine text="good" value ={good} />
    <StatisticLine text="neutral" value ={neutral} />
    <StatisticLine text="bad" value ={bad} />
    <StatisticLine text="all" value ={total} />
    <StatisticLine text="average" value ={(good - bad)/(total)} />
    <StatisticLine text="positive" value ={(good/total)*100} />
    </tbody>
    </table>
  </div>
  )
}

const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
        <tr>
          <td>{props.text}</td>
          <td>{props.value} %</td> 
        </tr>
    )

  }

  return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  )

}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
    {text}
    </button>
    )
  }

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text= "good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  )
}

export default App
