'use client'
// 導入時兩種寫法皆可
// 導入時 './_component/list/index' 和
// 導入時 './_component/list' 是一樣的寫法
import List from './_component/list/index'

export default function BookListPage() {
  return (
    <>
      <List />
    </>
  )
}
