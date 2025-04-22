'use client'

import { useState } from 'react'
// import { json } from 'stream/consumers'
const sample = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

export default function ObjectArrayPage() {
  // 呈現(渲染)時會與使用者互動時進行改動，必需是state
  const [data, setData] = useState(sample)

  return (
    <>
      <h1>物件陣列(object array)狀態的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const nextData = [newObj, ...data]

          //3
          setData(nextData)
        }}
      >
        1. 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 使用uuid
          const newId = self.crypto.randomUUID()
          //  用時間來產生ID
          const newId2 = Date.now()
          const newObj = { id: newId, text: 'xxx' }
          const newObj2 = { id: newId2, text: 'xxx' }
          //   仿照資料表的自動遞增ID的方式  。先提取所有的ID為一個陣列  [1,2,3,4,5]
          const ids = data.map((v) => v.id)
          //   新的ID為最大值+1 ，如果陣列當中沒有資料時則從1開始
          const newId3 = ids.length > 0 ? Math.max(...ids) + 1 : 1

          //1 //2
          const nextData = [...data, newObj]

          //3
          setData(nextData)
        }}
      >
        2. 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button onClick={() => {}}>
        3. 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 使用uuid
          const newId4 = self.crypto.randomUUID()

          const newObj4 = { id: newId4, text: 'yyy' }
          const nextData2 = [...data, newObj4]
          setData(nextData2)
        }}
      >
        4. 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          const nextData3 = data.filter((v) => v.text.includes('a'))
          setData(nextData3)
        }}
      >
        5. 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          const nextData4 = data.filter((v) => v.text !== 'b')
          setData(nextData4)
        }}
      >
        6. 刪除文字為b的物件資料。相當於過濾出文字不是b的資料
      </button>
      <br />
      <button
        onClick={() => {
          const nextData5 = data.filter((v) => v.id !== 4)
          setData(nextData5)
        }}
      >
        7. 刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 步驟一 先找到要刪除的物件的索引值
          const foundIndex = data.findIndex((v) => v.id === 4)
          //   步驟二 判斷是否有找到
          if (foundIndex !== -1) {
            // 步驟2-1 深拷貝(或是看作用的階級決定
            const nextData6 = [...data]
            // 步驟2-2 套用刪除的公式
            nextData6.splice(foundIndex, 1)
            // 步驟2-3 設定到狀態上
            setData(nextData6)
          }
        }}
      >
        7-2. 刪除id為4的物件資料 。splice黏接
      </button>
      <br />
      <button
        onClick={() => {
          // 使用map方法，只有物件陣列(第一層是陣列+第二層是物件)才可以這樣用
          //   步驟1. 展開陣列
          const nextData7 = data.map((v, i) => {
            // 步驟2  比對出ID為3的是誰
            if (v.id === 3) {
              return {
                // 如果比對出ID為3的時候，將文字替會成cccc
                ...v,
                text: 'cccc',
              }
            } else {
              // ID不是3的話回傳原本的物件
              return v
            }
          })

          setData(data.map((v) => (v.id === 3 ? { ...v, text: 'cccc' } : v)))
        }}
      >
        8. 取代id為3的文字為cccc
      </button>

      <br />
      <button
        onClick={() => {
          setData(sample)
        }}
      >
        9. 清空表格
      </button>

      <br />
      <button
        onClick={() => {
          //splice黏接
          //插入公式為：array.splice(deleteIndex + 1 , 0 , insertValue)

          // 步驟一 先找到要插入在後面的成員的索引值
          const foundIndex2 = data.findIndex((v) => v.id === 2)
          //   步驟二 判斷是否有找到
          if (foundIndex2 !== -1) {
            // 步驟2-1 深拷貝(或是看作用的階級決定)
            const nextData8 = [...data]
            // 步驟2-2 套用刪除的公式
            nextData8.splice(foundIndex2 + 1, 0, { id: 5, text: 'bbb' })
            // 步驟2-3 設定到狀態上
            setData(nextData8)
          }
        }}
      >
        10. 在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />

      <button
        onClick={() => {
          // slice(分割，切片)
          // slice 沒有副作用，不會更動到原陣列
          //   公式為：array.slice(startIndex , endIndex)
          //   但不包含endIndex，如果沒有加上endIndex則到最後一個成員
          // 步驟一 先找到要插入在後面的成員的索引值
          const foundIndex3 = data.findIndex((v) => v.id === 2)

          if (foundIndex3 !== -1) {
            const aa = data.slice(0, foundIndex3 + 1)
            const bb = data.slice(foundIndex3 + 1)

            // 合併成一個新的陣列
            setData([...aa, { id: 5, text: 'bbb' }, ...bb])
          }
        }}
      >
        10-2. 在id為2後面插入id為5與文字為bbb的物件
      </button>
    </>
  )
}
