'use client'

export default function JsxMapPage() {
  const a1 = [1, 4, 9, 16]

  // 前後加上li標記
  const a2 = a1.map((v, i) => {
    return <li key={i}>{v * 2}</li>
  })

  return (
    <>
      <h1>JSX中陣列map渲染</h1>
      <hr />
      {/* 另外產生一個新陣列 */}
      <ul>{a2}</ul>
      {/* 因為是函式呼叫or表達式，可以直接寫在JSX中的花括號 */}
      {/* Optional chaining (?.)是可選串連語法(ES2020 (ES11))，有保護作用 */}
      <ul>
        {a1?.map((v, i) => {
          return <li key={i}>{v * 2}</li>
        })}
      </ul>
    </>
  )
}
