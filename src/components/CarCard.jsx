"use client"

const CarCard = ({ car, onClick }) => {
  return (
    <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Image container with gradient overlay on hover */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image || "/placeholder.svg"}
          alt={car.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content section */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-gray-800 line-clamp-1">{car.name}</h2>
          <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">{car.year}</span>
        </div>

        <p className="text-gray-500 text-sm mb-3">{car.brand}</p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Kunlik narx</span>
            <span className="text-green-600 font-bold text-lg">${car.daily_price}</span>
          </div>

          <button
            onClick={() => onClick(car)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Batafsil
          </button>
        </div>
      </div>
    </div>
  )
}

export default CarCard
