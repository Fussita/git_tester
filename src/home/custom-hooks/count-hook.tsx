import { useState } from "react"

export const CountHook  = () => {

    const [count, setCount] = useState(5)

    return {
        count, setCount
    }
}