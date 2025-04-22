'use client'

import js from '@eslint/js'

// P->C
export default function ChildA({ pData = '' }) {
  return (
    <>
      <h3>子女A</h3>
      <p>{pData}</p>
    </>
  )
}
