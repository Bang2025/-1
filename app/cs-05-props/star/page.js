'use client'

import React, { useState, useEffect } from 'react'
import StarRating from './_components/star-rating'
import { FaStar } from 'react-icons/fa'

export default function StarPage(props) {
  const [r1, setR1] = useState(4)
  const [r2, setR2] = useState(0)
  return (
    <>
      <div>StarRating測試頁面</div>
      <hr />
      <h2>對照組</h2>
      <p>沒有給任何屬性(套用預設樣式)</p>
      <StarRating />

      <hr />
      <h2>有給屬性的測試組</h2>
      <StarRating max={6} value={r1} onChange={setR1} />
      <p>送回來的評分為{r1}</p>
      <button onClick={() => setR1(1)}>r1改為1</button>
      <StarRating
        max={8}
        value={6}
        onChange={setR2}
        fillColor="#ff6600"
        emptyColor="pink"
        icon={<FaStar />}
      />
      <p>送回來的評分為{r2}</p>
    </>
  )
}
