import React, { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "../components/CarCard";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("https://diyorbekbaxshullayev.pythonanywhere.com/api/cars/")
      .then(res => setCars(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🚗 Rent a Car</h1>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default Home;
