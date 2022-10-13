import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const handleClick = amt => {
    setCount(prevState => {
      return prevState + amt
    })
    setCount(prevState => {
      return prevState + amt
    })
    setCount(prevState => {
      return prevState + amt
    })
  }
  return (
    <>
      <button onClick={() => handleClick(-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => handleClick(1)}>+</button>
    </>
  )
}
