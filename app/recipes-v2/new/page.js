'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewRecipePage() {
  const router = useRouter()
  const [form, setForm] = useState({ title: '', description: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch('/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    router.push('/recipes')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">➕ 新增食譜</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="食譜名稱"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="簡介"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          儲存
        </button>
      </form>
    </div>
  )
}
