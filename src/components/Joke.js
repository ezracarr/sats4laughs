import React, { useEffect, useState } from "react"
import CardFlip from 'react-card-flip'


const Joke = (props) => {
    const [paid, setPaid] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false);
    const flipBack = () => {
      setIsFlipped(true);
      props.confetti(true)
    };
    const flipFront = () => {
      setIsFlipped(false);
      props.confetti(false)
    };
    const payForJoke = () => {
      window.Mash.hasAccess("c9acc1c1-8d0e-45e1-9628-202b5ef1f893").then(granted => {
        if (granted) {
          setPaid(true)
          flipBack()
          return
        }
      })
    }


    return (
        <CardFlip
          isFlipped={isFlipped}
          flipDirection="vertical"
          flipSpeedBackToFront={0.5}
        >
          <div className="card card-front" onClick={payForJoke}>
            {props.jokeData.setup}
          </div>
          
          <div className="card card-back" onClick={flipFront}>
            {props.jokeData.delivery}
          </div>
        </CardFlip>
    );
}

export default Joke