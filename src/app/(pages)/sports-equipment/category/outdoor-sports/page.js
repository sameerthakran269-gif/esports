// app/sports-equipment/outdoor-sports/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function OutdoorSportsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: [],
    activityType: []
  });

  const outdoorSportsProducts = [
    {
      id: 7,
      name: 'Professional Camping Tent',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/camping-tent.jpg',
      rating: 4.7,
      reviews: 145,
      category: 'Camping',
      brand: 'TrailMaster',
      description: '4-person waterproof camping tent with UV protection and ventilation',
      isNew: false,
      isBestseller: true,
      activityType: 'Camping',
      weight: '8.2 lbs',
      capacity: '4 people'
    },
    {
      id: 8,
      name: 'Hiking Backpack',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/hiking-backpack.jpg',
      rating: 4.5,
      reviews: 212,
      category: 'Hiking',
      brand: 'TrekGear',
      description: '65L waterproof hiking backpack with adjustable frame and multiple compartments',
      isNew: true,
      isBestseller: false,
      activityType: 'Hiking',
      weight: '4.1 lbs',
      capacity: '65L'
    },
    {
      id: 27,
      name: 'Sleeping Bag System',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/sleeping-bag.jpg',
      rating: 4.6,
      reviews: 178,
      category: 'Camping',
      brand: 'TrailMaster',
      description: 'All-weather sleeping bag rated for -20°F with compression sack',
      isNew: true,
      isBestseller: true,
      activityType: 'Camping',
      weight: '3.8 lbs',
      temperature: '-20°F'
    },
    {
      id: 28,
      name: 'Portable Camping Stove',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/camping-stove.jpg',
      rating: 4.4,
      reviews: 234,
      category: 'Camping',
      brand: 'FlamePro',
      description: 'Compact propane stove with wind shield and adjustable flame',
      isNew: false,
      isBestseller: false,
      activityType: 'Camping',
      weight: '2.1 lbs',
      fuel: 'Propane'
    },
    {
      id: 29,
      name: 'Trekking Poles Set',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/trekking-poles.jpg',
      rating: 4.7,
      reviews: 156,
      category: 'Hiking',
      brand: 'TrekGear',
      description: 'Carbon fiber adjustable trekking poles with shock absorption',
      isNew: false,
      isBestseller: true,
      activityType: 'Hiking',
      weight: '1.2 lbs',
      material: 'Carbon Fiber'
    },
    {
      id: 30,
      name: 'Fishing Rod Combo',
      price: '$159.99',
      originalPrice: '$199.99',
      image: '/fishing-rod.jpg',
      rating: 4.5,
      reviews: 89,
      category: 'Fishing',
      brand: 'CatchMaster',
      description: 'Professional spinning rod and reel combo with tackle box',
      isNew: true,
      isBestseller: false,
      activityType: 'Fishing',
      weight: '5.5 lbs',
      length: '7 feet'
    },
    {
      id: 31,
      name: 'Mountain Bike',
      price: '$899.99',
      originalPrice: '$1,199.99',
      image: '/mountain-bike.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Cycling',
      brand: 'TrailBlazer',
      description: 'Full-suspension mountain bike with 21-speed gear system',
      isNew: false,
      isBestseller: true,
      activityType: 'Cycling',
      weight: '28.5 lbs',
      speeds: '21'
    },
    {
      id: 32,
      name: 'Kayak Package',
      price: '$499.99',
      originalPrice: '$649.99',
      image: '/kayak.jpg',
      rating: 4.6,
      reviews: 112,
      category: 'Water Sports',
      brand: 'PaddlePro',
      description: '10-foot recreational kayak with paddle and life vest',
      isNew: true,
      isBestseller: false,
      activityType: 'Paddling',
      weight: '42 lbs',
      capacity: '300 lbs'
    },
    {
      id: 33,
      name: 'Climbing Harness',
      price: '$119.99',
      originalPrice: '$149.99',
      image: '/climbing-harness.jpg',
      rating: 4.7,
      reviews: 78,
      category: 'Climbing',
      brand: 'SummitPro',
      description: 'Professional climbing harness with gear loops and adjustable leg loops',
      isNew: false,
      isBestseller: true,
      activityType: 'Climbing',
      weight: '1.8 lbs',
      size: 'Adjustable'
    },
    {
      id: 34,
      name: 'Portable Hammock',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/hammock.jpg',
      rating: 4.4,
      reviews: 267,
      category: 'Camping',
      brand: 'RelaxGear',
      description: 'Lightweight parachute nylon hammock with carabiners',
      isNew: true,
      isBestseller: false,
      activityType: 'Camping',
      weight: '1.5 lbs',
      capacity: '400 lbs'
    },
    {
      id: 35,
      name: 'Binoculars for Wildlife',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/binoculars.jpg',
      rating: 4.6,
      reviews: 134,
      category: 'Wildlife',
      brand: 'ViewMaster',
      description: '10x42 waterproof binoculars with multi-coated lenses',
      isNew: false,
      isBestseller: true,
      activityType: 'Wildlife Viewing',
      weight: '1.9 lbs',
      magnification: '10x'
    },
    {
      id: 36,
      name: 'Camping Cook Set',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/cook-set.jpg',
      rating: 4.3,
      reviews: 189,
      category: 'Camping',
      brand: 'TrailMaster',
      description: '12-piece camping cookware set with non-stick coating',
      isNew: true,
      isBestseller: false,
      activityType: 'Camping',
      weight: '3.2 lbs',
      pieces: '12'
    }
  ];

  const outdoorActivities = [
    {
      name: 'Camping',
      icon: '🏕️',
      description: 'Tents, Sleeping Bags & Gear',
      count: '18 products',
      slug: 'camping'
    },
    {
      name: 'Hiking',
      icon: '🥾',
      description: 'Backpacks, Poles & Footwear',
      count: '15 products',
      slug: 'hiking'
    },
    {
      name: 'Fishing',
      icon: '🎣',
      description: 'Rods, Reels & Tackle',
      count: '12 products',
      slug: 'fishing'
    },
    {
      name: 'Cycling',
      icon: '🚴',
      description: 'Bikes, Helmets & Accessories',
      count: '20 products',
      slug: 'cycling'
    },
    {
      name: 'Climbing',
      icon: '🧗',
      description: 'Harnesses, Ropes & Safety',
      count: '8 products',
      slug: 'climbing'
    },
    {
      name: 'Paddling',
      icon: '🛶',
      description: 'Kayaks, Paddles & Safety',
      count: '10 products',
      slug: 'paddling'
    }
  ];

  const filters = {
    category: ['Camping', 'Hiking', 'Fishing', 'Cycling', 'Climbing', 'Water Sports', 'Wildlife'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['TrailMaster', 'TrekGear', 'FlamePro', 'CatchMaster', 'TrailBlazer', 'PaddlePro', 'SummitPro', 'RelaxGear', 'ViewMaster'],
    activityType: ['Camping', 'Hiking', 'Fishing', 'Cycling', 'Climbing', 'Paddling', 'Wildlife Viewing']
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
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Outdoor Sports & Adventure Gear
            </h1>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Explore the great outdoors with premium camping, hiking, fishing, and adventure equipment for every terrain.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200"
              >
                Shop Outdoor Gear
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

      {/* Adventure Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Outdoor Adventure Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {outdoorActivities.map((activity, index) => (
              <Link
                key={index}
                href={`/sports-equipment/category/outdoor-sports/features/${activity.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {activity.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{activity.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                <span className="text-xs text-amber-600 font-medium">{activity.count}</span>
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
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌧️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Weather Resistant</h3>
              <p className="text-gray-600">All gear tested for waterproof and UV protection in extreme conditions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightweight Design</h3>
              <p className="text-gray-600">Premium materials that reduce weight without compromising durability.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable materials and responsible manufacturing practices.</p>
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
                Outdoor Adventure Gear
              </h2>
              <p className="text-gray-600">
                Showing {outdoorSportsProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-amber-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-amber-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="weight">Lightest First</option>
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
                    {filters.activityType.map((activity) => (
                      <label key={activity} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.activityType.includes(activity)}
                          onChange={() => toggleFilter('activityType', activity)}
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{activity}</span>
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
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
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
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

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
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], activityType: [] })}
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
                  {outdoorSportsProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.activityType === 'Camping' ? '🏕️' : 
                           product.activityType === 'Hiking' ? '🥾' :
                           product.activityType === 'Fishing' ? '🎣' :
                           product.activityType === 'Cycling' ? '🚴' :
                           product.activityType === 'Climbing' ? '🧗' :
                           product.activityType === 'Paddling' ? '🛶' : '🦌'}
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full">
                              {product.activityType}
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {product.weight}
                            </span>
                          </div>
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
                          <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 text-sm font-semibold">
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
                  {outdoorSportsProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.activityType === 'Camping' ? '🏕️' : 
                           product.activityType === 'Hiking' ? '🥾' :
                           product.activityType === 'Fishing' ? '🎣' :
                           product.activityType === 'Cycling' ? '🚴' :
                           product.activityType === 'Climbing' ? '🧗' :
                           product.activityType === 'Paddling' ? '🛶' : '🦌'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full">
                                {product.activityType}
                              </span>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {product.weight}
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
                          <span className="text-sm text-gray-600">Activity: {product.activityType}</span>
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
                          <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-200 font-semibold">
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

      {/* Adventure Guide Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Outdoor Adventure Guides
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Get expert advice and planning resources for your next outdoor adventure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="font-semibold mb-2">Trip Planning</h3>
                <p className="text-amber-100 text-sm">Route maps, gear checklists, and safety guidelines</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🎒</div>
                <h3 className="font-semibold mb-2">Gear Selection</h3>
                <p className="text-amber-100 text-sm">Expert recommendations based on activity and season</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🛠️</div>
                <h3 className="font-semibold mb-2">Gear Maintenance</h3>
                <p className="text-amber-100 text-sm">Cleaning, storage, and repair tips for longevity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Outdoor Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get trail recommendations, camping tips, and exclusive outdoor gear deals
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <button className="bg-amber-600 text-white px-6 py-3 rounded-r-lg hover:bg-amber-700 transition-colors duration-200 font-semibold">
              Explore More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}