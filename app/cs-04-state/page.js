'use client'

import React, { useState, useEffect } from 'react'

export default function Cs04StatePage(props) {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((s) => s + 1)
        }}
      ></button>
    </>
  )
}
