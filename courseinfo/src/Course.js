import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
    </p>
  )
}

const Course = ({ course }) => {
  const parts = course['parts'].map(part =>
    <Part key={course.parts.indexOf(part)} part={part} />
  )

  return (
    <div>
      <Header course={course} />
      {parts}
      <Total course={course} />
    </div>
  )
}

export default Course
