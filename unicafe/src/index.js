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

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    < div >
      <h1>Give feedback</h1>
      <Button value={good} setter={setGood} label={'good'} />
      <Button value={neutral} setter={setNeutral} label={'neutral'} />
      <Button value={bad} setter={setBad} label={'bad'} />

      <h1>Statistics</h1>
      <Display value={good} label={'good'} />
      <Display value={neutral} label={'neutral'} />
      <Display value={bad} label={'good'} />
    </div >
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
