import { useState } from 'react';
import axios from 'axios';

const OrderModal = ({ carId, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    passport: '',
    car: carId
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('https://diyorbekbaxshullayev.pythonanywhere.com/api/orders/', form); // URL-ni o'zingizning domeningizga moslang
      alert("Buyurtma muvaffaqiyatli yuborildi!");
      onClose(); // Modalni yopish
    } catch (error) {
      console.error(error);
      alert("Buyurtma yuborishda xatolik yuz berdi.");            
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-xl w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">Buyurtma qilish</h2>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Ism" className="w-full mb-2 p-2 border rounded" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Telefon" className="w-full mb-2 p-2 border rounded" />
        <input name="passport" value={form.passport} onChange={handleChange} placeholder="Pasport ma'lumotlari" className="w-full mb-4 p-2 border rounded" />
        <div className="flex justify-between">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Bekor</button>
          <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">Yuborish</button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
