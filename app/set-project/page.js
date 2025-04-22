'use client'

import { useState } from 'react'

export default function NameSet() {
    const [count, setcount] = useState(0)
    console.log(count);

    return (
        <>
            <h1>Set State</h1>
            <button onClick={() => setcount(count + 1)}>+1</button>


            <p>{count}</p>
        </>
    )

}