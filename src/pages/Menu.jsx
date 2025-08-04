import React, { useState } from 'react';
import { useTable } from '../contexts/TableContext';
import { useCart } from '../contexts/CartContext';
import { menuData } from '../data/menuData';
import { Plus, Minus, AlertCircle } from 'lucide-react';

const Menu = () => {
  const { tableNumber } = useTable();
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = menuData.categories;
  const items = menuData.items;

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item) => {
    addItem(item);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Menu</h1>
        <p className="text-gray-600">
          Discover our delicious selection of dishes prepared with fresh, local ingredients
        </p>
      </div>

      {/* Table Number Alert */}
      {!tableNumber && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-3">
            <AlertCircle className="text-yellow-600" size={20} />
            <div>
              <h3 className="font-medium text-yellow-800">Table Number Required</h3>
              <p className="text-yellow-700 text-sm">
                Please scan the QR code at your table to automatically assign your order to the correct table.
              </p>
            </div>
          </div>
        </div>
      )}

      {tableNumber && (
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
          <div className="text-center">
            <h3 className="font-medium text-primary-800">Table {tableNumber}</h3>
            <p className="text-primary-700 text-sm">
              Your order will be assigned to this table
            </p>
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Items
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="card overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{item.image}</div>
                <div className="text-lg font-bold text-primary-600">
                  ${item.price.toFixed(2)}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.name}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>
              
              <button
                onClick={() => handleAddToCart(item)}
                disabled={!tableNumber}
                className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-colors ${
                  tableNumber
                    ? 'bg-primary-500 hover:bg-primary-600 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Plus size={16} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🍽️</div>
          <h3 className="text-xl font-semibold mb-2">No items found</h3>
          <p className="text-gray-600">
            Try selecting a different category or check back later.
          </p>
        </div>
      )}

      {/* Category Descriptions */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Menu Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="card p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu; 