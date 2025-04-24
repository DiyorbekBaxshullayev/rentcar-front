import React, { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "../components/CarCard";
import CarModal from "../components/CarModal";
import OrderModal from "../components/OrderModal";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showOrder, setShowOrder] = useState(false);

  useEffect(() => {
    axios
      .get("https://diyorbekbaxshullayev.pythonanywhere.com/api/cars/")
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleOrderSubmit = (formData) => {
    console.log("Buyurtma yuborildi:", formData);
    setShowOrder(false);
    setSelectedCar(null);
  };

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center"> Rent a Car</h1>

      {/* Car list */}
      <div className="flex flex-col gap-4">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} onClick={() => setSelectedCar(car)} />
        ))}
      </div>

      {/* Car Modal */}
      {selectedCar && (
        <CarModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
          onOrder={() => {
            setShowOrder(true);
          }}
        />
      )}

      {/* Order Modal */}
      {showOrder && selectedCar && (
        <OrderModal
          carId={selectedCar.id}
          onClose={() => setShowOrder(false)}
          onSubmit={handleOrderSubmit}
        />
      )}
    </div>
  );
};

export default Home;
