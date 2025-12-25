// components/HomeSections.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Truck, Shield, Heart, ArrowRight } from 'lucide-react';

export default function HomeSections() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Elevate Your Training",
      subtitle: "Premium Gym Equipment",
      description: "Professional-grade strength training equipment with lifetime warranty",
      image: "/api/placeholder/1200/600",
      buttonText: "Shop Strength Equipment",
      buttonLink: "/gym-equipment/strength",
      bgGradient: "from-gray-50 to-blue-50"
    },
    {
      id: 2,
      title: "Summer Sports Sale",
      subtitle: "Up to 40% Off",
      description: "Get ready for the season with top-quality sports gear and accessories",
      image: "/api/placeholder/1200/600",
      buttonText: "View Deals",
      buttonLink: "/deals",
      bgGradient: "from-orange-50 to-amber-50"
    },
    {
      id: 3,
      title: "New Arrivals",
      subtitle: "Latest Fitness Technology",
      description: "Discover innovative equipment and smart training solutions",
      image: "/api/placeholder/1200/600",
      buttonText: "Explore New Products",
      buttonLink: "/new-arrivals",
      bgGradient: "from-purple-50 to-indigo-50"
    }
  ];

  const categories = [
    {
      name: "Strength Training",
      image: "/api/placeholder/400/300",
      link: "/gym-equipment/category/strength-training",
      description: "Professional equipment"
    },
    {
      name: "Cardio Machines",
      image: "/api/placeholder/400/300",
      link: "/gym-equipment/category/cardio-machines",
      description: "Endurance training"
    },
    {
      name: "Team Sports",
      image: "/api/placeholder/400/300",
      link: "/sports-equipment/category/team-sports",
      description: "Group sports gear"
    },
    {
      name: "Racket Sports",
      image: "/api/placeholder/400/300",
      link: "/sports-equipment/category/racket-sports",
      description: "Tennis & badminton"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Pro Power Rack",
      price: "$899.99",
      originalPrice: "$1,099.99",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 142,
      isNew: true
    },
    {
      id: 2,
      name: "AirRunner Treadmill",
      price: "$2,499.99",
      originalPrice: "$2,999.99",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 89,
      isNew: false
    },
    {
      id: 3,
      name: "Olympic Weight Set",
      price: "$599.99",
      originalPrice: "$749.99",
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 203,
      isNew: false
    },
    {
      id: 4,
      name: "Professional Tennis Racket",
      price: "$199.99",
      originalPrice: "$249.99",
      image: "/api/placeholder/300/300",
      rating: 4.6,
      reviews: 67,
      isNew: true
    }
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Shipping",
      description: "Free delivery on orders above $99"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "2-Year Warranty",
      description: "Comprehensive protection on all products"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "Premium quality guaranteed"
    }
  ];

  // Auto-slide for hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-r ${slide.bgGradient} flex items-center`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="w-1/2 space-y-6">
                  <h1 className="text-5xl font-bold text-gray-900">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl text-blue-600 font-medium">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.buttonLink}
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div className="w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-6xl mb-4">🏋️</div>
                      <p>Product Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-blue-600' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shop By Category
            </h2>
            <p className="text-lg text-gray-600">
              Discover our wide range of premium fitness and sports equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-80 bg-gradient-to-br from-blue-100 to-cyan-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">
                      {index === 0 ? '🏋️' : index === 1 ? '🏃' : index === 2 ? '⚽' : '🎾'}
                    </div>
                    <p className="text-gray-600">Category Image</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm">{category.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Best sellers and new arrivals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center">
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      New
                    </span>
                  )}
                  <div className="text-4xl">
                    {product.id === 4 ? '🎾' : '🏋️'}
                  </div>
                  <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gym-equipment"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Subscribe to get notified about our latest products and exclusive offers
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}