// app/brands/page.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, Search } from 'lucide-react';

export default function BrandsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: []
  });
  const [searchTerm, setSearchTerm] = useState('');

  const heroSlides = [
    {
      image: '/brands-banner-1.jpg',
      title: 'Premium Fitness Brands',
      subtitle: 'Trusted by Professionals Worldwide',
      description: 'Discover equipment from the most reputable brands in fitness and sports',
      buttonText: 'Explore Brands',
      bgGradient: 'from-purple-100 to-indigo-50'
    },
    {
      image: '/brands-banner-2.jpg',
      title: 'Brand Exclusive Deals',
      subtitle: 'Up to 40% Off Top Brands',
      description: 'Special offers from your favorite fitness equipment manufacturers',
      buttonText: 'View Offers',
      bgGradient: 'from-orange-100 to-amber-50'
    }
  ];

  const featuredBrands = [
    {
      name: 'ProFit',
      logo: '/profit-logo.jpg',
      description: 'Professional strength training equipment',
      productCount: 45,
      rating: 4.8,
      categories: ['Strength Training', 'Functional Training'],
      established: 1998,
      link: '/brands/profit'
    },
    {
      name: 'CardioMax',
      logo: '/cardiomax-logo.jpg',
      description: 'Commercial cardio machines & home fitness',
      productCount: 32,
      rating: 4.9,
      categories: ['Cardio Machines'],
      established: 2005,
      link: '/brands/cardiomax'
    },
    {
      name: 'IronMaster',
      logo: '/ironmaster-logo.jpg',
      description: 'Premium free weights & strength equipment',
      productCount: 28,
      rating: 4.7,
      categories: ['Free Weights', 'Strength Training'],
      established: 1995,
      link: '/brands/ironmaster'
    },
    {
      name: 'TechFit',
      logo: '/techfit-logo.jpg',
      description: 'Smart home gyms & digital fitness solutions',
      productCount: 18,
      rating: 4.6,
      categories: ['Functional Training', 'Smart Equipment'],
      established: 2015,
      link: '/brands/techfit'
    },
    {
      name: 'QuickFit',
      logo: '/quickfit-logo.jpg',
      description: 'Space-saving adjustable equipment',
      productCount: 23,
      rating: 4.5,
      categories: ['Free Weights', 'Home Gym'],
      established: 2010,
      link: '/brands/quickfit'
    },
    {
      name: 'AeroBike',
      logo: '/aerobike-logo.jpg',
      description: 'High-performance cardio equipment',
      productCount: 15,
      rating: 4.7,
      categories: ['Cardio Machines'],
      established: 2008,
      link: '/brands/aerobike'
    },
    {
      name: 'FlexGear',
      logo: '/flexgear-logo.jpg',
      description: 'Yoga & fitness accessories',
      productCount: 36,
      rating: 4.4,
      categories: ['Accessories', 'Yoga'],
      established: 2012,
      link: '/brands/flexgear'
    },
    {
      name: 'PowerFlex',
      logo: '/powerflex-logo.jpg',
      description: 'Resistance training & rehabilitation',
      productCount: 21,
      rating: 4.3,
      categories: ['Accessories', 'Functional Training'],
      established: 2018,
      link: '/brands/powerflex'
    }
  ];

  const brandProducts = [
    // ProFit Products
    {
      id: 1,
      name: 'ProFit Power Rack System',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/profit-power-rack.jpg',
      rating: 4.8,
      reviews: 156,
      category: 'Strength Training',
      brand: 'ProFit',
      description: 'Commercial grade power rack with lat pulldown attachment',
      isNew: true,
      isBestseller: true
    },
    {
      id: 2,
      name: 'ProFit Adjustable Bench',
      price: '$399.99',
      originalPrice: '$499.99',
      image: '/profit-bench.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'Strength Training',
      brand: 'ProFit',
      description: 'Professional adjustable weight bench',
      isNew: false,
      isBestseller: true
    },

    // CardioMax Products
    {
      id: 3,
      name: 'CardioMax Treadmill Pro',
      price: '$2,299.99',
      originalPrice: '$2,799.99',
      image: '/cardiomax-treadmill.jpg',
      rating: 4.9,
      reviews: 134,
      category: 'Cardio Machines',
      brand: 'CardioMax',
      description: 'Commercial treadmill with advanced features',
      isNew: true,
      isBestseller: true
    },
    {
      id: 4,
      name: 'CardioMax Elliptical Trainer',
      price: '$1,499.99',
      originalPrice: '$1,899.99',
      image: '/cardiomax-elliptical.jpg',
      rating: 4.6,
      reviews: 78,
      category: 'Cardio Machines',
      brand: 'CardioMax',
      description: 'Smooth elliptical with heart rate monitoring',
      isNew: false,
      isBestseller: false
    },

    // IronMaster Products
    {
      id: 5,
      name: 'IronMaster Olympic Set',
      price: '$799.99',
      originalPrice: '$999.99',
      image: '/ironmaster-olympic-set.jpg',
      rating: 4.7,
      reviews: 203,
      category: 'Free Weights',
      brand: 'IronMaster',
      description: '300lb Olympic weight set with bumper plates',
      isNew: false,
      isBestseller: true
    },
    {
      id: 6,
      name: 'IronMaster Kettlebell Set',
      price: '$299.99',
      originalPrice: '$399.99',
      image: '/ironmaster-kettlebells.jpg',
      rating: 4.5,
      reviews: 145,
      category: 'Free Weights',
      brand: 'IronMaster',
      description: '5-piece kettlebell set with storage rack',
      isNew: true,
      isBestseller: false
    },

    // TechFit Products
    {
      id: 7,
      name: 'TechFit Smart Home Gym',
      price: '$1,899.99',
      originalPrice: null,
      image: '/techfit-home-gym.jpg',
      rating: 4.6,
      reviews: 67,
      category: 'Functional Training',
      brand: 'TechFit',
      description: 'All-in-one digital home gym system',
      isNew: true,
      isBestseller: false
    },

    // QuickFit Products
    {
      id: 8,
      name: 'QuickFit Adjustable Dumbbells',
      price: '$449.99',
      originalPrice: '$549.99',
      image: '/quickfit-dumbbells.jpg',
      rating: 4.5,
      reviews: 189,
      category: 'Free Weights',
      brand: 'QuickFit',
      description: 'Space-saving adjustable dumbbell system',
      isNew: false,
      isBestseller: true
    },

    // AeroBike Products
    {
      id: 9,
      name: 'AeroBike Air Bike',
      price: '$749.99',
      originalPrice: '$899.99',
      image: '/aerobike-air-bike.jpg',
      rating: 4.7,
      reviews: 112,
      category: 'Cardio Machines',
      brand: 'AeroBike',
      description: 'Commercial air bike for full-body workouts',
      isNew: true,
      isBestseller: false
    },

    // FlexGear Products
    {
      id: 10,
      name: 'FlexGear Yoga Mat Pro',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/flexgear-yoga-mat.jpg',
      rating: 4.4,
      reviews: 234,
      category: 'Accessories',
      brand: 'FlexGear',
      description: 'Premium non-slip yoga mat with carrying case',
      isNew: false,
      isBestseller: true
    },
    {
      id: 11,
      name: 'FlexGear Resistance Bands',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/flexgear-bands.jpg',
      rating: 4.3,
      reviews: 167,
      category: 'Accessories',
      brand: 'FlexGear',
      description: '5-level resistance band set with accessories',
      isNew: true,
      isBestseller: false
    },

    // PowerFlex Products
    {
      id: 12,
      name: 'PowerFlex Gym Gloves',
      price: '$34.99',
      originalPrice: '$44.99',
      image: '/powerflex-gloves.jpg',
      rating: 4.5,
      reviews: 156,
      category: 'Accessories',
      brand: 'PowerFlex',
      description: 'Professional gym gloves with wrist support',
      isNew: false,
      isBestseller: true
    }
  ];

  const filters = {
    category: ['Strength Training', 'Cardio Machines', 'Free Weights', 'Functional Training', 'Accessories', 'Smart Equipment', 'Home Gym', 'Yoga'],
    priceRange: [
      'Under $100',
      '$100 - $500',
      '$500 - $1,000',
      '$1,000 - $2,000',
      'Above $2,000'
    ],
    brand: ['ProFit', 'CardioMax', 'IronMaster', 'TechFit', 'QuickFit', 'AeroBike', 'FlexGear', 'PowerFlex']
  };

  // Filter brands based on search
  const filteredBrands = featuredBrands.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Filter products based on selected filters
  const filteredProducts = brandProducts.filter(product => {
    const matchesCategory = selectedFilters.category.length === 0 || selectedFilters.category.includes(product.category);
    const matchesBrand = selectedFilters.brand.length === 0 || selectedFilters.brand.includes(product.brand);
    
    let matchesPrice = true;
    if (selectedFilters.priceRange.length > 0) {
      const price = parseFloat(product.price.replace('$', '').replace(',', ''));
      matchesPrice = selectedFilters.priceRange.some(range => {
        switch (range) {
          case 'Under $100': return price < 100;
          case '$100 - $500': return price >= 100 && price <= 500;
          case '$500 - $1,000': return price >= 500 && price <= 1000;
          case '$1,000 - $2,000': return price >= 1000 && price <= 2000;
          case 'Above $2,000': return price > 2000;
          default: return true;
        }
      });
    }
    
    return matchesCategory && matchesBrand && matchesPrice;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel Section */}
      <section className="relative h-[400px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-r ${slide.bgGradient} flex items-center`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl text-purple-600 font-medium mb-4">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {slide.description}
                  </p>
                  <Link
                    href="#brands"
                    className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Brands Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Discover Premium Brands
            </h2>
            <p className="text-gray-600 text-lg">
              Explore equipment from trusted manufacturers and find your perfect fit
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search brands by name, category, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Brands Grid */}
      <section id="brands" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Brands
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBrands.map((brand, index) => (
              <Link
                key={index}
                href={brand.link}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                <div className="p-6">
                  {/* Brand Logo */}
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-indigo-300 transition-all duration-200">
                    <div className="text-2xl font-bold text-purple-600">
                      {brand.name.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Brand Info */}
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-gray-600 text-sm text-center mb-4">
                    {brand.description}
                  </p>
                  
                  {/* Brand Details */}
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Products:</span>
                      <span className="font-semibold">{brand.productCount}+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rating:</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
                        <span className="font-semibold">{brand.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Since:</span>
                      <span className="font-semibold">{brand.established}</span>
                    </div>
                  </div>
                  
                  {/* Categories */}
                  <div className="mt-4 flex flex-wrap gap-1 justify-center">
                    {brand.categories.slice(0, 2).map((category, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs"
                      >
                        {category}
                      </span>
                    ))}
                    {brand.categories.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        +{brand.categories.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Brand Products
              </h2>
              <p className="text-gray-600">
                Showing {filteredProducts.length} products from {filteredBrands.length} brands
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
                <option value="brand">Brand Name</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Products
                </h3>

                {/* Brand Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Brand</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {filters.brand.map((brand) => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.brand.includes(brand)}
                          onChange={() => toggleFilter('brand', brand)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {filters.category.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.category.includes(category)}
                          onChange={() => toggleFilter('category', category)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
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
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [] })}
                  className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                  <button
                    onClick={() => {
                      setSelectedFilters({ category: [], priceRange: [], brand: [] });
                      setSearchTerm('');
                    }}
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    Clear All
                  </button>
                </div>
              ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Strength Training' ? '🏋️' : 
                           product.category === 'Cardio Machines' ? '🏃' :
                           product.category === 'Free Weights' ? '💪' :
                           product.category === 'Accessories' ? '🎯' : '🛋️'}
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-amber-400 fill-current" />
                            <span className="ml-1 text-sm text-gray-600">
                              {product.rating} ({product.reviews})
                            </span>
                          </div>
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                            {product.brand}
                          </span>
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
                          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-semibold">
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
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Strength Training' ? '🏋️' : 
                           product.category === 'Cardio Machines' ? '🏃' :
                           product.category === 'Free Weights' ? '💪' :
                           product.category === 'Accessories' ? '🎯' : '🛋️'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                                {product.brand}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
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
                          <span className="text-sm text-gray-600">Category: {product.category}</span>
                          <span className="mx-2 text-gray-300">•</span>
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
                          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold">
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

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Brand Launches
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Get notified about new brand partnerships and exclusive product releases
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}