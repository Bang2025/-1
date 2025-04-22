'use client'

import React, { useState, useEffect } from 'react'
import Child from './child'

// 子女元件可以由函示的傳入參數中，得到父母元件傳來的值
// props是物件
// 目的1 讓程式碼更簡潔
// 目的2 開發工具可以協助自動完成
// 目的3 定義預設的屬性值，預設值需要和給定的資料類型一致 。給預設值的好處是系統可以得知該屬性是什麼類型的資料

export default function Parent(props) {
  return (
    <>
      <hr />
      <h2>Component Parent</h2>
      <p>{props.text}</p>
      <Child
        text="這是子組件!!"
        isShow={true}
        aa={[1, 2, 3]}
        oa={{ a: 1, b: 2 }}
        sum={(a, b) => a + b}
      />
    </>
  )
}
