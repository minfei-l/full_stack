const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
    <Header course={course} />
    <Content 
      part1 = {part1} 
      exercises1 = {exercises1} 
      part2 = {part2} 
      exercises2 = {exercises2} 
      part3 = {part3} 
      exercises3 = {exercises3} 
      course = {course}/>
    <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        This course is {props.course}.
      </p>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <p>
        The {props.part1} of {props.course} is {props.exercises1}. <br/>
        The {props.part2} of {props.course} is {props.exercises2}. <br/>
        The {props.part3} of {props.course} is {props.exercises3}. 
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        The {props.part1} of {props.course} is {props.exercises1}. <br/>
        The {props.part2} of {props.course} is {props.exercises2}. <br/>
        The {props.part3} of {props.course} is {props.exercises3}. 
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
    <p>
      Total is {props.exercises1} plus {props.exercises2} plus {props.exercises3} which is {props.exercises1 + props.exercises2 + props.exercises3}.

    </p>
  </div>
  )
}

export default App