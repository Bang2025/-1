'use client'

import React, { useState, useEffect } from 'react'

import ChildA from './child-a'
import ChildB from './child-b'
import ChildC from './child-c'

export default function Parent(props) {
  const [count, setCount] = useState('父組件狀態')

  // 定義一組專門讓子女B回傳資料用的狀態
  const [dataForMe, setDataForMe] = useState('')

  return (
    <>
      <h2>父元件</h2>
      {/* 屬性作為狀態的延伸(亦即為用屬性來傳遞狀態) */}
      <ChildA pData={count} />
      {/* C -> P   屬性為傳遞設定狀態的函數 */}
      <ChildB setDataForMe={setDataForMe} />
      {/* C -> C */}
      {/* 組合C=>P +P =>C */}
      <ChildC dataForMe={dataForMe} />
    </>
  )
}
