// import {numero} from "./App.js"
// import {  } from '';

import { useEffect, useState } from "react";

interface Props {
    name: string,
    newAge: number,
}

const Greetings = ({name, newAge}: Props) => {

    const [age, setAge] = useState<number>(newAge)

    // console.log("hi")
    const increaseAge = (amount: number) => {
        setAge(age + amount);
    }


    return (
        <div>
            <p>Hello my name is {name}</p>
            <p>I am {age}</p>
            <button onClick={() => increaseAge(5)}>Update age</button>
        </div>
        
    )
}

export { Greetings };
