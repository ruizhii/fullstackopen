import Course from './components/Course'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
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
      },
      {
        name: 'Fundamentals of React (Intermediate)',
        exercises: 5,
        id: 4
      },
      {
        name: 'Using props to pass data (Intermediate)',
        exercises: 3,
        id: 5
      },
      {
        name: 'State of a component (Intermediate)',
        exercises: 7,
        id: 6
      }
    ]
  }

  return <Course course={course} />
}

export default App
