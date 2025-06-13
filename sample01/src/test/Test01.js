import React, { useState, useEffect } from 'react'

const Test01 = () => {
    const [count, setCount] = useState(0);

    useEffect (
        () => {
            const countUp = () => {
                count % 2 === 0 && alert(count) 
            }

            countUp()
        },
        [count]
    )


    return (
        <div>
            カウント値：{count}<br/>
            <button onClick={() => setCount(count + 1)}>カウント</button>
        </div>
    )
}

export default Test01
