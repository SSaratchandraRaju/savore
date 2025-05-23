import React from 'react';

const menuItems = [
  {
    category: "Starters",
    items: [
      {
        name: "Truffle Arancini",
        description: "Crispy risotto balls with wild mushrooms and truffle oil",
        price: 450,
        image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&q=80"
      },
      {
        name: "Citrus Cured Salmon",
        description: "House-cured salmon with citrus, dill, and crème fraîche",
        price: 16,
        image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    category: "Main Courses",
    items: [
      {
        name: "Wagyu Ribeye",
        description: "Grade A5 Japanese Wagyu with roasted vegetables",
        price: 899,
        image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80"
      },
      {
        name: "Lobster Thermidor",
        description: "Classic French preparation with cognac cream sauce",
        price: 760,
        image: "https://images.unsplash.com/photo-1533682805518-48d1f5b8cd3a?auto=format&fit=crop&q=80"
      }
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Our Menu
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Carefully curated dishes that celebrate flavors from around the world
          </p>
        </div>

        <div className="space-y-16">
          {menuItems.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-serif font-bold text-amber-600 mb-8">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((item) => (
                  <div key={item.name} className="flex gap-6 items-start">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                          {item.name}
                        </h4>
                        <span className="text-amber-600 font-medium">
                          ₹{item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}