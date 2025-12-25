// app/sports-equipment/water-sports/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function WaterSportsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: [],
    skillLevel: [],
    waterType: []
  });

  const waterSportsProducts = [
    {
      id: 9,
      name: 'Professional Swim Goggles',
      price: '$34.99',
      originalPrice: '$44.99',
      image: '/swim-goggles.jpg',
      rating: 4.6,
      reviews: 189,
      category: 'Swimming',
      brand: 'AquaPro',
      description: 'Anti-fog competitive swim goggles with UV protection and adjustable strap',
      isNew: false,
      isBestseller: true,
      activityType: 'Swimming',
      skillLevel: 'All Levels',
      waterType: ['Pool', 'Open Water'],
      features: ['Anti-Fog', 'UV Protection', 'Adjustable']
    },
    {
      id: 10,
      name: 'Inflatable Stand Up Paddleboard',
      price: '$599.99',
      originalPrice: '$749.99',
      image: '/paddleboard.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Paddleboarding',
      brand: 'WaveRider',
      description: 'Premium inflatable SUP with adjustable paddle and carry bag',
      isNew: true,
      isBestseller: false,
      activityType: 'Paddleboarding',
      skillLevel: 'Intermediate',
      waterType: ['Lake', 'Ocean', 'River'],
      features: ['Inflatable', 'Non-Slip Deck', 'Carry Bag']
    },
    {
      id: 37,
      name: 'Snorkeling Set Pro',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/snorkeling-set.jpg',
      rating: 4.5,
      reviews: 234,
      category: 'Snorkeling',
      brand: 'AquaPro',
      description: 'Complete snorkeling set with dry-top snorkel and panoramic mask',
      isNew: true,
      isBestseller: true,
      activityType: 'Snorkeling',
      skillLevel: 'Beginner',
      waterType: ['Ocean', 'Reef'],
      features: ['Dry-Top Snorkel', 'Panoramic Mask', 'Anti-Fog']
    },
    {
      id: 38,
      name: 'Scuba Diving BCD',
      price: '$499.99',
      originalPrice: '$649.99',
      image: '/scuba-bcd.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'Scuba Diving',
      brand: 'DeepDive',
      description: 'Professional buoyancy control device with integrated weight system',
      isNew: false,
      isBestseller: false,
      activityType: 'Scuba Diving',
      skillLevel: 'Advanced',
      waterType: ['Ocean', 'Deep Water'],
      features: ['Integrated Weights', 'Multiple D-Rings', 'Adjustable']
    },
    {
      id: 39,
      name: 'Waterproof Action Camera',
      price: '$299.99',
      originalPrice: '$399.99',
      image: '/action-camera.jpg',
      rating: 4.8,
      reviews: 156,
      category: 'Accessories',
      brand: 'AquaShot',
      description: '4K waterproof camera with housing for depths up to 60 meters',
      isNew: true,
      isBestseller: true,
      activityType: 'All Water Sports',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      features: ['4K Video', '60m Waterproof', 'Image Stabilization']
    },
    {
      id: 40,
      name: 'Kayak Fishing Package',
      price: '$899.99',
      originalPrice: '$1,199.99',
      image: '/fishing-kayak.jpg',
      rating: 4.6,
      reviews: 78,
      category: 'Kayaking',
      brand: 'PaddlePro',
      description: 'Fishing kayak with rod holders, storage, and comfortable seat',
      isNew: false,
      isBestseller: true,
      activityType: 'Kayaking',
      skillLevel: 'Intermediate',
      waterType: ['Lake', 'Ocean', 'River'],
      features: ['Rod Holders', 'Storage Compartments', 'Comfort Seat']
    },
    {
      id: 41,
      name: 'Wakeboard Package',
      price: '$349.99',
      originalPrice: '$449.99',
      image: '/wakeboard.jpg',
      rating: 4.4,
      reviews: 112,
      category: 'Wakeboarding',
      brand: 'WaveRider',
      description: 'Complete wakeboard package with bindings and board for all skill levels',
      isNew: true,
      isBestseller: false,
      activityType: 'Wakeboarding',
      skillLevel: 'Beginner',
      waterType: ['Lake', 'Ocean'],
      features: ['Adjustable Bindings', 'Durable Construction', 'All-Level Design']
    },
    {
      id: 42,
      name: 'Wetsuit 3/2mm',
      price: '$199.99',
      originalPrice: '$259.99',
      image: '/wetsuit.jpg',
      rating: 4.5,
      reviews: 267,
      category: 'Apparel',
      brand: 'AquaPro',
      description: '3/2mm neoprene wetsuit for water temperatures 60-70°F',
      isNew: false,
      isBestseller: true,
      activityType: 'All Water Sports',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      features: ['3/2mm Neoprene', 'Flatlock Stitching', 'Chest Zip']
    },
    {
      id: 43,
      name: 'Jet Ski Life Vest',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/life-vest.jpg',
      rating: 4.7,
      reviews: 189,
      category: 'Safety',
      brand: 'SafeWater',
      description: 'USCG-approved life vest for jet skiing and power sports',
      isNew: true,
      isBestseller: false,
      activityType: ['Jet Skiing', 'Boating'],
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      features: ['USCG Approved', 'Multiple Sizes', 'Comfort Fit']
    },
    {
      id: 44,
      name: 'Water Skis Set',
      price: '$279.99',
      originalPrice: '$349.99',
      image: '/water-skis.jpg',
      rating: 4.3,
      reviews: 67,
      category: 'Water Skiing',
      brand: 'SpeedWater',
      description: 'Professional water skis with adjustable bindings for adults',
      isNew: false,
      isBestseller: true,
      activityType: 'Water Skiing',
      skillLevel: 'Intermediate',
      waterType: ['Lake', 'Ocean'],
      features: ['Adjustable Bindings', 'Dual Skis', 'Rocker Design']
    },
    {
      id: 45,
      name: 'Underwater Scooter',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/water-scooter.jpg',
      rating: 4.9,
      reviews: 34,
      category: 'Diving',
      brand: 'DeepDive',
      description: 'Electric underwater scooter for diving and snorkeling adventures',
      isNew: true,
      isBestseller: false,
      activityType: ['Scuba Diving', 'Snorkeling'],
      skillLevel: 'Advanced',
      waterType: ['Ocean', 'Lake'],
      features: ['Electric Power', 'Depth Rated', 'Long Battery']
    },
    {
      id: 46,
      name: 'Beach Diving Fins',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/diving-fins.jpg',
      rating: 4.6,
      reviews: 145,
      category: 'Diving',
      brand: 'AquaPro',
      description: 'Open-heel diving fins with adjustable straps and channels',
      isNew: false,
      isBestseller: true,
      activityType: ['Scuba Diving', 'Snorkeling'],
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      features: ['Adjustable Straps', 'Water Channels', 'Durable Blades']
    }
  ];

  const waterActivities = [
    {
      name: 'Swimming',
      icon: '🏊',
      description: 'Goggles, Caps & Training',
      count: '15 products',
      slug: 'swimming'
    },
    {
      name: 'Paddleboarding',
      icon: '🛶',
      description: 'SUPs, Paddles & Accessories',
      count: '12 products',
      slug: 'paddleboarding'
    },
    {
      name: 'Scuba Diving',
      icon: '🤿',
      description: 'BCD, Regulators & Tanks',
      count: '18 products',
      slug: 'scuba-diving'
    },
    {
      name: 'Snorkeling',
      icon: '🐠',
      description: 'Masks, Snorkels & Fins',
      count: '10 products',
      slug: 'snorkeling'
    },
    {
      name: 'Kayaking',
      icon: '🛶',
      description: 'Kayaks, Paddles & Storage',
      count: '14 products',
      slug: 'kayaking'
    },
    {
      name: 'Wakeboarding',
      icon: '🌊',
      description: 'Boards, Bindings & Ropes',
      count: '8 products',
      slug: 'waterboarding'
    }
  ];

  const filters = {
    category: ['Swimming', 'Paddleboarding', 'Scuba Diving', 'Snorkeling', 'Kayaking', 'Wakeboarding', 'Water Skiing', 'Safety', 'Apparel', 'Accessories'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['AquaPro', 'WaveRider', 'DeepDive', 'AquaShot', 'PaddlePro', 'SafeWater', 'SpeedWater'],
    skillLevel: ['Beginner', 'Intermediate', 'Advanced', 'Professional', 'All Levels'],
    waterType: ['Pool', 'Ocean', 'Lake', 'River', 'Reef', 'Deep Water', 'All Water Types']
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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Water Sports Equipment
            </h1>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Dive into adventure with premium swimming, diving, paddleboarding, and water sports gear for every aquatic activity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-200"
              >
                Shop Water Gear
              </Link>
              <Link
                href="/sports-equipment"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                View All Sports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Water Activities */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Water Sports Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {waterActivities.map((activity, index) => (
              <Link
                key={index}
                href={`/sports-equipment/category/water-sports/features/${activity.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {activity.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{activity.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                <span className="text-xs text-cyan-600 font-medium">{activity.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Waterproof Guarantee</h3>
              <p className="text-gray-600">All equipment tested and certified for water resistance and durability.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Saltwater Ready</h3>
              <p className="text-gray-600">Specially treated materials to withstand saltwater corrosion and wear.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Certified</h3>
              <p className="text-gray-600">All safety equipment meets USCG and international standards.</p>
            </div>
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
                Water Sports Equipment
              </h2>
              <p className="text-gray-600">
                Showing {waterSportsProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-cyan-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="safety">Safety Rated</option>
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

                {/* Activity Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Activity Type</h4>
                  <div className="space-y-2">
                    {filters.category.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.category.includes(category)}
                          onChange={() => toggleFilter('category', category)}
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
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
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Skill Level Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Skill Level</h4>
                  <div className="space-y-2">
                    {filters.skillLevel.map((level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.skillLevel.includes(level)}
                          onChange={() => toggleFilter('skillLevel', level)}
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Water Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Water Type</h4>
                  <div className="space-y-2">
                    {filters.waterType.map((waterType) => (
                      <label key={waterType} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.waterType.includes(waterType)}
                          onChange={() => toggleFilter('waterType', waterType)}
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{waterType}</span>
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
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], skillLevel: [], waterType: [] })}
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
                  {waterSportsProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-cyan-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.activityType === 'Swimming' ? '🏊' : 
                           product.activityType === 'Paddleboarding' ? '🛶' :
                           product.activityType === 'Scuba Diving' ? '🤿' :
                           product.activityType === 'Snorkeling' ? '🐠' :
                           product.activityType === 'Kayaking' ? '🛶' :
                           product.activityType === 'Wakeboarding' ? '🌊' : '💧'}
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full">
                              {product.activityType}
                            </span>
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                              {product.skillLevel}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Features Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
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
                          <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-200 text-sm font-semibold">
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
                  {waterSportsProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-cyan-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.activityType === 'Swimming' ? '🏊' : 
                           product.activityType === 'Paddleboarding' ? '🛶' :
                           product.activityType === 'Scuba Diving' ? '🤿' :
                           product.activityType === 'Snorkeling' ? '🐠' :
                           product.activityType === 'Kayaking' ? '🛶' :
                           product.activityType === 'Wakeboarding' ? '🌊' : '💧'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full">
                                {product.activityType}
                              </span>
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                {product.skillLevel}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Features Tags */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {product.features.map((feature, index) => (
                                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>
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
                          <span className="text-sm text-gray-600">Water Type: {product.waterType.join(', ')}</span>
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
                          <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors duration-200 font-semibold">
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

      {/* Safety & Training Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Water Safety & Training
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Stay safe on the water with certified equipment and professional training resources.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="font-semibold mb-2">Safety Certified</h3>
                <p className="text-cyan-100 text-sm">All safety gear meets USCG and international standards</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="font-semibold mb-2">Training Courses</h3>
                <p className="text-cyan-100 text-sm">Scuba, paddleboarding, and safety certification courses</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="font-semibold mb-2">Gear Maintenance</h3>
                <p className="text-cyan-100 text-sm">Cleaning and storage tips for saltwater equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Water Sports Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get diving spots recommendations, water safety tips, and exclusive gear deals
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
            <button className="bg-cyan-600 text-white px-6 py-3 rounded-r-lg hover:bg-cyan-700 transition-colors duration-200 font-semibold">
              Dive In
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}