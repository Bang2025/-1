'use client'

import React, { useState, useEffect } from 'react'

// 可控的表單元件
export default function LoginCC(props) {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  return (
    <>
      <h2>可控的登入</h2>
      <div>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        密碼:
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => {
            // 目前得到的狀態
            console.log(email, pass)
            // 送到伺服器
            alert(`email:${email},pass:${pass}`)
          }}
        >
          登入
        </button>
      </div>
    </>
  )
}
