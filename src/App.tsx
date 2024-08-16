import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(count)
  return (
    <>
      <h1>Count App</h1>

      <CountPreview hoge={count} />
      <button onClick={function(){
        setCount(count + 1)
      }}>+</button>

      <button onClick={function(){
        if( count === 0 ){
          return
        }
        setCount(count - 1)
        console.log(count)
      }}>-</button>
    </>
  )
}

const CountPreview = function ({hoge}:{hoge:number}) {
  return <div>count:{hoge}</div>
}

export default App