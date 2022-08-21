import React, { useState } from "react"
import useApi from "../utils/api"
import Joke from "./Joke"
import Confetti from 'react-dom-confetti';

const confettiConfig = {
    angle: "98",
    spread: "296",
    startVelocity: 40,
    elementCount: "180",
    dragFriction: 0.12,
    duration: "1350",
    stagger: "3",
    width: "19px",
    height: "21px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

const url = "https://v2.jokeapi.dev/joke/Any?safe-mode&amount=6&type=twopart"

const JokeDashbaord = () => {
  const { jokes, error, isLoading } = useApi(url)
  const [isExploding, setIsExploding] = useState(false);
  const confetti = (e) => {
    setIsExploding(e)
    setTimeout(()=> {
        setIsExploding(false)
    }, 1000)
  };
  if (isLoading) {
    return <div className="joke-container">Loading..</div>
  }
  if (error) {
    return <div className="joke-container">{error}</div>
  }
  return (
        <div className="joke-container" >
          {jokes.length > 0 && (
            <div className="cards">
              {jokes.map((joke, index) => (
                    <Joke key={index} jokeData={joke} confetti={confetti}/>
              ))}
            </div>
          )}
          <Confetti className="confetti-explosion" active={ isExploding } config={ confettiConfig }/>
        </div>
      )
}

export default JokeDashbaord