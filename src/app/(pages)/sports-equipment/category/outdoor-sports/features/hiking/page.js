// app/sports-equipment/category/outdoor-sports/features/hiking/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, Mountain, Map, Compass, Weight } from 'lucide-react';

export default function HikingPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: [],
    difficulty: [],
    capacity: []
  });

  const hikingProducts = [
    {
      id: 8,
      name: 'Hiking Backpack 65L',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/hiking-backpack.jpg',
      rating: 4.5,
      reviews: 212,
      category: 'Backpacks',
      brand: 'TrekGear',
      description: '65L waterproof hiking backpack with adjustable frame and multiple compartments',
      isNew: true,
      isBestseller: false,
      activityType: 'Hiking',
      weight: '4.1 lbs',
      capacity: '65L',
      difficulty: 'Advanced',
      features: ['Waterproof', 'Adjustable Frame', 'Multiple Compartments', 'Hydration Compatible']
    },
    {
      id: 29,
      name: 'Trekking Poles Set',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/trekking-poles.jpg',
      rating: 4.7,
      reviews: 156,
      category: 'Trekking Poles',
      brand: 'TrekGear',
      description: 'Carbon fiber adjustable trekking poles with shock absorption',
      isNew: false,
      isBestseller: true,
      activityType: 'Hiking',
      weight: '1.2 lbs',
      material: 'Carbon Fiber',
      difficulty: 'All Levels',
      features: ['Carbon Fiber', 'Shock Absorption', 'Adjustable', 'Quick Lock']
    },
    {
      id: 41,
      name: 'Hiking Boots - Waterproof',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/hiking-boots.jpg',
      rating: 4.6,
      reviews: 324,
      category: 'Footwear',
      brand: 'TrailMaster',
      description: 'Gore-Tex waterproof hiking boots with ankle support and Vibram soles',
      isNew: true,
      isBestseller: true,
      activityType: 'Hiking',
      weight: '2.8 lbs/pair',
      sizes: '7-13',
      difficulty: 'Advanced',
      features: ['Gore-Tex', 'Vibram Sole', 'Ankle Support', 'Waterproof']
    },
    {
      id: 42,
      name: 'Hydration Pack 3L',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/hydration-pack.jpg',
      rating: 4.4,
      reviews: 187,
      category: 'Hydration',
      brand: 'HydroFlow',
      description: '3L hydration pack with insulated tube and multiple storage pockets',
      isNew: false,
      isBestseller: false,
      activityType: 'Hiking',
      weight: '1.1 lbs',
      capacity: '3L',
      difficulty: 'All Levels',
      features: ['3L Capacity', 'Insulated Tube', 'Multiple Pockets', 'Lightweight']
    },
    {
      id: 43,
      name: 'Hiking GPS Navigator',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/gps-navigator.jpg',
      rating: 4.8,
      reviews: 93,
      category: 'Navigation',
      brand: 'TrailTech',
      description: 'Handheld GPS with topographic maps and long battery life',
      isNew: true,
      isBestseller: false,
      activityType: 'Hiking',
      weight: '0.7 lbs',
      battery: '16 hours',
      difficulty: 'Advanced',
      features: ['Topographic Maps', '16h Battery', 'Waterproof', 'GLONASS/GPS']
    },
    {
      id: 44,
      name: 'Lightweight Tent 2P',
      price: '$229.99',
      originalPrice: '$299.99',
      image: '/hiking-tent.jpg',
      rating: 4.7,
      reviews: 156,
      category: 'Shelters',
      brand: 'UltraLight',
      description: '2-person ultralight tent for backpacking and thru-hiking',
      isNew: false,
      isBestseller: true,
      activityType: 'Hiking',
      weight: '3.2 lbs',
      capacity: '2 people',
      difficulty: 'Intermediate',
      features: ['Ultralight', '2-Person', 'Quick Setup', 'Weatherproof']
    },
    {
      id: 45,
      name: 'Hiking Socks - Merino Wool',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/hiking-socks.jpg',
      rating: 4.5,
      reviews: 421,
      category: 'Clothing',
      brand: 'TrailComfort',
      description: 'Merino wool hiking socks with cushioning and moisture-wicking',
      isNew: true,
      isBestseller: false,
      activityType: 'Hiking',
      weight: '0.2 lbs/pair',
      material: 'Merino Wool',
      difficulty: 'All Levels',
      features: ['Merino Wool', 'Moisture-Wicking', 'Cushioned', 'Odor-Resistant']
    },
    {
      id: 46,
      name: 'Portable Water Filter',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/water-filter.jpg',
      rating: 4.6,
      reviews: 278,
      category: 'Water Treatment',
      brand: 'PureFlow',
      description: 'Lightweight water filter removes 99.99% of bacteria and protozoa',
      isNew: false,
      isBestseller: true,
      activityType: 'Hiking',
      weight: '0.3 lbs',
      capacity: '100,000 gallons',
      difficulty: 'All Levels',
      features: ['99.99% Effective', 'Lightweight', 'Long Lifespan', 'Easy Use']
    },
    {
      id: 47,
      name: 'Hiking First Aid Kit',
      price: '$29.99',
      originalPrice: '$39.99',
      image: '/hiking-first-aid.jpg',
      rating: 4.4,
      reviews: 165,
      category: 'Safety',
      brand: 'TrailSafe',
      description: 'Compact first aid kit specifically designed for hiking emergencies',
      isNew: true,
      isBestseller: false,
      activityType: 'Hiking',
      weight: '0.8 lbs',
      pieces: '50',
      difficulty: 'All Levels',
      features: ['Hiking-Specific', 'Compact', 'Waterproof Case', 'Comprehensive']
    },
    {
      id: 48,
      name: 'Headlamp - 300 Lumens',
      price: '$44.99',
      originalPrice: '$59.99',
      image: '/headlamp.jpg',
      rating: 4.7,
      reviews: 198,
      category: 'Lighting',
      brand: 'BeamMaster',
      description: '300 lumen headlamp with red light mode and adjustable beam',
      isNew: false,
      isBestseller: true,
      activityType: 'Hiking',
      weight: '0.4 lbs',
      brightness: '300 lumens',
      difficulty: 'All Levels',
      features: ['300 Lumens', 'Red Light Mode', 'Adjustable Beam', 'Waterproof']
    },
    {
      id: 49,
      name: 'Hiking Pants - Convertible',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/hiking-pants.jpg',
      rating: 4.5,
      reviews: 234,
      category: 'Clothing',
      brand: 'TrailFlex',
      description: 'Convertible hiking pants that zip off into shorts',
      isNew: true,
      isBestseller: false,
      activityType: 'Hiking',
      weight: '1.1 lbs',
      sizes: 'S-XXL',
      difficulty: 'All Levels',
      features: ['Convertible', 'Quick-Dry', 'Multiple Pockets', 'UPF 50+']
    },
    {
      id: 50,
      name: 'Compact Camping Stove',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '/camp-stove.jpg',
      rating: 4.6,
      reviews: 189,
      category: 'Cooking',
      brand: 'JetBoil',
      description: 'Ultralight camping stove with integrated pot and burner',
      isNew: false,
      isBestseller: true,
      activityType: 'Hiking',
      weight: '0.9 lbs',
      boilTime: '2.5 minutes',
      difficulty: 'All Levels',
      features: ['Integrated System', 'Fast Boiling', 'Fuel Efficient', 'Compact']
    }
  ];

  const hikingCategories = [
    {
      name: 'Backpacks',
      icon: '🎒',
      description: 'Daypacks to expedition packs',
      count: '8 products',
      slug: 'backpacks'
    },
    {
      name: 'Footwear',
      icon: '🥾',
      description: 'Boots, shoes & trail runners',
      count: '12 products',
      slug: 'footwear'
    },
    {
      name: 'Navigation',
      icon: '🧭',
      description: 'GPS, compasses & maps',
      count: '6 products',
      slug: 'navigation'
    },
    {
      name: 'Shelters',
      icon: '⛺',
      description: 'Tents, hammocks & bivvies',
      count: '7 products',
      slug: 'shelters'
    },
    {
      name: 'Clothing',
      icon: '👕',
      description: 'Technical apparel & layers',
      count: '15 products',
      slug: 'clothing'
    },
    {
      name: 'Safety Gear',
      icon: '⚕️',
      description: 'First aid & emergency kits',
      count: '5 products',
      slug: 'safety'
    }
  ];

  const filters = {
    category: ['Backpacks', 'Footwear', 'Trekking Poles', 'Navigation', 'Shelters', 'Clothing', 'Hydration', 'Water Treatment', 'Safety', 'Lighting', 'Cooking'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['TrekGear', 'TrailMaster', 'HydroFlow', 'TrailTech', 'UltraLight', 'TrailComfort', 'PureFlow', 'TrailSafe', 'BeamMaster', 'TrailFlex', 'JetBoil'],
    difficulty: ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'All Levels'],
    capacity: ['Day Hike', 'Overnight', 'Multi-Day', 'Expedition']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType ].includes(value)
        ? prev[filterType ].filter((item) => item !== value)
        : [...prev[filterType ], value]
    }));
  };

  const hikingTips = [
    {
      title: 'Trail Research',
      description: 'Always check trail conditions, weather, and difficulty before hiking',
      icon: '📋'
    },
    {
      title: 'Pack Essentials',
      description: 'Carry the Ten Essentials: navigation, sun protection, insulation, etc.',
      icon: '🎒'
    },
    {
      title: 'Leave No Trace',
      description: 'Pack out all trash and respect wildlife and natural habitats',
      icon: '🌿'
    },
    {
      title: 'Hydration & Nutrition',
      description: 'Drink water regularly and pack high-energy snacks',
      icon: '💧'
    }
  ];

  const difficultyLevels = [
    {
      level: 'Beginner',
      description: 'Well-marked trails, gentle elevation',
      icon: '🚶',
      gear: 'Daypack, water, basic navigation'
    },
    {
      level: 'Intermediate',
      description: 'Moderate elevation, some technical sections',
      icon: '🥾',
      gear: 'Trekking poles, proper footwear, map'
    },
    {
      level: 'Advanced',
      description: 'Steep terrain, route finding required',
      icon: '⛰️',
      gear: 'GPS, emergency shelter, full kit'
    },
    {
      level: 'Expert',
      description: 'Remote wilderness, self-sufficient',
      icon: '🧗',
      gear: 'Satellite communicator, advanced first aid'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hiking & Trekking Gear
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Premium equipment for day hikes, thru-hikes, and mountain expeditions. Lightweight, durable, and trail-tested.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Shop Hiking Gear
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

      {/* Hiking Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Hiking Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {hikingCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/category/outdoor-sports/features/hiking/${category.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <span className="text-xs text-blue-600 font-medium">{category.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hiking Tips */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Essential Hiking Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hikingTips.map((tip, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difficulty Levels */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose Your Hike Difficulty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {difficultyLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">{level.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{level.level}</h3>
                <p className="text-sm text-gray-600 mb-3">{level.description}</p>
                <div className="text-xs text-blue-600 bg-blue-50 rounded-lg p-2">
                  <strong>Essential Gear:</strong> {level.gear}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Weight className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ultralight Design</h3>
              <p className="text-gray-600">Lightweight materials that reduce pack weight without sacrificing durability.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trail-Tested</h3>
              <p className="text-gray-600">Gear proven on thousands of miles of trails worldwide.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">All-Terrain Ready</h3>
              <p className="text-gray-600">Equipment designed for mountains, forests, deserts, and everything between.</p>
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
                Hiking Equipment
              </h2>
              <p className="text-gray-600">
                Showing {hikingProducts.length} products for trail adventures
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
                <option value="weight">Lightest First</option>
                <option value="capacity">Capacity</option>
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

                {/* Difficulty Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Difficulty Level</h4>
                  <div className="space-y-2">
                    {filters.difficulty.map((difficulty) => (
                      <label key={difficulty} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.difficulty.includes(difficulty)}
                          onChange={() => toggleFilter('difficulty', difficulty)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{difficulty}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Capacity Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Trip Length</h4>
                  <div className="space-y-2">
                    {filters.capacity.map((capacity) => (
                      <label key={capacity} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.capacity.includes(capacity)}
                          onChange={() => toggleFilter('capacity', capacity)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{capacity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], difficulty: [], capacity: [] })}
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
                  {hikingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Backpacks' ? '🎒' : 
                           product.category === 'Footwear' ? '🥾' :
                           product.category === 'Trekking Poles' ? '🏔️' :
                           product.category === 'Navigation' ? '🧭' :
                           product.category === 'Shelters' ? '⛺' :
                           product.category === 'Clothing' ? '👕' :
                           product.category === 'Hydration' ? '💧' :
                           product.category === 'Water Treatment' ? '🚰' :
                           product.category === 'Safety' ? '⚕️' :
                           product.category === 'Lighting' ? '💡' : '🍳'}
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                              {product.category}
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {product.weight}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.features?.slice(0, 3).map((feature, index) => (
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
                  {hikingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Backpacks' ? '🎒' : 
                           product.category === 'Footwear' ? '🥾' :
                           product.category === 'Trekking Poles' ? '🏔️' :
                           product.category === 'Navigation' ? '🧭' :
                           product.category === 'Shelters' ? '⛺' :
                           product.category === 'Clothing' ? '👕' :
                           product.category === 'Hydration' ? '💧' :
                           product.category === 'Water Treatment' ? '🚰' :
                           product.category === 'Safety' ? '⚕️' :
                           product.category === 'Lighting' ? '💡' : '🍳'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {product.weight}
                              </span>
                              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                                {product.difficulty}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
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
                          <span className="text-sm text-gray-600">Difficulty: {product.difficulty}</span>
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

      {/* Hiking Guide Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Hiking Guides & Resources
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Expert advice for planning successful hikes and mastering trail skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="font-semibold mb-2">Trail Planning</h3>
                <p className="text-blue-100 text-sm">Route selection, distance planning, and elevation gain</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold mb-2">Gear Selection</h3>
                <p className="text-blue-100 text-sm">Right equipment for different seasons and terrains</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="font-semibold mb-2">Safety & Navigation</h3>
                <p className="text-blue-100 text-sm">Emergency preparedness and route finding skills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Hiking Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get trail recommendations, gear reviews, and exclusive deals for hiking enthusiasts
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}