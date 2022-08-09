const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = ({ parts }) => {
  const total = parts.reduce((total, part) => total + part.exercises, 0)
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
      <p>Number of exercises {total}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}

const Course = ({ course }) => {
  return(
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack aplication development',
    parts:  [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
