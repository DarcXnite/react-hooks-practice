import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch(url) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {
    const controller = new AbortController()

    const getData = async url => {
      try {
        const res = await axios.get(url)
        setData(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    getData(url)

    return () => {
      controller.abort()
    }
  }, [url])

  return [data]
}
