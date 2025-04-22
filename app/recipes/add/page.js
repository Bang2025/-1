'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddRecipePage() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    cook_time: '',
    servings: '',
    user_id: '',
  });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/recipes/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      router.push('/recipes');
    } else {
      alert('新增失敗');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">新增食譜</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="標題" onChange={handleChange} required className="border p-2 w-full" />
        <textarea name="description" placeholder="內容" onChange={handleChange} className="border p-2 w-full" />
        <input name="cook_time" type="number" placeholder="烹調時間" onChange={handleChange} className="border p-2 w-full" />
        <input name="servings" type="number" placeholder="份量" onChange={handleChange} className="border p-2 w-full" />
        <input name="user_id" type="number" placeholder="作者 ID" onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">送出</button>
      </form>
    </div>
  );
}
