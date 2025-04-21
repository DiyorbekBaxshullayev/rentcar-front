const CarCard = ({ car, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center h-full">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-[200px] object-contain bg-white rounded-xl mb-3"
      />
      <h2 className="text-lg font-bold">{car.name}</h2>
      <p className="text-gray-600">{car.brand} - {car.year}</p>
      <p className="text-green-600 font-semibold mt-1">Kunlik: ${car.daily_price}</p>
      <button
        onClick={onClick}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Batafsil
      </button>
    </div>
  );
};

export default CarCard;
