'use client'

import React, { useState, useEffect } from 'react'

export default function MyRadioButtons(props) {
  const [gender, setGender] = useState('')
  //   選項
  const options = ['男', '女', '不提供']
  return (
    <>
      {options.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              value={v}
              checked={v === gender}
              onChange={(e) => setGender(e.target.value)}
            />
            {v}
          </div>
        )
      })}
    </>
  )
}
