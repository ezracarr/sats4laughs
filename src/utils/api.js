import axios from "axios"
import { useEffect, useState } from "react"

const useApi = url => {
 const [jokes, setJokes] = useState([])
 const [error, setError] = useState("")
 const [isLoading, setIsLoading] = useState(false)
 useEffect(() => {
    setIsLoading(true)
    axios
      .get(url)
      .then(response => {
        setJokes(response.data.jokes)
        setIsLoading(false)
      })
      .catch(error => {
        setError("Sorry, something went wrong")
        setIsLoading(false)
      })
  }, [url])

  return { jokes, error, isLoading }
}

export default useApi