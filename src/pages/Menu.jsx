import React, { useState } from 'react';
import { useTable } from '../contexts/TableContext';
import { useCart } from '../contexts/CartContext';
import { menuData } from '../data/menuData';
import { Plus, Minus, AlertCircle, Filter, Search } from 'lucide-react';

const Menu = () => {
  const { tableNumber } = useTable();
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = menuData.categories;
  const items = menuData.items;

  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item) => {
    addItem(item);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12 lg:mb-16 animate-fade-in">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">Our Menu</h1>
        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover our delicious selection of dishes prepared with fresh, local ingredients. 
          Each item is crafted with care by our expert chefs.
        </p>
      </div>

      {/* Table Number Alert */}
      {!tableNumber && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 mb-8 animate-slide-up">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <AlertCircle className="text-yellow-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-yellow-800 text-lg">Table Number Required</h3>
              <p className="text-yellow-700">
                Please scan the QR code at your table to automatically assign your order to the correct table.
              </p>
            </div>
          </div>
        </div>
      )}

      {tableNumber && (
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200 rounded-2xl p-6 mb-8 animate-slide-up">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
              <h3 className="font-semibold text-primary-800 text-lg">Table {tableNumber}</h3>
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
            </div>
            <p className="text-primary-700">
              Your order will be automatically assigned to this table
            </p>
          </div>
        </div>
      )}

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-12"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-primary-200'
            }`}
          >
            All Items
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-primary-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {filteredItems.map((item, index) => (
          <div 
            key={item.id} 
            className="card card-hover overflow-hidden animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl lg:text-5xl">{item.image}</div>
                <div className="text-right">
                  <div className="text-xl lg:text-2xl font-bold text-gradient">
                    ${item.price.toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-gray-800 leading-tight">
                {item.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">
                {item.description}
              </p>
              
              <button
                onClick={() => handleAddToCart(item)}
                disabled={!tableNumber}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                  tableNumber
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white transform hover:scale-105 hover:shadow-lg'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Plus size={18} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16 lg:py-24">
          <div className="text-6xl lg:text-8xl mb-6">🍽️</div>
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-800">No items found</h3>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Try selecting a different category or adjusting your search terms.
          </p>
        </div>
      )}

      {/* Category Descriptions */}
      <div className="mt-20 lg:mt-24">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-800">
          Menu Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category) => (
            <div key={category.id} className="card card-hover p-6 lg:p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl">
                  {category.id === 'starters' && '🥗'}
                  {category.id === 'mains' && '🍽️'}
                  {category.id === 'drinks' && '🥤'}
                  {category.id === 'desserts' && '🍰'}
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-gray-800">{category.name}</h3>
              <p className="text-gray-600 leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="mt-20 lg:mt-24">
        <div className="gradient-bg rounded-3xl p-8 lg:p-12 border border-primary-100">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
              Special Offers
            </h3>
            <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
              Don't miss out on our daily specials and happy hour deals!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-2xl font-bold text-primary-600 mb-2">Happy Hour</div>
                <div className="text-gray-600">2-5 PM Daily</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-2xl font-bold text-primary-600 mb-2">Weekend Brunch</div>
                <div className="text-gray-600">Sat-Sun 10 AM-2 PM</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-2xl font-bold text-primary-600 mb-2">Lunch Special</div>
                <div className="text-gray-600">Mon-Fri 11 AM-3 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu; 