import React from 'react';
import { Star } from 'lucide-react';

const specialDishes = [
  {
    name: "Chef's Tasting Menu",
    description: "A curated 7-course journey through our finest seasonal offerings",
    price: 600,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80",
    tags: ["Seasonal", "Chef's Choice"]
  },
  {
    name: "Truffle Season Special",
    description: "Fresh black truffle shaved tableside over house-made pasta",
    price: 1200,
    image: "https://images.unsplash.com/photo-1556269923-e4ef51d69638?auto=format&fit=crop&q=80",
    tags: ["Limited Time", "Luxury"]
  }
];

export default function Special() {
  return (
    <section id="special" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Special Offerings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Experience our chef's most celebrated creations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {specialDishes.map((dish) => (
            <div
              key={dish.name}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden 
                transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative h-64">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {dish.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-amber-600 text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                    {dish.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-amber-500 fill-current" />
                    <span className="ml-2 text-2xl font-bold text-amber-600">
                      ₹{dish.price}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {dish.description}
                </p>
                <button className="mt-6 w-full py-3 bg-amber-600 text-white rounded-lg 
                  hover:bg-amber-700 transition-colors duration-300">
                  Reserve Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}