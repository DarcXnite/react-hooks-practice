import { useRef, useState } from 'react'

export default function User() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleClick = () => {
    console.log(user)
    setUser(prev => {
      return {
        ...prev,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
    })
  }

  return (
    <>
      <input type='email' ref={emailRef} />
      <input type='password' ref={passwordRef} />
      <button type='submit' onClick={handleClick}>
        Submit
      </button>
      <p>
        {user.email} {user.password}
      </p>
    </>
  )
}
