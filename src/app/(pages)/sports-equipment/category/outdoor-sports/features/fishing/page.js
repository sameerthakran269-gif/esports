// app/sports-equipment/category/outdoor-sports/features/fishing/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, Fish, Anchor, Waves, Target } from 'lucide-react';

export default function FishingPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: [],
    fishType: [],
    waterType: []
  });

  const fishingProducts = [
    {
      id: 30,
      name: 'Fishing Rod Combo',
      price: '$159.99',
      originalPrice: '$199.99',
      image: '/fishing-rod.jpg',
      rating: 4.5,
      reviews: 89,
      category: 'Rod & Reel Combos',
      brand: 'CatchMaster',
      description: 'Professional spinning rod and reel combo with tackle box',
      isNew: true,
      isBestseller: false,
      activityType: 'Fishing',
      weight: '5.5 lbs',
      length: '7 feet',
      fishType: ['Bass', 'Walleye', 'Pike'],
      waterType: ['Freshwater'],
      features: ['Complete Combo', 'Smooth Drag', 'Corrosion Resistant', 'Includes Tackle Box']
    },
    {
      id: 51,
      name: 'Baitcasting Reel',
      price: '$129.99',
      originalPrice: '$169.99',
      image: '/baitcasting-reel.jpg',
      rating: 4.7,
      reviews: 134,
      category: 'Reels',
      brand: 'ProCast',
      description: 'High-speed baitcasting reel with magnetic brake system',
      isNew: false,
      isBestseller: true,
      activityType: 'Fishing',
      weight: '0.9 lbs',
      gearRatio: '7.3:1',
      fishType: ['Bass', 'Musky', 'Pike'],
      waterType: ['Freshwater'],
      features: ['Magnetic Brakes', 'High-Speed', 'Lightweight', 'Carbon Fiber']
    },
    {
      id: 52,
      name: 'Tackle Box System',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/tackle-box.jpg',
      rating: 4.4,
      reviews: 267,
      category: 'Tackle Storage',
      brand: 'TacklePro',
      description: '3600-size tackle box with adjustable dividers and waterproof seals',
      isNew: true,
      isBestseller: false,
      activityType: 'Fishing',
      weight: '3.2 lbs',
      capacity: '4 trays',
      fishType: ['All Freshwater'],
      waterType: ['Freshwater', 'Saltwater'],
      features: ['Waterproof', 'Adjustable Dividers', 'Stackable', 'Durable']
    },
    {
      id: 53,
      name: 'Fishing Waders',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/fishing-waders.jpg',
      rating: 4.6,
      reviews: 178,
      category: 'Clothing',
      brand: 'RiverWalk',
      description: 'Breathable chest waders with reinforced knees and gravel guards',
      isNew: false,
      isBestseller: true,
      activityType: 'Fishing',
      weight: '4.8 lbs',
      sizes: 'S-XXL',
      fishType: ['Trout', 'Salmon', 'Steelhead'],
      waterType: ['Freshwater'],
      features: ['Breathable', 'Reinforced Knees', 'Gravel Guards', 'Multiple Pockets']
    },
    {
      id: 54,
      name: 'Fish Finder GPS',
      price: '$299.99',
      originalPrice: '$399.99',
      image: '/fish-finder.jpg',
      rating: 4.8,
      reviews: 92,
      category: 'Electronics',
      brand: 'DepthMaster',
      description: 'CHIRP fish finder with GPS mapping and side-scanning sonar',
      isNew: true,
      isBestseller: false,
      activityType: 'Fishing',
      weight: '2.1 lbs',
      screen: '7-inch',
      fishType: ['All Species'],
      waterType: ['Freshwater', 'Saltwater'],
      features: ['CHIRP Sonar', 'GPS Mapping', 'Side-Scan', 'High-Resolution']
    },
    {
      id: 55,
      name: 'Fishing Kayak',
      price: '$899.99',
      originalPrice: '$1,199.99',
      image: '/fishing-kayak.jpg',
      rating: 4.7,
      reviews: 67,
      category: 'Boats',
      brand: 'PaddlePro',
      description: '12-foot fishing kayak with stadium seat and rod holders',
      isNew: false,
      isBestseller: true,
      activityType: 'Fishing',
      weight: '68 lbs',
      capacity: '400 lbs',
      fishType: ['Bass', 'Walleye', 'Pike'],
      waterType: ['Freshwater', 'Saltwater'],
      features: ['Stadium Seat', 'Multiple Rod Holders', 'Stable Design', 'Storage']
    },
    {
      id: 56,
      name: 'Fishing Line - Braided',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/fishing-line.jpg',
      rating: 4.5,
      reviews: 423,
      category: 'Line & Leader',
      brand: 'LineMaster',
      description: '50lb test braided fishing line with zero stretch and high sensitivity',
      isNew: true,
      isBestseller: false,
      activityType: 'Fishing',
      weight: '0.3 lbs',
      strength: '50 lb',
      fishType: ['Bass', 'Musky', 'Catfish'],
      waterType: ['Freshwater', 'Saltwater'],
      features: ['Zero Stretch', 'High Sensitivity', 'Abrasion Resistant', 'Smooth Casting']
    },
    {
      id: 57,
      name: 'Fishing Net',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/fishing-net.jpg',
      rating: 4.4,
      reviews: 189,
      category: 'Accessories',
      brand: 'NetPro',
      description: 'Rubber-coated landing net with extendable handle',
      isNew: false,
      isBestseller: true,
      activityType: 'Fishing',
      weight: '1.8 lbs',
      handle: 'Extendable',
      fishType: ['All Species'],
      waterType: ['Freshwater', 'Saltwater'],
      features: ['Rubber Coated', 'Extendable Handle', 'Fish Friendly', 'Floatable']
    },
    {
      id: 58,
      name: 'Fishing Pliers',
      price: '$34.99',
      originalPrice: '$44.99',
      image: '/fishing-pliers.jpg',
      rating: 4.6,
      reviews: 312,
      category: 'Tools',
      brand: 'ToolMaster',
      description: 'Stainless steel fishing pliers with line cutter and split ring tool',
      isNew: true,
      isBestseller: false,
      activityType: 'Fishing',
      weight: '0.6 lbs',
      material: 'Stainless Steel',
      fishType: ['All Species'],
      waterType: ['Freshwater', 'Saltwater'],
      features: ['Stainless Steel', 'Line Cutter', 'Split Ring Tool', 'Corrosion Resistant']
    },
    {
      id: 59,
      name: 'Cooler for Fish',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/fish-cooler.jpg',
      rating: 4.7,
      reviews: 156,
      category: 'Storage',
      brand: 'ChillPro',
      description: '50-quart insulated cooler with fish ruler and dividers',
      isNew: false,
      isBestseller: true,
      activityType: 'Fishing',
      weight: '11.2 lbs',
      capacity: '50 qt',
      fishType: ['All Species'],
      waterType: ['Freshwater', 'Saltwater'],
      features: ['Insulated', 'Fish Ruler', 'Dividers', 'Drain Plug']
    },
    {
      id: 60,
      name: 'Fishing Sunglasses',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/fishing-sunglasses.jpg',
      rating: 4.5,
      reviews: 278,
      category: 'Accessories',
      brand: 'PolarView',
      description: 'Polarized sunglasses with UV protection and non-slip grips',
      isNew: true,
      isBestseller: false,
      activityType: 'Fishing',
      weight: '0.2 lbs',
      lens: 'Polarized',
      fishType: ['All Species'],
      waterType: ['Freshwater', 'Saltwater'],
      features: ['Polarized', 'UV Protection', 'Non-Slip', 'Floatable']
    },
    {
      id: 61,
      name: 'Fishing Vest',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/fishing-vest.jpg',
      rating: 4.4,
      reviews: 134,
      category: 'Clothing',
      brand: 'VestPro',
      description: 'Multi-pocket fishing vest with built-in fly patch and D-rings',
      isNew: false,
      isBestseller: true,
      activityType: 'Fishing',
      weight: '1.4 lbs',
      sizes: 'S-XXL',
      fishType: ['Trout', 'Salmon', 'Bass'],
      waterType: ['Freshwater'],
      features: ['Multiple Pockets', 'Fly Patch', 'D-Rings', 'Breathable']
    }
  ];

  const fishingCategories = [
    {
      name: 'Rods & Reels',
      icon: '🎣',
      description: 'Spinning, baitcasting & fly',
      count: '15 products',
      slug: 'rods-reels'
    },
    {
      name: 'Tackle',
      icon: '🪝',
      description: 'Lures, hooks & baits',
      count: '25 products',
      slug: 'tackle'
    },
    {
      name: 'Electronics',
      icon: '📡',
      description: 'Fish finders & GPS',
      count: '8 products',
      slug: 'electronics'
    },
    {
      name: 'Boats & Kayaks',
      icon: '🚤',
      description: 'Fishing boats & watercraft',
      count: '6 products',
      slug: 'boats'
    },
    {
      name: 'Clothing',
      icon: '🎽',
      description: 'Waders, vests & apparel',
      count: '12 products',
      slug: 'clothing'
    },
    {
      name: 'Accessories',
      icon: '🧰',
      description: 'Tools, nets & storage',
      count: '18 products',
      slug: 'accessories'
    }
  ];

  const filters = {
    category: ['Rod & Reel Combos', 'Reels', 'Tackle Storage', 'Clothing', 'Electronics', 'Boats', 'Line & Leader', 'Accessories', 'Tools', 'Storage'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['CatchMaster', 'ProCast', 'TacklePro', 'RiverWalk', 'DepthMaster', 'PaddlePro', 'LineMaster', 'NetPro', 'ToolMaster', 'ChillPro', 'PolarView', 'VestPro'],
    fishType: ['Bass', 'Trout', 'Salmon', 'Walleye', 'Pike', 'Musky', 'Catfish', 'Panfish', 'Steelhead', 'All Species'],
    waterType: ['Freshwater', 'Saltwater', 'Both']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType ].includes(value)
        ? prev[filterType ].filter((item) => item !== value)
        : [...prev[filterType ], value]
    }));
  };

  const fishingTips = [
    {
      title: 'Know Your Target',
      description: 'Research fish species habits and preferred habitats',
      icon: '🎯'
    },
    {
      title: 'Weather & Tides',
      description: 'Plan around weather patterns and tidal movements',
      icon: '🌊'
    },
    {
      title: 'Proper Gear',
      description: 'Match your equipment to target species and conditions',
      icon: '⚙️'
    },
    {
      title: 'Catch & Release',
      description: 'Practice proper handling for sustainable fishing',
      icon: '🐟'
    }
  ];

  const fishingTypes = [
    {
      type: 'Freshwater',
      description: 'Lakes, rivers, and streams',
      icon: '🏞️',
      species: 'Bass, Trout, Walleye, Pike',
      gear: 'Medium action rods, various lures'
    },
    {
      type: 'Saltwater',
      description: 'Ocean, bays, and estuaries',
      icon: '🌊',
      species: 'Salmon, Tuna, Redfish, Snapper',
      gear: 'Heavy rods, saltwater-resistant gear'
    },
    {
      type: 'Fly Fishing',
      description: 'Technical casting with artificial flies',
      icon: '🪰',
      species: 'Trout, Salmon, Bass, Panfish',
      gear: 'Fly rods, reels, waders, flies'
    },
    {
      type: 'Ice Fishing',
      description: 'Winter fishing through ice',
      icon: '🧊',
      species: 'Walleye, Perch, Pike, Trout',
      gear: 'Ice rods, shelters, augers, heaters'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Fishing Gear & Equipment
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Professional fishing equipment for freshwater, saltwater, and everything in between. Catch more fish with our expertly curated gear.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Shop Fishing Gear
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

      {/* Fishing Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fishing Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {fishingCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/category/outdoor-sports/features/fishing/${category.slug}`}
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

      {/* Fishing Tips */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pro Fishing Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fishingTips.map((tip, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fishing Types */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fishing Styles & Techniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fishingTypes.map((fishingType, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">{fishingType.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{fishingType.type}</h3>
                <p className="text-sm text-gray-600 mb-3">{fishingType.description}</p>
                <div className="text-xs text-blue-600 bg-blue-50 rounded-lg p-2 mb-2">
                  <strong>Target Species:</strong> {fishingType.species}
                </div>
                <div className="text-xs text-teal-600 bg-teal-50 rounded-lg p-2">
                  <strong>Recommended Gear:</strong> {fishingType.gear}
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
                <Fish className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Species Specific</h3>
              <p className="text-gray-600">Specialized gear designed for specific fish species and behaviors.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Saltwater Ready</h3>
              <p className="text-gray-600">Corrosion-resistant materials built for harsh marine environments.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Performance</h3>
              <p className="text-gray-600">Equipment tested and approved by professional anglers worldwide.</p>
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
                Fishing Equipment
              </h2>
              <p className="text-gray-600">
                Showing {fishingProducts.length} products for your next fishing adventure
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
                <option value="species">By Fish Species</option>
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

                {/* Fish Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Target Fish</h4>
                  <div className="space-y-2">
                    {filters.fishType.map((fish) => (
                      <label key={fish} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.fishType.includes(fish)}
                          onChange={() => toggleFilter('fishType', fish)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{fish}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Water Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Water Type</h4>
                  <div className="space-y-2">
                    {filters.waterType.map((water) => (
                      <label key={water} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.waterType.includes(water)}
                          onChange={() => toggleFilter('waterType', water)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{water}</span>
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
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], fishType: [], waterType: [] })}
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
                  {fishingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-teal-100 flex items-center justify-center">
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
                          {product.category === 'Rod & Reel Combos' ? '🎣' : 
                           product.category === 'Reels' ? '🎯' :
                           product.category === 'Tackle Storage' ? '🧰' :
                           product.category === 'Clothing' ? '🎽' :
                           product.category === 'Electronics' ? '📡' :
                           product.category === 'Boats' ? '🚤' :
                           product.category === 'Line & Leader' ? '🪢' :
                           product.category === 'Accessories' ? '🧩' :
                           product.category === 'Tools' ? '🛠️' : '📦'}
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
                        
                        {/* Fish Types */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.fishType?.slice(0, 3).map((fish, index) => (
                            <span key={index} className="text-xs bg-teal-50 text-teal-600 px-2 py-1 rounded">
                              {fish}
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
                  {fishingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-blue-50 to-teal-100 flex items-center justify-center">
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
                          {product.category === 'Rod & Reel Combos' ? '🎣' : 
                           product.category === 'Reels' ? '🎯' :
                           product.category === 'Tackle Storage' ? '🧰' :
                           product.category === 'Clothing' ? '🎽' :
                           product.category === 'Electronics' ? '📡' :
                           product.category === 'Boats' ? '🚤' :
                           product.category === 'Line & Leader' ? '🪢' :
                           product.category === 'Accessories' ? '🧩' :
                           product.category === 'Tools' ? '🛠️' : '📦'}
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
                              <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full">
                                {product.waterType.join(', ')}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Fish Types */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {product.fishType?.map((fish, index) => (
                                <span key={index} className="text-xs bg-teal-50 text-teal-600 px-2 py-1 rounded">
                                  {fish}
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
                          <span className="text-sm text-gray-600">Water: {product.waterType.join(', ')}</span>
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

      {/* Fishing Guide Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Fishing Guides & Resources
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Expert advice to improve your fishing skills and catch more fish.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🐟</div>
                <h3 className="font-semibold mb-2">Species Guides</h3>
                <p className="text-blue-100 text-sm">Behavior, habitats, and best techniques for each fish species</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">Technique Tutorials</h3>
                <p className="text-blue-100 text-sm">Casting, retrieving, and presentation methods</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="font-semibold mb-2">Location Planning</h3>
                <p className="text-blue-100 text-sm">Finding productive fishing spots and reading water</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Fishing Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get fishing reports, gear reviews, and exclusive deals for anglers
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