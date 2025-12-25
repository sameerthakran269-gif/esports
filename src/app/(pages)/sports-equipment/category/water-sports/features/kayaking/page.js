// app/sports-equipment/water-sports/kayaking/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, Anchor, Compass, Shield, Zap } from 'lucide-react';

export default function KayakingPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: [],
    skillLevel: [],
    kayakType: [],
    material: [],
    capacity: []
  });

  const kayakingProducts = [
    {
      id: 40,
      name: 'Kayak Fishing Package',
      price: '$899.99',
      originalPrice: '$1,199.99',
      image: '/fishing-kayak.jpg',
      rating: 4.6,
      reviews: 78,
      category: 'Fishing Kayaks',
      brand: 'PaddlePro',
      description: 'Fishing kayak with rod holders, storage, and comfortable seat',
      isNew: false,
      isBestseller: true,
      activityType: 'Kayaking',
      skillLevel: 'Intermediate',
      waterType: ['Lake', 'Ocean', 'River'],
      kayakType: 'Sit-On-Top',
      material: 'Polyethylene',
      capacity: '1 Person',
      features: ['Rod Holders', 'Storage Compartments', 'Comfort Seat', 'Adjustable Footrests'],
      specs: {
        length: '3.6m',
        width: '86cm',
        weight: '32kg',
        maxCapacity: '160kg',
        storage: '2 Hatches'
      }
    },
    {
      id: 64,
      name: 'Touring Sea Kayak',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/touring-kayak.jpg',
      rating: 4.8,
      reviews: 45,
      category: 'Touring Kayaks',
      brand: 'OceanPro',
      description: 'Performance touring kayak for long-distance sea adventures',
      isNew: true,
      isBestseller: false,
      activityType: 'Kayaking',
      skillLevel: 'Advanced',
      waterType: ['Ocean', 'Sea'],
      kayakType: 'Sit-Inside',
      material: 'Fiberglass',
      capacity: '1 Person',
      features: ['Rudder System', 'Watertight Hatches', 'Comfortable Cockpit', 'Tracking Fin'],
      specs: {
        length: '5.2m',
        width: '56cm',
        weight: '24kg',
        maxCapacity: '120kg',
        storage: '3 Hatches'
      }
    },
    {
      id: 65,
      name: 'Inflatable Kayak Pro',
      price: '$449.99',
      originalPrice: '$599.99',
      image: '/inflatable-kayak.jpg',
      rating: 4.4,
      reviews: 156,
      category: 'Inflatable Kayaks',
      brand: 'TravelPro',
      description: 'High-pressure inflatable kayak perfect for travel and storage',
      isNew: false,
      isBestseller: true,
      activityType: 'Kayaking',
      skillLevel: 'Beginner',
      waterType: ['Lake', 'Calm River'],
      kayakType: 'Sit-On-Top',
      material: 'PVC',
      capacity: '2 Person',
      features: ['Rapid Inflation', 'Compact Storage', 'Multiple Air Chambers', 'Carry Bag'],
      specs: {
        length: '3.8m',
        width: '91cm',
        weight: '16kg',
        maxCapacity: '180kg',
        inflationTime: '8 minutes'
      }
    },
    {
      id: 66,
      name: 'Whitewater Kayak',
      price: '$799.99',
      originalPrice: '$999.99',
      image: '/whitewater-kayak.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'Whitewater Kayaks',
      brand: 'RapidPro',
      description: 'Maneuverable whitewater kayak for river rapids and waves',
      isNew: true,
      isBestseller: false,
      activityType: 'Kayaking',
      skillLevel: 'Expert',
      waterType: ['River', 'Rapids'],
      kayakType: 'Sit-Inside',
      material: 'Plastic',
      capacity: '1 Person',
      features: ['Rockered Hull', 'Thigh Braces', 'Drainage System', 'Grab Handles'],
      specs: {
        length: '2.4m',
        width: '64cm',
        weight: '20kg',
        maxCapacity: '115kg',
        volume: '65 gallons'
      }
    },
    {
      id: 67,
      name: 'Tandem Ocean Kayak',
      price: '$1,599.99',
      originalPrice: '$1,899.99',
      image: '/tandem-kayak.jpg',
      rating: 4.5,
      reviews: 67,
      category: 'Tandem Kayaks',
      brand: 'OceanPro',
      description: 'Two-person ocean kayak with synchronized paddling',
      isNew: false,
      isBestseller: true,
      activityType: 'Kayaking',
      skillLevel: 'Intermediate',
      waterType: ['Ocean', 'Lake'],
      kayakType: 'Sit-On-Top',
      material: 'Polyethylene',
      capacity: '2 Person',
      features: ['Dual Seating', 'Storage Hatches', 'Rudder Control', 'Paddle Keepers'],
      specs: {
        length: '4.9m',
        width: '81cm',
        weight: '38kg',
        maxCapacity: '250kg',
        storage: '3 Hatches'
      }
    },
    {
      id: 68,
      name: 'Carbon Fiber Paddle',
      price: '$289.99',
      originalPrice: '$349.99',
      image: '/carbon-paddle.jpg',
      rating: 4.9,
      reviews: 134,
      category: 'Paddles',
      brand: 'PaddlePro',
      description: 'Ultra-light carbon fiber paddle with adjustable feathering',
      isNew: true,
      isBestseller: true,
      activityType: 'Kayaking',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      kayakType: 'N/A',
      material: 'Carbon Fiber',
      capacity: 'N/A',
      features: ['Lightweight', 'Adjustable Feather', 'Drip Rings', 'Comfort Grips'],
      specs: {
        weight: '800g',
        length: '210-240cm',
        blades: 'Asymmetrical',
        material: 'Carbon Fiber'
      }
    },
    {
      id: 69,
      name: 'Kayak Roof Rack',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/kayak-rack.jpg',
      rating: 4.3,
      reviews: 203,
      category: 'Accessories',
      brand: 'CarryPro',
      description: 'Universal kayak roof rack system with locking mechanism',
      isNew: false,
      isBestseller: true,
      activityType: 'Kayaking',
      skillLevel: 'All Levels',
      waterType: ['N/A'],
      kayakType: 'N/A',
      material: 'Aluminum',
      capacity: 'N/A',
      features: ['Universal Fit', 'Locking System', 'Easy Installation', 'Padding'],
      specs: {
        capacity: '75kg',
        material: 'Aluminum',
        lockType: 'Keyed',
        fit: 'Universal'
      }
    },
    {
      id: 70,
      name: 'Dry Bag Set',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/dry-bag.jpg',
      rating: 4.6,
      reviews: 178,
      category: 'Accessories',
      brand: 'AquaPro',
      description: 'Waterproof dry bags in multiple sizes for gear protection',
      isNew: true,
      isBestseller: false,
      activityType: 'Kayaking',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      kayakType: 'N/A',
      material: 'TPU',
      capacity: 'N/A',
      features: ['100% Waterproof', 'Multiple Sizes', 'Shoulder Strap', 'Transparent'],
      specs: {
        sizes: '10L, 20L, 30L',
        material: 'TPU',
        closure: 'Roll-top',
        colors: 'Multiple'
      }
    },
    {
      id: 71,
      name: 'Kayak Spray Skirt',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/spray-skirt.jpg',
      rating: 4.4,
      reviews: 92,
      category: 'Accessories',
      brand: 'OceanPro',
      description: 'Neoprene spray skirt for sit-inside kayaks',
      isNew: false,
      isBestseller: true,
      activityType: 'Kayaking',
      skillLevel: 'Intermediate',
      waterType: ['Ocean', 'River'],
      kayakType: 'Sit-Inside',
      material: 'Neoprene',
      capacity: 'N/A',
      features: ['Waterproof Seal', 'Quick Release', 'Adjustable Fit', 'Durable'],
      specs: {
        material: '3mm Neoprene',
        sizes: 'S, M, L, XL',
        tunnelType: 'Standard',
        colors: 'Black, Blue'
      }
    },
    {
      id: 72,
      name: 'Fishing Kayak Anchor',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/kayak-anchor.jpg',
      rating: 4.5,
      reviews: 145,
      category: 'Fishing Accessories',
      brand: 'PaddlePro',
      description: 'Compact folding anchor for fishing kayaks',
      isNew: true,
      isBestseller: true,
      activityType: 'Kayaking',
      skillLevel: 'All Levels',
      waterType: ['Lake', 'Ocean'],
      kayakType: 'Sit-On-Top',
      material: 'Stainless Steel',
      capacity: 'N/A',
      features: ['Folding Design', 'Rope Included', 'Storage Bag', 'Rust Resistant'],
      specs: {
        weight: '1.4kg',
        material: 'Stainless Steel',
        ropeLength: '15m',
        storage: 'Compact'
      }
    },
    {
      id: 73,
      name: 'Kayak Cart',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/kayak-cart.jpg',
      rating: 4.2,
      reviews: 87,
      category: 'Accessories',
      brand: 'CarryPro',
      description: 'Portable kayak cart for easy transportation',
      isNew: false,
      isBestseller: false,
      activityType: 'Kayaking',
      skillLevel: 'All Levels',
      waterType: ['N/A'],
      kayakType: 'N/A',
      material: 'Aluminum',
      capacity: 'N/A',
      features: ['Foldable Design', 'Pneumatic Wheels', 'Adjustable Straps', 'Lightweight'],
      specs: {
        weight: '4.5kg',
        capacity: '150kg',
        wheelType: 'Pneumatic',
        foldedSize: '80x40x15cm'
      }
    },
    {
      id: 74,
      name: 'Kayak Life Vest',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/kayak-vest.jpg',
      rating: 4.7,
      reviews: 234,
      category: 'Safety',
      brand: 'SafeWater',
      description: 'Kayaking-specific life vest with freedom of movement',
      isNew: true,
      isBestseller: true,
      activityType: 'Kayaking',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      kayakType: 'N/A',
      material: 'Nylon',
      capacity: 'N/A',
      features: ['Freedom of Movement', 'Multiple Pockets', 'Comfort Fit', 'USCG Approved'],
      specs: {
        sizes: 'XS-XXL',
        approval: 'USCG Type III',
        material: '500D Nylon',
        colors: 'Multiple'
      }
    }
  ];

  const kayakingCategories = [
    {
      name: 'Recreational Kayaks',
      icon: '🛶',
      description: 'Stable & Easy to Use',
      count: '15 products',
      slug: 'recreational'
    },
    {
      name: 'Touring Kayaks',
      icon: '🌊',
      description: 'Long Distance & Sea',
      count: '8 products',
      slug: 'touring'
    },
    {
      name: 'Fishing Kayaks',
      icon: '🎣',
      description: 'Rod Holders & Storage',
      count: '12 products',
      slug: 'fishing'
    },
    {
      name: 'Inflatable Kayaks',
      icon: '🎒',
      description: 'Portable & Compact',
      count: '6 products',
      slug: 'inflatable'
    },
    {
      name: 'Whitewater Kayaks',
      icon: '💦',
      description: 'Rivers & Rapids',
      count: '5 products',
      slug: 'whitewater'
    },
    {
      name: 'Kayak Accessories',
      icon: '🔧',
      description: 'Paddles, Racks & Gear',
      count: '25 products',
      slug: 'accessories'
    }
  ];

  const kayakingTypes = [
    {
      name: 'Recreational',
      description: 'Perfect for beginners and calm waters',
      icon: '😊'
    },
    {
      name: 'Touring',
      description: 'Designed for long-distance paddling',
      icon: '🏞️'
    },
    {
      name: 'Fishing',
      description: 'Specialized for anglers with storage',
      icon: '🎣'
    },
    {
      name: 'Whitewater',
      description: 'Maneuverable for rivers and rapids',
      icon: '💦'
    }
  ];

  const filters = {
    category: ['Recreational Kayaks', 'Touring Kayaks', 'Fishing Kayaks', 'Inflatable Kayaks', 'Whitewater Kayaks', 'Tandem Kayaks', 'Paddles', 'Safety', 'Accessories'],
    priceRange: [
      'Under $100',
      '$100 - $300',
      '$300 - $600',
      '$600 - $1,000',
      'Above $1,000'
    ],
    brand: ['PaddlePro', 'OceanPro', 'TravelPro', 'RapidPro', 'CarryPro', 'AquaPro', 'SafeWater'],
    skillLevel: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
    kayakType: ['Sit-On-Top', 'Sit-Inside', 'Inflatable', 'Tandem'],
    material: ['Polyethylene', 'Fiberglass', 'PVC', 'Plastic', 'Carbon Fiber', 'Aluminum'],
    capacity: ['1 Person', '2 Person', '2+ Person']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType ].includes(value)
        ? prev[filterType ].filter((item) => item !== value)
        : [...prev[filterType ], value]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Kayaking Equipment
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Explore lakes, rivers, and oceans with premium kayaks and gear. 
              From peaceful paddles to adventurous rapids, we have everything for your journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 text-lg shadow-lg"
              >
                Shop Kayaks
              </Link>
              <Link
                href="/sports-equipment/water-sports"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 text-lg"
              >
                Back to Water Sports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kayaking Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Your Perfect Kayak
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different kayaks for different adventures. Choose the right one for your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kayakingTypes.map((type, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.name}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kayaking Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Kayaking Categories
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Complete range of kayaks and accessories for every type of paddling adventure
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {kayakingCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/water-sports/kayaking/${category.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  {category.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Kayaking Gear?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Certified</h3>
              <p className="text-gray-600">All kayaks meet international safety standards and buoyancy requirements</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Designed</h3>
              <p className="text-gray-600">Optimized hull designs for stability, speed, and maneuverability</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Durable Construction</h3>
              <p className="text-gray-600">Built with UV-resistant materials and impact-resistant hulls</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Adventure Ready</h3>
              <p className="text-gray-600">Complete systems with storage, comfort features, and accessories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Kayaking Equipment
              </h2>
              <p className="text-gray-600 text-lg">
                {kayakingProducts.length} products for your paddling adventures
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 min-w-48"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="capacity">Capacity</option>
                <option value="weight">Lightest First</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl p-6 sticky top-4 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Filter className="w-6 h-6 mr-3" />
                  Kayak Filters
                </h3>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Kayak Type</h4>
                  <div className="space-y-2">
                    {filters.category.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.category.includes(category)}
                          onChange={() => toggleFilter('category', category)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Kayak Style Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Kayak Style</h4>
                  <div className="space-y-2">
                    {filters.kayakType.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.kayakType.includes(type)}
                          onChange={() => toggleFilter('kayakType', type)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Capacity Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Capacity</h4>
                  <div className="space-y-2">
                    {filters.capacity.map((capacity) => (
                      <label key={capacity} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.capacity.includes(capacity)}
                          onChange={() => toggleFilter('capacity', capacity)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{capacity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Material</h4>
                  <div className="space-y-2">
                    {filters.material.map((material) => (
                      <label key={material} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.material.includes(material)}
                          onChange={() => toggleFilter('material', material)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], skillLevel: [], kayakType: [], material: [], capacity: [] })}
                  className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-semibold"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {kayakingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center p-8">
                        {product.isNew && (
                          <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                          {product.category.includes('Fishing') ? '🎣' :
                           product.category.includes('Touring') ? '🌊' :
                           product.category.includes('Inflatable') ? '🎒' :
                           product.category.includes('Whitewater') ? '💦' :
                           product.category.includes('Paddle') ? '🛶' :
                           product.category.includes('Safety') ? '🛡️' : '🔧'}
                        </div>
                        <button className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
                          <div className="flex flex-col gap-2 items-end">
                            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                              {product.category}
                            </span>
                            <span className="text-xs bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">
                              {product.capacity}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                        
                        {/* Specifications */}
                        {product.specs && (
                          <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                            {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
                              <div key={key} className="text-gray-600">
                                <span className="font-medium">{key}:</span>
                                <span className="text-gray-900 ml-1">{value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* Features Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center mb-4">
                          <div className="flex items-center">
                            <Star className="w-5 h-5 text-amber-400 fill-current" />
                            <span className="ml-1 text-sm font-medium text-gray-600">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
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
                          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-sm">
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
                  {kayakingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center p-6">
                        {product.isNew && (
                          <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category.includes('Fishing') ? '🎣' :
                           product.category.includes('Touring') ? '🌊' :
                           product.category.includes('Inflatable') ? '🎒' :
                           product.category.includes('Whitewater') ? '💦' :
                           product.category.includes('Paddle') ? '🛶' :
                           product.category.includes('Safety') ? '🛡️' : '🔧'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                                {product.category}
                              </span>
                              <span className="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">
                                {product.capacity}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            
                            {/* Specifications Grid */}
                            {product.specs && (
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                {Object.entries(product.specs).map(([key, value]) => (
                                  <div key={key} className="text-center bg-gray-50 rounded-lg p-3">
                                    <div className="text-sm text-gray-600 capitalize">{key}</div>
                                    <div className="font-semibold text-gray-900">{value}</div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Features Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {product.features.map((feature, index) => (
                                <span key={index} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          <button className="bg-white hover:bg-gray-50 p-3 rounded-full border border-gray-200 ml-4">
                            <Heart className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Star className="w-5 h-5 text-amber-400 fill-current" />
                            <span className="ml-1 font-medium text-gray-600">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div>
                              <span className="text-xl font-bold text-gray-900">{product.price}</span>
                              {product.originalPrice && (
                                <span className="ml-2 text-lg text-gray-500 line-through">
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
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Training */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Kayak Safety & Training
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Stay safe on the water with proper equipment and training
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Safety Gear</h3>
              <p className="text-blue-100 mb-4">Life vests, whistles, and safety equipment</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Shop Safety
              </button>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Training Courses</h3>
              <p className="text-blue-100 mb-4">Beginner to advanced kayaking lessons</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Find Courses
              </button>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Trip Planning</h3>
              <p className="text-blue-100 mb-4">Maps, guides, and adventure planning</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Plan Adventure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Storage & Transport */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Storage & Transport Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to transport and store your kayak safely
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="font-semibold text-gray-900 mb-2">Roof Racks</h3>
              <p className="text-gray-600 text-sm">Secure transportation for your vehicle</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="font-semibold text-gray-900 mb-2">Storage Systems</h3>
              <p className="text-gray-600 text-sm">Wall mounts and storage solutions</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🎒</div>
              <h3 className="font-semibold text-gray-900 mb-2">Carry Carts</h3>
              <p className="text-gray-600 text-sm">Easy transport from car to water</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-semibold text-gray-900 mb-2">Cover & Protection</h3>
              <p className="text-gray-600 text-sm">Covers for sun and weather protection</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}