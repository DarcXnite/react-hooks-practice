import './App.css'
import User from './components/User'
import Counter from './components/Counter'
import useFetch from './customHooks/useFetch'
import useAxios from './customHooks/useAxios'

function App() {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')
  const [axiosData] = useAxios('https://jsonplaceholder.typicode.com/todos')

  console.log('fetch', data)
  console.log('axios', axiosData)

  return (
    <div>
      <header>Hello World!</header>
      <User />
      <Counter />
    </div>
  )
}

export default App
