'use client'

import { useState } from 'react'

export default function MyCheckboxes() {
  // 選項
  const options = ['狗', '貓', '倉鼠', '金魚']
  // 轉為物件陣列，作為初始狀態
  const initState = options.map((v, i) => {
    return { id: i + 1, label: v, checked: false }
  })
  // 記錄選中的值，有兩種寫法
  // 一種只記錄使用者選了什麼值，ex: ['狗','金魚']
  // 另一種擴充為物件陣列，每個物件值中有個代表的布林值，例如checked，表示有沒有被選中
  const [pets, setPets] = useState(initState)

  // 切換checked屬性的函式
  const onToggleChecked = (petId) => {
    const nextPets = pets.map((v, i) => {
      if (v.id === petId) {
        // 如果比對出id為petId，拷貝物件後反相(NOT)checked屬性
        return { ...v, checked: !v.checked }
      } else {
        // 否則返回原物件
        return v
      }
    })

    // 設定到狀態
    setPets(nextPets)
  }

  // 處理全選
  const onChangeAll = (e) => {
    const nextPets = pets.map((v) => {
      // 強制讓所有成員的checked屬性為e.target.checked
      return { ...v, checked: e.target.checked }
    })
    // 設定到狀態
    setPets(nextPets)
  }

  return (
    <>
      <h2>核取方塊群組(checkboxes)</h2>

      <input
        type="checkbox"
        checked={pets.every((v) => v.checked)}
        onChange={onChangeAll}
      />
      <hr />
      {pets.map((pet) => {
        return (
          <div key={pet.id}>
            <input
              type="checkbox"
              value={pet.label}
              checked={pet.checked}
              onChange={() => {
                onToggleChecked(pet.id)
              }}
            />
            {pet.label}
          </div>
        )
      })}
    </>
  )
}
