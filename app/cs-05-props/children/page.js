'use client'

import Parent from './_components/parent'
import Child from './_components/child'

export default function ChildrenPage() {
  return (
    <>
      <h1>props.children範例</h1>
      <hr />
      {/* 嵌入在Parent元件中的資料 =相當於= props.children */}
      {/* 其中的資料是一種不確定型態(opaque)，意即可能是任何資料或其它元件渲染情況 */}
      {/* 其中是個字串 */}
      <Parent>我是一個字串</Parent>
      {/* 其中是個表達式 */}
      <Parent>
        {[1, 2, 3].map((v, i) => (
          <p key={i}>{v}</p>
        ))}
      </Parent>
      {/* 其中也可能什麼都沒有 */}
      <Parent></Parent>
      {/* 其中也可能是另個元件(或多個)，這也是一種P到C的階層關係 */}
      <hr />
      <Parent>
        <Child />
        <Child />
      </Parent>
    </>
  )
}
