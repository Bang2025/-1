'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('./api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
  }, [])

  useEffect(() => {
    fetch('./api/recipes')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
  }, [])

  return (
    <>
      <div>{message}</div>
      <div>{message}</div>
    </>
  )
}
