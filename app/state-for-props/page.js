'use client'

import Children1 from './Children1'
import Children2 from './Children2'
import ChildrenIf from './ChildrenIf'
import ChildrenTest from './ChildrenTest'
import { useState } from 'react'

export default function StateForPropsPage() {
    const [count, setCount] = useState(0)
    const setCount2 = () => setCount(count + 1)

    return (
        <>
            <h1>傳遞狀態給子組件，{count}</h1>
            <Children1 count={count} setCount={setCount2} />
            <Children2 count={count} setCount={setCount2} />
            <hr />
            <ChildrenTest>
                <p>children傳遞是否成功</p>
            </ChildrenTest>
            <ChildrenIf>
                {count >= 3 ? <p>目前大於3!</p> : <p>目前小於3</p>}

            </ChildrenIf>
        </>

    )
}