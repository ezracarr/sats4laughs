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
        <div >
          {jokes.length > 0 && (
            <div className="cards">
              {jokes.map((joke, index) => (
                    <Joke key={index} jokeData={joke}/>
              ))}
            </div>
          )}
        </div>
      )
}

export default JokeDashbaord