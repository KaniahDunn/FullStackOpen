import { useState } from 'react'


const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name} and age is {props.age}</p>
    </div>
  )
}

const App = () => {
  const name =  "Junior"
  const age = 35
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name="Kaniah" age={age}/>
      <Hello name="Ronald" age={22 + age}/>
      <Hello name={name} age={age - 20 }/>
    </div>
  )
}

export default App