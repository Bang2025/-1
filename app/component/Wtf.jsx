import React, { createContext, useContext } from 'react'
import { AppTest, AppContext } from './Context'
function Wtf() {
    const { wtf } = useContext(AppContext)
    const { twotext } = useContext(AppTest)
    return <>
        <p>{wtf}</p>
        <p>{twotext}</p>
    </>
}

export default Wtf