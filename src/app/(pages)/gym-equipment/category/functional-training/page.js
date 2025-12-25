// app/gym-equipment/functional-training/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Activity, Zap, Users, Target } from 'lucide-react';

export default function FunctionalTrainingPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    features: []
  });

  const functionalProducts = [
    {
      id: 1,
      name: 'Multi-Functional Training Bench',
      price: '$299.99',
      originalPrice: '$399.99',
      image: '/training-bench.jpg',
      rating: 4.5,
      reviews: 178,
      category: 'Benches',
      brand: 'ProFit',
      description: 'Versatile weight bench with multiple adjustments for full-body workouts',
      features: ['7 Back Positions', '3 Seat Positions', 'Leg Developer', 'Preacher Curl'],
      specifications: {
        capacity: '1000lb',
        adjustments: '10 Positions',
        material: 'Steel Frame',
        padding: '3-inch Thick'
      },
      exercises: ['Bench Press', 'Incline Press', 'Decline Press', 'Leg Curls', 'Preacher Curls'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      versatile: true
    },
    {
      id: 2,
      name: 'Suspension Training System',
      price: '$149.99',
      originalPrice: '$199.99',
      image: '/suspension-trainer.jpg',
      rating: 4.7,
      reviews: 234,
      category: 'Suspension Trainers',
      brand: 'TRX Pro',
      description: 'Professional suspension trainer for bodyweight exercises anywhere',
      features: ['Adjustable Straps', 'Multiple Anchors', 'Full Body Workout', 'Portable'],
      specifications: {
        straps: 'Nylon Webbing',
        anchors: 'Door, Wall, Ceiling',
        weightLimit: '350lb',
        portability: 'Ultra Light'
      },
      exercises: ['Rows', 'Push-ups', 'Pikes', 'Fallouts', 'Atomic Push-ups'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      versatile: true
    },
    {
      id: 3,
      name: 'Adjustable Power Cage',
      price: '$799.99',
      originalPrice: '$999.99',
      image: '/power-cage.jpg',
      rating: 4.8,
      reviews: 156,
      category: 'Cages & Racks',
      brand: 'RackMaster',
      description: 'Full power cage with pull-up bar and multiple attachment points',
      features: ['Pull-up Bar', 'Safety Bars', 'J-Hooks', 'Landmine Attachment'],
      specifications: {
        capacity: '1500lb',
        height: '84 inches',
        footprint: '48x48 inches',
        attachments: 'Multiple Points'
      },
      exercises: ['Squats', 'Pull-ups', 'Bench Press', 'Rack Pulls', 'Landmine Exercises'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      versatile: true
    },
    {
      id: 4,
      name: 'Battle Ropes (1.5 inch)',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/battle-ropes.jpg',
      rating: 4.4,
      reviews: 167,
      category: 'Battle Ropes',
      brand: 'WodFit',
      description: 'Professional battle ropes for high-intensity conditioning workouts',
      features: ['1.5 inch Diameter', '50ft Length', 'Durable Nylon', 'Anchoring System'],
      specifications: {
        diameter: '1.5 inches',
        length: '50 feet',
        material: 'Marine-grade Nylon',
        weight: '40lb'
      },
      exercises: ['Waves', 'Slams', 'Spirals', 'Whips', 'Alternating Waves'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      versatile: false
    },
    {
      id: 5,
      name: 'Plyometric Box Set (3-in-1)',
      price: '$249.99',
      originalPrice: '$329.99',
      image: '/plyo-box.jpg',
      rating: 4.6,
      reviews: 98,
      category: 'Plyo Boxes',
      brand: 'JumpPro',
      description: 'Adjustable plyometric box with three height options',
      features: ['3 Heights', 'Non-slip Surface', 'Steel Frame', 'Foam Padding'],
      specifications: {
        heights: '20", 24", 30"',
        capacity: '400lb',
        material: 'Steel Frame',
        surface: 'Non-slip Rubber'
      },
      exercises: ['Box Jumps', 'Step-ups', 'Depth Jumps', 'Box Squats', 'Plyo Push-ups'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      versatile: true
    },
    {
      id: 6,
      name: 'Medicine Ball Set (4-20lb)',
      price: '$179.99',
      originalPrice: '$229.99',
      image: '/medicine-balls.jpg',
      rating: 4.5,
      reviews: 143,
      category: 'Medicine Balls',
      brand: 'MedBall Pro',
      description: 'Rubber medicine ball set with various weights for functional training',
      features: ['Bounce Technology', 'Grip Surface', 'Color Coded', 'Storage Rack'],
      specifications: {
        weights: '4, 6, 8, 10, 12, 15, 20lb',
        material: 'Rubber',
        bounce: 'High Response',
        grip: 'Textured Surface'
      },
      exercises: ['Wall Balls', 'Slams', 'Twists', 'Throws', 'Carries'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      versatile: true
    },
    {
      id: 7,
      name: 'Adjustable Kettlebell',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/adjustable-kettlebell.jpg',
      rating: 4.3,
      reviews: 87,
      category: 'Kettlebells',
      brand: 'QuickFit',
      description: 'Space-saving adjustable kettlebell with multiple weight options',
      features: ['12-32lb Range', 'Quick Change', 'Compact Design', 'Steel Construction'],
      specifications: {
        weightRange: '12-32lb',
        increments: '4lb',
        mechanism: 'Dial System',
        material: 'Steel Plates'
      },
      exercises: ['Swings', 'Goblet Squats', 'Turkish Get-ups', 'Cleans', 'Snatches'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      versatile: true
    },
    {
      id: 8,
      name: 'Resistance Band Set',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/resistance-bands.jpg',
      rating: 4.4,
      reviews: 289,
      category: 'Resistance Bands',
      brand: 'PowerFlex',
      description: '5-level resistance band set with handles and door anchor',
      features: ['5 Resistance Levels', 'Handles Included', 'Door Anchor', 'Ankle Straps'],
      specifications: {
        resistance: '10-50lb',
        material: 'Natural Latex',
        length: '48 inches',
        accessories: 'Full Set'
      },
      exercises: ['Rows', 'Chest Press', 'Squats', 'Glute Bridges', 'Lat Pulldowns'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      versatile: true
    },
    {
      id: 9,
      name: 'Agility Ladder Set',
      price: '$34.99',
      originalPrice: '$49.99',
      image: '/agility-ladder.jpg',
      rating: 4.2,
      reviews: 156,
      category: 'Agility Equipment',
      brand: 'SpeedFit',
      description: '20-foot agility ladder with adjustable rungs for footwork training',
      features: ['Adjustable Rungs', 'Carry Bag', 'Durable Nylon', 'Quick Setup'],
      specifications: {
        length: '20 feet',
        rungs: '12 Adjustable',
        material: 'Heavy-duty Nylon',
        storage: 'Carry Bag'
      },
      exercises: ['Ladder Drills', 'High Knees', 'Lateral Steps', 'In-in Out-out', 'Hop Scotch'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      versatile: false
    },
    {
      id: 10,
      name: 'Yoga Mat & Accessory Set',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/yoga-set.jpg',
      rating: 4.6,
      reviews: 203,
      category: 'Yoga & Pilates',
      brand: 'FlexGear',
      description: 'Premium non-slip yoga mat with blocks, strap, and carry bag',
      features: ['Non-slip Surface', 'Eco-friendly', 'Accessory Set', 'Carry Strap'],
      specifications: {
        matThickness: '6mm',
        material: 'TPE Eco-friendly',
        accessories: 'Blocks, Strap, Bag',
        size: '72x24 inches'
      },
      exercises: ['Yoga Flows', 'Pilates', 'Stretching', 'Bodyweight Exercises', 'Mobility Work'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      versatile: true
    },
    {
      id: 11,
      name: 'Foam Roller Set',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '/foam-roller.jpg',
      rating: 4.7,
      reviews: 178,
      category: 'Recovery',
      brand: 'RecoverPro',
      description: '3-piece foam roller set for muscle recovery and mobility',
      features: ['3 Densities', 'Textured Surface', 'Travel Bag', 'Eco-friendly'],
      specifications: {
        densities: 'Soft, Medium, Firm',
        material: 'EPP Foam',
        sizes: '12", 18", 24"',
        texture: 'Multi-surface'
      },
      exercises: ['Myofascial Release', 'Mobility Drills', 'Balance Training', 'Core Activation'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      versatile: true
    },
    {
      id: 12,
      name: 'Sandbag Training System',
      price: '$129.99',
      originalPrice: '$169.99',
      image: '/sandbag.jpg',
      rating: 4.5,
      reviews: 94,
      category: 'Sandbags',
      brand: 'BruteForce',
      description: 'Adjustable sandbag with multiple handles for functional strength',
      features: ['Adjustable Weight', '8 Handles', 'Waterproof Liner', 'Durable Cordura'],
      specifications: {
        weightRange: '20-100lb',
        handles: '8 Multi-grip',
        material: '1000D Cordura',
        liner: 'Waterproof'
      },
      exercises: ['Cleans', 'Shouldering', 'Carries', 'Drags', 'Overhead Press'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      versatile: true
    }
  ];

  const functionalCategories = [
    {
      name: 'Suspension Trainers',
      image: '/suspension-trainers.jpg',
      description: 'TRX and bodyweight systems',
      count: 8,
      icon: '🔄',
      slug: 'functional-training/features/suspension-trainers'
    },
    {
      name: 'Benches',
      image: '/benches-ft.jpg',
      description: 'Adjustable training benches',
      count: 12,
      icon: '🛋️',
      slug: 'strength-training/features/benches'
    },
    {
      name: 'Cages & Racks',
      image: '/cages-racks.jpg',
      description: 'Power cages and racks',
      count: 6,
      icon: '🏗️',
      slug: 'functional-training/features/cages-&-racks'
    },
    {
      name: 'Battle Ropes',
      image: '/battle-ropes-cat.jpg',
      description: 'Conditioning and cardio',
      count: 5,
      icon: '🌊',
      slug: 'functional-training/features/battle-ropes'
    },
    {
      name: 'Plyo Boxes',
      image: '/plyo-boxes.jpg',
      description: 'Jump and plyometric training',
      count: 7,
      icon: '📦',
      slug: 'functional-training/features/plyo-boxes'
    },
    {
      name: 'Medicine Balls',
      image: '/medicine-balls-cat.jpg',
      description: 'Weighted ball training',
      count: 15,
      icon: '⚽',
      slug: 'functional-training/features/medicine-balls'
    },
    {
      name: 'Resistance Bands',
      image: '/resistance-bands-cat.jpg',
      description: 'Elastic resistance training',
      count: 20,
      icon: '🔄',
      slug: 'functional-training/features/resistance-bands'
    },
    {
      name: 'Agility Equipment',
      image: '/agility-equipment.jpg',
      description: 'Ladders and cones',
      count: 9,
      icon: '⚡',
      slug: 'functional-training/features/agility-equipment'
    }
  ];

  const filters = {
    type: ['Suspension Trainers', 'Benches', 'Cages & Racks', 'Battle Ropes', 'Plyo Boxes', 'Medicine Balls', 'Resistance Bands', 'Agility Equipment', 'Yoga & Pilates', 'Recovery', 'Sandbags'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['ProFit', 'TRX Pro', 'RackMaster', 'WodFit', 'JumpPro', 'MedBall Pro', 'QuickFit', 'PowerFlex', 'SpeedFit', 'FlexGear', 'RecoverPro', 'BruteForce'],
    features: ['Versatile', 'Portable', 'Adjustable', 'Commercial Grade', 'Space Saving', 'Multi-functional', 'Beginner Friendly', 'Professional']
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
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-emerald-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Functional Training</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Functional Training
              </h1>
              <p className="text-xl text-emerald-100 max-w-2xl">
                Train movements, not just muscles. Build real-world strength and mobility 
                with our comprehensive functional training equipment collection.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🔄</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <Activity className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">50+</span>
              </div>
              <p className="text-sm text-gray-600">Exercise Variations</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Zap className="w-5 h-5 text-emerald-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Versatile</span>
              </div>
              <p className="text-sm text-gray-600">Multi-functional</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">All Levels</span>
              </div>
              <p className="text-sm text-gray-600">Beginner to Pro</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Target className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Real World</span>
              </div>
              <p className="text-sm text-gray-600">Practical Strength</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Functional Training Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {functionalCategories.map((category, index) => (
              <Link
                key={index}
                href={`/gym-equipment/category/${category.slug}`}
                className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-green-200 group-hover:to-emerald-300 transition-all duration-200">
                  <div className="text-lg">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-green-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded-full">
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
                Functional Training Equipment
              </h2>
              <p className="text-gray-600">
                {functionalProducts.length} versatile tools for comprehensive functional fitness
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-green-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
                <option value="versatile">Most Versatile</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Equipment
                </h3>

                {/* Equipment Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Equipment Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
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
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
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
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
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
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Training Focus</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Strength & Power</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Mobility & Flexibility</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Balance & Stability</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Cardio & Conditioning</span>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {functionalProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        {product.versatile && (
                          <span className="absolute top-3 right-3 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Zap className="w-3 h-3 mr-1" />
                            Versatile
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="absolute top-12 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Out of Stock
                          </span>
                        )}
                        <div className="text-5xl">
                          {product.category === 'Suspension Trainers' ? '🔄' :
                           product.category === 'Benches' ? '🛋️' :
                           product.category === 'Cages & Racks' ? '🏗️' :
                           product.category === 'Battle Ropes' ? '🌊' :
                           product.category === 'Plyo Boxes' ? '📦' :
                           product.category === 'Medicine Balls' ? '⚽' :
                           product.category === 'Resistance Bands' ? '🔄' :
                           product.category === 'Agility Equipment' ? '⚡' :
                           product.category === 'Yoga & Pilates' ? '🧘' :
                           product.category === 'Recovery' ? '💆' : '🎒'}
                        </div>
                        <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
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
                              <span key={index} className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded">
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
                                ? 'bg-green-600 text-white hover:bg-green-700' 
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
                  {functionalProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Suspension Trainers' ? '🔄' :
                           product.category === 'Benches' ? '🛋️' :
                           product.category === 'Cages & Racks' ? '🏗️' :
                           product.category === 'Battle Ropes' ? '🌊' :
                           product.category === 'Plyo Boxes' ? '📦' :
                           product.category === 'Medicine Balls' ? '⚽' :
                           product.category === 'Resistance Bands' ? '🔄' :
                           product.category === 'Agility Equipment' ? '⚡' :
                           product.category === 'Yoga & Pilates' ? '🧘' :
                           product.category === 'Recovery' ? '💆' : '🎒'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              {product.versatile && (
                                <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full flex items-center">
                                  <Zap className="w-3 h-3 mr-1" />
                                  Versatile
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
                                  <span key={index} className="text-sm bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full">
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
                                ? 'bg-green-600 text-white hover:bg-green-700' 
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
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Functional Training?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build practical strength, improve mobility, and enhance overall fitness with equipment designed for real-world movements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real World Strength</h3>
              <p className="text-gray-600 text-sm">
                Train movements that translate to everyday activities and sports performance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Versatile Equipment</h3>
              <p className="text-gray-600 text-sm">
                Multi-functional tools that provide hundreds of exercise variations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">All Fitness Levels</h3>
              <p className="text-gray-600 text-sm">
                Suitable for beginners to elite athletes with scalable intensity
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Fitness</h3>
              <p className="text-gray-600 text-sm">
                Develop strength, mobility, balance, and coordination simultaneously
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}