import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useTable } from '../contexts/TableContext';
import { ArrowLeft, CheckCircle, Clock, MapPin } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const { tableNumber } = useTable();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  const handleSubmitOrder = async () => {
    if (!tableNumber) {
      alert('Please scan the QR code at your table to proceed with the order.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate order submission
    setTimeout(() => {
      const newOrderNumber = Math.floor(Math.random() * 9000) + 1000;
      setOrderNumber(newOrderNumber);
      
      // Clear cart and redirect to confirmation
      setTimeout(() => {
        clearCart();
        navigate('/confirmation', { 
          state: { 
            orderNumber: newOrderNumber,
            items: items,
            total: getTotalPrice(),
            tableNumber: tableNumber
          }
        });
      }, 2000);
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">No Items in Cart</h1>
        <p className="text-gray-600 mb-8">
          Please add some items to your cart before proceeding to checkout.
        </p>
        <button
          onClick={() => navigate('/menu')}
          className="btn-primary"
        >
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={() => navigate('/cart')}
          className="btn-secondary inline-flex items-center space-x-2"
        >
          <ArrowLeft size={16} />
          <span>Back to Cart</span>
        </button>
        <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
      </div>

      {/* Table Info */}
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

      {!tableNumber && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="text-center">
            <h3 className="font-medium text-yellow-800">Table Number Required</h3>
            <p className="text-yellow-700 text-sm">
              Please scan the QR code at your table to proceed with your order.
            </p>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Order Details */}
        <div>
          <div className="card mb-6">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Details</h2>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <div className="text-xl">{item.image}</div>
                      <div>
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Restaurant Info */}
          <div className="card">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Restaurant Information</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary-500" size={20} />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-gray-600">123 Main Street, City, State 12345</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-primary-500" size={20} />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div className="text-gray-600">Mon-Sun: 11:00 AM - 10:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary & Submit */}
        <div>
          <div className="card sticky top-4">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-2xl font-bold text-primary-600">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Order Status */}
              {isSubmitting && (
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-500"></div>
                    <div>
                      <h3 className="font-medium text-blue-800">Processing Order...</h3>
                      <p className="text-blue-700 text-sm">Please wait while we submit your order.</p>
                    </div>
                  </div>
                </div>
              )}

              {orderNumber && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" size={20} />
                    <div>
                      <h3 className="font-medium text-green-800">Order Submitted!</h3>
                      <p className="text-green-700 text-sm">Order #{orderNumber} has been received.</p>
                    </div>
                  </div>
                </div>
              )}
              
              <button
                onClick={handleSubmitOrder}
                disabled={isSubmitting || !tableNumber}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  isSubmitting || !tableNumber
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-primary-500 hover:bg-primary-600 text-white'
                }`}
              >
                {isSubmitting ? 'Submitting Order...' : 'Submit Order'}
              </button>

              <p className="text-xs text-gray-500 mt-3 text-center">
                By submitting this order, you agree to our terms of service and privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 