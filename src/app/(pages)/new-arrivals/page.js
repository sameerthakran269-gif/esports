// app/new-arrivals/page.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, Clock, Zap } from 'lucide-react';

export default function NewArrivalsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: []
  });

  const heroSlides = [
    {
      image: '/new-arrivals-banner-1.jpg',
      title: 'Latest Arrivals',
      subtitle: 'Fresh Off the Production Line',
      description: 'Be the first to experience our newest fitness and sports equipment',
      buttonText: 'Shop New Arrivals',
      bgGradient: 'from-red-100 to-pink-50'
    },
    {
      image: '/new-arrivals-banner-2.jpg',
      title: 'Just Launched',
      subtitle: 'Innovative Fitness Technology',
      description: 'Cutting-edge equipment featuring the latest advancements in fitness tech',
      buttonText: 'Explore Innovations',
      bgGradient: 'from-blue-100 to-cyan-50'
    }
  ];

  const quickCategories = [
    {
      name: 'Smart Equipment',
      icon: '🤖',
      count: 12,
      link: '/new-arrivals/smart-equipment',
      description: 'AI-powered fitness gear'
    },
    {
      name: 'Cardio Machines',
      icon: '🏃',
      count: 8,
      link: '/new-arrivals/cardio',
      description: 'Latest treadmill & bike tech'
    },
    {
      name: 'Strength Training',
      icon: '💪',
      count: 15,
      link: '/new-arrivals/strength',
      description: 'Advanced strength systems'
    },
    {
      name: 'Sports Gear',
      icon: '⚽',
      count: 9,
      link: '/new-arrivals/sports',
      description: 'New sports equipment'
    },
    {
      name: 'Accessories',
      icon: '🎯',
      count: 18,
      link: '/new-arrivals/accessories',
      description: 'Latest fitness accessories'
    }
  ];

  const newArrivalProducts = [
    // Smart Equipment
    {
      id: 1,
      name: 'AI Smart Mirror',
      price: '$1,999.99',
      originalPrice: '$2,499.99',
      image: '/smart-mirror.jpg',
      rating: 4.9,
      reviews: 23,
      category: 'Smart Equipment',
      brand: 'TechFit',
      description: 'Interactive fitness mirror with AI personal trainer',
      isNew: true,
      isBestseller: false,
      arrivalDate: '2024-03-15',
      isHot: true
    },
    {
      id: 2,
      name: 'Smart Jump Rope',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/smart-jump-rope.jpg',
      rating: 4.7,
      reviews: 45,
      category: 'Smart Equipment',
      brand: 'FitTech',
      description: 'Bluetooth connected jump rope with performance tracking',
      isNew: true,
      isBestseller: true,
      arrivalDate: '2024-03-10',
      isHot: true
    },

    // Cardio Machines
    {
      id: 3,
      name: 'Foldable Treadmill Pro',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/foldable-treadmill.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Cardio Machines',
      brand: 'CardioMax',
      description: 'Space-saving treadmill with 4K display',
      isNew: true,
      isBestseller: false,
      arrivalDate: '2024-03-12',
      isHot: false
    },
    {
      id: 4,
      name: 'Magnetic Rowing Machine',
      price: '$899.99',
      originalPrice: '$1,099.99',
      image: '/magnetic-rower.jpg',
      rating: 4.6,
      reviews: 34,
      category: 'Cardio Machines',
      brand: 'RowPro',
      description: 'Silent magnetic resistance rowing machine',
      isNew: true,
      isBestseller: false,
      arrivalDate: '2024-03-08',
      isHot: true
    },

    // Strength Training
    {
      id: 5,
      name: 'Modular Power Rack 2.0',
      price: '$1,499.99',
      originalPrice: '$1,799.99',
      image: '/modular-power-rack.jpg',
      rating: 4.9,
      reviews: 28,
      category: 'Strength Training',
      brand: 'ProFit',
      description: 'Expandable power rack with smart attachments',
      isNew: true,
      isBestseller: true,
      arrivalDate: '2024-03-14',
      isHot: true
    },
    {
      id: 6,
      name: 'Adjustable Kettlebell Set',
      price: '$349.99',
      originalPrice: '$429.99',
      image: '/adjustable-kettlebell.jpg',
      rating: 4.5,
      reviews: 56,
      category: 'Strength Training',
      brand: 'IronMaster',
      description: 'Space-saving adjustable kettlebell system',
      isNew: true,
      isBestseller: false,
      arrivalDate: '2024-03-05',
      isHot: false
    },

    // Sports Gear
    {
      id: 7,
      name: 'Smart Basketball',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/smart-basketball.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'Sports Gear',
      brand: 'ShotTracker',
      description: 'Connected basketball with shot analytics',
      isNew: true,
      isBestseller: true,
      arrivalDate: '2024-03-13',
      isHot: true
    },
    {
      id: 8,
      name: 'Carbon Fiber Tennis Racket',
      price: '$279.99',
      originalPrice: '$349.99',
      image: '/carbon-tennis-racket.jpg',
      rating: 4.8,
      reviews: 42,
      category: 'Sports Gear',
      brand: 'AcePro',
      description: 'Ultra-light carbon fiber tennis racket',
      isNew: true,
      isBestseller: false,
      arrivalDate: '2024-03-09',
      isHot: false
    },

    // Accessories
    {
      id: 9,
      name: 'Smart Weightlifting Belt',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/smart-belt.jpg',
      rating: 4.6,
      reviews: 31,
      category: 'Accessories',
      brand: 'LiftTech',
      description: 'Connected belt with form feedback',
      isNew: true,
      isBestseller: false,
      arrivalDate: '2024-03-11',
      isHot: true
    },
    {
      id: 10,
      name: 'VR Fitness Headset',
      price: '$399.99',
      originalPrice: '$499.99',
      image: '/vr-fitness.jpg',
      rating: 4.4,
      reviews: 27,
      category: 'Accessories',
      brand: 'VirtualFit',
      description: 'Immersive VR workouts with motion tracking',
      isNew: true,
      isBestseller: false,
      arrivalDate: '2024-03-07',
      isHot: true
    },
    {
      id: 11,
      name: 'Smart Water Bottle Pro',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/smart-bottle-pro.jpg',
      rating: 4.5,
      reviews: 78,
      category: 'Accessories',
      brand: 'HydroFit',
      description: 'Hydration tracking with electrolyte monitoring',
      isNew: true,
      isBestseller: true,
      arrivalDate: '2024-03-06',
      isHot: false
    },
    {
      id: 12,
      name: 'Compression Sleeve Set',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/compression-sleeves.jpg',
      rating: 4.3,
      reviews: 63,
      category: 'Accessories',
      brand: 'RecoveryPro',
      description: 'Smart compression sleeves with recovery tracking',
      isNew: true,
      isBestseller: false,
      arrivalDate: '2024-03-04',
      isHot: false
    },

    // Additional New Arrivals
    {
      id: 13,
      name: 'Portable Home Gym',
      price: '$799.99',
      originalPrice: '$999.99',
      image: '/portable-gym.jpg',
      rating: 4.7,
      reviews: 38,
      category: 'Strength Training',
      brand: 'TravelFit',
      description: 'Complete gym system in a portable case',
      isNew: true,
      isBestseller: false,
      arrivalDate: '2024-03-03',
      isHot: true
    },
    {
      id: 14,
      name: 'Smart Yoga Mat',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/smart-yoga-mat.jpg',
      rating: 4.6,
      reviews: 52,
      category: 'Accessories',
      brand: 'ZenTech',
      description: 'Mat with pose correction and guided sessions',
      isNew: true,
      isBestseller: true,
      arrivalDate: '2024-03-02',
      isHot: true
    },
    {
      id: 15,
      name: 'Hybrid Exercise Bike',
      price: '$1,099.99',
      originalPrice: '$1,299.99',
      image: '/hybrid-bike.jpg',
      rating: 4.8,
      reviews: 29,
      category: 'Cardio Machines',
      brand: 'CyclePro',
      description: 'Combines cycling with upper body workout',
      isNew: true,
      isBestseller: false,
      arrivalDate: '2024-03-01',
      isHot: false
    }
  ];

  const filters = {
    category: ['Smart Equipment', 'Cardio Machines', 'Strength Training', 'Sports Gear', 'Accessories'],
    priceRange: [
      'Under $100',
      '$100 - $500',
      '$500 - $1,000',
      '$1,000 - $2,000',
      'Above $2,000'
    ],
    brand: ['TechFit', 'FitTech', 'CardioMax', 'RowPro', 'ProFit', 'IronMaster', 'ShotTracker', 'AcePro', 'LiftTech', 'VirtualFit', 'HydroFit', 'RecoveryPro', 'TravelFit', 'ZenTech', 'CyclePro']
  };

  // Get days since arrival
  const getDaysSinceArrival = (arrivalDate) => {
    const arrival = new Date(arrivalDate);
    const today = new Date();
    const diffTime = Math.abs(today - arrival);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel Section */}
      <section className="relative h-[400px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-r ${slide.bgGradient} flex items-center`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Zap className="w-4 h-4 mr-1" />
                      JUST LAUNCHED
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl text-red-600 font-medium mb-4">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {slide.description}
                  </p>
                  <Link
                    href="#products"
                    className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                  >
                    {slide.buttonText}
                  </Link>
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
      </section>

      {/* Quick Categories Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore New Categories
            </h2>
            <p className="text-gray-600 text-lg">
              Discover the latest additions across all fitness categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {quickCategories.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group border border-gray-100"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {category.description}
                </p>
                <div className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full inline-block">
                  {category.count} new items
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="products" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <div className="flex items-center mb-2">
                <Clock className="w-6 h-6 text-red-600 mr-2" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Latest Arrivals
                </h2>
              </div>
              <p className="text-gray-600">
                {newArrivalProducts.length} brand new products added recently
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                <option value="newest">Newest First</option>
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="hot">Hot Items</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter New Arrivals
                </h3>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {filters.category.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.category.includes(category)}
                          onChange={() => toggleFilter('category', category)}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {filters.priceRange.map((range) => (
                      <label key={range} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.priceRange.includes(range)}
                          onChange={() => toggleFilter('priceRange', range)}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Brand</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {filters.brand.map((brand) => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.brand.includes(brand)}
                          onChange={() => toggleFilter('brand', brand)}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [] })}
                  className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {newArrivalProducts.map((product) => {
                    const daysSinceArrival = getDaysSinceArrival(product.arrivalDate);
                    return (
                      <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 relative"
                      >
                        {/* New Arrival Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {daysSinceArrival === 1 ? 'TODAY' : `${daysSinceArrival}D AGO`}
                          </div>
                        </div>

                        {product.isHot && (
                          <div className="absolute top-3 right-3 z-10">
                            <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                              <Zap className="w-3 h-3 mr-1" />
                              HOT
                            </div>
                          </div>
                        )}

                        <div className="relative h-64 bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
                          {product.isNew && (
                            <span className="absolute top-12 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              NEW
                            </span>
                          )}
                          {product.isBestseller && (
                            <span className="absolute top-12 right-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              BESTSELLER
                            </span>
                          )}
                          <div className="text-4xl">
                            {product.category === 'Smart Equipment' ? '🤖' : 
                             product.category === 'Cardio Machines' ? '🏃' :
                             product.category === 'Strength Training' ? '💪' :
                             product.category === 'Sports Gear' ? '⚽' : '🎯'}
                          </div>
                          <button className="absolute top-16 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <Heart className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">{product.name}</h3>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {product.category}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-amber-400 fill-current" />
                              <span className="ml-1 text-sm text-gray-600">
                                {product.rating} ({product.reviews})
                              </span>
                            </div>
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                              {product.brand}
                            </span>
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
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm font-semibold">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* List View */
                <div className="space-y-6">
                  {newArrivalProducts.map((product) => {
                    const daysSinceArrival = getDaysSinceArrival(product.arrivalDate);
                    return (
                      <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100 relative"
                      >
                        {/* New Arrival Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {daysSinceArrival === 1 ? 'TODAY' : `${daysSinceArrival}D AGO`}
                          </div>
                        </div>

                        {product.isHot && (
                          <div className="absolute top-3 right-3 z-10">
                            <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                              <Zap className="w-3 h-3 mr-1" />
                              HOT
                            </div>
                          </div>
                        )}

                        <div className="w-48 relative bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
                          {product.isNew && (
                            <span className="absolute top-12 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              NEW
                            </span>
                          )}
                          {product.isBestseller && (
                            <span className="absolute top-12 right-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              BESTSELLER
                            </span>
                          )}
                          <div className="text-4xl">
                            {product.category === 'Smart Equipment' ? '🤖' : 
                             product.category === 'Cardio Machines' ? '🏃' :
                             product.category === 'Strength Training' ? '💪' :
                             product.category === 'Sports Gear' ? '⚽' : '🎯'}
                          </div>
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                                  {product.brand}
                                </span>
                              </div>
                              <p className="text-gray-600 mb-3">{product.description}</p>
                            </div>
                            <button className="bg-white/80 hover:bg-white p-2 rounded-full">
                              <Heart className="w-5 h-5 text-gray-600" />
                            </button>
                          </div>
                          
                          <div className="flex items-center mb-4">
                            <div className="flex items-center mr-6">
                              <Star className="w-4 h-4 text-amber-400 fill-current" />
                              <span className="ml-1 text-sm text-gray-600">
                                {product.rating} ({product.reviews} reviews)
                              </span>
                            </div>
                            <span className="text-sm text-gray-600">Category: {product.category}</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-sm text-gray-600">Arrived: {daysSinceArrival} days ago</span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-xl font-bold text-gray-900">{product.price}</span>
                              {product.originalPrice && (
                                <span className="ml-2 text-sm text-gray-500 line-through">
                                  {product.originalPrice}
                                </span>
                              )}
                            </div>
                            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Be the First to Know
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Get early access to new arrivals and exclusive pre-order opportunities
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition-colors duration-200 font-semibold">
              Get Early Access
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}