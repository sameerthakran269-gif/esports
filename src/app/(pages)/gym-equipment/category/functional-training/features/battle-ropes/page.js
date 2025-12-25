// app/gym-equipment/functional-training/battle-ropes/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Activity, Zap, Users, Target, Clock, Flame, Gauge, Waves } from 'lucide-react';

export default function BattleRopesPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    features: []
  });

  const battleRopes = [
    {
      id: 1,
      name: 'Professional Battle Ropes (2 inch)',
      price: '$189.99',
      originalPrice: '$249.99',
      image: '/pro-battle-ropes.jpg',
      rating: 4.8,
      reviews: 324,
      category: 'Professional',
      brand: 'WodFit',
      description: 'Heavy-duty 2-inch battle ropes for intense conditioning and strength endurance',
      features: ['2-inch Diameter', '50ft Length', 'Marine-grade Nylon', 'Anchoring System', 'Carry Bag'],
      specifications: {
        diameter: '2 inches',
        length: '50 feet',
        material: 'Marine-grade Nylon',
        weight: '55lb',
        anchors: 'Included'
      },
      exercises: ['Power Slams', 'Alternating Waves', 'Double Waves', 'Spirals', 'Whips'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      professional: true,
      heavyDuty: true
    },
    {
      id: 2,
      name: 'Standard Battle Ropes (1.5 inch)',
      price: '$129.99',
      originalPrice: '$169.99',
      image: '/standard-battle-ropes.jpg',
      rating: 4.6,
      reviews: 278,
      category: 'Standard',
      brand: 'CardioPro',
      description: 'Versatile 1.5-inch battle ropes suitable for all fitness levels',
      features: ['1.5-inch Diameter', '40ft Length', 'Durable Polyester', 'Easy Storage'],
      specifications: {
        diameter: '1.5 inches',
        length: '40 feet',
        material: 'Heavy-duty Polyester',
        weight: '35lb',
        storage: 'Carry Bag Included'
      },
      exercises: ['Waves', 'Slams', 'Circles', 'Snakes', 'Jumping Jacks'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      professional: false,
      heavyDuty: false
    },
    {
      id: 3,
      name: 'Light Battle Ropes (1 inch)',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/light-battle-ropes.jpg',
      rating: 4.4,
      reviews: 156,
      category: 'Light',
      brand: 'FitBegin',
      description: 'Perfect for beginners, rehabilitation, and high-rep metabolic conditioning',
      features: ['1-inch Diameter', '30ft Length', 'Lightweight', 'Beginner Friendly', 'Portable'],
      specifications: {
        diameter: '1 inch',
        length: '30 feet',
        material: 'Polyester Blend',
        weight: '20lb',
        level: 'Beginner'
      },
      exercises: ['Light Waves', 'Rehab Movements', 'Endurance Training', 'Coordination Drills'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      professional: false,
      heavyDuty: false
    },
    {
      id: 4,
      name: 'Anchored Battle Rope System',
      price: '$299.99',
      originalPrice: '$399.99',
      image: '/anchored-battle-ropes.jpg',
      rating: 4.7,
      reviews: 194,
      category: 'System',
      brand: 'AnchorPro',
      description: 'Complete battle rope system with professional anchoring and multiple rope options',
      features: ['Wall Anchor', '3 Rope Sizes', 'Quick-Change System', 'Commercial Grade'],
      specifications: {
        ropes: '1", 1.5", 2"',
        anchor: 'Professional Wall Mount',
        length: 'Adjustable 30-50ft',
        material: 'Commercial Nylon',
        warranty: 'Lifetime'
      },
      exercises: ['All Battle Rope Exercises', 'Anchor Variations', 'Team Training', 'Class Use'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      professional: true,
      heavyDuty: true
    },
    {
      id: 5,
      name: 'Travel Battle Ropes',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/travel-battle-ropes.jpg',
      rating: 4.3,
      reviews: 187,
      category: 'Travel',
      brand: 'GoFit',
      description: 'Lightweight and compact battle ropes perfect for travel and outdoor workouts',
      features: ['Ultra Lightweight', 'Compact Design', 'Travel Bag', 'Multi-surface Use'],
      specifications: {
        diameter: '1 inch',
        length: '25 feet',
        material: 'Lightweight Nylon',
        weight: '15lb',
        portability: 'Ultra Compact'
      },
      exercises: ['Travel Workouts', 'Outdoor Training', 'Hotel Workouts', 'Beach Exercises'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      professional: false,
      heavyDuty: false
    },
    {
      id: 6,
      name: 'Commercial Gym Battle Ropes',
      price: '$249.99',
      originalPrice: '$329.99',
      image: '/commercial-battle-ropes.jpg',
      rating: 4.9,
      reviews: 112,
      category: 'Commercial',
      brand: 'GymForce',
      description: 'Heavy-duty commercial battle ropes built to withstand gym abuse and intense use',
      features: ['3-inch Diameter', '60ft Length', 'Industrial Anchors', 'Wear-resistant'],
      specifications: {
        diameter: '3 inches',
        length: '60 feet',
        material: 'Industrial Nylon',
        weight: '85lb',
        usage: 'Commercial Gym'
      },
      exercises: ['Heavy Slams', 'Power Waves', 'Strength Endurance', 'Athletic Training'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      professional: true,
      heavyDuty: true
    },
    {
      id: 7,
      name: 'Battle Rope Anchor Kit',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/anchor-kit.jpg',
      rating: 4.5,
      reviews: 223,
      category: 'Accessory',
      brand: 'SecureFit',
      description: 'Universal battle rope anchor kit for secure mounting anywhere',
      features: ['Universal Fit', 'Multiple Mounting Options', 'Heavy-duty Construction', 'Easy Installation'],
      specifications: {
        compatibility: 'All Rope Sizes',
        mounting: 'Wall, Post, Tree',
        capacity: '500lb+',
        material: 'Steel Construction',
        installation: 'Tool-free'
      },
      exercises: ['Secure Anchoring', 'Various Locations', 'Outdoor Setup', 'Temporary Installation'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      professional: false,
      heavyDuty: true
    },
    {
      id: 8,
      name: 'Battle Rope Workout Package',
      price: '$179.99',
      originalPrice: '$229.99',
      image: '/workout-package.jpg',
      rating: 4.6,
      reviews: 178,
      category: 'Package',
      brand: 'TrainComplete',
      description: 'Complete battle rope package with ropes, anchor, and workout guide',
      features: ['2 Rope Sizes', 'Anchor Included', 'Workout Program', 'Carry Case'],
      specifications: {
        ropes: '1.5" & 2"',
        length: '40ft each',
        accessories: 'Full Package',
        guide: '100+ Exercises',
        storage: 'Professional Case'
      },
      exercises: ['Complete Programming', 'Progressive Workouts', 'All Skill Levels', 'Group Training'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      professional: true,
      heavyDuty: false
    }
  ];

  const ropeCategories = [
    {
      name: 'Professional',
      image: '/pro-ropes.jpg',
      description: 'Heavy-duty 2-3 inch ropes',
      count: 4,
      icon: '💪',
      slug: 'battle-ropes/professional'
    },
    {
      name: 'Standard',
      image: '/standard-ropes.jpg',
      description: '1.5 inch all-purpose',
      count: 3,
      icon: '⚡',
      slug: 'battle-ropes/standard'
    },
    {
      name: 'Light & Travel',
      image: '/light-ropes.jpg',
      description: 'Portable and beginner',
      count: 5,
      icon: '🎒',
      slug: 'battle-ropes/light-travel'
    },
    {
      name: 'Commercial',
      image: '/commercial-ropes.jpg',
      description: 'Gym grade equipment',
      count: 3,
      icon: '🏢',
      slug: 'battle-ropes/commercial'
    },
    {
      name: 'Complete Systems',
      image: '/rope-systems.jpg',
      description: 'With anchors and accessories',
      count: 4,
      icon: '🔧',
      slug: 'battle-ropes/systems'
    },
    {
      name: 'Accessories',
      image: '/rope-accessories.jpg',
      description: 'Anchors and storage',
      count: 6,
      icon: '🛠️',
      slug: 'battle-ropes/accessories'
    },
    {
      name: 'Workout Packages',
      image: '/workout-packages.jpg',
      description: 'Complete training kits',
      count: 3,
      icon: '📦',
      slug: 'battle-ropes/packages'
    },
    {
      name: 'Replacement Parts',
      image: '/replacement-parts.jpg',
      description: 'Ropes and components',
      count: 8,
      icon: '🔩',
      slug: 'battle-ropes/parts'
    }
  ];

  const filters = {
    type: ['Professional', 'Standard', 'Light', 'Travel', 'Commercial', 'System', 'Package', 'Accessory'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $150',
      '$150 - $250',
      'Above $250'
    ],
    brand: ['WodFit', 'CardioPro', 'FitBegin', 'AnchorPro', 'GoFit', 'GymForce', 'SecureFit', 'TrainComplete'],
    features: ['Heavy-duty', 'Portable', 'Commercial Grade', 'Complete System', 'Beginner Friendly', 'Travel Ready', 'With Anchor', 'Workout Guide']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-800 to-red-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-orange-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/functional-training" className="hover:text-white transition-colors">Functional Training</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Battle Ropes</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Battle Ropes
              </h1>
              <p className="text-xl text-orange-100 max-w-2xl">
                Unleash explosive power and cardiovascular endurance. High-intensity battle rope training 
                for ultimate conditioning and full-body metabolic workouts.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🌊</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <Flame className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">500+</span>
              </div>
              <p className="text-sm text-gray-600">Calories/Hour</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Waves className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Full Body</span>
              </div>
              <p className="text-sm text-gray-600">Muscle Engagement</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Gauge className="w-5 h-5 text-yellow-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">High Intensity</span>
              </div>
              <p className="text-sm text-gray-600">Cardio & Strength</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">10 Min</span>
              </div>
              <p className="text-sm text-gray-600">Effective Workouts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Battle Rope Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {ropeCategories.map((category, index) => (
              <Link
                key={index}
                href={`/gym-equipment/${category.slug}`}
                className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-orange-200 group-hover:to-red-300 transition-all duration-200">
                  <div className="text-lg">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-orange-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded-full">
                  {category.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Battle Rope Training Systems
              </h2>
              <p className="text-gray-600">
                {battleRopes.length} high-intensity battle ropes for explosive conditioning and metabolic training
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-orange-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-orange-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
                <option value="diameter">Largest Diameter</option>
                <option value="professional">Professional Grade</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Battle Ropes
                </h3>

                {/* Rope Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Rope Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
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
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Features Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Features</h4>
                  <div className="space-y-2">
                    {filters.features.map((feature) => (
                      <label key={feature} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.features.includes(feature)}
                          onChange={() => toggleFilter('features', feature)}
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{feature}</span>
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
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Rope Diameter</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">1 inch (Light/Beginner)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">1.5 inch (Standard)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">2 inch (Professional)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">3 inch (Commercial)</span>
                    </label>
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ type: [], priceRange: [], brand: [], features: [] })}
                  className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {battleRopes.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        {product.professional && (
                          <span className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Flame className="w-3 h-3 mr-1" />
                            Pro Grade
                          </span>
                        )}
                        {product.heavyDuty && (
                          <span className="absolute top-12 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Gauge className="w-3 h-3 mr-1" />
                            Heavy Duty
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Out of Stock
                          </span>
                        )}
                        <div className="text-5xl">🌊</div>
                        <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Exercises */}
                        <div className="mb-3">
                          <div className="text-xs text-gray-500 mb-1">Sample Exercises:</div>
                          <div className="flex flex-wrap gap-1">
                            {product.exercises.slice(0, 3).map((exercise, index) => (
                              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {exercise}
                              </span>
                            ))}
                            {product.exercises.length > 3 && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                +{product.exercises.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Specifications */}
                        <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                          {Object.entries(product.specifications).slice(0, 4).map(([key, value], index) => (
                            <div key={index} className="text-gray-500">
                              <strong>{key}:</strong> {value}
                            </div>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.slice(0, 2).map((feature, index) => (
                              <span key={index} className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                            {product.features.length > 2 && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                +{product.features.length - 2} more
                              </span>
                            )}
                          </div>
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
                          <button 
                            className={`px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-semibold ${
                              product.inStock 
                                ? 'bg-orange-600 text-white hover:bg-orange-700' 
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={!product.inStock}
                          >
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* List View */
                <div className="space-y-6">
                  {battleRopes.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">🌊</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              {product.professional && (
                                <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full flex items-center">
                                  <Flame className="w-3 h-3 mr-1" />
                                  Pro Grade
                                </span>
                              )}
                              {product.heavyDuty && (
                                <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full flex items-center">
                                  <Gauge className="w-3 h-3 mr-1" />
                                  Heavy Duty
                                </span>
                              )}
                              {!product.inStock && (
                                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                  Out of Stock
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Exercises and Specifications */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="font-medium text-gray-500 text-sm mb-1">Sample Exercises</div>
                                <div className="flex flex-wrap gap-1">
                                  {product.exercises.slice(0, 4).map((exercise, index) => (
                                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                      {exercise}
                                    </span>
                                  ))}
                                  {product.exercises.length > 4 && (
                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                      +{product.exercises.length - 4} more
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-gray-500 text-sm mb-1">Key Specifications</div>
                                <div className="text-sm text-gray-600 space-y-1">
                                  {Object.entries(product.specifications).slice(0, 3).map(([key, value], index) => (
                                    <div key={index}>
                                      <strong>{key}:</strong> {value}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Features */}
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-2">
                                {product.features.map((feature, index) => (
                                  <span key={index} className="text-sm bg-orange-50 text-orange-600 px-3 py-1 rounded-full">
                                    {feature}
                                  </span>
                                ))}
                              </div>
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
                          <button 
                            className={`px-6 py-3 rounded-lg transition-colors duration-200 font-semibold ${
                              product.inStock 
                                ? 'bg-orange-600 text-white hover:bg-orange-700' 
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={!product.inStock}
                          >
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
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

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Battle Rope Training?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              High-intensity full-body workouts that build explosive power, cardiovascular endurance, and metabolic conditioning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Extreme Calorie Burn</h3>
              <p className="text-gray-600 text-sm">
                Burn 500+ calories per hour with high-intensity interval training
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Body Engagement</h3>
              <p className="text-gray-600 text-sm">
                Simultaneously work arms, shoulders, core, and cardiovascular system
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gauge className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Explosive Power</h3>
              <p className="text-gray-600 text-sm">
                Develop fast-twitch muscle fibers and athletic power movements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Time Efficient</h3>
              <p className="text-gray-600 text-sm">
                Get maximum results in minimal time with 10-20 minute workouts
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}