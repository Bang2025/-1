'use client'

import React, { useState } from 'react'
import { Immer, produce } from 'immer'

export default function StateChangePage() {
  const [count, setCount] = useState({
    name: 'Joe',
    porfile: {
      phone: '123456789',
      address: {
        city: '高雄市',
      },
    },
  })
  const todo = { id1: { done: false, title: '吃飯' } }

  const imm = produce(count, (draft) => {
    ;(draft.name = '小明'),
      (draft.porfile.phone = '0933121212'),
      (draft.porfile.address.city = '花蓮市')
  })

  const newtodo = produce(todo, (draft) => {
    draft['id1'] = { done: true, title: '運動' }
  })
  return (
    <>
      <h1>immer</h1>
      <p>{count.name}</p>
      <hr />
      <p>{imm.name}</p>
      <p>{todo.id1.title}</p>
      <p>{newtodo.id1.title}</p>
    </>
  )
}
