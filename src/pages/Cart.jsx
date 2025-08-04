import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useTable } from '../contexts/TableContext';
import { Plus, Minus, Trash2, ArrowLeft, ShoppingBag, Receipt } from 'lucide-react';

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();
  const { tableNumber } = useTable();

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16 lg:py-24 animate-fade-in">
        <div className="text-6xl lg:text-8xl mb-6">🛒</div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto leading-relaxed">
          Looks like you haven't added any items to your cart yet. 
          Browse our delicious menu and start building your perfect meal!
        </p>
        <Link to="/menu" className="btn-primary inline-flex items-center space-x-3 text-lg px-8 py-4">
          <ShoppingBag size={24} />
          <span>Browse Menu</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 lg:mb-12 space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-4">
          <Link to="/menu" className="btn-secondary inline-flex items-center space-x-2">
            <ArrowLeft size={18} />
            <span>Back to Menu</span>
          </Link>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">Your Cart</h1>
            <p className="text-gray-600 mt-1">Review and manage your order</p>
          </div>
        </div>
        <button
          onClick={clearCart}
          className="text-red-600 hover:text-red-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-red-50 transition-all duration-200"
        >
          Clear Cart
        </button>
      </div>

      {/* Table Info */}
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

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="p-6 lg:p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Receipt className="text-primary-600 w-6 h-6" />
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">Order Items</h2>
              </div>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="flex items-center space-x-4 p-4 lg:p-6 border border-gray-100 rounded-2xl hover:shadow-md transition-all duration-200 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl lg:text-4xl flex-shrink-0">{item.image}</div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 text-lg lg:text-xl mb-1">{item.name}</h3>
                      <p className="text-sm lg:text-base text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                      <p className="text-primary-600 font-semibold text-lg">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-3 flex-shrink-0">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110"
                      >
                        <Minus size={16} />
                      </button>
                      
                      <span className="w-12 text-center font-bold text-lg">{item.quantity}</span>
                      
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-gray-800 text-lg lg:text-xl">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm mt-2 hover:bg-red-50 px-2 py-1 rounded-lg transition-all duration-200"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="card sticky top-24">
            <div className="p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-semibold mb-6 text-gray-800">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm lg:text-base">
                    <div className="flex items-center space-x-3">
                      <div className="text-lg">{item.image}</div>
                      <div>
                        <span className="text-gray-800 font-medium">{item.name}</span>
                        <div className="text-gray-500">Qty: {item.quantity}</div>
                      </div>
                    </div>
                    <span className="font-semibold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg lg:text-xl font-semibold text-gray-800">Total</span>
                  <span className="text-2xl lg:text-3xl font-bold text-gradient">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                
                <Link
                  to="/checkout"
                  className="w-full btn-primary text-center block text-lg py-4"
                >
                  Proceed to Checkout
                </Link>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    Secure checkout • No hidden fees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 lg:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">🚚</div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Fast Service</h3>
            <p className="text-gray-600 text-sm">Orders typically ready in 15-20 minutes</p>
          </div>
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">🍽️</div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600 text-sm">All dishes made with fresh, local ingredients</p>
          </div>
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">💳</div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Easy Payment</h3>
            <p className="text-gray-600 text-sm">Pay at your table or during checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 