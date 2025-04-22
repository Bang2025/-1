'use client'

import { useState } from 'react'

export default function MySelect() {
  // 下拉清單，選擇的餐點
  const [food, setFood] = useState('')
  // 選項可以用陣列先集中，方便維護
  const options = ['牛肉麵', '漢堡', '魯肉飯', '素食便當']
  // 或是用物件陣列(通常來自資料庫資料表…)
  const options2 = [
    {
      id: 1,
      name: 'Apple',
    },
    {
      id: 2,
      name: 'Google',
    },
    {
      id: 3,
      name: '小米',
    },
  ]

  return (
    <>
      <h2>下拉清單</h2>
      <select
        value={food}
        onChange={(e) => {
          setFood(e.target.value)
        }}
      >
        <option value="">請選擇餐點</option>
        {options.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
    </>
  )
}
