'use client'

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Wtf from './Wtf'

import { AppTest, AppContext } from './Context'



export default function HomePage() {
  const title = 'React'
  const subTitle = 'Learning Context API';
  const wtf = "React有點難啊";

  return (
    <AppContext.Provider value={{ title, subTitle, wtf }}>
      <AppTest.Provider value={{ twotwtle: "第二層的測試", twotext: "多層的context" }}>
        <Header />
        <Footer />
        <Wtf />
      </AppTest.Provider>
    </AppContext.Provider>
  )
}






