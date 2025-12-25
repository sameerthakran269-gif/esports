// app/gym-equipment/cardio-machines/cross-trainers/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Zap, Battery, Volume2, ArrowRight, Activity, Target, Users, Shield } from 'lucide-react';

export default function CrossTrainersPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    features: []
  });

  const crossTrainerProducts = [
    {
      id: 1,
      name: 'Elite Hybrid Cross Trainer',
      price: '$1,899.99',
      originalPrice: '$2,299.99',
      image: '/hybrid-cross-trainer.jpg',
      rating: 4.8,
      reviews: 134,
      category: 'Hybrid Trainers',
      brand: 'FusionFit',
      description: 'Advanced 4-in-1 cross trainer with elliptical, stepper, bike, and upper body training modes',
      features: ['4-in-1 Design', 'Upper Body Arms', 'Virtual Coaching', 'Bluetooth Audio', 'App Connectivity', 'Heart Rate Monitoring'],
      specifications: {
        modes: 'Elliptical, Stepper, Bike, Strength',
        display: '14" Touchscreen',
        programs: '35 Built-in',
        weightCapacity: '400 lbs',
        resistance: '32 Levels Magnetic'
      },
      isNew: true,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      dimensions: '65" L x 30" W x 72" H',
      workoutBenefits: ['Full Body', 'Low Impact', 'Cardio & Strength']
    },
    {
      id: 2,
      name: 'Commercial Elliptical Cross Trainer',
      price: '$2,499.99',
      originalPrice: '$2,999.99',
      image: '/commercial-elliptical.jpg',
      rating: 4.9,
      reviews: 89,
      category: 'Elliptical Trainers',
      brand: 'CardioMax',
      description: 'Commercial grade elliptical trainer with advanced motion technology and premium features',
      features: ['20° Incline', '24 Resistance Levels', 'Dual Action Arms', 'Heart Rate Control', 'Commercial Warranty'],
      specifications: {
        stride: '22-inch Adjustable',
        display: '15" Touchscreen',
        programs: '40 Built-in',
        weightCapacity: '450 lbs',
        resistance: 'Magnetic Eddy Current'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      dimensions: '70" L x 32" W x 68" H',
      workoutBenefits: ['Lower Body', 'Cardio Focus', 'Low Impact']
    },
    {
      id: 3,
      name: 'Compact Folding Cross Trainer',
      price: '$699.99',
      originalPrice: '$899.99',
      image: '/folding-cross-trainer.jpg',
      rating: 4.4,
      reviews: 215,
      category: 'Compact Trainers',
      brand: 'SpaceSaver',
      description: 'Space-saving foldable cross trainer perfect for home gyms with smooth magnetic resistance',
      features: ['Foldable Design', '12 Resistance Levels', 'LCD Display', 'Transport Wheels', 'Quiet Operation'],
      specifications: {
        stride: '18-inch Fixed',
        display: '5" LCD',
        programs: '12 Built-in',
        weightCapacity: '300 lbs',
        resistance: 'Magnetic'
      },
      isNew: false,
      isBestseller: false,
      inStock: true,
      energyEfficient: true,
      dimensions: '55" L x 25" W x 62" H',
      workoutBenefits: ['Full Body', 'Space Saving', 'Quiet Workout']
    },
    {
      id: 4,
      name: 'Smart Connected Cross Trainer',
      price: '$1,599.99',
      originalPrice: '$1,999.99',
      image: '/smart-cross-trainer.jpg',
      rating: 4.7,
      reviews: 167,
      category: 'Smart Trainers',
      brand: 'TechFit',
      description: 'Wi-Fi connected cross trainer with live classes, virtual routes, and performance tracking',
      features: ['Live Classes', 'Virtual Routes', 'Performance Tracking', 'Bluetooth Speakers', 'Tablet Holder'],
      specifications: {
        stride: '20-inch Adjustable',
        display: '22" Touchscreen',
        programs: 'Unlimited Online',
        weightCapacity: '350 lbs',
        resistance: '24 Levels Magnetic'
      },
      isNew: true,
      isBestseller: false,
      inStock: true,
      energyEfficient: true,
      dimensions: '63" L x 28" W x 66" H',
      workoutBenefits: ['Interactive', 'Full Body', 'Motivational']
    },
    {
      id: 5,
      name: 'Premium Dual-Action Trainer',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/dual-action-trainer.jpg',
      rating: 4.5,
      reviews: 98,
      category: 'Dual Action Trainers',
      brand: 'TotalBody',
      description: 'Dual-action cross trainer with independent arm and leg motion for complete body engagement',
      features: ['Independent Motion', '16 Resistance Levels', 'Polar Heart Rate', 'Calorie Counter', 'Body Fat Analysis'],
      specifications: {
        motion: 'Independent Arm/Leg',
        display: '9" LCD',
        programs: '20 Built-in',
        weightCapacity: '325 lbs',
        resistance: 'Magnetic'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: false,
      dimensions: '60" L x 27" W x 64" H',
      workoutBenefits: ['Full Body', 'Independent Motion', 'Strength Building']
    },
    {
      id: 6,
      name: 'Commercial Grade Cross Trainer Pro',
      price: '$3,299.99',
      originalPrice: '$3,899.99',
      image: '/commercial-cross-trainer.jpg',
      rating: 4.9,
      reviews: 76,
      category: 'Commercial Trainers',
      brand: 'ProGym',
      description: 'Heavy-duty commercial cross trainer built for gyms and fitness centers with premium features',
      features: ['Commercial Build', '30 Resistance Levels', 'Advanced Metrics', 'Gym Management', 'Extended Warranty'],
      specifications: {
        stride: '24-inch Commercial',
        display: '19" Touchscreen',
        programs: '50 Built-in',
        weightCapacity: '500 lbs',
        resistance: 'Commercial Magnetic'
      },
      isNew: false,
      isBestseller: false,
      inStock: false,
      energyEfficient: true,
      dimensions: '75" L x 35" W x 70" H',
      workoutBenefits: ['Commercial Grade', 'High Capacity', 'Advanced Metrics']
    },
    {
      id: 7,
      name: 'Air Resistance Cross Trainer',
      price: '$899.99',
      originalPrice: '$1,199.99',
      image: '/air-cross-trainer.jpg',
      rating: 4.3,
      reviews: 142,
      category: 'Air Resistance Trainers',
      brand: 'AeroFit',
      description: 'Air resistance cross trainer that increases resistance naturally with your speed',
      features: ['Air Resistance', 'Self-Powered', 'Smooth Motion', 'Minimal Maintenance', 'Natural Feel'],
      specifications: {
        resistance: 'Air Fan',
        display: '7" LCD',
        programs: '8 Built-in',
        weightCapacity: '280 lbs',
        stride: 'Fixed'
      },
      isNew: true,
      isBestseller: false,
      inStock: true,
      energyEfficient: true,
      dimensions: '58" L x 26" W x 65" H',
      workoutBenefits: ['Natural Resistance', 'Self-Powered', 'Smooth Motion']
    },
    {
      id: 8,
      name: 'Hybrid Strength & Cardio Trainer',
      price: '$2,199.99',
      originalPrice: '$2,699.99',
      image: '/strength-cardio-trainer.jpg',
      rating: 4.6,
      reviews: 113,
      category: 'Hybrid Trainers',
      brand: 'PowerBlend',
      description: 'Combines cardio training with integrated strength stations for complete workouts',
      features: ['Integrated Strength', 'Multi-Grip Handles', 'Adjustable Incline', 'Performance Tracking', 'Workout Programs'],
      specifications: {
        modes: 'Cardio + Strength',
        display: '12" Touchscreen',
        programs: '30 Built-in',
        weightCapacity: '375 lbs',
        resistance: '26 Levels Magnetic'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      dimensions: '68" L x 33" W x 74" H',
      workoutBenefits: ['Strength & Cardio', 'Versatile', 'Complete Workouts']
    }
  ];

  const crossTrainerTypes = [
    {
      name: 'Hybrid Trainers',
      image: '/hybrid-trainers.jpg',
      description: 'Multi-functional machines combining multiple exercise modes',
      count: 3,
      icon: '🔄',
      benefits: ['Versatile workouts', 'Space efficient', 'Multiple exercise options']
    },
    {
      name: 'Elliptical Trainers',
      image: '/elliptical-trainers.jpg',
      description: 'Smooth elliptical motion for low-impact cardio',
      count: 2,
      icon: '👟',
      benefits: ['Low impact', 'Full body engagement', 'Joint friendly']
    },
    {
      name: 'Compact Trainers',
      image: '/compact-trainers.jpg',
      description: 'Space-saving designs for home gyms',
      count: 2,
      icon: '🏠',
      benefits: ['Space saving', 'Foldable options', 'Home friendly']
    },
    {
      name: 'Smart Trainers',
      image: '/smart-trainers.jpg',
      description: 'Connected trainers with interactive features',
      count: 1,
      icon: '📱',
      benefits: ['Live classes', 'Virtual coaching', 'Progress tracking']
    },
    {
      name: 'Commercial Trainers',
      image: '/commercial-trainers.jpg',
      description: 'Heavy-duty machines for gyms and fitness centers',
      count: 1,
      icon: '💪',
      benefits: ['Commercial grade', 'High capacity', 'Durable construction']
    },
    {
      name: 'Air Resistance Trainers',
      image: '/air-trainers.jpg',
      description: 'Natural air resistance that increases with speed',
      count: 1,
      icon: '💨',
      benefits: ['Self-powered', 'Natural feel', 'Minimal maintenance']
    }
  ];

  const filters = {
    type: ['Hybrid Trainers', 'Elliptical Trainers', 'Compact Trainers', 'Smart Trainers', 'Commercial Trainers', 'Air Resistance Trainers', 'Dual Action Trainers'],
    priceRange: [
      'Under $500',
      '$500 - $1,000',
      '$1,000 - $2,000',
      '$2,000 - $3,000',
      'Above $3,000'
    ],
    brand: ['FusionFit', 'CardioMax', 'SpaceSaver', 'TechFit', 'TotalBody', 'ProGym', 'AeroFit', 'PowerBlend'],
    features: ['Energy Efficient', 'Foldable', 'Touchscreen', 'Bluetooth', 'Heart Rate Monitor', 'App Connectivity', 'Live Classes', 'Virtual Coaching', 'Strength Integration']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: (prev )[filterType].includes(value)
        ? (prev )[filterType].filter((item) => item !== value)
        : [...(prev )[filterType], value]
    }));
  };

  const benefits = [
    {
      title: 'Full Body Workout',
      description: 'Engage upper and lower body simultaneously for efficient training',
      icon: '💪'
    },
    {
      title: 'Low Impact',
      description: 'Smooth elliptical motion is gentle on joints while providing intense cardio',
      icon: '🦵'
    },
    {
      title: 'Versatile Training',
      description: 'Multiple exercise modes and resistance levels for varied workouts',
      icon: '🔄'
    },
    {
      title: 'Calorie Torch',
      description: 'Burn maximum calories with full-body cardiovascular exercise',
      icon: '🔥'
    }
  ];

  const workoutTypes = [
    {
      name: 'Cardio Blast',
      duration: '20-30 mins',
      intensity: 'High',
      calories: '300-400',
      focus: 'Heart health and endurance'
    },
    {
      name: 'Fat Burn',
      duration: '45-60 mins',
      intensity: 'Medium',
      calories: '500-700',
      focus: 'Weight loss and fat burning'
    },
    {
      name: 'Strength & Cardio',
      duration: '30-40 mins',
      intensity: 'Variable',
      calories: '350-500',
      focus: 'Muscle tone and cardiovascular'
    },
    {
      name: 'Interval Training',
      duration: '25-35 mins',
      intensity: 'High/Low',
      calories: '400-600',
      focus: 'Metabolic boost and endurance'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-emerald-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/cardio-machines" className="hover:text-white transition-colors">Cardio Machines</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Cross Trainers</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Cross Training Machines
              </h1>
              <p className="text-xl text-emerald-100 max-w-2xl">
                Experience ultimate versatility with our premium cross trainers. 
                Combine cardio and strength training in one efficient, low-impact workout.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🔄</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <Activity className="w-5 h-5 text-emerald-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">85%</span>
              </div>
              <p className="text-sm text-gray-600">Muscle Groups Engaged</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Battery className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">12</span>
              </div>
              <p className="text-sm text-gray-600">Energy Efficient Models</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">18</span>
              </div>
              <p className="text-sm text-gray-600">Quiet Operation</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">5Y</div>
              <p className="text-sm text-gray-600">Frame Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Cross Training Machines?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-emerald-200 group-hover:to-teal-300 transition-all duration-300">
                  <div className="text-2xl">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Types */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Workout Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workoutTypes.map((workout, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{workout.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{workout.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Intensity:</span>
                    <span className="font-medium">{workout.intensity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Calories:</span>
                    <span className="font-medium">{workout.calories}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <span className="text-xs text-gray-500">{workout.focus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross Trainer Types */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Cross Trainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crossTrainerTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-emerald-200 group-hover:to-teal-300 transition-all duration-300">
                  <div className="text-2xl">{type.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">{type.name}</h3>
                <p className="text-gray-600 text-sm text-center mb-4">{type.description}</p>
                <div className="space-y-2 mb-4">
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <span className="inline-block bg-emerald-100 text-emerald-600 text-xs px-3 py-1 rounded-full">
                    {type.count} models
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Cross Trainer Collection
              </h2>
              <p className="text-gray-600">
                {crossTrainerProducts.length} premium cross training machines for versatile workouts
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
                <option value="energy-efficient">Energy Efficient</option>
                <option value="versatility">Most Versatile</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Cross Trainers
                </h3>

                {/* Machine Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Trainer Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
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
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
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
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
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
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Workout Focus</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Full Body Workout</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Strength Integration</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Cardio Focus</span>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                  {crossTrainerProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        {product.energyEfficient && (
                          <span className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Zap className="w-3 h-3 mr-1" />
                            Eco
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="absolute top-12 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Out of Stock
                          </span>
                        )}
                        <div className="text-5xl">🔄</div>
                        <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                          <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Workout Benefits */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.workoutBenefits.map((benefit, index) => (
                            <span key={index} className="text-xs bg-teal-50 text-teal-600 px-2 py-1 rounded">
                              {benefit}
                            </span>
                          ))}
                        </div>

                        {/* Specifications */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="text-xs text-gray-500">
                            <strong>Modes:</strong> {product.specifications.modes || product.specifications.stride}
                          </div>
                          <div className="text-xs text-gray-500">
                            <strong>Display:</strong> {product.specifications.display}
                          </div>
                          <div className="text-xs text-gray-500">
                            <strong>Programs:</strong> {product.specifications.programs}
                          </div>
                          <div className="text-xs text-gray-500">
                            <strong>Capacity:</strong> {product.specifications.weightCapacity}
                          </div>
                        </div>

                        {/* Dimensions */}
                        <div className="mb-3">
                          <div className="text-xs text-gray-500">
                            <strong>Dimensions:</strong> {product.dimensions}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.slice(0, 3).map((feature, index) => (
                              <span key={index} className="text-xs bg-teal-50 text-teal-600 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                            {product.features.length > 3 && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                +{product.features.length - 3} more
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
                                ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
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
                  {crossTrainerProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">🔄</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              {product.energyEfficient && (
                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full flex items-center">
                                  <Zap className="w-3 h-3 mr-1" />
                                  Energy Efficient
                                </span>
                              )}
                              {!product.inStock && (
                                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                  Out of Stock
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Workout Benefits */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {product.workoutBenefits.map((benefit, index) => (
                                <span key={index} className="text-sm bg-teal-50 text-teal-600 px-3 py-1 rounded-full">
                                  {benefit}
                                </span>
                              ))}
                            </div>

                            {/* Specifications */}
                            <div className="grid grid-cols-4 gap-4 mb-4">
                              <div className="text-sm">
                                <div className="font-medium text-gray-500">Type</div>
                                <div className="text-gray-900">{product.specifications.modes || product.specifications.stride}</div>
                              </div>
                              <div className="text-sm">
                                <div className="font-medium text-gray-500">Display</div>
                                <div className="text-gray-900">{product.specifications.display}</div>
                              </div>
                              <div className="text-sm">
                                <div className="font-medium text-gray-500">Programs</div>
                                <div className="text-gray-900">{product.specifications.programs}</div>
                              </div>
                              <div className="text-sm">
                                <div className="font-medium text-gray-500">Capacity</div>
                                <div className="text-gray-900">{product.specifications.weightCapacity}</div>
                              </div>
                            </div>

                            {/* Dimensions */}
                            <div className="mb-4">
                              <div className="text-sm">
                                <div className="font-medium text-gray-500">Dimensions</div>
                                <div className="text-gray-900">{product.dimensions}</div>
                              </div>
                            </div>

                            {/* Features */}
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-2">
                                {product.features.map((feature, index) => (
                                  <span key={index} className="text-sm bg-teal-50 text-teal-600 px-3 py-1 rounded-full">
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
                                ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
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
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Cross Trainers?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the ultimate in workout versatility with cross trainers that adapt to your fitness goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Family Use</h3>
              <p className="text-gray-600 text-sm">
                Adjustable settings accommodate users of all fitness levels and ages
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Versatile Workouts</h3>
              <p className="text-gray-600 text-sm">
                Multiple exercise modes and programs for endless workout variety
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Joint Safe</h3>
              <p className="text-gray-600 text-sm">
                Low-impact elliptical motion protects joints while providing intense cardio
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Goal Oriented</h3>
              <p className="text-gray-600 text-sm">
                Programs designed for weight loss, endurance, strength, and overall fitness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Workouts?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Discover the versatility of cross training with machines that adapt to your every fitness goal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gym-equipment/cardio-machines"
              className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Explore All Cardio Machines
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors duration-200">
              Get Expert Advice
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}