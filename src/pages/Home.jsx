import CoffeeCard from '../components/CoffeeCard';
import { coffeeData } from '../data/menuData';

const Home = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      
      {/* Hero Section */}
      <section className="text-center mb-16 py-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#4A3728] mb-4">
          Wake up to <span className="text-[#BC8F8F]">Better Coffee.</span>
        </h1>
        <p className="text-[#4A3728]/70 text-lg max-w-2xl mx-auto">
          Expertly roasted beans, ethically sourced, and brewed to perfection. 
          Your morning ritual just got an upgrade.
        </p>
      </section>

      {/* Featured Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* We use .map() to loop through our array and return a CoffeeCard for each item */}
        {coffeeData.map((item) => (
          <CoffeeCard 
            key={item.id} // Keys help React track which items changed
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

export default Home;