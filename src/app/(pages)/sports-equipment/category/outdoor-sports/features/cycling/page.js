// app/sports-equipment/category/outdoor-sports/features/cycling/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, Bike, Mountain, Zap, Shield } from 'lucide-react';

export default function CyclingPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: [],
    bikeType: [],
    skillLevel: []
  });

  const cyclingProducts = [
    {
      id: 31,
      name: 'Mountain Bike - Full Suspension',
      price: '$899.99',
      originalPrice: '$1,199.99',
      image: '/mountain-bike.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Bikes',
      brand: 'TrailBlazer',
      description: 'Full-suspension mountain bike with 21-speed gear system and hydraulic disc brakes',
      isNew: false,
      isBestseller: true,
      activityType: 'Cycling',
      weight: '28.5 lbs',
      speeds: '21',
      bikeType: ['Mountain', 'Trail'],
      skillLevel: 'Intermediate',
      features: ['Full Suspension', 'Hydraulic Disc Brakes', '21-Speed', 'Aluminum Frame']
    },
    {
      id: 62,
      name: 'Road Bike - Carbon Fiber',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/road-bike.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'Bikes',
      brand: 'SpeedPro',
      description: 'Lightweight carbon fiber road bike with Shimano 105 groupset',
      isNew: true,
      isBestseller: false,
      activityType: 'Cycling',
      weight: '18.2 lbs',
      speeds: '22',
      bikeType: ['Road', 'Racing'],
      skillLevel: 'Advanced',
      features: ['Carbon Fiber', 'Shimano 105', 'Lightweight', 'Aero Design']
    },
    {
      id: 63,
      name: 'Cycling Helmet - MIPS',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/cycling-helmet.jpg',
      rating: 4.6,
      reviews: 234,
      category: 'Safety',
      brand: 'SafeRide',
      description: 'MIPS equipped cycling helmet with integrated LED light',
      isNew: false,
      isBestseller: true,
      activityType: 'Cycling',
      weight: '0.7 lbs',
      sizes: 'S-XL',
      bikeType: ['All Types'],
      skillLevel: 'All Levels',
      features: ['MIPS Technology', 'LED Light', 'Adjustable Fit', 'Ventilation']
    },
    {
      id: 64,
      name: 'Cycling Shoes - Clipless',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/cycling-shoes.jpg',
      rating: 4.5,
      reviews: 156,
      category: 'Footwear',
      brand: 'PedalPro',
      description: 'Carbon sole clipless shoes with BOA dial closure system',
      isNew: true,
      isBestseller: false,
      activityType: 'Cycling',
      weight: '1.2 lbs/pair',
      sizes: '39-48',
      bikeType: ['Road', 'Mountain'],
      skillLevel: 'Intermediate',
      features: ['Carbon Sole', 'BOA Dial', 'Stiff Platform', 'Ventilated']
    },
    {
      id: 65,
      name: 'Bike Repair Stand',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/bike-stand.jpg',
      rating: 4.4,
      reviews: 178,
      category: 'Maintenance',
      brand: 'FixIt',
      description: 'Professional bike repair stand with 360-degree rotation',
      isNew: false,
      isBestseller: true,
      activityType: 'Cycling',
      weight: '12.8 lbs',
      capacity: '65 lbs',
      bikeType: ['All Types'],
      skillLevel: 'All Levels',
      features: ['360 Rotation', 'Foldable', 'Stable Base', 'Adjustable Clamp']
    },
    {
      id: 66,
      name: 'Cycling Computer',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/cycling-computer.jpg',
      rating: 4.7,
      reviews: 134,
      category: 'Electronics',
      brand: 'RideTech',
      description: 'GPS cycling computer with heart rate monitoring and navigation',
      isNew: true,
      isBestseller: false,
      activityType: 'Cycling',
      weight: '0.4 lbs',
      battery: '15 hours',
      bikeType: ['All Types'],
      skillLevel: 'All Levels',
      features: ['GPS Tracking', 'Heart Rate', 'Navigation', 'Wireless Sync']
    },
    {
      id: 67,
      name: 'Bike Lights Set',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/bike-lights.jpg',
      rating: 4.5,
      reviews: 267,
      category: 'Accessories',
      brand: 'BeamRider',
      description: '1000 lumen front light and rear safety light set',
      isNew: false,
      isBestseller: true,
      activityType: 'Cycling',
      weight: '0.8 lbs',
      brightness: '1000 lumens',
      bikeType: ['All Types'],
      skillLevel: 'All Levels',
      features: ['1000 Lumens', 'Multiple Modes', 'USB Rechargeable', 'Waterproof']
    },
    {
      id: 68,
      name: 'Cycling Jersey',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '/cycling-jersey.jpg',
      rating: 4.4,
      reviews: 189,
      category: 'Apparel',
      brand: 'RideWear',
      description: 'Aero fit cycling jersey with moisture-wicking fabric and pockets',
      isNew: true,
      isBestseller: false,
      activityType: 'Cycling',
      weight: '0.4 lbs',
      sizes: 'S-XXL',
      bikeType: ['Road', 'Mountain'],
      skillLevel: 'All Levels',
      features: ['Moisture-Wicking', '3 Back Pockets', 'Aero Fit', 'UV Protection']
    },
    {
      id: 69,
      name: 'Bike Pump - Floor',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/bike-pump.jpg',
      rating: 4.6,
      reviews: 312,
      category: 'Maintenance',
      brand: 'AirPro',
      description: 'Professional floor pump with pressure gauge and dual valve head',
      isNew: false,
      isBestseller: true,
      activityType: 'Cycling',
      weight: '2.1 lbs',
      pressure: '160 PSI',
      bikeType: ['All Types'],
      skillLevel: 'All Levels',
      features: ['Pressure Gauge', 'Dual Valve', 'Stable Base', 'Easy Storage']
    },
    {
      id: 70,
      name: 'Bike Lock - U-Lock',
      price: '$34.99',
      originalPrice: '$44.99',
      image: '/bike-lock.jpg',
      rating: 4.3,
      reviews: 423,
      category: 'Security',
      brand: 'LockSafe',
      description: 'Heavy-duty U-lock with mounting bracket and anti-theft guarantee',
      isNew: true,
      isBestseller: false,
      activityType: 'Cycling',
      weight: '2.8 lbs',
      security: '10/10',
      bikeType: ['All Types'],
      skillLevel: 'All Levels',
      features: ['Heavy Duty', 'Mounting Bracket', 'Anti-Theft', 'Weather Resistant']
    },
    {
      id: 71,
      name: 'Cycling Gloves',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/cycling-gloves.jpg',
      rating: 4.5,
      reviews: 278,
      category: 'Apparel',
      brand: 'GripPro',
      description: 'Padded cycling gloves with gel inserts and touchscreen compatibility',
      isNew: false,
      isBestseller: true,
      activityType: 'Cycling',
      weight: '0.3 lbs/pair',
      sizes: 'S-XL',
      bikeType: ['All Types'],
      skillLevel: 'All Levels',
      features: ['Gel Padding', 'Touchscreen', 'Breathable', 'Secure Fit']
    },
    {
      id: 72,
      name: 'Bike Rack - Hitch',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/bike-rack.jpg',
      rating: 4.7,
      reviews: 156,
      category: 'Transport',
      brand: 'CarryAll',
      description: '2-inch hitch bike rack carrying up to 4 bikes',
      isNew: true,
      isBestseller: false,
      activityType: 'Cycling',
      weight: '42 lbs',
      capacity: '4 bikes',
      bikeType: ['All Types'],
      skillLevel: 'All Levels',
      features: ['4-Bike Capacity', 'Foldable', 'Locking', 'Easy Installation']
    }
  ];

  const cyclingCategories = [
    {
      name: 'Bikes',
      icon: '🚲',
      description: 'Road, mountain & hybrid',
      count: '8 products',
      slug: 'bikes'
    },
    {
      name: 'Safety Gear',
      icon: '🛡️',
      description: 'Helmets & protection',
      count: '12 products',
      slug: 'safety'
    },
    {
      name: 'Apparel',
      icon: '👕',
      description: 'Jerseys, shorts & shoes',
      count: '15 products',
      slug: 'apparel'
    },
    {
      name: 'Components',
      icon: '⚙️',
      description: 'Wheels, drivetrain & brakes',
      count: '20 products',
      slug: 'components'
    },
    {
      name: 'Accessories',
      icon: '🎒',
      description: 'Lights, computers & tools',
      count: '18 products',
      slug: 'accessories'
    },
    {
      name: 'Maintenance',
      icon: '🛠️',
      description: 'Tools, stands & cleaners',
      count: '10 products',
      slug: 'maintenance'
    }
  ];

  const filters = {
    category: ['Bikes', 'Safety', 'Footwear', 'Maintenance', 'Electronics', 'Accessories', 'Apparel', 'Security', 'Transport'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      '$500 - $1000',
      'Above $1000'
    ],
    brand: ['TrailBlazer', 'SpeedPro', 'SafeRide', 'PedalPro', 'FixIt', 'RideTech', 'BeamRider', 'RideWear', 'AirPro', 'LockSafe', 'GripPro', 'CarryAll'],
    bikeType: ['Road', 'Mountain', 'Hybrid', 'Gravel', 'Electric', 'BMX', 'All Types'],
    skillLevel: ['Beginner', 'Intermediate', 'Advanced', 'Professional', 'All Levels']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType ].includes(value)
        ? prev[filterType ].filter((item) => item !== value)
        : [...prev[filterType ], value]
    }));
  };

  const cyclingTips = [
    {
      title: 'Bike Fit',
      description: 'Proper bike fit prevents injury and improves efficiency',
      icon: '📏'
    },
    {
      title: 'Maintenance',
      description: 'Regular cleaning and tuning extends bike life',
      icon: '🛠️'
    },
    {
      title: 'Safety First',
      description: 'Always wear helmet and use lights in low visibility',
      icon: '🚦'
    },
    {
      title: 'Nutrition & Hydration',
      description: 'Fuel properly for longer rides and better performance',
      icon: '💧'
    }
  ];

  const cyclingTypes = [
    {
      type: 'Road Cycling',
      description: 'Paved roads and long distances',
      icon: '🛣️',
      terrain: 'Paved Roads',
      gear: 'Lightweight bike, clipless shoes, aero helmet'
    },
    {
      type: 'Mountain Biking',
      description: 'Trails and technical terrain',
      icon: '⛰️',
      terrain: 'Dirt Trails, Mountains',
      gear: 'Full suspension, helmet, protective gear'
    },
    {
      type: 'Commuting',
      description: 'Urban riding and daily transport',
      icon: '🏙️',
      terrain: 'City Streets',
      gear: 'Comfort bike, lights, lock, fenders'
    },
    {
      type: 'Gravel Riding',
      description: 'Mixed surfaces and adventure',
      icon: '🪨',
      terrain: 'Gravel Roads, Paths',
      gear: 'Versatile bike, wider tires, storage'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cycling Gear & Equipment
            </h1>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              High-performance bicycles, components, and accessories for road, mountain, and urban cycling adventures.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200"
              >
                Shop Cycling Gear
              </Link>
              <Link
                href="/sports-equipment/outdoor-sports"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                View All Outdoor Sports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cycling Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Cycling Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cyclingCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/category/outdoor-sports/features/cycling/${category.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <span className="text-xs text-red-600 font-medium">{category.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cycling Tips */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Essential Cycling Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cyclingTips.map((tip, index) => (
              <div key={index} className="bg-red-50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cycling Types */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Cycling Styles & Disciplines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cyclingTypes.map((cyclingType, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">{cyclingType.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{cyclingType.type}</h3>
                <p className="text-sm text-gray-600 mb-3">{cyclingType.description}</p>
                <div className="text-xs text-red-600 bg-red-50 rounded-lg p-2 mb-2">
                  <strong>Terrain:</strong> {cyclingType.terrain}
                </div>
                <div className="text-xs text-orange-600 bg-orange-50 rounded-lg p-2">
                  <strong>Recommended Gear:</strong> {cyclingType.gear}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">High Performance</h3>
              <p className="text-gray-600">Lightweight materials and advanced engineering for maximum speed and efficiency.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Certified</h3>
              <p className="text-gray-600">All safety gear meets or exceeds international safety standards and testing.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">All-Terrain Ready</h3>
              <p className="text-gray-600">Equipment designed for road, trail, mountain, and urban cycling conditions.</p>
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
                Cycling Equipment
              </h2>
              <p className="text-gray-600">
                Showing {cyclingProducts.length} products for your cycling adventures
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
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="weight">Lightest First</option>
                <option value="bike-type">By Bike Type</option>
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

                {/* Bike Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Bike Type</h4>
                  <div className="space-y-2">
                    {filters.bikeType.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.bikeType.includes(type)}
                          onChange={() => toggleFilter('bikeType', type)}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
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
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{level}</span>
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
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], bikeType: [], skillLevel: [] })}
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
                  {cyclingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Bikes' ? '🚲' : 
                           product.category === 'Safety' ? '🛡️' :
                           product.category === 'Footwear' ? '👟' :
                           product.category === 'Maintenance' ? '🛠️' :
                           product.category === 'Electronics' ? '📱' :
                           product.category === 'Accessories' ? '🎒' :
                           product.category === 'Apparel' ? '👕' :
                           product.category === 'Security' ? '🔒' : '🚗'}
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                              {product.category}
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {product.weight}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Bike Types */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.bikeType?.slice(0, 3).map((type, index) => (
                            <span key={index} className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded">
                              {type}
                            </span>
                          ))}
                        </div>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.features?.slice(0, 2).map((feature, index) => (
                            <span key={index} className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded">
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
                          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm font-semibold">
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
                  {cyclingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Bikes' ? '🚲' : 
                           product.category === 'Safety' ? '🛡️' :
                           product.category === 'Footwear' ? '👟' :
                           product.category === 'Maintenance' ? '🛠️' :
                           product.category === 'Electronics' ? '📱' :
                           product.category === 'Accessories' ? '🎒' :
                           product.category === 'Apparel' ? '👕' :
                           product.category === 'Security' ? '🔒' : '🚗'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {product.weight}
                              </span>
                              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                                {product.skillLevel}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Bike Types */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {product.bikeType?.map((type, index) => (
                                <span key={index} className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded">
                                  {type}
                                </span>
                              ))}
                            </div>
                            
                            {/* Features */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {product.features?.map((feature, index) => (
                                <span key={index} className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded">
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
                          <span className="text-sm text-gray-600">Level: {product.skillLevel}</span>
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
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Cycling Guide Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Cycling Guides & Resources
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Expert advice to improve your cycling skills, maintenance knowledge, and riding experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🚴</div>
                <h3 className="font-semibold mb-2">Riding Techniques</h3>
                <p className="text-red-100 text-sm">Climbing, descending, cornering, and group riding skills</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="font-semibold mb-2">Bike Maintenance</h3>
                <p className="text-red-100 text-sm">Cleaning, tuning, and repair tutorials for all skill levels</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="font-semibold mb-2">Route Planning</h3>
                <p className="text-red-100 text-sm">Finding great routes and planning epic cycling adventures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Cycling Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get route recommendations, gear reviews, and exclusive deals for cycling enthusiasts
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <button className="bg-red-600 text-white px-6 py-3 rounded-r-lg hover:bg-red-700 transition-colors duration-200 font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}