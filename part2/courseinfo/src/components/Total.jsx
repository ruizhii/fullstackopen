const Total = (props) => {
  return (
    <p>
      <strong>
        Total of
        {props.parts.reduce((sum, current) => 
          sum + current.exercises, 0)}
        exercises
      </strong>
    </p>
  )
}

export default Total
