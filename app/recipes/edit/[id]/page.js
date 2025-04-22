'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function EditRecipePage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    description: '',
    cook_time: '',
    servings: '',
    user_id: '',
  });
  const [loading, setLoading] = useState(true);

  // 取得原始資料
  useEffect(() => {
    fetch(`http://localhost:3001/recipes/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const { title, description, cook_time, servings, user_id } = data.data;
          setForm({
            title: title || '',
            description: description || '',
            cook_time: cook_time || '',
            servings: servings || '',
            user_id: user_id || '',
          });
        } else {
          alert('找不到資料');
          router.push('/recipes');
        }
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3001/recipes/api/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      router.push('/recipes');
    } else {
      alert('更新失敗');
    }
  };

  if (loading) return <p className="p-4">載入中...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">編輯食譜</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" value={form.title} onChange={handleChange} required className="border p-2 w-full" />
        <textarea name="description" value={form.description} onChange={handleChange} className="border p-2 w-full" />
        <input name="cook_time" type="number" value={form.cook_time} onChange={handleChange} className="border p-2 w-full" />
        <input name="servings" type="number" value={form.servings} onChange={handleChange} className="border p-2 w-full" />
        <input name="user_id" type="number" value={form.user_id} onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">更新</button>
      </form>
    </div>
  );
}
