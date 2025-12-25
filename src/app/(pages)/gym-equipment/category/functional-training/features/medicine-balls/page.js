// app/gym-equipment/functional-training/medicine-balls/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Activity, Zap, Users, Target, Dumbbell, RotateCcw, Award, Sparkles } from 'lucide-react';

export default function MedicineBallsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    features: []
  });

  const medicineBalls = [
    {
      id: 1,
      name: 'Rubber Medicine Ball Set (4-20lb)',
      price: '$179.99',
      originalPrice: '$229.99',
      image: '/rubber-medicine-balls.jpg',
      rating: 4.8,
      reviews: 342,
      category: 'Rubber',
      brand: 'MedBall Pro',
      description: 'Professional rubber medicine ball set with bounce technology and grip surface',
      features: ['Bounce Technology', 'Grip Surface', 'Color Coded', 'Storage Rack', 'Durable Rubber'],
      specifications: {
        weights: '4, 6, 8, 10, 12, 15, 20lb',
        material: 'High-density Rubber',
        bounce: 'Controlled Response',
        diameter: '10-14 inches',
        storage: 'Rack Included'
      },
      exercises: ['Wall Balls', 'Slams', 'Russian Twists', 'Overhead Throws', 'Squat to Press'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      bounce: true,
      texturedGrip: true
    },
    {
      id: 2,
      name: 'Leather Medicine Ball Set',
      price: '$149.99',
      originalPrice: '$199.99',
      image: '/leather-medicine-balls.jpg',
      rating: 4.7,
      reviews: 278,
      category: 'Leather',
      brand: 'ClassicFit',
      description: 'Traditional leather medicine balls for no-bounce strength and power training',
      features: ['No Bounce', 'Leather Construction', 'Reinforced Stitching', 'Classic Design'],
      specifications: {
        weights: '6, 8, 10, 12, 16lb',
        material: 'Genuine Leather',
        bounce: 'Minimal',
        surface: 'Soft Grip',
        tradition: 'Classic Training'
      },
      exercises: ['Chest Passes', 'Rotational Throws', 'Partner Drills', 'Strength Training'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      bounce: false,
      texturedGrip: true
    },
    {
      id: 3,
      name: 'Wall Ball Professional (20lb)',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/wall-ball-pro.jpg',
      rating: 4.9,
      reviews: 456,
      category: 'Wall Ball',
      brand: 'WodFit',
      description: 'Competition-grade wall ball designed for CrossFit and high-rep wall ball shots',
      features: ['Competition Spec', 'Grip Texture', 'Durable Cover', 'Target Line'],
      specifications: {
        weight: '20lb',
        material: 'Textured Rubber',
        diameter: '14 inches',
        target: '10ft Mark',
        usage: 'Competition'
      },
      exercises: ['Wall Ball Shots', 'Squat Thrusters', 'High-Rep WODs', 'Conditioning'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      bounce: true,
      texturedGrip: true
    },
    {
      id: 4,
      name: 'Soft Medicine Ball Set',
      price: '$129.99',
      originalPrice: '$169.99',
      image: '/soft-medicine-balls.jpg',
      rating: 4.6,
      reviews: 194,
      category: 'Soft',
      brand: 'SafeTrain',
      description: 'Soft-shell medicine balls perfect for rehabilitation and beginner training',
      features: ['Soft Shell', 'Lightweight', 'Beginner Friendly', 'Rehabilitation Safe'],
      specifications: {
        weights: '2, 4, 6, 8, 10lb',
        material: 'Vinyl Shell + Sand',
        bounce: 'Limited',
        safety: 'Maximum Protection',
        level: 'Beginner/Rehab'
      },
      exercises: ['Rehab Throws', 'Coordination Drills', 'Senior Fitness', 'Physical Therapy'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      bounce: false,
      texturedGrip: false
    },
    {
      id: 5,
      name: 'Adjustable Medicine Ball',
      price: '$99.99',
      originalPrice: '$129.99',
      image: '/adjustable-medicine-ball.jpg',
      rating: 4.5,
      reviews: 287,
      category: 'Adjustable',
      brand: 'FlexWeight',
      description: 'Space-saving adjustable medicine ball with multiple weight options',
      features: ['Adjustable Weight', 'Quick Change', 'Compact Design', 'Weight Plates'],
      specifications: {
        weightRange: '10-30lb',
        increments: '2.5lb',
        mechanism: 'Dial System',
        material: 'Steel Plates + Shell',
        plates: 'Included'
      },
      exercises: ['Progressive Training', 'Space Saving', 'Home Gym', 'Versatile Workouts'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      bounce: false,
      texturedGrip: true
    },
    {
      id: 6,
      name: 'Slam Ball Professional Series',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/slam-ball-pro.jpg',
      rating: 4.8,
      reviews: 323,
      category: 'Slam Ball',
      brand: 'SlamPro',
      description: 'Heavy-duty slam balls built for intense slamming and throwing exercises',
      features: ['No Bounce', 'Reinforced Seams', 'Heavy-duty Cover', 'Slam Resistant'],
      specifications: {
        weights: '15, 20, 25, 30, 40lb',
        material: 'Reinforced Rubber',
        bounce: 'Zero Bounce',
        construction: 'Double Stitched',
        usage: 'High-Impact'
      },
      exercises: ['Ground Slams', 'Overhead Throws', 'Power Training', 'Explosive Drills'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      bounce: false,
      texturedGrip: true
    },
    {
      id: 7,
      name: 'Medicine Ball with Handles',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/handled-medicine-ball.jpg',
      rating: 4.4,
      reviews: 178,
      category: 'Handled',
      brand: 'GripMaster',
      description: 'Medicine ball with integrated handles for enhanced grip and exercise variety',
      features: ['Integrated Handles', 'Secure Grip', 'Exercise Variety', 'Durable Construction'],
      specifications: {
        weights: '8, 12, 16, 20lb',
        material: 'Textured Rubber',
        handles: '2 Opposing',
        grip: 'Enhanced Security',
        exercises: 'Specialized'
      },
      exercises: ['Suitcase Carries', 'Around-the-World', 'Goblet Holds', 'Grip Training'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      bounce: false,
      texturedGrip: true
    },
    {
      id: 8,
      name: 'Medicine Ball Storage Rack',
      price: '$149.99',
      originalPrice: '$199.99',
      image: '/medicine-ball-rack.jpg',
      rating: 4.7,
      reviews: 156,
      category: 'Storage',
      brand: 'OrganizePro',
      description: 'Heavy-duty storage rack for organizing medicine balls of all sizes',
      features: ['Adjustable Shelves', 'Heavy-duty Steel', 'Wheel Kit', 'Multiple Configurations'],
      specifications: {
        capacity: '12-16 balls',
        material: 'Steel Construction',
        shelves: '3 Adjustable',
        mobility: 'Locking Wheels',
        organization: 'Color Coded'
      },
      exercises: ['Storage Only', 'Gym Organization', 'Space Management'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      bounce: false,
      texturedGrip: false
    }
  ];

  const medicineBallCategories = [
    {
      name: 'Rubber Balls',
      image: '/rubber-balls.jpg',
      description: 'Bounce technology',
      count: 8,
      icon: '⚽',
      slug: 'medicine-balls/rubber'
    },
    {
      name: 'Wall Balls',
      image: '/wall-balls.jpg',
      description: 'CrossFit & competition',
      count: 6,
      icon: '🎯',
      slug: 'medicine-balls/wall-balls'
    },
    {
      name: 'Slam Balls',
      image: '/slam-balls.jpg',
      description: 'No-bounce heavy duty',
      count: 5,
      icon: '💥',
      slug: 'medicine-balls/slam-balls'
    },
    {
      name: 'Leather Balls',
      image: '/leather-balls.jpg',
      description: 'Traditional training',
      count: 4,
      icon: '🏈',
      slug: 'medicine-balls/leather'
    },
    {
      name: 'Soft Medicine Balls',
      image: '/soft-balls.jpg',
      description: 'Rehab & beginners',
      count: 7,
      icon: '🎾',
      slug: 'medicine-balls/soft'
    },
    {
      name: 'Adjustable Balls',
      image: '/adjustable-balls.jpg',
      description: 'Space saving',
      count: 3,
      icon: '🔄',
      slug: 'medicine-balls/adjustable'
    },
    {
      name: 'Handled Balls',
      image: '/handled-balls.jpg',
      description: 'Enhanced grip',
      count: 4,
      icon: '🎪',
      slug: 'medicine-balls/handled'
    },
    {
      name: 'Storage & Racks',
      image: '/ball-storage.jpg',
      description: 'Organization',
      count: 5,
      icon: '🗄️',
      slug: 'medicine-balls/storage'
    }
  ];

  const filters = {
    type: ['Rubber', 'Wall Ball', 'Slam Ball', 'Leather', 'Soft', 'Adjustable', 'Handled', 'Storage'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $150',
      '$150 - $200',
      'Above $200'
    ],
    brand: ['MedBall Pro', 'ClassicFit', 'WodFit', 'SafeTrain', 'FlexWeight', 'SlamPro', 'GripMaster', 'OrganizePro'],
    features: ['Bounce Technology', 'Textured Grip', 'No Bounce', 'Competition Grade', 'Beginner Friendly', 'Adjustable Weight', 'With Handles', 'Storage Included']
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
      <section className="bg-gradient-to-r from-amber-700 to-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-amber-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/functional-training" className="hover:text-white transition-colors">Functional Training</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Medicine Balls</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Medicine Balls
              </h1>
              <p className="text-xl text-amber-100 max-w-2xl">
                Dynamic strength and power training. Develop explosive power, core stability, 
                and athletic performance with versatile medicine ball exercises.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">⚽</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-amber-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">2-40lb</span>
              </div>
              <p className="text-sm text-gray-600">Weight Range</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <RotateCcw className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Bounce & No-Bounce</span>
              </div>
              <p className="text-sm text-gray-600">Ball Types</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Award className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Competition</span>
              </div>
              <p className="text-sm text-gray-600">Professional Grade</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-yellow-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Versatile</span>
              </div>
              <p className="text-sm text-gray-600">100+ Exercises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Medicine Ball Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {medicineBallCategories.map((category, index) => (
              <Link
                key={index}
                href={`/gym-equipment/${category.slug}`}
                className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-amber-200 group-hover:to-orange-300 transition-all duration-200">
                  <div className="text-lg">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-amber-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded-full">
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
                Medicine Ball Training Equipment
              </h2>
              <p className="text-gray-600">
                {medicineBalls.length} versatile medicine balls for dynamic strength, power, and core training
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
                <option value="newest">Newest First</option>
                <option value="weight">Heaviest First</option>
                <option value="bounce">Bounce Technology</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Medicine Balls
                </h3>

                {/* Ball Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Ball Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
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
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
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
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
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
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Weight Range</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">2-8lb (Light/Beginner)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">10-16lb (Intermediate)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">18-25lb (Advanced)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">30-40lb (Elite)</span>
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
                  {medicineBalls.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
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
                        {product.bounce && (
                          <span className="absolute top-3 right-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <RotateCcw className="w-3 h-3 mr-1" />
                            Bounce
                          </span>
                        )}
                        {product.texturedGrip && (
                          <span className="absolute top-12 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Textured Grip
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Out of Stock
                          </span>
                        )}
                        <div className="text-5xl">⚽</div>
                        <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                          <span className="text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full">
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
                              <span key={index} className="text-xs bg-amber-50 text-amber-600 px-2 py-1 rounded">
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
                                ? 'bg-amber-600 text-white hover:bg-amber-700' 
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
                  {medicineBalls.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
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
                        <div className="text-4xl">⚽</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              {product.bounce && (
                                <span className="text-xs bg-amber-500 text-white px-2 py-1 rounded-full flex items-center">
                                  <RotateCcw className="w-3 h-3 mr-1" />
                                  Bounce
                                </span>
                              )}
                              {product.texturedGrip && (
                                <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full flex items-center">
                                  <Sparkles className="w-3 h-3 mr-1" />
                                  Textured Grip
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
                                  <span key={index} className="text-sm bg-amber-50 text-amber-600 px-3 py-1 rounded-full">
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
                                ? 'bg-amber-600 text-white hover:bg-amber-700' 
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
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Medicine Ball Training?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Develop explosive power, core stability, and athletic performance with dynamic medicine ball exercises
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Explosive Power</h3>
              <p className="text-gray-600 text-sm">
                Develop fast-twitch muscle fibers and generate explosive throwing power
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Core Stability</h3>
              <p className="text-gray-600 text-sm">
                Enhance rotational strength and core engagement with dynamic movements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Athletic Performance</h3>
              <p className="text-gray-600 text-sm">
                Improve sports-specific movements and functional strength
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Versatile Training</h3>
              <p className="text-gray-600 text-sm">
                100+ exercise variations for comprehensive full-body workouts
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}