import { ShoppingCart } from 'lucide-react';

// We pass in props: name, price, description, and image
const CoffeeCard = ({ name, price, description, image }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#4A3728]/5 group">
      {/* Coffee Image Placeholder */}
      <div className="h-48 bg-[#E6D5C3] flex items-center justify-center relative overflow-hidden">
        <span className="text-[#4A3728]/20 font-bold text-4xl group-hover:scale-110 transition-transform duration-500 underline decoration-wavy">
          {image || '☕'}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#4A3728]">{name}</h3>
          <span className="bg-[#FAF7F2] px-2 py-1 rounded text-sm font-semibold text-[#BC8F8F]">
            ${price}
          </span>
        </div>
        
        <p className="text-[#4A3728]/70 text-sm mb-6 leading-relaxed">
          {description}
        </p>

        {/* Action Button */}
        <button 
          onClick={() => alert(`Added ${name} to cart!`)}
          className="w-full flex items-center justify-center gap-2 bg-[#FAF7F2] hover:bg-[#4A3728] hover:text-white text-[#4A3728] font-bold py-3 rounded-xl transition-all border border-[#4A3728]/10"
        >
          <ShoppingCart size={18} />
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;