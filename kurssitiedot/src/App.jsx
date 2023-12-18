const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
       <Part name={props.osat[0].name} count={props.osat[0].exercises} />
       <Part name={props.osat[1].name} count={props.osat[1].exercises} />
       <Part name={props.osat[2].name} count={props.osat[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
  <div>
      <p>{props.name} {props.count}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.osat[0].exercises + props.osat[1].exercises + props.osat[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content osat={course.parts} />
      <Total osat={course.parts} />
    </div>
  )
}

export default App
