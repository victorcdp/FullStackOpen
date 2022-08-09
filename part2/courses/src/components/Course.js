const Header = (props) => {
  return (
    <div>
      <h2>{props.course.name}</h2>
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
      <p><strong>Total of {total} exercises</strong></p>
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

export default Course
