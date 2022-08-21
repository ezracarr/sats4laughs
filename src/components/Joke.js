import React, { useEffect, useState } from "react"
import CardFlip from 'react-card-flip'
import axios from 'axios'
const Joke = (props) => {
    console.log(props)
    const [paid, setPaid] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false);
    const flipBack = (e) => {
        setIsFlipped(true);
      };
      const flipFront = (e) => {
        setIsFlipped(false);
      };
    const payForJoke = () => {
        console.log('here')
        window.Mash.hasAccess("c9acc1c1-8d0e-45e1-9628-202b5ef1f893").then(granted => {
            if (granted) {
              setPaid(true)
              flipBack()
              return
            }
          })
        // window.Mash.hasAccess("c9acc1c1-8d0e-45e1-9628-202b5ef1f893")
        // axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
        //         setPaid(true)
        // })
    }
    // if (props.isLoading) {
    //     return <div>Loading..</div>
    // }


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

    // if (paid) {
    //     return (
    //         <div styles={} onClick={payForJoke}>
    //             {props.jokeData.delivery}
    //         </div>
    //     )
    // }
    // return (
    //     <div styles={} onClick={payForJoke}>
    //         {props.jokeData.setup}
    //     </div>
    // )
}

export default Joke