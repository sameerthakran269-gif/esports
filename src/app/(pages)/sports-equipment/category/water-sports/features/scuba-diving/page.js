// app/sports-equipment/water-sports/scuba-diving/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, Shield, Zap, Thermometer, Gauge } from 'lucide-react';

export default function ScubaDivingPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: [],
    skillLevel: [],
    depthRating: [],
    certification: []
  });

  const scubaProducts = [
    {
      id: 38,
      name: 'Scuba Diving BCD',
      price: '$499.99',
      originalPrice: '$649.99',
      image: '/scuba-bcd.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'Buoyancy Control',
      brand: 'DeepDive',
      description: 'Professional buoyancy control device with integrated weight system',
      isNew: false,
      isBestseller: true,
      activityType: 'Scuba Diving',
      skillLevel: 'Advanced',
      depthRating: '40m',
      certification: 'CE Certified',
      features: ['Integrated Weights', 'Multiple D-Rings', 'Adjustable Harness', 'Quick Release'],
      specs: {
        material: 'Cordura Nylon',
        weight: '2.5kg',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'Blue', 'Yellow']
      }
    },
    {
      id: 45,
      name: 'Underwater Scooter',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/water-scooter.jpg',
      rating: 4.9,
      reviews: 34,
      category: 'Diving Accessories',
      brand: 'DeepDive',
      description: 'Electric underwater scooter for diving and snorkeling adventures',
      isNew: true,
      isBestseller: false,
      activityType: 'Scuba Diving',
      skillLevel: 'Advanced',
      depthRating: '60m',
      certification: 'IP68 Certified',
      features: ['Electric Power', 'Depth Rated', 'Long Battery', 'Variable Speed'],
      specs: {
        battery: '4 hours',
        speed: '3.5 knots',
        weight: '4.2kg',
        maxDepth: '60m'
      }
    },
    {
      id: 46,
      name: 'Beach Diving Fins',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/diving-fins.jpg',
      rating: 4.6,
      reviews: 145,
      category: 'Footwear',
      brand: 'AquaPro',
      description: 'Open-heel diving fins with adjustable straps and channels',
      isNew: false,
      isBestseller: true,
      activityType: 'Scuba Diving',
      skillLevel: 'All Levels',
      depthRating: 'All Depths',
      certification: 'PADI Approved',
      features: ['Adjustable Straps', 'Water Channels', 'Durable Blades', 'Quick Drain'],
      specs: {
        material: 'Thermoplastic',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        bladeLength: '65cm',
        colors: ['Black', 'Blue', 'Yellow']
      }
    },
    {
      id: 47,
      name: 'Professional Dive Computer',
      price: '$899.99',
      originalPrice: '$1,099.99',
      image: '/dive-computer.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Electronics',
      brand: 'DeepDive',
      description: 'Advanced dive computer with wireless air integration and GPS',
      isNew: true,
      isBestseller: true,
      activityType: 'Scuba Diving',
      skillLevel: 'Professional',
      depthRating: '100m',
      certification: 'EN13319',
      features: ['Air Integration', 'GPS Navigation', 'Multi-Gas', 'Backlight'],
      specs: {
        battery: 'Rechargeable',
        display: 'Color LCD',
        memory: '1000 dives',
        connectivity: 'Bluetooth'
      }
    },
    {
      id: 48,
      name: 'Regulator Set Pro',
      price: '$699.99',
      originalPrice: '$849.99',
      image: '/regulator-set.jpg',
      rating: 4.7,
      reviews: 92,
      category: 'Breathing Systems',
      brand: 'AquaPro',
      description: 'High-performance regulator set with environmental sealing',
      isNew: false,
      isBestseller: true,
      activityType: 'Scuba Diving',
      skillLevel: 'Intermediate',
      depthRating: '50m',
      certification: 'CE Certified',
      features: ['Environmental Seal', 'Swivel Turret', 'Comfort Mouthpiece', 'Easy Breathing'],
      specs: {
        material: 'Chrome Plated',
        ports: '4 HP, 4 LP',
        hoseLength: '80cm',
        coldWater: 'Yes'
      }
    },
    {
      id: 49,
      name: '5mm Scuba Wetsuit',
      price: '$249.99',
      originalPrice: '$329.99',
      image: '/scuba-wetsuit.jpg',
      rating: 4.5,
      reviews: 178,
      category: 'Exposure Protection',
      brand: 'AquaPro',
      description: '5mm neoprene wetsuit for cold water diving with reinforced knees',
      isNew: true,
      isBestseller: false,
      activityType: 'Scuba Diving',
      skillLevel: 'All Levels',
      depthRating: 'All Depths',
      certification: 'CE Certified',
      features: ['Reinforced Knees', 'YKK Zippers', 'Stretch Panels', 'Chest Zip'],
      specs: {
        thickness: '5mm',
        material: 'Neoprene',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        tempRange: '10-18°C'
      }
    },
    {
      id: 50,
      name: 'Dive Mask Set',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/dive-mask.jpg',
      rating: 4.6,
      reviews: 203,
      category: 'Vision',
      brand: 'DeepDive',
      description: 'Low-volume dive mask with tempered glass and wide view',
      isNew: false,
      isBestseller: true,
      activityType: 'Scuba Diving',
      skillLevel: 'Beginner',
      depthRating: 'All Depths',
      certification: 'CE Certified',
      features: ['Tempered Glass', 'Wide View', 'Silicone Skirt', 'Adjustable Strap'],
      specs: {
        volume: 'Low',
        glass: 'Tempered',
        colors: ['Black', 'Clear', 'Blue'],
        fit: 'Universal'
      }
    },
    {
      id: 51,
      name: 'Aluminum Dive Tank',
      price: '$349.99',
      originalPrice: '$429.99',
      image: '/dive-tank.jpg',
      rating: 4.8,
      reviews: 45,
      category: 'Air Systems',
      brand: 'DeepDive',
      description: '80 cu ft aluminum dive tank with visual inspection',
      isNew: false,
      isBestseller: true,
      activityType: 'Scuba Diving',
      skillLevel: 'All Levels',
      depthRating: 'All Depths',
      certification: 'DOT/CE Certified',
      features: ['80 cu ft', 'Aluminum', 'Visual Ready', 'Corrosion Resistant'],
      specs: {
        capacity: '80 cu ft',
        material: 'Aluminum',
        pressure: '207 bar',
        weight: '14kg'
      }
    },
    {
      id: 52,
      name: 'Dive Light Pro',
      price: '$159.99',
      originalPrice: '$199.99',
      image: '/dive-light.jpg',
      rating: 4.4,
      reviews: 78,
      category: 'Lighting',
      brand: 'AquaPro',
      description: '1000 lumen dive light with rechargeable battery',
      isNew: true,
      isBestseller: false,
      activityType: 'Scuba Diving',
      skillLevel: 'Intermediate',
      depthRating: '100m',
      certification: 'IP68 Certified',
      features: ['1000 Lumens', 'Rechargeable', 'Multiple Modes', 'Magnetic Switch'],
      specs: {
        brightness: '1000 lumens',
        battery: '18650 Li-ion',
        runtime: '4 hours',
        beamAngle: '120°'
      }
    }
  ];

  const scubaCategories = [
    {
      name: 'Breathing Systems',
      icon: '💨',
      description: 'Regulators, Octopus, Consoles',
      count: '8 products',
      slug: 'breathing-systems'
    },
    {
      name: 'Buoyancy Control',
      icon: '⚖️',
      description: 'BCDs, Weight Systems',
      count: '6 products',
      slug: 'buoyancy-control'
    },
    {
      name: 'Exposure Protection',
      icon: '❄️',
      description: 'Wetsuits, Drysuits, Gloves',
      count: '12 products',
      slug: 'exposure-protection'
    },
    {
      name: 'Dive Computers',
      icon: '💻',
      description: 'Wrist & Console Computers',
      count: '5 products',
      slug: 'dive-computers'
    },
    {
      name: 'Underwater Vision',
      icon: '👁️',
      description: 'Masks, Goggles, Lenses',
      count: '10 products',
      slug: 'underwater-vision'
    },
    {
      name: 'Dive Accessories',
      icon: '🔧',
      description: 'Lights, Knives, Reels',
      count: '15 products',
      slug: 'dive-accessories'
    }
  ];

  const certifications = [
    {
      name: 'PADI',
      description: 'Professional Association of Diving Instructors',
      icon: '🎓'
    },
    {
      name: 'SSI',
      description: 'Scuba Schools International',
      icon: '🏫'
    },
    {
      name: 'NAUI',
      description: 'National Association of Underwater Instructors',
      icon: '🇺🇸'
    },
    {
      name: 'CMAS',
      description: 'World Underwater Federation',
      icon: '🌍'
    }
  ];

  const filters = {
    category: ['Breathing Systems', 'Buoyancy Control', 'Exposure Protection', 'Dive Computers', 'Underwater Vision', 'Dive Accessories', 'Air Systems', 'Lighting', 'Footwear'],
    priceRange: [
      'Under $100',
      '$100 - $300',
      '$300 - $600',
      '$600 - $1,000',
      'Above $1,000'
    ],
    brand: ['DeepDive', 'AquaPro', 'ScubaPro', 'Aqualung', 'Mares', 'Cressi'],
    skillLevel: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
    depthRating: ['All Depths', '30m', '40m', '50m', '60m', '100m+'],
    certification: ['PADI Approved', 'CE Certified', 'EN13319', 'DOT Certified', 'IP68 Certified']
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
      <section className="bg-gradient-to-r from-blue-800 to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Scuba Diving Equipment
            </h1>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Explore the depths with professional-grade scuba gear. From beginner sets to technical diving equipment, 
              we have everything for your underwater adventures.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 transition-colors duration-200 text-lg"
              >
                Shop Dive Gear
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

      {/* Scuba Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Scuba Diving Categories
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Complete range of professional scuba diving equipment for all levels and environments
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {scubaCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/water-sports/scuba-diving/${category.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <span className="text-xs bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">
                  {category.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Grade Equipment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All our scuba gear meets international safety standards and is tested for reliability in various diving conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Certified</h3>
              <p className="text-gray-600">All equipment meets CE, PADI, and international diving standards</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Tested</h3>
              <p className="text-gray-600">Rigorously tested for optimal performance in real diving conditions</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Temperature Rated</h3>
              <p className="text-gray-600">Designed for both tropical and cold water diving environments</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gauge className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Depth Rated</h3>
              <p className="text-gray-600">Equipment certified for various depth ranges up to 100+ meters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Brands */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Certified by Leading Organizations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Products Section */}
      <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Scuba Diving Equipment
              </h2>
              <p className="text-gray-600 text-lg">
                {scubaProducts.length} professional products for underwater exploration
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-cyan-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-300 min-w-48"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="safety">Safety Rated</option>
                <option value="depth">Depth Rating</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-4 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Filter className="w-6 h-6 mr-3" />
                  Dive Gear Filters
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
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {filters.priceRange.map((range) => (
                      <label key={range} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.priceRange.includes(range)}
                          onChange={() => toggleFilter('priceRange', range)}
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Depth Rating Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Depth Rating</h4>
                  <div className="space-y-2">
                    {filters.depthRating.map((depth) => (
                      <label key={depth} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.depthRating.includes(depth)}
                          onChange={() => toggleFilter('depthRating', depth)}
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{depth}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Certification Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Certification</h4>
                  <div className="space-y-2">
                    {filters.certification.map((cert) => (
                      <label key={cert} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.certification.includes(cert)}
                          onChange={() => toggleFilter('certification', cert)}
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{cert}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], skillLevel: [], depthRating: [], certification: [] })}
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
                  {scubaProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-72 bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center p-8">
                        {product.isNew && (
                          <span className="absolute top-4 left-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                          {product.category === 'Breathing Systems' ? '💨' :
                           product.category === 'Buoyancy Control' ? '⚖️' :
                           product.category === 'Exposure Protection' ? '❄️' :
                           product.category === 'Dive Computers' ? '💻' :
                           product.category === 'Underwater Vision' ? '👁️' : '🔧'}
                        </div>
                        <button className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
                          <div className="flex flex-col gap-2 items-end">
                            <span className="text-xs bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">
                              {product.category}
                            </span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                              {product.skillLevel}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        
                        {/* Specifications */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                            <span>Depth Rating:</span>
                            <span className="font-semibold text-gray-900">{product.depthRating}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>Certification:</span>
                            <span className="font-semibold text-gray-900">{product.certification}</span>
                          </div>
                        </div>
                        
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
                          <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors duration-200 font-semibold text-sm">
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
                  {scubaProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-56 relative bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center p-8">
                        {product.isNew && (
                          <span className="absolute top-4 left-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-5xl">
                          {product.category === 'Breathing Systems' ? '💨' :
                           product.category === 'Buoyancy Control' ? '⚖️' :
                           product.category === 'Exposure Protection' ? '❄️' :
                           product.category === 'Dive Computers' ? '💻' :
                           product.category === 'Underwater Vision' ? '👁️' : '🔧'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                              <span className="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">
                                {product.category}
                              </span>
                              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                                {product.skillLevel}
                              </span>
                            </div>
                            <p className="text-gray-600 text-lg mb-4">{product.description}</p>
                            
                            {/* Specifications Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                              <div className="text-center bg-gray-50 rounded-lg p-3">
                                <div className="text-sm text-gray-600">Depth Rating</div>
                                <div className="font-semibold text-gray-900">{product.depthRating}</div>
                              </div>
                              <div className="text-center bg-gray-50 rounded-lg p-3">
                                <div className="text-sm text-gray-600">Certification</div>
                                <div className="font-semibold text-gray-900">{product.certification}</div>
                              </div>
                              <div className="text-center bg-gray-50 rounded-lg p-3">
                                <div className="text-sm text-gray-600">Brand</div>
                                <div className="font-semibold text-gray-900">{product.brand}</div>
                              </div>
                              <div className="text-center bg-gray-50 rounded-lg p-3">
                                <div className="text-sm text-gray-600">Rating</div>
                                <div className="font-semibold text-gray-900">{product.rating}/5.0</div>
                              </div>
                            </div>

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
                            <Heart className="w-6 h-6 text-gray-600" />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                            {product.originalPrice && (
                              <span className="ml-3 text-lg text-gray-500 line-through">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>
                          <button className="bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition-colors duration-200 font-semibold text-lg">
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

      {/* Training & Certification */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Scuba Training & Certification
            </h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Get certified with our partner dive centers and access professional training programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3">Beginner Courses</h3>
              <p className="text-cyan-100 mb-4">PADI Open Water Diver certification</p>
              <button className="bg-white text-cyan-700 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                Learn More
              </button>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-semibold mb-3">Advanced Training</h3>
              <p className="text-cyan-100 mb-4">Deep diving, navigation, and specialty courses</p>
              <button className="bg-white text-cyan-700 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                Explore Courses
              </button>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
              <div className="text-4xl mb-4">🤿</div>
              <h3 className="text-xl font-semibold mb-3">Professional Level</h3>
              <p className="text-cyan-100 mb-4">Divemaster and instructor certifications</p>
              <button className="bg-white text-cyan-700 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                Start Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Equipment Maintenance & Service
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Keep your dive gear in perfect condition with our professional servicing and maintenance programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Regulator Service</h3>
              <p className="text-gray-600 text-sm">Annual inspection and overhaul service</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="font-semibold text-gray-900 mb-2">BCD Inspection</h3>
              <p className="text-gray-600 text-sm">Buoyancy control device testing</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-semibold text-gray-900 mb-2">Computer Calibration</h3>
              <p className="text-gray-600 text-sm">Dive computer software updates</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-semibold text-gray-900 mb-2">Gear Storage</h3>
              <p className="text-gray-600 text-sm">Proper storage solutions and tips</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}