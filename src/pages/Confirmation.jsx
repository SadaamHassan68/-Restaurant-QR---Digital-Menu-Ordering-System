import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, Home } from 'lucide-react';

const Confirmation = () => {
  const location = useLocation();
  const orderData = location.state;

  // If no order data, redirect to home
  if (!orderData) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4">❌</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">No Order Found</h1>
        <p className="text-gray-600 mb-8">
          It looks like you don't have a recent order to confirm.
        </p>
        <Link to="/" className="btn-primary">
          Go Home
        </Link>
      </div>
    );
  }

  const { orderNumber, items, total, tableNumber } = orderData;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Success Message */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Thank You for Your Order!
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Your order has been successfully submitted
        </p>
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 inline-block">
          <h2 className="text-2xl font-bold text-primary-600">
            Order #{orderNumber}
          </h2>
          <p className="text-primary-700">Table {tableNumber}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="card">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
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
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold text-primary-600">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="space-y-6">
          <div className="card">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Order Confirmed</h3>
                    <p className="text-gray-600 text-sm">
                      Your order has been received and is being prepared by our kitchen.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Preparation Time</h3>
                    <p className="text-gray-600 text-sm">
                      Your order will be ready in approximately 15-20 minutes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Service</h3>
                    <p className="text-gray-600 text-sm">
                      Our staff will bring your order to Table {tableNumber} when ready.
                    </p>
                  </div>
                </div>
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
      </div>

      {/* Additional Actions */}
      <div className="text-center mt-12">
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4">Need Anything Else?</h3>
          <p className="text-gray-600 mb-6">
            If you need to modify your order or have any questions, please speak with our staff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-secondary">
              Order More Food
            </Link>
            <Link to="/" className="btn-primary inline-flex items-center space-x-2">
              <Home size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Order Status Banner */}
      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center justify-center space-x-3">
          <CheckCircle className="text-green-500" size={24} />
          <div className="text-center">
            <h3 className="font-medium text-green-800">Order Status: Confirmed</h3>
            <p className="text-green-700 text-sm">
              Your order is being prepared. Estimated wait time: 15-20 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation; 