'use client'

import { useState } from 'react'

export default function MyTextarea() {
  // 輸入的文字
  const [text, setText] = useState('hello')

  return (
    <>
      <h2>文字輸入區域(textarea)</h2>
      {/* textarea在JSX(react)中被改為單個元件的使用方式，類似與input-text(文字輸入框)統一的語法 */}
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <hr />
      <h3>輸入呈現(替換換行符號為p標記包裏)</h3>
      <div>
        {text.split('\n').map((v, i) => {
          return <p key={i}>{v}</p>
        })}
      </div>
    </>
  )
}
