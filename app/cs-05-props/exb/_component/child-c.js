'use client'

import js from '@eslint/js'

// P->C
export default function ChildC({ dataForMe = '' }) {
  return (
    <>
      <h3>子女C</h3>
      <p>來自子女B</p>
      <p>{dataForMe}</p>
    </>
  )
}
