import React from "react"
import useApi from "../utils/api"
import Joke from "./Joke"

const url = "https://v2.jokeapi.dev/joke/Any?safe-mode&amount=6&type=twopart"

const JokeDashbaord = () => {
  const { jokes, error, isLoading } = useApi(url)
    console.log(jokes)
  if (isLoading) {
    return <div>Loading..</div>
  }
  if (error) {
    return <div>{error}</div>
  }
  return (
        <div className="cards">
          {jokes.length > 0 && (
            <ul>
              {jokes.map((joke, index) => (
                <li key={index}>
                    <Joke jokeData={joke}/>
                </li>
              ))}
            </ul>
          )}
        </div>
      )
}

export default JokeDashbaord