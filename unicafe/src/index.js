import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ value, setter, label }) => {
  const handleClick = () => setter(value + 1)
  return (
    <button onClick={() => handleClick()}>
      {label}
    </button>
  )
}

const Display = ({ value, label }) => {
  return (
    <p>
      {label} {value}
    </p>
  )
}

const Statistics = (props) => {
  return (
    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.value}
      </td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const ave = (good + bad * -1) / all
  const positive = good / all * 100

  let statistics =
    <div>
      <p>
        No feedback given
      </p>
    </div>

  if (good !== 0 || neutral !== 0 || bad !== 0) {
    statistics =
      <table>
        <Statistics text='good' value={good} />
        <Statistics text='neutral' value={neutral} />
        <Statistics text='bad' value={bad} />
        <Statistics text='all' value={all} />
        <Statistics text='ave' value={ave} />
        <Statistics text='positive' value={positive} />
      </table>
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button value={good} setter={setGood} label={'good'} />
      <Button value={neutral} setter={setNeutral} label={'neutral'} />
      <Button value={bad} setter={setBad} label={'bad'} />

      {statistics}
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
