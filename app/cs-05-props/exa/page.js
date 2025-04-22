'use client'

import React, { useState, useEffect } from 'react'
import Parent from './_component/parent'
import Test from './_component/test'

export default function Cs05PropsPage(props) {
  return (
    <>
      <h1>Props</h1>
      <Parent text="REACT!!" />
      <Test>
        <p>CH測試</p>
      </Test>
    </>
  )
}
