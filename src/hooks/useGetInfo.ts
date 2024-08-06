import { useEffect, useState } from 'react'

function getinfo(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Date.now().toString())
    }, 1500)
  })
}

const useGetInfo = () => {
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState('')
  useEffect(() => {
    getinfo().then(info => {
      setLoading(false)
      setInfo(info)
    })
  }, [])
  return {
    loading,
    info,
  }
}
export default useGetInfo
