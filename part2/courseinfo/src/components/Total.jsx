const Total = (props) => {
  return (
    <p>Number of exercises {props.parts.reduce((sum, current) => sum + current.exercises, 0)}</p>
  )
}

export default Total
