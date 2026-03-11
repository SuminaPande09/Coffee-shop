import { ShoppingCart } from 'lucide-react';

const CoffeeCard = ({ name, price, description, image }) => {
  return (
    // Added 'h-full' and 'flex flex-col' to make all cards equal height in a row
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#4A3728]/5 group flex flex-col h-full">
      
      {/* Image Container: Fixed height with aspect ratio control */}
      <div className="h-52 w-full bg-[#E6D5C3] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content Container: flex-grow ensures this area fills the remaining space */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-[#4A3728] leading-tight">{name}</h3>
          <span className="bg-[#FAF7F2] px-2 py-1 rounded text-sm font-bold text-[#BC8F8F] whitespace-nowrap ml-2">
            ${price}
          </span>
        </div>
        
        {/* Description: flex-grow here pushes the button to the bottom */}
        <p className="text-[#4A3728]/70 text-sm mb-6 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Action Button: mt-auto acts as a spring to stay at the bottom */}
        <button 
          onClick={() => alert(`Added ${name} to cart!`)}
          className="w-full mt-auto flex items-center justify-center gap-2 bg-[#FAF7F2] hover:bg-[#4A3728] hover:text-white text-[#4A3728] font-bold py-3 rounded-xl transition-all border border-[#4A3728]/10"
        >
          <ShoppingCart size={18} />
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;