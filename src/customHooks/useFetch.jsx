import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState()

  useEffect(() => {
    const controller = new AbortController()
    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))

    return () => {
      controller.abort()
    }
  }, [url])

  return [data]
}
