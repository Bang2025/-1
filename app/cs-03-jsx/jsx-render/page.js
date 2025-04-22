'use client'

export default function JsxRenderPage() {
  return (
    <>
      <h1>JSX中各種值的渲染呈現</h1>
      <hr />
      <h2>number(數字)</h2>
      {1 - 1}
      {NaN}
      <h2>string(字串)</h2>
      這是字串
      {'這也是字串'}
      {`這也是字串${100 - 1}`}
      <h2>boolean(布林)</h2>
      {/* 不渲染呈現 */}
      {true}
      {false}
      <h2>null/undefined</h2>
      {/* 不渲染呈現 */}
      {null}
      {undefined}
      <h2>array(陣列)</h2>
      {/* 類似array.join('') */}
      {[1, 2, 3]}
      {['hello', 'a', 'b']}
      {[<p key="1">a</p>, <p key="2">b</p>]}
      <h2>object(物件)</h2>
      {/* 物件不能直接渲染(執行錯誤) */}
      {/* React child類型定義: https://github.com/orgs/mfee-react/discussions/91 */}
      {/* {{ a: 1, b: 2 }} */}
      {/* 以下示範轉換為json字串呈現 */}
      {JSON.stringify({ a: 1, b: 2 })}
      <h2>function(函式)</h2>
      {/* 函式定義也不能直接渲染(不會渲染)，有警告or錯誤訊息 */}
      {/* React child類型定義: https://github.com/orgs/mfee-react/discussions/91 */}
      {/* {() => {}} */}
    </>
  )
}
