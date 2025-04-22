'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'

export default function EditRecipePage() {
  const router = useRouter()
  const params = useParams()
  const { id } = params

  const [form, setForm] = useState({ title: '', description: '' })

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(`/api/recipes?id=${id}`)
      const data = await res.json()
      setForm({
        title: data.title ?? '',
        description: data.description ?? '',
        id: data.id ?? null,
      })
    }
    fetchRecipe()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/recipes', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const result = await res.json()
    console.log('API 回應:', result)

    if (res.ok) {
        router.push('/recipes')
      } else {
        console.error('更新失敗:', result.message)
      }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">✏️ 編輯食譜</h1>

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
          更新
        </button>
      </form>
    </div>
  )
}
