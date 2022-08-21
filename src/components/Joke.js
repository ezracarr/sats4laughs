import React, { useEffect, useState } from "react"
import axios from 'axios'
const Joke = (props) => {
    console.log(props)
    const [paid, setPaid] = useState(false)
    const payForJoke = () => {
        console.log('here')
        setPaid(true)
        // axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
        //         setPaid(true)
        // })
    }
    // if (props.isLoading) {
    //     return <div>Loading..</div>
    // }
    if (paid) {
        return (
            <div onClick={payForJoke}>
                {props.jokeData.delivery}
            </div>
        )
    }
    return (
        <div onClick={payForJoke}>
            {props.jokeData.setup}
        </div>
    )
}

export default Joke