import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarCard from "../components/CarCard";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/cars/`)
      .then((res) => setCars(res.data))
      .catch((err) => console.error("Xatolik yuz berdi:", err));
  }, []);

  return (
    <div className="p-4 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">🚗 Rent a Car</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.length > 0 ? (
          cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">Mashinalar topilmadi...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
