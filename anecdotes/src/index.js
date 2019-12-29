import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const Next = (props) => {
  const length = props.anecdotes.length

  let num = getRandomInt(length)
  while (props.selected === num) {
    num = getRandomInt(length)
  }

  return (
    <button onClick={() => props.setSelected(num)}>
      next anecdote
    </button>

  )
}

const Vote = (props) => {
  const copy = [...props.points]
  const handleClick = () => {
    copy[props.selected] += 1
    props.setPoints(copy)
  }
  console.log(copy)
  return (
    <button onClick={handleClick} >vote</button>
  )

}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0))

  const max_of_array = Math.max.apply(Math, points)
  const position = points.indexOf(max_of_array)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]} <br />
      has {points[selected]} votes <br />
      <Vote points={points} selected={selected} setPoints={setPoints} />
      <Next anecdotes={anecdotes} selected={selected} setSelected={setSelected} />

      <h1>Anecdote with most votes</h1>
      {props.anecdotes[position]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
