// app/gym-equipment/page.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function GymEquipmentPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: []
  });

  const heroSlides = [
    {
      image: '/gym-banner-1.jpg',
      title: 'Premium Gym Equipment',
      subtitle: 'Professional Grade, Home Convenience',
      description: 'Discover our top-quality fitness equipment for your home or commercial gym',
      buttonText: 'Shop Now',
      bgGradient: 'from-blue-100 to-cyan-50'
    },
    {
      image: '/gym-banner-2.jpg',
      title: 'Summer Fitness Sale',
      subtitle: 'Up to 40% Off Premium Equipment',
      description: 'Transform your workout space with our exclusive deals',
      buttonText: 'View Deals',
      bgGradient: 'from-gray-100 to-blue-50'
    }
  ];

  const equipmentTypes = [
    {
      name: 'Strength Training',
      image: '/strength.jpg',
      link: '/gym-equipment/strength',
      description: 'Power racks & weight systems',
      slug: 'strength-training'
    },
    {
      name: 'Cardio Machines',
      image: '/cardio.jpg',
      link: '/gym-equipment/cardio',
      description: 'Treadmills & ellipticals',
      slug: 'cardio-machines'
    },
    {
      name: 'Free Weights',
      image: '/weights.jpg',
      link: '/gym-equipment/free-weights',
      description: 'Dumbbells & barbells',
      slug: 'free-weights'
    },
    {
      name: 'Functional Training',
      image: '/functional.jpg',
      link: '/gym-equipment/functional',
      description: 'Benches & accessories',
      slug: 'functional-training'
    },
    {
      name: 'Accessories',
      image: '/accessories.jpg',
      link: '/gym-equipment/accessories',
      description: 'Gear & equipment',
      slug: 'accessories'
    }
  ];

  const gymProducts = [
    {
      id: 1,
      name: 'Pro Power Rack with Lat Pulldown',
      price: '$899.99',
      originalPrice: '$1,099.99',
      image: '/power-rack.jpg',
      rating: 4.8,
      reviews: 142,
      category: 'Strength Training',
      brand: 'ProFit',
      description: 'Professional grade power rack with integrated lat pulldown system',
      isNew: true,
      isBestseller: true
    },
    {
      id: 2,
      name: 'AirRunner Commercial Treadmill',
      price: '$2,499.99',
      originalPrice: '$2,999.99',
      image: '/treadmill.jpg',
      rating: 4.9,
      reviews: 89,
      category: 'Cardio Machines',
      brand: 'CardioMax',
      description: 'Commercial grade treadmill with advanced cushioning',
      isNew: false,
      isBestseller: true
    },
    {
      id: 3,
      name: 'Olympic Weight Set (300lb)',
      price: '$599.99',
      originalPrice: '$749.99',
      image: '/weight-set.jpg',
      rating: 4.7,
      reviews: 203,
      category: 'Free Weights',
      brand: 'IronMaster',
      description: 'Complete Olympic weight set with bumper plates',
      isNew: false,
      isBestseller: true
    },
    {
      id: 4,
      name: 'Smart Home Gym System',
      price: '$1,599.99',
      originalPrice: null,
      image: '/home-gym.jpg',
      rating: 4.6,
      reviews: 67,
      category: 'Functional Training',
      brand: 'TechFit',
      description: 'All-in-one smart home gym with digital resistance',
      isNew: true,
      isBestseller: false
    },
    {
      id: 5,
      name: 'Adjustable Dumbbell Set (5-50lb)',
      price: '$399.99',
      originalPrice: '$499.99',
      image: '/dumbbells.jpg',
      rating: 4.5,
      reviews: 156,
      category: 'Free Weights',
      brand: 'QuickFit',
      description: 'Space-saving adjustable dumbbell set',
      isNew: false,
      isBestseller: false
    },
    {
      id: 6,
      name: 'Commercial Elliptical Trainer',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/elliptical.jpg',
      rating: 4.4,
      reviews: 94,
      category: 'Cardio Machines',
      brand: 'CardioMax',
      description: 'Smooth and quiet elliptical trainer',
      isNew: false,
      isBestseller: false
    },
    {
      id: 7,
      name: 'Multi-Functional Bench',
      price: '$299.99',
      originalPrice: null,
      image: '/bench.jpg',
      rating: 4.3,
      reviews: 178,
      category: 'Strength Training',
      brand: 'ProFit',
      description: 'Versatile weight bench with multiple adjustments',
      isNew: false,
      isBestseller: false
    },
    {
      id: 8,
      name: 'Air Bike Exercise Bike',
      price: '$699.99',
      originalPrice: '$899.99',
      image: '/air-bike.jpg',
      rating: 4.7,
      reviews: 112,
      category: 'Cardio Machines',
      brand: 'AeroBike',
      description: 'High-intensity air bike for full-body workouts',
      isNew: true,
      isBestseller: false
    },
    {
      id: 9,
      name: 'Premium Yoga Mat Set',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/yoga-mat.jpg',
      rating: 4.6,
      reviews: 234,
      category: 'Accessories',
      brand: 'FlexGear',
      description: 'Non-slip yoga mat with carrying strap and blocks',
      isNew: true,
      isBestseller: true
    },
    {
      id: 10,
      name: 'Resistance Band Set',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/resistance-bands.jpg',
      rating: 4.4,
      reviews: 189,
      category: 'Accessories',
      brand: 'PowerFlex',
      description: '5-level resistance band set with handles',
      isNew: false,
      isBestseller: true
    },
    {
      id: 11,
      name: 'Professional Gym Gloves',
      price: '$34.99',
      originalPrice: '$44.99',
      image: '/gym-gloves.jpg',
      rating: 4.5,
      reviews: 156,
      category: 'Accessories',
      brand: 'GripMaster',
      description: 'Padded gloves with wrist support',
      isNew: false,
      isBestseller: false
    },
    {
      id: 12,
      name: 'Smart Water Bottle',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/water-bottle.jpg',
      rating: 4.3,
      reviews: 98,
      category: 'Accessories',
      brand: 'HydroFit',
      description: 'Hydration tracking smart bottle',
      isNew: true,
      isBestseller: false
    }
  ];

  const filters = {
    category: ['Strength Training', 'Cardio Machines', 'Free Weights', 'Functional Training', 'Accessories'],
    priceRange: [
      'Under $100',
      '$100 - $500',
      '$500 - $1,000',
      '$1,000 - $2,000',
      'Above $2,000'
    ],
    brand: ['ProFit', 'CardioMax', 'IronMaster', 'TechFit', 'QuickFit', 'AeroBike', 'FlexGear', 'PowerFlex', 'GripMaster', 'HydroFit']
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
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl text-blue-600 font-medium mb-4">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {slide.description}
                  </p>
                  <Link
                    href="#products"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
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

      {/* Equipment Types Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            {equipmentTypes.map((type, index) => (
              <Link
                key={index}
                href={`/gym-equipment/category/${type.slug}`}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-blue-200 group-hover:to-cyan-300 transition-all duration-200">
                  <div className="text-2xl">
                    {type.name === 'Accessories' ? '🎯' : 
                     type.name === 'Strength Training' ? '🏋️' :
                     type.name === 'Cardio Machines' ? '🏃' :
                     type.name === 'Free Weights' ? '💪' : '🛋️'}
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                  {type.name}
                </span>
                <p className="text-xs text-gray-500 mt-1">{type.description}</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Gym Equipment Collection
              </h2>
              <p className="text-gray-600">
                Showing {gymProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h3>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                  <div className="space-y-2">
                    {filters.category.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.category.includes(category)}
                          onChange={() => toggleFilter('category', category)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Brand</h4>
                  <div className="space-y-2">
                    {filters.brand.map((brand) => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.brand.includes(brand)}
                          onChange={() => toggleFilter('brand', brand)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                  {gymProducts.map((product) => (
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
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Accessories' ? '🎯' : 
                           product.category === 'Strength Training' ? '🏋️' :
                           product.category === 'Cardio Machines' ? '🏃' :
                           product.category === 'Free Weights' ? '💪' : '🛋️'}
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
                        <div className="flex items-center mb-3">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-amber-400 fill-current" />
                            <span className="ml-1 text-sm text-gray-600">
                              {product.rating} ({product.reviews} reviews)
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
              ) : (
                /* List View */
                <div className="space-y-6">
                  {gymProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Accessories' ? '🎯' : 
                           product.category === 'Strength Training' ? '🏋️' :
                           product.category === 'Cardio Machines' ? '🏃' :
                           product.category === 'Free Weights' ? '💪' : '🛋️'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {product.category}
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
                          <span className="text-sm text-gray-600">Brand: {product.brand}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">Category: {product.category}</span>
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
                          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with New Arrivals
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get notified about our latest equipment and exclusive offers
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