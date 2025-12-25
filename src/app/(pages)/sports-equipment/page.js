// app/sports-equipment/page.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function SportsEquipmentPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: []
  });

  const heroSlides = [
    {
      image: '/sports-banner-1.jpg',
      title: 'Professional Sports Equipment',
      subtitle: 'Elevate Your Game with Premium Gear',
      description: 'Discover top-quality sports equipment for athletes of all levels',
      buttonText: 'Shop Now',
      bgGradient: 'from-green-100 to-emerald-50'
    },
    {
      image: '/sports-banner-2.jpg',
      title: 'Team Sports Sale',
      subtitle: 'Up to 35% Off Team Equipment',
      description: 'Gear up for the season with our exclusive team deals',
      buttonText: 'View Deals',
      bgGradient: 'from-blue-100 to-cyan-50'
    }
  ];

  const sportsTypes = [
    {
      name: 'Team Sports',
      image: '/team-sports.jpg',
      link: '/sports-equipment/team-sports',
      description: 'Basketball, Soccer & More',
      slug: 'team-sports'
    },
    {
      name: 'Racket Sports',
      image: '/racket-sports.jpg',
      link: '/sports-equipment/racket-sports',
      description: 'Tennis, Badminton & More',
      slug: 'racket-sports'
    },
    {
      name: 'Outdoor Sports',
      image: '/outdoor-sports.jpg',
      link: '/sports-equipment/outdoor',
      description: 'Camping & Adventure Gear',
      slug: 'outdoor-sports'
    },
    {
      name: 'Water Sports',
      image: '/water-sports.jpg',
      link: '/sports-equipment/water-sports',
      description: 'Swimming & Water Activities',
      slug: 'water-sports'
    },
    {
      name: 'Winter Sports',
      image: '/winter-sports.jpg',
      link: '/sports-equipment/winter-sports',
      description: 'Skiing & Snowboarding',
      slug: 'winter-sports'
    }
  ];

  const sportsProducts = [
    // Team Sports
    {
      id: 1,
      name: 'Professional Basketball Set',
      price: '$299.99',
      originalPrice: '$399.99',
      image: '/basketball-set.jpg',
      rating: 4.8,
      reviews: 156,
      category: 'Team Sports',
      brand: 'ProCourt',
      description: 'Complete basketball set with adjustable hoop and premium ball',
      isNew: true,
      isBestseller: true
    },
    {
      id: 2,
      name: 'Professional Soccer Ball',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/soccer-ball.jpg',
      rating: 4.7,
      reviews: 203,
      category: 'Team Sports',
      brand: 'KickMaster',
      description: 'FIFA approved professional soccer ball',
      isNew: false,
      isBestseller: true
    },
    {
      id: 3,
      name: 'Volleyball Net System',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/volleyball-net.jpg',
      rating: 4.5,
      reviews: 89,
      category: 'Team Sports',
      brand: 'NetPro',
      description: 'Professional volleyball net with adjustable poles',
      isNew: false,
      isBestseller: false
    },

    // Racket Sports
    {
      id: 4,
      name: 'Professional Tennis Racket',
      price: '$189.99',
      originalPrice: '$229.99',
      image: '/tennis-racket.jpg',
      rating: 4.9,
      reviews: 134,
      category: 'Racket Sports',
      brand: 'AcePro',
      description: 'Carbon fiber tennis racket with premium grip',
      isNew: true,
      isBestseller: true
    },
    {
      id: 5,
      name: 'Badminton Set',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/badminton-set.jpg',
      rating: 4.4,
      reviews: 167,
      category: 'Racket Sports',
      brand: 'ShuttleMaster',
      description: 'Complete badminton set with net and rackets',
      isNew: false,
      isBestseller: false
    },
    {
      id: 6,
      name: 'Table Tennis Table',
      price: '$499.99',
      originalPrice: '$599.99',
      image: '/ping-pong-table.jpg',
      rating: 4.6,
      reviews: 78,
      category: 'Racket Sports',
      brand: 'PaddlePro',
      description: 'Professional foldable table tennis table',
      isNew: true,
      isBestseller: false
    },

    // Outdoor Sports
    {
      id: 7,
      name: 'Professional Camping Tent',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/camping-tent.jpg',
      rating: 4.7,
      reviews: 145,
      category: 'Outdoor Sports',
      brand: 'TrailMaster',
      description: '4-person waterproof camping tent',
      isNew: false,
      isBestseller: true
    },
    {
      id: 8,
      name: 'Hiking Backpack',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/hiking-backpack.jpg',
      rating: 4.5,
      reviews: 212,
      category: 'Outdoor Sports',
      brand: 'TrekGear',
      description: '65L waterproof hiking backpack with frame',
      isNew: true,
      isBestseller: false
    },

    // Water Sports
    {
      id: 9,
      name: 'Professional Swim Goggles',
      price: '$34.99',
      originalPrice: '$44.99',
      image: '/swim-goggles.jpg',
      rating: 4.6,
      reviews: 189,
      category: 'Water Sports',
      brand: 'AquaPro',
      description: 'Anti-fog competitive swim goggles',
      isNew: false,
      isBestseller: true
    },
    {
      id: 10,
      name: 'Inflatable Stand Up Paddleboard',
      price: '$599.99',
      originalPrice: '$749.99',
      image: '/paddleboard.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Water Sports',
      brand: 'WaveRider',
      description: 'Premium inflatable SUP with paddle',
      isNew: true,
      isBestseller: false
    },

    // Winter Sports
    {
      id: 11,
      name: 'Professional Skis Set',
      price: '$699.99',
      originalPrice: '$899.99',
      image: '/ski-set.jpg',
      rating: 4.7,
      reviews: 93,
      category: 'Winter Sports',
      brand: 'SnowPro',
      description: 'Complete ski set with boots and poles',
      isNew: false,
      isBestseller: true
    },
    {
      id: 12,
      name: 'Snowboard Package',
      price: '$449.99',
      originalPrice: '$549.99',
      image: '/snowboard.jpg',
      rating: 4.5,
      reviews: 124,
      category: 'Winter Sports',
      brand: 'SlopeMaster',
      description: 'Professional snowboard with bindings',
      isNew: true,
      isBestseller: false
    }
  ];

  const filters = {
    category: ['Team Sports', 'Racket Sports', 'Outdoor Sports', 'Water Sports', 'Winter Sports'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['ProCourt', 'KickMaster', 'NetPro', 'AcePro', 'ShuttleMaster', 'PaddlePro', 'TrailMaster', 'TrekGear', 'AquaPro', 'WaveRider', 'SnowPro', 'SlopeMaster']
  };

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
                  <h2 className="text-xl text-green-600 font-medium mb-4">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {slide.description}
                  </p>
                  <Link
                    href="#products"
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
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

      {/* Sports Types Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            {sportsTypes.map((type, index) => (
              <Link
                key={index}
                href={`/sports-equipment/category/${type.slug}`}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-green-200 group-hover:to-emerald-300 transition-all duration-200">
                  <div className="text-2xl">
                    {type.name === 'Team Sports' ? '🏀' : 
                     type.name === 'Racket Sports' ? '🎾' :
                     type.name === 'Outdoor Sports' ? '🏕️' :
                     type.name === 'Water Sports' ? '🏊' : '⛷️'}
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-200">
                  {type.name}
                </span>
                <p className="text-xs text-gray-500 mt-1">{type.description}</p>
              </Link>
            ))}
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
                Sports Equipment Collection
              </h2>
              <p className="text-gray-600">
                Showing {sportsProducts.length} products
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
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
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
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
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
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
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
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sportsProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
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
                        <div className="text-4xl">
                          {product.category === 'Team Sports' ? '🏀' : 
                           product.category === 'Racket Sports' ? '🎾' :
                           product.category === 'Outdoor Sports' ? '🏕️' :
                           product.category === 'Water Sports' ? '🏊' : '⛷️'}
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
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-semibold">
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
                  {sportsProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
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
                          {product.category === 'Team Sports' ? '🏀' : 
                           product.category === 'Racket Sports' ? '🎾' :
                           product.category === 'Outdoor Sports' ? '🏕️' :
                           product.category === 'Water Sports' ? '🏊' : '⛷️'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {product.category}
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
                          <span className="text-sm text-gray-600">Brand: {product.brand}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">Category: {product.category}</span>
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
                          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with New Sports Gear
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Get notified about our latest sports equipment and exclusive offers
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-300"
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