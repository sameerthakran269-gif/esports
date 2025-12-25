'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag, ArrowRight, Truck, Shield } from 'lucide-react';



export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock cart data - in a real app, this would come from your state management or API
  useEffect(() => {
    const mockCartItems = [
      {
        id: 1,
        name: "Pro Power Rack",
        category: "Strength Training",
        price: 899.99,
        originalPrice: 1099.99,
        image: "/api/placeholder/300/300",
        quantity: 1,
        inStock: true
      },
      {
        id: 2,
        name: "Olympic Weight Set",
        category: "Free Weights",
        price: 599.99,
        originalPrice: 749.99,
        image: "/api/placeholder/300/300",
        quantity: 2,
        inStock: true
      },
      {
        id: 3,
        name: "Yoga Mat Pro",
        category: "Fitness Accessories",
        price: 49.99,
        originalPrice: null,
        image: "/api/placeholder/300/300",
        quantity: 1,
        inStock: false
      }
    ];
    
    setCartItems(mockCartItems);
    setIsLoading(false);
  }, []);

  // Add type annotations to the function parameters
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 99 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const savings = cartItems.reduce((total, item) => {
    if (item.originalPrice) {
      return total + ((item.originalPrice - item.price) * item.quantity);
    }
    return total;
  }, 0);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-500 font-semibold"
          >
            <span className="text-2xl">←</span>
            <span className="ml-2">Continue Shopping</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <ShoppingBag className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <span className="ml-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {cartItems.length === 0 ? (
          // Empty Cart State
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start shopping to find amazing fitness equipment!
            </p>
            <Link
              href="/gym-equipment"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Shopping
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
            {/* Cart Items */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="p-6">
                      <div className="flex items-start space-x-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                            <span className="text-gray-600 text-xs font-semibold">Product</span>
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                                <Link href={`/product/${item.id}`}>
                                  {item.name}
                                </Link>
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                              
                              {!item.inStock && (
                                <p className="text-sm text-red-600 mt-1">Out of Stock</p>
                              )}
                            </div>
                            
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>

                          <div className="mt-4 flex items-center justify-between">
                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              
                              <span className="w-8 text-center font-semibold">
                                {item.quantity}
                              </span>
                              
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                              <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold text-gray-900">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </span>
                                {item.originalPrice && (
                                  <span className="text-sm text-gray-500 line-through">
                                    ${(item.originalPrice * item.quantity).toFixed(2)}
                                  </span>
                                )}
                              </div>
                              {item.originalPrice && (
                                <p className="text-sm text-green-600 mt-1">
                                  Save ${((item.originalPrice - item.price) * item.quantity).toFixed(2)}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
                  <Truck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Free Shipping</h3>
                  <p className="text-sm text-gray-600">On orders over $99</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">2-Year Warranty</h3>
                  <p className="text-sm text-gray-600">On all equipment</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
                  <ShoppingBag className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Easy Returns</h3>
                  <p className="text-sm text-gray-600">30-day guarantee</p>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="mt-8 lg:mt-0 lg:col-span-5">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>

                  {savings > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>You Save</span>
                      <span className="font-semibold">-${savings.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {subtotal < 99 && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700 text-center">
                      Add ${(99 - subtotal).toFixed(2)} more for <strong>FREE shipping</strong>
                    </p>
                  </div>
                )}

                <div className="mt-6 space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Proceed to Checkout
                  </button>
                  
                  <Link
                    href="/gym-equipment"
                    className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors block text-center"
                  >
                    Continue Shopping
                  </Link>
                </div>

                {/* Security Badge */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Shield className="w-4 h-4" />
                    <span>Secure checkout • 256-bit SSL encryption</span>
                  </div>
                </div>
              </div>

              {/* Recently Viewed */}
              <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">You Might Also Like</h3>
                <div className="space-y-3">
                  {[
                    { name: "Adjustable Dumbbells", price: 299.99, category: "Strength Training" },
                    { name: "Resistance Bands Set", price: 49.99, category: "Accessories" },
                    { name: "Foam Roller", price: 29.99, category: "Recovery" }
                  ].map((product, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                        <span className="text-gray-600 text-xs">+</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                      <span className="font-semibold text-gray-900">${product.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}