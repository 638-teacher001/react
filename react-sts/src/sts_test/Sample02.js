import React, { useEffect, useState } from 'react'

const Sample02 = () => {
    const [id, setId] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(
        () => {
            setId(id + 1);
        },[count]
    )

    return (
        <div>
            ID:{id}<br/>
            COUNT:{count}<br/>
            <button onClick={() => setCount(count + 1)}>ボタン</button>
        </div>
    )
}

export default Sample02
