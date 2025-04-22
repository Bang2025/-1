'use client'

import React, { useState, useEffect } from 'react'

export default function ComponentsMyInput(props) {
  // input-text
  const [text, setText] = useState('')
  //input-password
  const [password, setPassword] = useState('')
  // 勾選方塊後可以顯示密碼
  const [show, setShow] = useState(false)

  return (
    <>
      <h2>文字輸入框(input-text)</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2>密碼輸入框</h2>
      <input
        type={show ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="checkbox"
        onChange={(e) => setShow(e.target.checked)}
        id="show"
        // 另一種語法是邏輯反向(亦即為切換按鈕)
      />
    </>
  )
}
