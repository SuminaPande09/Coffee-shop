import { useState } from 'react';
import { coffeeData } from '../data/menuData';
import CoffeeCard from '../components/CoffeeCard';

const Menu = () => {
  // useState Hook: Tracks which category is currently selected
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Hot Coffee', 'Cold Brew', 'Pastries'];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold text-[#4A3728] mb-2">Full Menu</h2>
          <p className="text-[#4A3728]/70">Freshly roasted, daily brewed.</p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex gap-2 bg-white p-1 rounded-xl border border-[#4A3728]/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)} // Updating State
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                category === cat 
                ? 'bg-[#4A3728] text-white shadow-md' 
                : 'text-[#4A3728] hover:bg-[#FAF7F2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coffeeData.map((item) => (
          <CoffeeCard 
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </main>
  );
};

export default Menu;