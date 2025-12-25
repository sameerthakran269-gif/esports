// app/sports-equipment/water-sports/wakeboarding/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, Zap, Shield, Wind, Activity } from 'lucide-react';

export default function WakeboardingPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: [],
    skillLevel: [],
    boardType: [],
    rockerType: [],
    size: []
  });

  const wakeboardingProducts = [
    {
      id: 41,
      name: 'Wakeboard Package',
      price: '$349.99',
      originalPrice: '$449.99',
      image: '/wakeboard.jpg',
      rating: 4.4,
      reviews: 112,
      category: 'Wakeboards',
      brand: 'WaveRider',
      description: 'Complete wakeboard package with bindings and board for all skill levels',
      isNew: true,
      isBestseller: false,
      activityType: 'Wakeboarding',
      skillLevel: 'Beginner',
      waterType: ['Lake', 'Ocean'],
      boardType: 'Continuous Rocker',
      rockerType: 'Continuous',
      size: '140cm',
      features: ['Adjustable Bindings', 'Durable Construction', 'All-Level Design', 'Multiple Fin Setup'],
      specs: {
        length: '140cm',
        width: '43cm',
        rocker: 'Continuous',
        fins: '4 (removable)',
        core: 'Wood'
      }
    },
    {
      id: 75,
      name: 'Pro Performance Wakeboard',
      price: '$599.99',
      originalPrice: '$749.99',
      image: '/pro-wakeboard.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Wakeboards',
      brand: 'Hyperlite',
      description: 'High-performance wakeboard with hybrid rocker for advanced riders',
      isNew: false,
      isBestseller: true,
      activityType: 'Wakeboarding',
      skillLevel: 'Advanced',
      waterType: ['Lake', 'Cable Park'],
      boardType: 'Hybrid Rocker',
      rockerType: 'Hybrid',
      size: '142cm',
      features: ['Hybrid Rocker', 'Carbon Reinforcement', 'M6 Inserts', 'Aggressive Channels'],
      specs: {
        length: '142cm',
        width: '45cm',
        rocker: 'Hybrid',
        fins: '4 (molded)',
        core: 'PVC Foam'
      }
    },
    {
      id: 76,
      name: 'Wakeboard Bindings',
      price: '$229.99',
      originalPrice: '$299.99',
      image: '/wakeboard-bindings.jpg',
      rating: 4.6,
      reviews: 89,
      category: 'Bindings',
      brand: 'Liquid Force',
      description: 'Open-toe bindings with adjustable support and comfort liner',
      isNew: true,
      isBestseller: false,
      activityType: 'Wakeboarding',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      boardType: 'N/A',
      rockerType: 'N/A',
      size: 'M/L',
      features: ['Open-Toe Design', 'Adjustable Support', 'Comfort Liner', 'Quick Lace System'],
      specs: {
        size: 'M/L (8-11)',
        closure: 'Lace & Strap',
        base: 'Aluminum',
        flex: 'Medium'
      }
    },
    {
      id: 77,
      name: 'Wakeboard Helmet',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/wakeboard-helmet.jpg',
      rating: 4.5,
      reviews: 156,
      category: 'Safety',
      brand: 'Pro-Tec',
      description: 'Waterproof wakeboard helmet with ear protection and adjustable fit',
      isNew: false,
      isBestseller: true,
      activityType: 'Wakeboarding',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      boardType: 'N/A',
      rockerType: 'N/A',
      size: 'Universal',
      features: ['Waterproof', 'Ear Protection', 'Adjustable Fit', 'Multiple Vents'],
      specs: {
        sizes: 'S, M, L, XL',
        certification: 'CE EN1385',
        vents: '13',
        weight: '450g'
      }
    },
    {
      id: 78,
      name: 'Wakeboard Rope & Handle',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/wakeboard-rope.jpg',
      rating: 4.7,
      reviews: 134,
      category: 'Accessories',
      brand: 'Straight Line',
      description: 'Professional wakeboard rope with ergonomic handle and no-stretch design',
      isNew: true,
      isBestseller: true,
      activityType: 'Wakeboarding',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      boardType: 'N/A',
      rockerType: 'N/A',
      size: '23m',
      features: ['No-Stretch Rope', 'Ergonomic Handle', 'Floating Design', 'Multiple Sections'],
      specs: {
        length: '23m',
        sections: '6',
        handle: 'Composite',
        float: 'Yes'
      }
    },
    {
      id: 79,
      name: 'Youth Wakeboard Package',
      price: '$279.99',
      originalPrice: '$349.99',
      image: '/youth-wakeboard.jpg',
      rating: 4.3,
      reviews: 78,
      category: 'Wakeboards',
      brand: 'Ronix',
      description: 'Complete youth wakeboard package designed for younger riders',
      isNew: false,
      isBestseller: false,
      activityType: 'Wakeboarding',
      skillLevel: 'Beginner',
      waterType: ['Lake'],
      boardType: 'Continuous Rocker',
      rockerType: 'Continuous',
      size: '120cm',
      features: ['Youth Specific Design', 'Soft Bindings', 'Stable Platform', 'Bright Graphics'],
      specs: {
        length: '120cm',
        width: '38cm',
        rocker: 'Continuous',
        fins: '4 (molded)',
        weightRange: '30-50kg'
      }
    },
    {
      id: 80,
      name: 'Wakeboard Vest',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/wakeboard-vest.jpg',
      rating: 4.6,
      reviews: 203,
      category: 'Safety',
      brand: 'Oneill',
      description: 'Impact vest with flotation and impact protection for wakeboarding',
      isNew: true,
      isBestseller: true,
      activityType: 'Wakeboarding',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      boardType: 'N/A',
      rockerType: 'N/A',
      size: 'L',
      features: ['Impact Protection', 'USCG Approved', 'Flexible Material', 'Multiple Sizes'],
      specs: {
        sizes: 'XS-XXL',
        approval: 'USCG Type III',
        buoyancy: '7kg',
        material: 'Neoprene'
      }
    },
    {
      id: 81,
      name: 'Cable Park Wakeboard',
      price: '$499.99',
      originalPrice: '$649.99',
      image: '/cable-wakeboard.jpg',
      rating: 4.9,
      reviews: 45,
      category: 'Wakeboards',
      brand: 'Slingshot',
      description: 'Durable wakeboard specifically designed for cable park riding',
      isNew: true,
      isBestseller: false,
      activityType: 'Wakeboarding',
      skillLevel: 'Advanced',
      waterType: ['Cable Park'],
      boardType: 'Three-Stage Rocker',
      rockerType: 'Three-Stage',
      size: '145cm',
      features: ['Durable Construction', 'Aggressive Pop', 'Rail Protection', 'Flex Control'],
      specs: {
        length: '145cm',
        width: '46cm',
        rocker: 'Three-Stage',
        fins: 'Fincast System',
        core: 'Paulownia Wood'
      }
    },
    {
      id: 82,
      name: 'Wakeboard Tower',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/wakeboard-tower.jpg',
      rating: 4.4,
      reviews: 34,
      category: 'Boat Accessories',
      brand: 'Roswell',
      description: 'Universal wakeboard tower with speaker mounts and board storage',
      isNew: false,
      isBestseller: true,
      activityType: 'Wakeboarding',
      skillLevel: 'All Levels',
      waterType: ['N/A'],
      boardType: 'N/A',
      rockerType: 'N/A',
      size: 'Universal',
      features: ['Universal Fit', 'Speaker Mounts', 'Board Storage', 'Quick Release'],
      specs: {
        fit: 'Universal',
        material: 'Aluminum',
        finish: 'Powder Coat',
        warranty: '3 years'
      }
    },
    {
      id: 83,
      name: 'Wakeboard Rack',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/wakeboard-rack.jpg',
      rating: 4.2,
      reviews: 67,
      category: 'Storage',
      brand: 'Krypt',
      description: 'Wakeboard rack for tower mounting with quick-release mechanism',
      isNew: true,
      isBestseller: false,
      activityType: 'Wakeboarding',
      skillLevel: 'All Levels',
      waterType: ['N/A'],
      boardType: 'N/A',
      rockerType: 'N/A',
      size: 'Universal',
      features: ['Tower Mount', 'Quick Release', 'Locking Mechanism', 'UV Protected'],
      specs: {
        capacity: '2 boards',
        material: 'Stainless Steel',
        lock: 'Keyed',
        colors: 'Black, Silver'
      }
    },
    {
      id: 84,
      name: 'Wakeboard Gloves',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/wakeboard-gloves.jpg',
      rating: 4.1,
      reviews: 89,
      category: 'Accessories',
      brand: 'Liquid Force',
      description: 'Grip-enhancing gloves for better handle control and protection',
      isNew: false,
      isBestseller: true,
      activityType: 'Wakeboarding',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      boardType: 'N/A',
      rockerType: 'N/A',
      size: 'M',
      features: ['Grip Enhancement', 'Quick Dry', 'Reinforced Palm', 'Wrist Strap'],
      specs: {
        sizes: 'S, M, L, XL',
        material: 'Neoprene',
        palm: 'Silicone Grip',
        closure: 'Velcro'
      }
    },
    {
      id: 85,
      name: 'Wakeboard Shorts',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '/wakeboard-shorts.jpg',
      rating: 4.3,
      reviews: 145,
      category: 'Apparel',
      brand: 'Billabong',
      description: 'Board shorts with stretch material and quick-dry technology',
      isNew: true,
      isBestseller: false,
      activityType: 'Wakeboarding',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      boardType: 'N/A',
      rockerType: 'N/A',
      size: '32',
      features: ['4-Way Stretch', 'Quick Dry', 'UPF 50+', 'Multiple Pockets'],
      specs: {
        sizes: '28-38',
        material: 'Polyester/Spandex',
        inseam: '21"',
        features: 'UPF 50+'
      }
    }
  ];

  const wakeboardingCategories = [
    {
      name: 'Wakeboards',
      icon: '🏄',
      description: 'Complete Boards & Packages',
      count: '12 products',
      slug: 'wakeboards'
    },
    {
      name: 'Bindings',
      icon: '👟',
      description: 'Boots & Binding Systems',
      count: '8 products',
      slug: 'bindings'
    },
    {
      name: 'Safety Gear',
      icon: '🛡️',
      description: 'Vests, Helmets & Protection',
      count: '15 products',
      slug: 'safety-gear'
    },
    {
      name: 'Ropes & Handles',
      icon: '🪢',
      description: 'Professional Tow Equipment',
      count: '6 products',
      slug: 'ropes-handles'
    },
    {
      name: 'Boat Accessories',
      icon: '🚤',
      description: 'Towers, Racks & Systems',
      count: '10 products',
      slug: 'boat-accessories'
    },
    {
      name: 'Apparel',
      icon: '👕',
      description: 'Shorts, Gloves & Accessories',
      count: '18 products',
      slug: 'apparel'
    }
  ];

  const wakeboardingStyles = [
    {
      name: 'Boat Riding',
      description: 'Traditional wakeboarding behind a boat',
      icon: '🚤',
      features: ['Higher Jumps', 'Smoother Wake', 'Progressive Learning']
    },
    {
      name: 'Cable Park',
      description: 'Wakeboarding at cable parks with obstacles',
      icon: '🏗️',
      features: ['Rails & Obstacles', 'Consistent Pull', 'Social Environment']
    },
    {
      name: 'Winch Riding',
      description: 'Urban or natural spots with portable winches',
      icon: '🎣',
      features: ['Portable Setup', 'Urban Locations', 'Creative Spots']
    }
  ];

  const skillProgressions = [
    {
      level: 'Beginner',
      description: 'Learning basics and getting up',
      goals: ['Getting Up', 'Basic Edging', 'Crossing Wake']
    },
    {
      level: 'Intermediate',
      description: 'Adding tricks and improving control',
      goals: ['Wake Jumps', 'Surface Tricks', '180 Spins']
    },
    {
      level: 'Advanced',
      description: 'Mastering advanced maneuvers',
      goals: ['Inverts', 'Spins 360+', 'Grabs & Variations']
    }
  ];

  const filters = {
    category: ['Wakeboards', 'Bindings', 'Safety', 'Accessories', 'Boat Accessories', 'Storage', 'Apparel'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $400',
      '$400 - $600',
      'Above $600'
    ],
    brand: ['WaveRider', 'Hyperlite', 'Liquid Force', 'Ronix', 'Slingshot', 'Oneill', 'Pro-Tec', 'Straight Line', 'Roswell'],
    skillLevel: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
    boardType: ['Continuous Rocker', 'Three-Stage Rocker', 'Hybrid Rocker'],
    rockerType: ['Continuous', 'Three-Stage', 'Hybrid'],
    size: ['120cm', '130cm', '135cm', '140cm', '142cm', '145cm', '150cm']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType ].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wake-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Wakeboarding Gear
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Catch air and master tricks with professional wakeboarding equipment. 
              From beginner boards to pro-level setups, ride the wake in style.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 text-lg shadow-lg"
              >
                Shop Wake Gear
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

      {/* Wakeboarding Styles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Wakeboarding Styles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different styles require different gear. Choose your riding style.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wakeboardingStyles.map((style, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{style.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{style.name}</h3>
                <p className="text-gray-600 mb-4">{style.description}</p>
                <ul className="space-y-2">
                  {style.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Progression */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Skill Progression
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Track your progress and choose gear that matches your skill level
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {skillProgressions.map((level, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">{level.level}</div>
                <p className="text-gray-600 mb-4 text-sm">{level.description}</p>
                <div className="space-y-2">
                  {level.goals.map((goal, idx) => (
                    <div key={idx} className="text-sm text-gray-700 bg-gray-50 rounded-lg py-2 px-3">
                      {goal}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wakeboarding Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Wakeboarding Categories
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Complete range of wakeboarding equipment for every style and skill level
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {wakeboardingCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/water-sports/wakeboarding/${category.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                  {category.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Features */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Performance Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Explosive Pop</h3>
              <p className="text-purple-100">Rocker designs for maximum air and control</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Wind className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Superior Control</h3>
              <p className="text-purple-100">Channel and fin systems for precise handling</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Durable Construction</h3>
              <p className="text-purple-100">Impact-resistant materials for cable parks</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Activity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Progressive Design</h3>
              <p className="text-purple-100">Boards that grow with your skill level</p>
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
                Wakeboarding Equipment
              </h2>
              <p className="text-gray-600 text-lg">
                {wakeboardingProducts.length} products for catching air and riding waves
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-300 min-w-48"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="skill-level">Skill Level</option>
                <option value="pop">Best Pop</option>
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
                  Wakeboard Filters
                </h3>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Equipment Type</h4>
                  <div className="space-y-2">
                    {filters.category.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.category.includes(category)}
                          onChange={() => toggleFilter('category', category)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Board Type Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Board Type</h4>
                  <div className="space-y-2">
                    {filters.boardType.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.boardType.includes(type)}
                          onChange={() => toggleFilter('boardType', type)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rocker Type Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Rocker Type</h4>
                  <div className="space-y-2">
                    {filters.rockerType.map((rocker) => (
                      <label key={rocker} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.rockerType.includes(rocker)}
                          onChange={() => toggleFilter('rockerType', rocker)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{rocker}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Board Size</h4>
                  <div className="space-y-2">
                    {filters.size.map((size) => (
                      <label key={size} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.size.includes(size)}
                          onChange={() => toggleFilter('size', size)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], skillLevel: [], boardType: [], rockerType: [], size: [] })}
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
                  {wakeboardingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-purple-50 to-blue-100 flex items-center justify-center p-8">
                        {product.isNew && (
                          <span className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                          {product.category === 'Wakeboards' ? '🏄' :
                           product.category === 'Bindings' ? '👟' :
                           product.category === 'Safety' ? '🛡️' :
                           product.category === 'Accessories' ? '🪢' :
                           product.category === 'Boat Accessories' ? '🚤' :
                           product.category === 'Storage' ? '📦' : '👕'}
                        </div>
                        <button className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
                          <div className="flex flex-col gap-2 items-end">
                            <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                              {product.category}
                            </span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                              {product.skillLevel}
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
                          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold text-sm">
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
                  {wakeboardingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-purple-50 to-blue-100 flex items-center justify-center p-6">
                        {product.isNew && (
                          <span className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Wakeboards' ? '🏄' :
                           product.category === 'Bindings' ? '👟' :
                           product.category === 'Safety' ? '🛡️' :
                           product.category === 'Accessories' ? '🪢' :
                           product.category === 'Boat Accessories' ? '🚤' :
                           product.category === 'Storage' ? '📦' : '👕'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                              <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                                {product.category}
                              </span>
                              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                                {product.skillLevel}
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
                            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold">
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

      {/* Training & Tips */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Wakeboarding Training & Tips
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Improve your skills with professional training and expert tips
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Lessons & Coaching</h3>
              <p className="text-purple-100 mb-4">Professional instruction for all levels</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Find Coaches
              </button>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Trick Tips</h3>
              <p className="text-purple-100 mb-4">Step-by-step guides for new tricks</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Learn Tricks
              </button>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Competition Ready</h3>
              <p className="text-purple-100 mb-4">Gear and training for competitions</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Compete
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gear Care */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Wakeboard Gear Care
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Keep your equipment in top condition for optimal performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">💦</div>
              <h3 className="font-semibold text-gray-900 mb-2">Rinse After Use</h3>
              <p className="text-gray-600 text-sm">Fresh water rinse prevents damage</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🌬️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Proper Drying</h3>
              <p className="text-gray-600 text-sm">Air dry away from direct sunlight</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Regular Inspection</h3>
              <p className="text-gray-600 text-sm">Check fins, bindings, and edges</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-semibold text-gray-900 mb-2">Safe Storage</h3>
              <p className="text-gray-600 text-sm">Store flat or on proper racks</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}