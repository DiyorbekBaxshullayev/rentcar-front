import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-blue-800">{car.name}</h2>
        <p className="text-gray-600 text-sm mb-3">{car.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">${car.price}/kun</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700">
            Band qilish
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
