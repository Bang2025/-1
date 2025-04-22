'use client'

import js from '@eslint/js'
import React, { useState, useEffect } from 'react'

export default function ChildB({ setDataForMe }) {
  const [cData, setcData] = useState('子女B狀態')

  useEffect(() => {
    setDataForMe(cData)
  }, [])
  //   這裡保持空陣列的原因是因為，不需要參照誰的狀態來更動

  return (
    <>
      <h3>子女B</h3>
      {/* 第1種 處理副作用的方式 。按下去處發後再送出*/}
      <button
        onClick={() => {
          setDataForMe(cData)
        }}
      >
        送資料給C。不過運作方式為B傳給父，父再傳給C
      </button>
    </>
  )
}
