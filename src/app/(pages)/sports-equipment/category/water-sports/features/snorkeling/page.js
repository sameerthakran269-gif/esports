// app/sports-equipment/water-sports/snorkeling/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, Eye, Sun, Fish, Waves } from 'lucide-react';

export default function SnorkelingPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: [],
    skillLevel: [],
    waterType: [],
    maskType: []
  });

  const snorkelingProducts = [
    {
      id: 37,
      name: 'Snorkeling Set Pro',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/snorkeling-set.jpg',
      rating: 4.5,
      reviews: 234,
      category: 'Complete Sets',
      brand: 'AquaPro',
      description: 'Complete snorkeling set with dry-top snorkel and panoramic mask',
      isNew: true,
      isBestseller: true,
      activityType: 'Snorkeling',
      skillLevel: 'Beginner',
      waterType: ['Ocean', 'Reef'],
      maskType: 'Panoramic',
      features: ['Dry-Top Snorkel', 'Panoramic Mask', 'Anti-Fog', 'Silicone Skirt'],
      specs: {
        maskMaterial: 'Tempered Glass',
        snorkelType: 'Dry Top',
        finType: 'Adjustable',
        setIncludes: ['Mask', 'Snorkel', 'Fins']
      }
    },
    {
      id: 53,
      name: 'Dry Top Snorkel Elite',
      price: '$34.99',
      originalPrice: '$49.99',
      image: '/dry-snorkel.jpg',
      rating: 4.6,
      reviews: 167,
      category: 'Snorkels',
      brand: 'AquaPro',
      description: 'Advanced dry top snorkel with splash guard and flexible tube',
      isNew: false,
      isBestseller: true,
      activityType: 'Snorkeling',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      maskType: 'N/A',
      features: ['Dry Top Valve', 'Splash Guard', 'Flexible Tube', 'Comfort Mouthpiece'],
      specs: {
        material: 'Silicone',
        valveType: 'Dry Top',
        tubeDiameter: '2.5cm',
        colors: ['Blue', 'Yellow', 'Clear']
      }
    },
    {
      id: 54,
      name: 'Panoramic Dive Mask',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '/panoramic-mask.jpg',
      rating: 4.7,
      reviews: 189,
      category: 'Masks',
      brand: 'DeepDive',
      description: 'Wide-view panoramic mask with tempered glass and comfortable fit',
      isNew: true,
      isBestseller: false,
      activityType: 'Snorkeling',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      maskType: 'Panoramic',
      features: ['180° View', 'Tempered Glass', 'Low Volume', 'Quick Adjust'],
      specs: {
        glass: 'Tempered',
        volume: 'Low',
        skirtMaterial: 'Silicone',
        colors: ['Black', 'Blue', 'Clear']
      }
    },
    {
      id: 55,
      name: 'Adjustable Snorkel Fins',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/snorkel-fins.jpg',
      rating: 4.4,
      reviews: 145,
      category: 'Fins',
      brand: 'AquaPro',
      description: 'Open-heel adjustable fins with comfortable foot pockets',
      isNew: false,
      isBestseller: true,
      activityType: 'Snorkeling',
      skillLevel: 'Beginner',
      waterType: ['Ocean', 'Reef'],
      maskType: 'N/A',
      features: ['Adjustable Straps', 'Vented Blades', 'Quick Drain', 'Lightweight'],
      specs: {
        material: 'Polymer',
        bladeLength: '55cm',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        weight: '1.2kg/pair'
      }
    },
    {
      id: 56,
      name: 'Prescription Snorkel Mask',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/prescription-mask.jpg',
      rating: 4.8,
      reviews: 78,
      category: 'Masks',
      brand: 'AquaView',
      description: 'Snorkel mask with customizable prescription lenses',
      isNew: true,
      isBestseller: false,
      activityType: 'Snorkeling',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      maskType: 'Prescription',
      features: ['Custom Lenses', 'Anti-Fog', 'Silicone Skirt', 'Wide View'],
      specs: {
        lensType: 'Prescription',
        diopters: '-8.0 to +8.0',
        frameMaterial: 'Polycarbonate',
        customization: 'Required'
      }
    },
    {
      id: 57,
      name: 'Full Face Snorkel Mask',
      price: '$99.99',
      originalPrice: '$129.99',
      image: '/full-face-mask.jpg',
      rating: 4.3,
      reviews: 203,
      category: 'Masks',
      brand: 'EasyBreath',
      description: '180° panoramic view with natural breathing through nose and mouth',
      isNew: false,
      isBestseller: true,
      activityType: 'Snorkeling',
      skillLevel: 'Beginner',
      waterType: ['Calm Waters'],
      maskType: 'Full Face',
      features: ['Natural Breathing', '180° View', 'Dry Top', 'GoPro Mount'],
      specs: {
        viewAngle: '180°',
        breathing: 'Nose & Mouth',
        valveSystem: 'Dry Top',
        cameraMount: 'Integrated'
      }
    },
    {
      id: 58,
      name: 'Travel Snorkel Set',
      price: '$74.99',
      originalPrice: '$99.99',
      image: '/travel-snorkel.jpg',
      rating: 4.6,
      reviews: 156,
      category: 'Complete Sets',
      brand: 'TravelPro',
      description: 'Compact snorkel set designed for travel with carrying bag',
      isNew: true,
      isBestseller: true,
      activityType: 'Snorkeling',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      maskType: 'Standard',
      features: ['Compact Design', 'Travel Bag', 'Dry Snorkel', 'Anti-Fog'],
      specs: {
        packedSize: '25x15x10cm',
        weight: '1.8kg',
        setIncludes: ['Mask', 'Snorkel', 'Fins', 'Bag'],
        travelReady: 'Yes'
      }
    },
    {
      id: 59,
      name: 'Anti-Fog Spray',
      price: '$14.99',
      originalPrice: '$19.99',
      image: '/anti-fog.jpg',
      rating: 4.2,
      reviews: 289,
      category: 'Accessories',
      brand: 'AquaPro',
      description: 'Long-lasting anti-fog spray for masks and goggles',
      isNew: false,
      isBestseller: true,
      activityType: 'Snorkeling',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      maskType: 'N/A',
      features: ['Long Lasting', 'Eco Friendly', 'Easy Application', 'No Residue'],
      specs: {
        volume: '100ml',
        applications: '50+',
        ecoFriendly: 'Yes',
        shelfLife: '2 years'
      }
    },
    {
      id: 60,
      name: 'Snorkel Vest',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/snorkel-vest.jpg',
      rating: 4.5,
      reviews: 134,
      category: 'Safety',
      brand: 'SafeWater',
      description: 'Inflatable snorkel vest for added safety and buoyancy',
      isNew: true,
      isBestseller: false,
      activityType: 'Snorkeling',
      skillLevel: 'Beginner',
      waterType: ['All Water Types'],
      maskType: 'N/A',
      features: ['Inflatable', 'Safety Whistle', 'Adjustable', 'Compact'],
      specs: {
        buoyancy: '8kg',
        inflation: 'Oral',
        weight: '450g',
        sizes: ['Universal']
      }
    },
    {
      id: 61,
      name: 'Underwater Camera Case',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/camera-case.jpg',
      rating: 4.4,
      reviews: 98,
      category: 'Accessories',
      brand: 'AquaShot',
      description: 'Waterproof case for smartphones and small cameras',
      isNew: false,
      isBestseller: true,
      activityType: 'Snorkeling',
      skillLevel: 'All Levels',
      waterType: ['All Water Types'],
      maskType: 'N/A',
      features: ['Waterproof', 'Touch Sensitive', 'Floats', 'Multiple Sizes'],
      specs: {
        depthRating: '10m',
        phoneSize: 'Up to 6.5"',
        floating: 'Yes',
        colors: ['Clear', 'Blue']
      }
    },
    {
      id: 62,
      name: 'Reef Shoes',
      price: '$29.99',
      originalPrice: '$39.99',
      image: '/reef-shoes.jpg',
      rating: 4.3,
      reviews: 176,
      category: 'Footwear',
      brand: 'AquaPro',
      description: 'Protective water shoes for rocky beaches and coral reefs',
      isNew: true,
      isBestseller: false,
      activityType: 'Snorkeling',
      skillLevel: 'All Levels',
      waterType: ['Reef', 'Rocky'],
      maskType: 'N/A',
      features: ['Reef Protection', 'Quick Dry', 'Non-Slip', 'Lightweight'],
      specs: {
        sole: 'Rubber',
        material: 'Neoprene',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Black', 'Blue', 'Green']
      }
    },
    {
      id: 63,
      name: 'Floating Snorkel Set',
      price: '$109.99',
      originalPrice: '$139.99',
      image: '/floating-snorkel.jpg',
      rating: 4.7,
      reviews: 67,
      category: 'Complete Sets',
      brand: 'FloatPro',
      description: 'Complete snorkel set with floating mask and snorkel',
      isNew: true,
      isBestseller: true,
      activityType: 'Snorkeling',
      skillLevel: 'Beginner',
      waterType: ['Ocean', 'Lake'],
      maskType: 'Standard',
      features: ['Floating Design', 'Bright Colors', 'Dry Top', 'Anti-Fog'],
      specs: {
        floatation: 'Integrated',
        colors: ['Orange', 'Yellow', 'Green'],
        visibility: 'High',
        setIncludes: ['Mask', 'Snorkel', 'Fins', 'Bag']
      }
    }
  ];

  const snorkelingCategories = [
    {
      name: 'Complete Sets',
      icon: '🎒',
      description: 'Mask, Snorkel & Fins',
      count: '8 products',
      slug: 'complete-sets'
    },
    {
      name: 'Snorkel Masks',
      icon: '👁️',
      description: 'Standard & Panoramic',
      count: '12 products',
      slug: 'masks'
    },
    {
      name: 'Snorkels',
      icon: '💨',
      description: 'Dry Top & Traditional',
      count: '6 products',
      slug: 'snorkels'
    },
    {
      name: 'Snorkel Fins',
      icon: '🦶',
      description: 'Adjustable & Full Foot',
      count: '10 products',
      slug: 'fins'
    },
    {
      name: 'Safety Gear',
      icon: '🛡️',
      description: 'Vests & Floats',
      count: '5 products',
      slug: 'safety-gear'
    },
    {
      name: 'Accessories',
      icon: '🔧',
      description: 'Bags, Cases & Care',
      count: '15 products',
      slug: 'accessories'
    }
  ];

  const snorkelingBenefits = [
    {
      icon: '👁️',
      title: 'Crystal Clear Vision',
      description: 'Anti-fog masks with wide panoramic views'
    },
    {
      icon: '💨',
      title: 'Easy Breathing',
      description: 'Dry top snorkels prevent water entry'
    },
    {
      icon: '🎒',
      title: 'Travel Ready',
      description: 'Compact sets perfect for vacations'
    },
    {
      icon: '🛡️',
      title: 'Safe & Comfortable',
      description: 'Beginner-friendly with safety features'
    }
  ];

  const filters = {
    category: ['Complete Sets', 'Masks', 'Snorkels', 'Fins', 'Safety', 'Accessories', 'Footwear'],
    priceRange: [
      'Under $25',
      '$25 - $50',
      '$50 - $100',
      '$100 - $150',
      'Above $150'
    ],
    brand: ['AquaPro', 'DeepDive', 'AquaView', 'EasyBreath', 'TravelPro', 'SafeWater', 'AquaShot', 'FloatPro'],
    skillLevel: ['Beginner', 'Intermediate', 'All Levels'],
    waterType: ['Ocean', 'Reef', 'Lake', 'Calm Waters', 'Rocky', 'All Water Types'],
    maskType: ['Standard', 'Panoramic', 'Full Face', 'Prescription']
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
      <section className="bg-gradient-to-r from-cyan-500 to-blue-500 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/snorkel-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Snorkeling Gear
            </h1>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Discover the underwater world with comfortable, easy-to-use snorkeling equipment. 
              Perfect for beginners and experienced snorkelers alike.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-200 text-lg shadow-lg"
              >
                Shop Snorkeling Gear
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Snorkeling Gear?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed for comfort, safety, and incredible underwater experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {snorkelingBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snorkeling Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Snorkeling Categories
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Everything you need for comfortable and safe snorkeling adventures
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {snorkelingCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/water-sports/snorkeling/${category.slug}`}
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

      {/* Beginner's Guide */}
      <section className="py-16 bg-gradient-to-r from-blue-400 to-cyan-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">
              First Time Snorkeling?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Start your underwater adventure with confidence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold mb-3 text-white">Choose Your Gear</h3>
              <p className="text-blue-100 text-sm">Start with a complete set for beginners</p>
            </div>
            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm text-center">
              <div className="text-3xl mb-3">🏊‍♂️</div>
              <h3 className="font-semibold mb-3 text-white">Practice First</h3>
              <p className="text-blue-100 text-sm">Try in a pool before ocean adventures</p>
            </div>
            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm text-center">
              <div className="text-3xl mb-3">🐠</div>
              <h3 className="font-semibold mb-3 text-white">Explore Safely</h3>
              <p className="text-blue-100 text-sm">Always snorkel with a buddy</p>
            </div>
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
                Snorkeling Equipment
              </h2>
              <p className="text-gray-600 text-lg">
                {snorkelingProducts.length} products for amazing underwater experiences
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
                <option value="popular">Most Popular</option>
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
                  Snorkeling Filters
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

                {/* Mask Type Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Mask Type</h4>
                  <div className="space-y-2">
                    {filters.maskType.map((maskType) => (
                      <label key={maskType} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.maskType.includes(maskType)}
                          onChange={() => toggleFilter('maskType', maskType)}
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{maskType}</span>
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

                {/* Water Type Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Water Type</h4>
                  <div className="space-y-2">
                    {filters.waterType.map((waterType) => (
                      <label key={waterType} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.waterType.includes(waterType)}
                          onChange={() => toggleFilter('waterType', waterType)}
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{waterType}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], skillLevel: [], waterType: [], maskType: [] })}
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
                  {snorkelingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center p-8">
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
                          {product.category === 'Complete Sets' ? '🎒' :
                           product.category === 'Masks' ? '👁️' :
                           product.category === 'Snorkels' ? '💨' :
                           product.category === 'Fins' ? '🦶' :
                           product.category === 'Safety' ? '🛡️' : '🔧'}
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
                        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                        
                        {/* Key Features */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {product.features.slice(0, 3).map((feature, index) => (
                              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
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
                  {snorkelingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center p-6">
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
                        <div className="text-4xl">
                          {product.category === 'Complete Sets' ? '🎒' :
                           product.category === 'Masks' ? '👁️' :
                           product.category === 'Snorkels' ? '💨' :
                           product.category === 'Fins' ? '🦶' :
                           product.category === 'Safety' ? '🛡️' : '🔧'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                              <span className="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">
                                {product.category}
                              </span>
                              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                                {product.skillLevel}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            
                            {/* Features Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {product.features.map((feature, index) => (
                                <span key={index} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>

                            {/* Specifications */}
                            {product.specs && (
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 text-sm">
                                {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                                  <div key={key} className="text-gray-600">
                                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>{' '}
                                    <span className="text-gray-900">{value}</span>
                                  </div>
                                ))}
                              </div>
                            )}
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
                            <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors duration-200 font-semibold">
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

      {/* Care & Maintenance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Snorkeling Gear Care
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Keep your equipment in perfect condition for years of underwater adventures
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">💦</div>
              <h3 className="font-semibold text-gray-900 mb-2">Rinse After Use</h3>
              <p className="text-gray-600 text-sm">Always rinse with fresh water after saltwater use</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">🌬️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Dry Completely</h3>
              <p className="text-gray-600 text-sm">Air dry away from direct sunlight</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-semibold text-gray-900 mb-2">Store Properly</h3>
              <p className="text-gray-600 text-sm">Keep in a cool, dry place without folding</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="font-semibold text-gray-900 mb-2">Regular Check</h3>
              <p className="text-gray-600 text-sm">Inspect for wear and tear before each use</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Snorkeling Tips & Deals
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Get the best snorkeling spots, gear maintenance tips, and exclusive offers
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
            <button className="bg-cyan-700 text-white px-6 py-3 rounded-r-lg hover:bg-cyan-800 transition-colors duration-200 font-semibold">
              Dive In
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}