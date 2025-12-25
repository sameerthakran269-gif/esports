// app/gym-equipment/accessories/yoga-mats/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Package, Truck, Shield, Clock } from 'lucide-react';

export default function YogaMatsPage() {
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid');
    const [selectedFilters, setSelectedFilters] = useState({
        type: [],
        thickness: [],
        material: [],
        priceRange: [],
        brand: [],
        features: []
    });

    const yogaProducts = [
        {
            id: 1,
            name: 'Premium Pro Yoga Mat',
            price: '$89.99',
            originalPrice: '$119.99',
            image: '/yoga-mat-pro.jpg',
            rating: 4.8,
            reviews: 324,
            category: 'Yoga Mats',
            brand: 'FlexGear',
            description: 'Professional-grade non-slip yoga mat with superior cushioning',
            features: ['Non-slip Surface', 'Eco-friendly TPE', '6mm Thickness', 'Alignment Lines'],
            specifications: {
                material: 'TPE Eco-friendly',
                thickness: '6mm',
                size: '72x24 inches',
                weight: '4.5lb',
                density: 'High'
            },
            includes: ['Yoga Mat', 'Carry Strap', 'Cleaning Cloth'],
            isNew: true,
            isBestseller: true,
            inStock: true,
            type: 'Standard',
            thickness: '6mm',
            material: 'TPE'
        },
        {
            id: 2,
            name: 'Travel Yoga Mat',
            price: '$49.99',
            originalPrice: '$69.99',
            image: '/travel-yoga-mat.jpg',
            rating: 4.5,
            reviews: 156,
            category: 'Yoga Mats',
            brand: 'YogaGo',
            description: 'Ultra-lightweight mat perfect for yoga on the go',
            features: ['Lightweight', 'Foldable', 'Quick Dry', 'Carry Bag'],
            specifications: {
                material: 'Natural Rubber',
                thickness: '3mm',
                size: '68x24 inches',
                weight: '2.2lb',
                density: 'Medium'
            },
            includes: ['Yoga Mat', 'Carry Bag'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            type: 'Travel',
            thickness: '3mm',
            material: 'Natural Rubber'
        },
        {
            id: 3,
            name: 'Extra Thick Meditation Mat',
            price: '$79.99',
            originalPrice: '$99.99',
            image: '/meditation-mat.jpg',
            rating: 4.6,
            reviews: 98,
            category: 'Yoga Mats',
            brand: 'ZenSpace',
            description: 'Extra thick mat for comfortable meditation and restorative yoga',
            features: ['Extra Cushion', 'Meditation Mark', 'Eco-friendly', 'Non-slip Base'],
            specifications: {
                material: 'Natural Cork',
                thickness: '10mm',
                size: '70x26 inches',
                weight: '6.8lb',
                density: 'High'
            },
            includes: ['Meditation Mat', 'Zafu Cushion'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            type: 'Meditation',
            thickness: '10mm',
            material: 'Cork'
        },
        {
            id: 4,
            name: 'Eco-Friendly Yoga Mat',
            price: '$59.99',
            originalPrice: '$79.99',
            image: '/eco-yoga-mat.jpg',
            rating: 4.7,
            reviews: 203,
            category: 'Yoga Mats',
            brand: 'EarthYoga',
            description: 'Sustainable yoga mat made from natural tree rubber',
            features: ['100% Natural Rubber', 'Biodegradable', 'Non-slip', 'Eco-friendly'],
            specifications: {
                material: 'Natural Rubber',
                thickness: '5mm',
                size: '71x24 inches',
                weight: '5.1lb',
                density: 'Medium'
            },
            includes: ['Yoga Mat', 'Organic Cotton Bag'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            type: 'Standard',
            thickness: '5mm',
            material: 'Natural Rubber'
        },
        {
            id: 5,
            name: 'Hot Yoga Mat',
            price: '$69.99',
            originalPrice: '$89.99',
            image: '/hot-yoga-mat.jpg',
            rating: 4.9,
            reviews: 278,
            category: 'Yoga Mats',
            brand: 'SweatProof',
            description: 'Specialty mat designed for hot yoga with maximum grip',
            features: ['Super Grip', 'Sweat Resistant', 'Quick Dry', 'Antimicrobial'],
            specifications: {
                material: 'PER Polymer',
                thickness: '4mm',
                size: '72x24 inches',
                weight: '3.8lb',
                density: 'High'
            },
            includes: ['Yoga Mat', 'Towel', 'Carry Strap'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            type: 'Hot Yoga',
            thickness: '4mm',
            material: 'PER'
        },
        {
            id: 6,
            name: 'Yoga Mat Set Pro',
            price: '$129.99',
            originalPrice: '$159.99',
            image: '/yoga-set-pro.jpg',
            rating: 4.7,
            reviews: 189,
            category: 'Yoga Sets',
            brand: 'FlexGear',
            description: 'Complete yoga kit with mat, blocks, strap, and roller',
            features: ['Complete Set', 'Non-slip Mat', 'Eco-friendly', 'Carry Bag'],
            specifications: {
                material: 'TPE Composite',
                thickness: '6mm',
                size: '72x24 inches',
                weight: '8.5lb',
                density: 'High'
            },
            includes: ['Yoga Mat', '2 Blocks', 'Strap', 'Foam Roller', 'Carry Bag'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            type: 'Set',
            thickness: '6mm',
            material: 'TPE'
        },
        {
            id: 7,
            name: 'Kids Yoga Mat',
            price: '$34.99',
            originalPrice: '$44.99',
            image: '/kids-yoga-mat.jpg',
            rating: 4.8,
            reviews: 134,
            category: 'Yoga Mats',
            brand: 'YogaKids',
            description: 'Fun, colorful yoga mat designed specifically for children',
            features: ['Kid Size', 'Fun Designs', 'Easy Clean', 'Lightweight'],
            specifications: {
                material: 'PVC-Free',
                thickness: '4mm',
                size: '60x20 inches',
                weight: '2.5lb',
                density: 'Medium'
            },
            includes: ['Kids Yoga Mat', 'Activity Guide'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            type: 'Kids',
            thickness: '4mm',
            material: 'PVC-Free'
        },
        {
            id: 8,
            name: 'Luxury Yoga Mat',
            price: '$149.99',
            originalPrice: '$189.99',
            image: '/luxury-yoga-mat.jpg',
            rating: 4.9,
            reviews: 89,
            category: 'Yoga Mats',
            brand: 'PranaElite',
            description: 'Premium yoga mat with leather accents and gold detailing',
            features: ['Luxury Finish', 'Superior Cushion', 'Leather Details', 'Gold Stitching'],
            specifications: {
                material: 'Leather & Rubber',
                thickness: '7mm',
                size: '74x26 inches',
                weight: '7.2lb',
                density: 'High'
            },
            includes: ['Yoga Mat', 'Leather Strap', 'Cleaning Kit'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            type: 'Luxury',
            thickness: '7mm',
            material: 'Leather/Rubber'
        },
        {
            id: 9,
            name: 'Yoga Mat Towel',
            price: '$29.99',
            originalPrice: '$39.99',
            image: '/yoga-mat-towel.jpg',
            rating: 4.4,
            reviews: 267,
            category: 'Yoga Accessories',
            brand: 'SweatProof',
            description: 'Absorbent towel that grips to your mat for hot yoga',
            features: ['Microfiber', 'Non-slip Back', 'Quick Dry', 'Machine Washable'],
            specifications: {
                material: 'Microfiber',
                size: '72x24 inches',
                weight: '1.2lb',
                care: 'Machine Washable'
            },
            includes: ['Yoga Towel'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            type: 'Accessory',
            thickness: 'N/A',
            material: 'Microfiber'
        },
        {
            id: 10,
            name: 'Yoga Block Set (2)',
            price: '$24.99',
            originalPrice: '$34.99',
            image: '/yoga-blocks.jpg',
            rating: 4.6,
            reviews: 312,
            category: 'Yoga Accessories',
            brand: 'FlexGear',
            description: 'High-density foam blocks for alignment and support',
            features: ['High Density', 'Lightweight', 'Non-slip', 'Multiple Colors'],
            specifications: {
                material: 'EVA Foam',
                size: '9x6x4 inches',
                weight: '0.8lb each',
                density: 'High'
            },
            includes: ['2 Yoga Blocks'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            type: 'Accessory',
            thickness: 'N/A',
            material: 'EVA Foam'
        },
        {
            id: 11,
            name: 'Yoga Strap Pro',
            price: '$19.99',
            originalPrice: '$29.99',
            image: '/yoga-strap.jpg',
            rating: 4.5,
            reviews: 189,
            category: 'Yoga Accessories',
            brand: 'YogaGo',
            description: 'Durable cotton strap with metal buckle for deep stretches',
            features: ['Cotton Webbing', 'Metal Buckle', 'Multiple Lengths', 'Durable'],
            specifications: {
                material: 'Cotton',
                length: '8 feet',
                buckle: 'Metal D-ring',
                care: 'Machine Washable'
            },
            includes: ['Yoga Strap'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            type: 'Accessory',
            thickness: 'N/A',
            material: 'Cotton'
        },
        {
            id: 12,
            name: 'Bolster Pillow',
            price: '$49.99',
            originalPrice: '$69.99',
            image: '/yoga-bolster.jpg',
            rating: 4.7,
            reviews: 156,
            category: 'Yoga Accessories',
            brand: 'ZenSpace',
            description: 'Firm bolster for restorative yoga and meditation',
            features: ['Firm Support', 'Cotton Cover', 'Removable Cover', 'Multiple Colors'],
            specifications: {
                material: 'Cotton & Foam',
                size: '28x12 inches',
                weight: '4.5lb',
                filling: 'High-density Foam'
            },
            includes: ['Bolster', 'Removable Cover'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            type: 'Accessory',
            thickness: 'N/A',
            material: 'Cotton'
        }
    ];

    const yogaCategories = [
        {
            name: 'All Yoga Mats',
            image: '/all-yoga-mats.jpg',
            description: 'Complete collection',
            count: 8,
            icon: '🧘‍♀️',
            slug: 'all-mats'
        },
        {
            name: 'Travel Mats',
            image: '/travel-mats.jpg',
            description: 'Light & portable',
            count: 3,
            icon: '✈️',
            slug: 'travel-mats'
        },
        {
            name: 'Hot Yoga',
            image: '/hot-yoga.jpg',
            description: 'Sweat-resistant',
            count: 2,
            icon: '🔥',
            slug: 'hot-yoga'
        },
        {
            name: 'Eco-Friendly',
            image: '/eco-mats.jpg',
            description: 'Sustainable materials',
            count: 4,
            icon: '🌱',
            slug: 'eco-friendly'
        },
        {
            name: 'Yoga Sets',
            image: '/yoga-sets.jpg',
            description: 'Complete kits',
            count: 3,
            icon: '🎁',
            slug: 'yoga-sets'
        },
        {
            name: 'Accessories',
            image: '/yoga-accessories.jpg',
            description: 'Blocks & straps',
            count: 5,
            icon: '🧱',
            slug: 'accessories'
        },
        {
            name: 'Luxury Mats',
            image: '/luxury-mats.jpg',
            description: 'Premium collection',
            count: 2,
            icon: '⭐',
            slug: 'luxury-mats'
        },
        {
            name: 'Kids Yoga',
            image: '/kids-yoga.jpg',
            description: 'For young yogis',
            count: 2,
            icon: '👶',
            slug: 'kids-yoga'
        }
    ];

    const filters = {
        type: ['Standard', 'Travel', 'Hot Yoga', 'Meditation', 'Luxury', 'Kids', 'Set', 'Accessory'],
        thickness: ['3mm', '4mm', '5mm', '6mm', '7mm', '8mm+', '10mm'],
        material: ['TPE', 'Natural Rubber', 'PVC', 'Cork', 'PER', 'Cotton', 'Microfiber', 'EVA Foam', 'Leather/Rubber'],
        priceRange: [
            'Under $25',
            '$25 - $50',
            '$50 - $75',
            '$75 - $100',
            '$100 - $150',
            'Above $150'
        ],
        brand: ['FlexGear', 'YogaGo', 'ZenSpace', 'EarthYoga', 'SweatProof', 'YogaKids', 'PranaElite'],
        features: ['Non-slip', 'Eco-friendly', 'Lightweight', 'Extra Thick', 'Alignment Lines', 'Carry Bag', 'Machine Washable', 'Antimicrobial']
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
            <section className="bg-gradient-to-r from-green-800 to-teal-700 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <nav className="flex items-center space-x-2 text-sm text-teal-200 mb-4">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <ChevronLeft className="w-4 h-4 rotate-180" />
                                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                                <ChevronLeft className="w-4 h-4 rotate-180" />
                                <Link href="/gym-equipment/accessories" className="hover:text-white transition-colors">Accessories</Link>
                                <ChevronLeft className="w-4 h-4 rotate-180" />
                                <span className="text-white font-medium">Yoga & Mats</span>
                            </nav>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Yoga Mats & Accessories
                            </h1>
                            <p className="text-xl text-teal-100 max-w-2xl">
                                Find your perfect foundation for practice. From travel mats to premium sets, 
                                discover mats that support your journey.
                            </p>
                        </div>
                        <div className="hidden lg:block">
                            <div className="text-6xl">🧘‍♀️</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-6 bg-gradient-to-r from-green-50 to-teal-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="flex items-center justify-center">
                                <Package className="w-5 h-5 text-green-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">50+</span>
                            </div>
                            <p className="text-sm text-gray-600">Yoga Products</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Truck className="w-5 h-5 text-teal-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">Free</span>
                            </div>
                            <p className="text-sm text-gray-600">Shipping Over $75</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Shield className="w-5 h-5 text-green-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">2 Year</span>
                            </div>
                            <p className="text-sm text-gray-600">Warranty</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">Eco</span>
                            </div>
                            <p className="text-sm text-gray-600">Friendly Options</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Navigation */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Yoga Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {yogaCategories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/gym-equipment/accessories/yoga-mats/${category.slug}`}
                                className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
                            >
                                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-green-200 group-hover:to-teal-300 transition-all duration-200">
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
                                Yoga Mats Collection
                            </h2>
                            <p className="text-gray-600">
                                {yogaProducts.length} premium yoga mats and accessories for every practice
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
                                <option value="thickness">Thickness</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filters Sidebar */}
                        <div className="lg:w-72 flex-shrink-0">
                            <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <Filter className="w-5 h-5 mr-2" />
                                    Filter Mats
                                </h3>

                                {/* Type Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-3">Mat Type</h4>
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

                                {/* Thickness Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-3">Thickness</h4>
                                    <div className="space-y-2">
                                        {filters.thickness.map((thickness) => (
                                            <label key={thickness} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFilters.thickness.includes(thickness)}
                                                    onChange={() => toggleFilter('thickness', thickness)}
                                                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{thickness}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Material Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-3">Material</h4>
                                    <div className="space-y-2">
                                        {filters.material.map((material) => (
                                            <label key={material} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFilters.material.includes(material)}
                                                    onChange={() => toggleFilter('material', material)}
                                                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{material}</span>
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

                                {/* Clear Filters */}
                                <button
                                    onClick={() => setSelectedFilters({ type: [], thickness: [], material: [], priceRange: [], brand: [], features: [] })}
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
                                    {yogaProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                                        >
                                            <div className="relative h-64 bg-gradient-to-br from-green-50 to-teal-100 flex items-center justify-center">
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
                                                <div className="text-5xl">
                                                    {product.type === 'Travel' ? '✈️' :
                                                     product.type === 'Hot Yoga' ? '🔥' :
                                                     product.type === 'Meditation' ? '🧘‍♂️' :
                                                     product.type === 'Luxury' ? '⭐' :
                                                     product.type === 'Kids' ? '👶' :
                                                     product.type === 'Set' ? '🎁' :
                                                     product.type === 'Accessory' ? '🧱' : '🧘‍♀️'}
                                                </div>
                                                <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    <Heart className="w-5 h-5 text-gray-600" />
                                                </button>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                                                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                                        {product.type}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-3">{product.description}</p>

                                                {/* Material & Thickness */}
                                                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                                                    <span><strong>Material:</strong> {product.material}</span>
                                                    <span><strong>Thickness:</strong> {product.thickness}</span>
                                                </div>

                                                {/* Includes */}
                                                {product.includes && (
                                                    <div className="mb-3">
                                                        <div className="text-xs text-gray-500 mb-1">Includes:</div>
                                                        <div className="flex flex-wrap gap-1">
                                                            {product.includes.slice(0, 3).map((item, index) => (
                                                                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                                    {item}
                                                                </span>
                                                            ))}
                                                            {product.includes.length > 3 && (
                                                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                                    +{product.includes.length - 3} more
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Features */}
                                                <div className="mb-3">
                                                    <div className="flex flex-wrap gap-1">
                                                        {product.features?.slice(0, 2).map((feature, index) => (
                                                            <span key={index} className="text-xs bg-teal-50 text-teal-600 px-2 py-1 rounded">
                                                                {feature}
                                                            </span>
                                                        ))}
                                                        {product.features?.length > 2 && (
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
                                                        className={`px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-semibold ${product.inStock
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
                                    {yogaProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                                        >
                                            <div className="w-48 relative bg-gradient-to-br from-green-50 to-teal-100 flex items-center justify-center">
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
                                                    {product.type === 'Travel' ? '✈️' :
                                                     product.type === 'Hot Yoga' ? '🔥' :
                                                     product.type === 'Meditation' ? '🧘‍♂️' :
                                                     product.type === 'Luxury' ? '⭐' :
                                                     product.type === 'Kids' ? '👶' :
                                                     product.type === 'Set' ? '🎁' :
                                                     product.type === 'Accessory' ? '🧱' : '🧘‍♀️'}
                                                </div>
                                            </div>
                                            <div className="flex-1 p-6">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                                                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                                                {product.type}
                                                            </span>
                                                            {product.isNew && (
                                                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                                                    New
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-gray-600 mb-3">{product.description}</p>

                                                        {/* Material & Specifications */}
                                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                                            <div>
                                                                <div className="font-medium text-gray-500 text-sm mb-1">Details</div>
                                                                <div className="text-sm text-gray-600 space-y-1">
                                                                    <div><strong>Material:</strong> {product.material}</div>
                                                                    <div><strong>Thickness:</strong> {product.thickness}</div>
                                                                    <div><strong>Brand:</strong> {product.brand}</div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                {product.includes && (
                                                                    <>
                                                                        <div className="font-medium text-gray-500 text-sm mb-1">Includes</div>
                                                                        <div className="flex flex-wrap gap-1">
                                                                            {product.includes.slice(0, 4).map((item, index) => (
                                                                                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                                                    {item}
                                                                                </span>
                                                                            ))}
                                                                            {product.includes.length > 4 && (
                                                                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                                                    +{product.includes.length - 4} more
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                    </>
                                                                )}
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
                                                        className={`px-6 py-3 rounded-lg transition-colors duration-200 font-semibold ${product.inStock
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
            <section className="py-16 bg-gradient-to-r from-green-50 to-teal-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why Choose Our Yoga Mats?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Designed for comfort, durability, and sustainability to support your practice at every level
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Package className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Materials</h3>
                            <p className="text-gray-600 text-sm">
                                Eco-friendly TPE, natural rubber, and sustainable materials
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="w-8 h-8 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Non-Slip Grip</h3>
                            <p className="text-gray-600 text-sm">
                                Superior traction for all yoga styles, including hot yoga
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">2-Year Warranty</h3>
                            <p className="text-gray-600 text-sm">
                                All mats backed by our comprehensive warranty
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Perfect Thickness</h3>
                            <p className="text-gray-600 text-sm">
                                Various thickness options for comfort and stability
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}