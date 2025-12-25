// app/gym-equipment/storage/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Shield, Truck, Package, Layers } from 'lucide-react';

export default function StoragePage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    material: [],
    priceRange: [],
    brand: [],
    capacity: []
  });

  const storageProducts = [
    {
      id: 1,
      name: 'Weight Plate Tree - 6 Peg',
      price: '$149.99',
      originalPrice: '$199.99',
      image: '/plate-tree.jpg',
      rating: 4.7,
      reviews: 76,
      category: 'Plate Storage',
      brand: 'RackMaster',
      material: 'Steel',
      description: 'Heavy-duty weight plate storage tree with 6 pegs and wheel base',
      features: ['6 Storage Pegs', 'Steel Construction', 'Wheel Base', '500lb Capacity'],
      specifications: {
        capacity: '500lb',
        pegs: '6',
        base: 'Wheeled',
        finish: 'Black Powder Coat',
        dimensions: '24" x 24" x 48"'
      },
      capacities: ['500lb total'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: '5 Years'
    },
    {
      id: 2,
      name: 'Commercial Dumbbell Rack',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/dumbbell-rack.jpg',
      rating: 4.4,
      reviews: 112,
      category: 'Dumbbell Storage',
      brand: 'OrganizeFit',
      material: 'Steel',
      description: 'Commercial dumbbell rack with tiered design for easy access',
      features: ['Tiered Design', 'Steel Construction', '1000lb Capacity', 'Easy Access'],
      specifications: {
        capacity: '1000lb',
        design: 'Tiered',
        finish: 'Commercial Black',
        assembly: 'Tool-Free',
        dimensions: '72" x 24" x 36"'
      },
      capacities: ['1000lb total'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: '10 Years'
    },
    {
      id: 3,
      name: 'Barbell Storage Rack',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/barbell-rack.jpg',
      rating: 4.6,
      reviews: 89,
      category: 'Barbell Storage',
      brand: 'RackMaster',
      material: 'Steel',
      description: 'Wall-mounted barbell storage rack for Olympic and standard bars',
      features: ['Wall Mounted', 'Holds 6 Barbells', 'Steel Construction', 'Easy Installation'],
      specifications: {
        capacity: '600lb',
        bars: '6',
        mounting: 'Wall',
        finish: 'Black Powder Coat',
        dimensions: '36" x 8" x 12"'
      },
      capacities: ['6 barbells'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      warranty: '5 Years'
    },
    {
      id: 4,
      name: 'Kettlebell Storage Tree',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/kettlebell-tree.jpg',
      rating: 4.5,
      reviews: 67,
      category: 'Kettlebell Storage',
      brand: 'OrganizeFit',
      material: 'Steel',
      description: 'Compact kettlebell storage tree with tiered design for 8 kettlebells',
      features: ['Tiered Design', 'Holds 8 Kettlebells', 'Compact Footprint', 'Steel Construction'],
      specifications: {
        capacity: '400lb',
        kettlebells: '8',
        design: 'Tiered',
        finish: 'Black Epoxy',
        dimensions: '18" x 18" x 32"'
      },
      capacities: ['8 kettlebells'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      warranty: '5 Years'
    },
    {
      id: 5,
      name: 'Plate-Loaded Dumbbell Rack',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/plate-dumbbell-rack.jpg',
      rating: 4.3,
      reviews: 45,
      category: 'Dumbbell Storage',
      brand: 'HomeGym',
      material: 'Steel',
      description: 'Compact rack for plate-loaded dumbbells with weight plate storage',
      features: ['Plate Storage', 'Compact Design', 'Steel Construction', 'Easy Assembly'],
      specifications: {
        capacity: '300lb',
        design: 'Compact',
        finish: 'Black Paint',
        assembly: 'Tool Required',
        dimensions: '24" x 18" x 24"'
      },
      capacities: ['300lb total'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      warranty: '2 Years'
    },
    {
      id: 6,
      name: 'Vertical Barbell Holder',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/vertical-barbell-holder.jpg',
      rating: 4.4,
      reviews: 78,
      category: 'Barbell Storage',
      brand: 'SpaceSaver',
      material: 'Steel',
      description: 'Space-saving vertical barbell holder for tight home gym spaces',
      features: ['Vertical Storage', 'Space Saving', 'Holds 4 Barbells', 'Rubber Protection'],
      specifications: {
        capacity: '200lb',
        bars: '4',
        design: 'Vertical',
        protection: 'Rubber Coated',
        dimensions: '12" x 12" x 48"'
      },
      capacities: ['4 barbells'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      warranty: '3 Years'
    },
    {
      id: 7,
      name: 'Commercial Plate Rack',
      price: '$299.99',
      originalPrice: '$399.99',
      image: '/commercial-plate-rack.jpg',
      rating: 4.8,
      reviews: 34,
      category: 'Plate Storage',
      brand: 'RackMaster',
      material: 'Steel',
      description: 'Commercial-grade plate rack with angled storage for easy viewing',
      features: ['Commercial Grade', 'Angled Storage', '1000lb Capacity', 'Heavy Duty'],
      specifications: {
        capacity: '1000lb',
        design: 'Angled',
        finish: '2mm Steel',
        assembly: 'Commercial',
        dimensions: '48" x 30" x 72"'
      },
      capacities: ['1000lb total'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 8,
      name: 'Adjustable Dumbbell Stand',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/adjustable-dumbbell-stand.jpg',
      rating: 4.5,
      reviews: 156,
      category: 'Dumbbell Storage',
      brand: 'QuickFit',
      material: 'Steel',
      description: 'Specialized stand for adjustable dumbbells with accessory storage',
      features: ['Adjustable Compatible', 'Accessory Tray', 'Compact Design', 'Non-Slip Base'],
      specifications: {
        capacity: '150lb',
        compatibility: 'Adjustable Dumbbells',
        features: 'Accessory Tray',
        finish: 'Black Powder Coat',
        dimensions: '20" x 16" x 12"'
      },
      capacities: ['150lb total'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: '3 Years'
    },
    {
      id: 9,
      name: 'Wall Mount Plate Storage',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '/wall-plate-storage.jpg',
      rating: 4.6,
      reviews: 91,
      category: 'Plate Storage',
      brand: 'SpaceSaver',
      material: 'Steel',
      description: 'Space-efficient wall-mounted plate storage for home gyms',
      features: ['Wall Mounted', 'Space Efficient', 'Holds 6 Plates', 'Easy Access'],
      specifications: {
        capacity: '300lb',
        plates: '6',
        mounting: 'Wall',
        finish: 'Black Epoxy',
        dimensions: '24" x 8" x 12"'
      },
      capacities: ['6 plates'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      warranty: '5 Years'
    },
    {
      id: 10,
      name: 'Multi-Function Weight Tree',
      price: '$179.99',
      originalPrice: '$229.99',
      image: '/multi-function-tree.jpg',
      rating: 4.7,
      reviews: 67,
      category: 'Multi-Storage',
      brand: 'OrganizeFit',
      material: 'Steel',
      description: 'All-in-one storage solution for plates, dumbbells, and kettlebells',
      features: ['Multi-Function', 'Plate & Dumbbell Storage', 'Compact Design', 'Wheel Base'],
      specifications: {
        capacity: '800lb',
        functions: 'Plate & Dumbbell',
        design: 'Multi-Tier',
        base: 'Wheeled',
        dimensions: '30" x 24" x 54"'
      },
      capacities: ['800lb total'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: '10 Years'
    },
    {
      id: 11,
      name: 'Heavy Duty Plate Cart',
      price: '$249.99',
      originalPrice: '$299.99',
      image: '/plate-cart.jpg',
      rating: 4.9,
      reviews: 23,
      category: 'Plate Storage',
      brand: 'RackMaster',
      material: 'Steel',
      description: 'Mobile plate cart with locking wheels for commercial gym use',
      features: ['Mobile Cart', 'Locking Wheels', '1500lb Capacity', 'Commercial Grade'],
      specifications: {
        capacity: '1500lb',
        wheels: '4 Locking',
        design: 'Cart',
        finish: 'Industrial Black',
        dimensions: '36" x 24" x 42"'
      },
      capacities: ['1500lb total'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 12,
      name: 'Compact Kettlebell Rack',
      price: '$99.99',
      originalPrice: '$129.99',
      image: '/compact-kettlebell-rack.jpg',
      rating: 4.4,
      reviews: 89,
      category: 'Kettlebell Storage',
      brand: 'HomeGym',
      material: 'Steel',
      description: 'Space-saving kettlebell rack perfect for home gym corner placement',
      features: ['Corner Design', 'Space Saving', 'Holds 6 Kettlebells', 'Easy Assembly'],
      specifications: {
        capacity: '300lb',
        kettlebells: '6',
        design: 'Corner',
        finish: 'Black Paint',
        dimensions: '24" x 24" x 28"'
      },
      capacities: ['6 kettlebells'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      warranty: '2 Years'
    }
  ];

  const storageTypes = [
    {
      name: 'Plate Storage',
      image: '/plate-storage-cat.jpg',
      description: 'Trees, racks & carts',
      count: 18,
      icon: '⚖️',
      slug: 'plate-storage'
    },
    {
      name: 'Dumbbell Racks',
      image: '/dumbbell-racks-cat.jpg',
      description: 'Tiered & compact',
      count: 12,
      icon: '💪'
    },
    {
      name: 'Barbell Storage',
      image: '/barbell-storage-cat.jpg',
      description: 'Walls & vertical',
      count: 8,
      icon: '🏋️'
    },
    {
      name: 'Kettlebell Trees',
      image: '/kettlebell-trees-cat.jpg',
      description: 'Tiered & compact',
      count: 6,
      icon: '🏺'
    },
    {
      name: 'Multi-Function',
      image: '/multi-storage-cat.jpg',
      description: 'All-in-one solutions',
      count: 5,
      icon: '🔄'
    },
    {
      name: 'Wall Mounted',
      image: '/wall-storage-cat.jpg',
      description: 'Space saving',
      count: 9,
      icon: '📐'
    }
  ];

  const filters = {
    type: ['Plate Storage', 'Dumbbell Storage', 'Barbell Storage', 'Kettlebell Storage', 'Multi-Storage'],
    material: ['Steel', 'Powder Coated', 'Epoxy Coated', 'Commercial Grade'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $300',
      'Above $300'
    ],
    brand: ['RackMaster', 'OrganizeFit', 'SpaceSaver', 'HomeGym', 'QuickFit'],
    capacity: ['Under 200lb', '200-500lb', '500-1000lb', '1000lb+', 'Commercial Grade']
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
      <section className="bg-gradient-to-r from-purple-800 to-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-purple-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/free-weights" className="hover:text-white transition-colors">Free Weights</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Storage</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Storage Solutions
              </h1>
              <p className="text-xl text-purple-100 max-w-2xl">
                Organize and protect your free weights with our premium storage solutions. 
                From plate trees to dumbbell racks, keep your gym tidy and efficient.
              </p>
            </div>
            <div className="hidden lg:block">
              <Package className="w-24 h-24 text-purple-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <Package className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">50+</span>
              </div>
              <p className="text-sm text-gray-600">Storage Solutions</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Lifetime</span>
              </div>
              <p className="text-sm text-gray-600">Warranty Available</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Truck className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Free</span>
              </div>
              <p className="text-sm text-gray-600">Shipping Over $150</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Layers className="w-5 h-5 text-indigo-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">1500lb</span>
              </div>
              <p className="text-sm text-gray-600">Max Capacity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Storage Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {storageTypes.map((category, index) => (
              <Link
                key={index}
                href={`/gym-equipment/storage/${category.slug}`}
                className="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-purple-200 group-hover:to-indigo-300 transition-all duration-200">
                  <div className="text-xl">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                  {category.count} items
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
                Storage Collection
              </h2>
              <p className="text-gray-600">
                {storageProducts.length} premium storage solutions to organize your free weights and maximize your space
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
                <option value="capacity">Weight Capacity</option>
                <option value="size">Storage Size</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Storage
                </h3>

                {/* Storage Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Storage Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Material & Finish</h4>
                  <div className="space-y-2">
                    {filters.material.map((material) => (
                      <label key={material} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.material.includes(material)}
                          onChange={() => toggleFilter('material', material)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Capacity Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Weight Capacity</h4>
                  <div className="space-y-2">
                    {filters.capacity.map((capacity) => (
                      <label key={capacity} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.capacity.includes(capacity)}
                          onChange={() => toggleFilter('capacity', capacity)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{capacity}</span>
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
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ type: [], material: [], priceRange: [], brand: [], capacity: [] })}
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
                  {storageProducts.map((product) => (
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
                          <span className="absolute top-3 left-3 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        {product.warranty === 'Lifetime' && (
                          <span className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Shield className="w-3 h-3 mr-1" />
                            Lifetime
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="absolute top-12 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Out of Stock
                          </span>
                        )}
                        <div className="text-5xl">
                          {product.category === 'Plate Storage' ? '⚖️' :
                           product.category === 'Dumbbell Storage' ? '💪' :
                           product.category === 'Barbell Storage' ? '🏋️' :
                           product.category === 'Kettlebell Storage' ? '🏺' : '🔄'}
                        </div>
                        <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Specifications */}
                        <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                          <div className="text-gray-500">
                            <strong>Capacity:</strong> {product.specifications.capacity}
                          </div>
                          <div className="text-gray-500">
                            <strong>Material:</strong> {product.material}
                          </div>
                          <div className="text-gray-500">
                            <strong>Finish:</strong> {product.specifications.finish}
                          </div>
                          <div className="text-gray-500">
                            <strong>Brand:</strong> {product.brand}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.slice(0, 2).map((feature, index) => (
                              <span key={index} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
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
                                ? 'bg-purple-600 text-white hover:bg-purple-700' 
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
                  {storageProducts.map((product) => (
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
                          <span className="absolute top-3 left-3 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Plate Storage' ? '⚖️' :
                           product.category === 'Dumbbell Storage' ? '💪' :
                           product.category === 'Barbell Storage' ? '🏋️' :
                           product.category === 'Kettlebell Storage' ? '🏺' : '🔄'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              {product.warranty === 'Lifetime' && (
                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full flex items-center">
                                  <Shield className="w-3 h-3 mr-1" />
                                  Lifetime Warranty
                                </span>
                              )}
                              {!product.inStock && (
                                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                  Out of Stock
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Specifications */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="font-medium text-gray-500 text-sm mb-1">Key Specifications</div>
                                <div className="text-sm text-gray-600 space-y-1">
                                  <div>Capacity: {product.specifications.capacity}</div>
                                  <div>Dimensions: {product.specifications.dimensions}</div>
                                  <div>Finish: {product.specifications.finish}</div>
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-gray-500 text-sm mb-1">Additional Info</div>
                                <div className="text-sm text-gray-600">
                                  Material: {product.material} • Brand: {product.brand}
                                  {product.specifications.assembly && ` • Assembly: ${product.specifications.assembly}`}
                                  {product.specifications.base && ` • Base: ${product.specifications.base}`}
                                </div>
                              </div>
                            </div>

                            {/* Features */}
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-2">
                                {product.features.map((feature, index) => (
                                  <span key={index} className="text-sm bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
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
                          <span className="text-sm text-gray-600">Warranty: {product.warranty}</span>
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
                                ? 'bg-purple-600 text-white hover:bg-purple-700' 
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
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Organized Training, Better Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium storage solutions designed to protect your equipment and optimize your training space
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Space Optimization</h3>
              <p className="text-gray-600 text-sm">
                Maximize your training area with compact and wall-mounted storage solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Equipment Protection</h3>
              <p className="text-gray-600 text-sm">
                Prevent damage to your weights and extend their lifespan with proper storage
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Access</h3>
              <p className="text-gray-600 text-sm">
                Quick and easy weight selection with organized, tiered storage designs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">
                Free shipping on orders over $150 with easy-to-assemble packaging
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}