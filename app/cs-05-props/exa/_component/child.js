'use client'

import js from '@eslint/js'

export default function Child({
  text = '',
  isShow = false,
  aa = [],
  oa = {},
  sum = () => {},
}) {
  return (
    <>
      <hr />
      <h3>Component Child</h3>
      <p>{text}</p>
      <p>{JSON.stringify(isShow)}</p>
      <p>{aa}</p>
      <p>{JSON.stringify(oa)}</p>
      <p>{sum(1, 2)}</p>
    </>
  )
}
