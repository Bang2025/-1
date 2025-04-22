import React, { createContext, useContext } from 'react'
import { AppTest, AppContext } from './Context'
function Footer() {
    const { title } = useContext(AppContext)
    return <p>{title}</p>
}

export default Footer