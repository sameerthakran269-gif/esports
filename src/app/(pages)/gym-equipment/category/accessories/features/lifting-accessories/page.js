// app/gym-equipment/accessories/lifting-accessories/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Package, Truck, Shield, Clock } from 'lucide-react';

export default function LiftingAccessoriesPage() {
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid');
    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
        material: [],
        weightCapacity: [],
        priceRange: [],
        brand: [],
        features: []
    });

    const liftingProducts = [
        {
            id: 1,
            name: 'Lifting Straps Pro',
            price: '$24.99',
            originalPrice: '$34.99',
            image: '/lifting-straps-pro.jpg',
            rating: 4.8,
            reviews: 456,
            category: 'Straps',
            brand: 'IronGrip',
            description: 'Professional lifting straps with cotton webbing and quick-release design',
            features: ['Cotton Webbing', 'Quick Release', 'Durable Stitching', 'Wrist Support'],
            specifications: {
                material: 'Cotton & Velcro',
                length: '20 inches',
                width: '2 inches',
                capacity: '1000lb+',
                closure: 'Velcro'
            },
            includes: ['Pair of Straps', 'Care Guide'],
            isNew: true,
            isBestseller: true,
            inStock: true,
            material: 'Cotton',
            capacity: '1000lb+'
        },
        {
            id: 2,
            name: 'Weight Plate Clamps (4 Pack)',
            price: '$19.99',
            originalPrice: '$29.99',
            image: '/weight-clamps-pro.jpg',
            rating: 4.6,
            reviews: 289,
            category: 'Clamps & Collars',
            brand: 'SecureLift',
            description: 'Spring-loaded weight plate clamps for Olympic bars',
            features: ['Spring Loaded', 'Easy Grip', 'Durable Spring', '2-inch Fit'],
            specifications: {
                type: 'Spring Loaded',
                fit: '2-inch Olympic',
                material: 'Steel Spring',
                finish: 'Chrome Plated',
                capacity: '500lb+'
            },
            includes: ['4 Weight Clamps'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            material: 'Steel',
            capacity: '500lb+'
        },
        {
            id: 3,
            name: 'Lifting Chalk & Bag Set',
            price: '$18.99',
            originalPrice: '$24.99',
            image: '/chalk-set-pro.jpg',
            rating: 4.7,
            reviews: 378,
            category: 'Chalk & Grip',
            brand: 'ChalkMaster',
            description: 'Premium magnesium carbonate chalk with mesh chalk bag',
            features: ['Premium Chalk', 'Mesh Bag', 'Drawstring', 'No Mess'],
            specifications: {
                material: 'Magnesium Carbonate',
                weight: '8oz',
                bag: 'Mesh',
                closure: 'Drawstring'
            },
            includes: ['8oz Chalk', 'Chalk Bag'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            material: 'Magnesium',
            capacity: 'N/A'
        },
        {
            id: 4,
            name: 'Lifting Hooks Pro',
            price: '$27.99',
            originalPrice: '$37.99',
            image: '/lifting-hooks-pro.jpg',
            rating: 4.5,
            reviews: 234,
            category: 'Hooks',
            brand: 'HookGrip',
            description: 'Steel hook straps for deadlifts and heavy pulling movements',
            features: ['Steel Hooks', 'Cotton Straps', 'Quick Attach', 'Heavy Duty'],
            specifications: {
                material: 'Cotton & Steel',
                hook: 'Carbon Steel',
                length: '20 inches',
                capacity: '800lb+'
            },
            includes: ['Pair of Hook Straps'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            material: 'Steel/Cotton',
            capacity: '800lb+'
        },
        {
            id: 5,
            name: 'Barbell Pad',
            price: '$22.99',
            originalPrice: '$32.99',
            image: '/barbell-pad.jpg',
            rating: 4.4,
            reviews: 167,
            category: 'Pads & Covers',
            brand: 'ComfortLift',
            description: 'Padded barbell sleeve for hip thrusts and squats',
            features: ['High Density Foam', 'Velcro Closure', 'Washable Cover', 'Universal Fit'],
            specifications: {
                material: 'Foam & Neoprene',
                length: '16 inches',
                padding: '2-inch Thick',
                fit: 'Universal'
            },
            includes: ['Barbell Pad'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            material: 'Foam/Neoprene',
            capacity: 'N/A'
        },
        {
            id: 6,
            name: 'Microplates Set (0.5-2.5kg)',
            price: '$89.99',
            originalPrice: '$119.99',
            image: '/microplates-set.jpg',
            rating: 4.8,
            reviews: 198,
            category: 'Plates',
            brand: 'PrecisionLift',
            description: 'Small weight plates for progressive overload and precise increments',
            features: ['Calibrated Weights', '2-inch Hole', 'Rubber Coated', 'Carry Case'],
            specifications: {
                material: 'Steel & Rubber',
                weights: '0.5, 1, 1.5, 2, 2.5kg',
                hole: '2-inch Olympic',
                finish: 'Rubber Coated'
            },
            includes: ['5 Pairs of Microplates', 'Carry Case'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            material: 'Steel/Rubber',
            capacity: 'N/A'
        },
        {
            id: 7,
            name: 'Lifting Belt (10mm)',
            price: '$79.99',
            originalPrice: '$99.99',
            image: '/lifting-belt-pro.jpg',
            rating: 4.9,
            reviews: 312,
            category: 'Belts',
            brand: 'PowerLift',
            description: '10mm powerlifting belt with lever buckle for maximum support',
            features: ['10mm Thick', 'Lever Buckle', 'Single Prong', 'Back Support'],
            specifications: {
                material: 'Genuine Leather',
                thickness: '10mm',
                buckle: 'Lever',
                width: '4 inches',
                sizes: 'S-XXL'
            },
            includes: ['Lifting Belt'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            material: 'Leather',
            capacity: 'Heavy Duty'
        },
        {
            id: 8,
            name: 'Wrist Wraps (Rigid)',
            price: '$21.99',
            originalPrice: '$31.99',
            image: '/wrist-wraps-pro.jpg',
            rating: 4.7,
            reviews: 276,
            category: 'Wraps',
            brand: 'WristStrong',
            description: 'Rigid wrist wraps for heavy pressing and bench support',
            features: ['Rigid Support', 'Thumb Loop', '18-inch Length', 'Hook & Loop'],
            specifications: {
                material: 'Cotton/Spandex',
                length: '18 inches',
                closure: 'Hook & Loop',
                support: 'Rigid'
            },
            includes: ['Pair of Wrist Wraps'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            material: 'Cotton/Spandex',
            capacity: 'N/A'
        },
        {
            id: 9,
            name: 'Barbell Collars (Locking)',
            price: '$34.99',
            originalPrice: '$44.99',
            image: '/locking-collars.jpg',
            rating: 4.6,
            reviews: 189,
            category: 'Clamps & Collars',
            brand: 'LockTight',
            description: 'Locking barbell collars with quick-release mechanism',
            features: ['Quick Release', 'Locking Mechanism', 'Steel Construction', 'Easy Grip'],
            specifications: {
                material: 'Steel & Plastic',
                fit: '2-inch Olympic',
                mechanism: 'Locking',
                weight: '1.2lb each'
            },
            includes: ['2 Locking Collars'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            material: 'Steel/Plastic',
            capacity: '600lb+'
        },
        {
            id: 10,
            name: 'Liquid Chalk (4oz)',
            price: '$14.99',
            originalPrice: '$19.99',
            image: '/liquid-chalk.jpg',
            rating: 4.5,
            reviews: 423,
            category: 'Chalk & Grip',
            brand: 'GripMax',
            description: 'Liquid chalk for superior grip without the mess of traditional chalk',
            features: ['No Mess', 'Long Lasting', 'Quick Dry', 'Superior Grip'],
            specifications: {
                material: 'Magnesium Carbonate',
                weight: '4oz',
                drying: '30 Seconds',
                coverage: '50+ Applications'
            },
            includes: ['4oz Liquid Chalk'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            material: 'Magnesium',
            capacity: 'N/A'
        },
        {
            id: 11,
            name: 'Knee Sleeves (7mm)',
            price: '$49.99',
            originalPrice: '$64.99',
            image: '/knee-sleeves-pro.jpg',
            rating: 4.8,
            reviews: 334,
            category: 'Sleeves',
            brand: 'KneeGuard',
            description: '7mm neoprene knee sleeves for support and warmth during squats',
            features: ['7mm Neoprene', 'Compression Fit', 'Non-slip', 'Breathable'],
            specifications: {
                material: '7mm Neoprene',
                sizes: 'S-XXL',
                length: '12 inches',
                support: 'Compression'
            },
            includes: ['Pair of Knee Sleeves'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            material: 'Neoprene',
            capacity: 'N/A'
        },
        {
            id: 12,
            name: 'Lifting Gloves (Gel)',
            price: '$29.99',
            originalPrice: '$39.99',
            image: '/lifting-gloves-pro.jpg',
            rating: 4.6,
            reviews: 287,
            category: 'Gloves',
            brand: 'GripMaster',
            description: 'Gel-padded lifting gloves with wrist support',
            features: ['Gel Padding', 'Wrist Support', 'Breathable Mesh', 'Hook & Loop'],
            specifications: {
                material: 'Neoprene & Leather',
                padding: 'Gel Palm',
                closure: 'Hook & Loop',
                sizes: 'XS-XXL'
            },
            includes: ['Pair of Gloves'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            material: 'Leather/Neoprene',
            capacity: 'N/A'
        },
        {
            id: 13,
            name: 'Barbell Brush & Cleaner',
            price: '$16.99',
            originalPrice: '$24.99',
            image: '/barbell-cleaner.jpg',
            rating: 4.4,
            reviews: 156,
            category: 'Maintenance',
            brand: 'BarCare',
            description: 'Barbell cleaning brush with stiff bristles for knurling',
            features: ['Stiff Bristles', 'Ergonomic Handle', 'Durable', 'Easy Clean'],
            specifications: {
                material: 'Nylon & Plastic',
                bristles: 'Stiff Nylon',
                handle: 'Ergonomic',
                use: 'Barbell Maintenance'
            },
            includes: ['Cleaning Brush'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            material: 'Nylon/Plastic',
            capacity: 'N/A'
        },
        {
            id: 14,
            name: 'Fractional Plates Set',
            price: '$69.99',
            originalPrice: '$89.99',
            image: '/fractional-plates.jpg',
            rating: 4.7,
            reviews: 145,
            category: 'Plates',
            brand: 'PrecisionLift',
            description: 'Small fractional plates for precise weight progression',
            features: ['Precision Weights', '2-inch Hole', 'Color Coded', 'Storage Case'],
            specifications: {
                material: 'Steel',
                weights: '0.25, 0.5, 0.75, 1kg',
                hole: '2-inch Olympic',
                finish: 'Color Coated'
            },
            includes: ['4 Pairs of Fractional Plates', 'Storage Case'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            material: 'Steel',
            capacity: 'N/A'
        },
        {
            id: 15,
            name: 'Lifting Straps (Figure 8)',
            price: '$26.99',
            originalPrice: '$36.99',
            image: '/figure8-straps.jpg',
            rating: 4.5,
            reviews: 198,
            category: 'Straps',
            brand: 'IronGrip',
            description: 'Figure 8 lifting straps for maximum grip on deadlifts',
            features: ['Figure 8 Design', 'Maximum Grip', 'Cotton Webbing', 'Durable'],
            specifications: {
                material: 'Cotton',
                design: 'Figure 8',
                length: '24 inches',
                capacity: '1000lb+'
            },
            includes: ['Pair of Figure 8 Straps'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            material: 'Cotton',
            capacity: '1000lb+'
        }
    ];

    const liftingCategories = [
        {
            name: 'Lifting Straps',
            image: '/lifting-straps-cat.jpg',
            description: 'Grip assistance',
            count: 8,
            icon: '🎗️',
            slug: 'straps'
        },
        {
            name: 'Clamps & Collars',
            image: '/clamps-collars.jpg',
            description: 'Weight security',
            count: 6,
            icon: '🔒',
            slug: 'clamps-collars'
        },
        {
            name: 'Chalk & Grip',
            image: '/chalk-grip.jpg',
            description: 'Grip enhancement',
            count: 5,
            icon: '🖐️',
            slug: 'chalk-grip'
        },
        {
            name: 'Lifting Belts',
            image: '/lifting-belts-cat.jpg',
            description: 'Back support',
            count: 4,
            icon: '🛡️',
            slug: 'belts'
        },
        {
            name: 'Wrist Wraps',
            image: '/wrist-wraps-cat.jpg',
            description: 'Wrist support',
            count: 5,
            icon: '✋',
            slug: 'wrist-wraps'
        },
        {
            name: 'Knee Sleeves',
            image: '/knee-sleeves-cat.jpg',
            description: 'Knee support',
            count: 4,
            icon: '🦵',
            slug: 'knee-sleeves'
        },
        {
            name: 'Micro Plates',
            image: '/micro-plates.jpg',
            description: 'Precision weights',
            count: 3,
            icon: '⚖️',
            slug: 'micro-plates'
        },
        {
            name: 'Maintenance',
            image: '/maintenance.jpg',
            description: 'Equipment care',
            count: 3,
            icon: '🧹',
            slug: 'maintenance'
        }
    ];

    const filters = {
        category: ['Straps', 'Clamps & Collars', 'Chalk & Grip', 'Belts', 'Wraps', 'Sleeves', 'Gloves', 'Plates', 'Pads & Covers', 'Hooks', 'Maintenance'],
        material: ['Cotton', 'Steel', 'Leather', 'Neoprene', 'Magnesium', 'Rubber', 'Plastic', 'Nylon', 'Spandex', 'Foam'],
        weightCapacity: ['Under 500lb', '500-800lb', '800-1000lb', '1000lb+', 'Heavy Duty', 'N/A'],
        priceRange: [
            'Under $15',
            '$15 - $30',
            '$30 - $50',
            '$50 - $75',
            '$75 - $100',
            'Above $100'
        ],
        brand: ['IronGrip', 'SecureLift', 'ChalkMaster', 'HookGrip', 'ComfortLift', 'PrecisionLift', 'PowerLift', 'WristStrong', 'LockTight', 'GripMax', 'KneeGuard', 'GripMaster', 'BarCare'],
        features: ['Quick Release', 'Heavy Duty', 'Grip Enhancement', 'Support', 'Adjustable', 'Washable', 'Durable', 'Professional Grade']
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
            <section className="bg-gradient-to-r from-amber-700 to-orange-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <nav className="flex items-center space-x-2 text-sm text-orange-200 mb-4">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <ChevronLeft className="w-4 h-4 rotate-180" />
                                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                                <ChevronLeft className="w-4 h-4 rotate-180" />
                                <Link href="/gym-equipment/accessories" className="hover:text-white transition-colors">Accessories</Link>
                                <ChevronLeft className="w-4 h-4 rotate-180" />
                                <span className="text-white font-medium">Lifting Accessories</span>
                            </nav>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Lifting Accessories
                            </h1>
                            <p className="text-xl text-orange-100 max-w-2xl">
                                Enhance your strength training with premium lifting accessories. From grip support to weight management, 
                                we have everything for serious lifters.
                            </p>
                        </div>
                        <div className="hidden lg:block">
                            <div className="text-6xl">🏋️‍♂️</div>
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
                                <Package className="w-5 h-5 text-amber-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">75+</span>
                            </div>
                            <p className="text-sm text-gray-600">Lifting Products</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Truck className="w-5 h-5 text-orange-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">Free</span>
                            </div>
                            <p className="text-sm text-gray-600">Shipping Over $50</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Shield className="w-5 h-5 text-amber-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">Lifetime</span>
                            </div>
                            <p className="text-sm text-gray-600">Warranty on Steel</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Clock className="w-5 h-5 text-red-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">Pro</span>
                            </div>
                            <p className="text-sm text-gray-600">Grade Quality</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Navigation */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Lifting Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {liftingCategories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/gym-equipment/accessories/lifting-accessories/${category.slug}`}
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
                                Lifting Accessories Collection
                            </h2>
                            <p className="text-gray-600">
                                {liftingProducts.length} essential lifting accessories for serious strength training
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
                                <option value="capacity">Weight Capacity</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filters Sidebar */}
                        <div className="lg:w-72 flex-shrink-0">
                            <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <Filter className="w-5 h-5 mr-2" />
                                    Filter Accessories
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
                                                    className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{category}</span>
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
                                                    className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{material}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Weight Capacity Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-3">Weight Capacity</h4>
                                    <div className="space-y-2">
                                        {filters.weightCapacity.map((capacity) => (
                                            <label key={capacity} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFilters.weightCapacity.includes(capacity)}
                                                    onChange={() => toggleFilter('weightCapacity', capacity)}
                                                    className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
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

                                {/* Clear Filters */}
                                <button
                                    onClick={() => setSelectedFilters({ category: [], material: [], weightCapacity: [], priceRange: [], brand: [], features: [] })}
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
                                    {liftingProducts.map((product) => (
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
                                                    <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        Bestseller
                                                    </span>
                                                )}
                                                <div className="text-5xl">
                                                    {product.category === 'Straps' ? '🎗️' :
                                                     product.category === 'Clamps & Collars' ? '🔒' :
                                                     product.category === 'Chalk & Grip' ? '🖐️' :
                                                     product.category === 'Belts' ? '🛡️' :
                                                     product.category === 'Wraps' ? '✋' :
                                                     product.category === 'Sleeves' ? '🦵' :
                                                     product.category === 'Gloves' ? '🧤' :
                                                     product.category === 'Plates' ? '⚖️' :
                                                     product.category === 'Pads & Covers' ? '🛏️' :
                                                     product.category === 'Hooks' ? '🪝' : '🧹'}
                                                </div>
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

                                                {/* Material & Capacity */}
                                                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                                                    <span><strong>Material:</strong> {product.material}</span>
                                                    {product.capacity !== 'N/A' && (
                                                        <span><strong>Capacity:</strong> {product.capacity}</span>
                                                    )}
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
                                                            <span key={index} className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded">
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
                                    {liftingProducts.map((product) => (
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
                                                    <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        Bestseller
                                                    </span>
                                                )}
                                                <div className="text-4xl">
                                                    {product.category === 'Straps' ? '🎗️' :
                                                     product.category === 'Clamps & Collars' ? '🔒' :
                                                     product.category === 'Chalk & Grip' ? '🖐️' :
                                                     product.category === 'Belts' ? '🛡️' :
                                                     product.category === 'Wraps' ? '✋' :
                                                     product.category === 'Sleeves' ? '🦵' :
                                                     product.category === 'Gloves' ? '🧤' :
                                                     product.category === 'Plates' ? '⚖️' :
                                                     product.category === 'Pads & Covers' ? '🛏️' :
                                                     product.category === 'Hooks' ? '🪝' : '🧹'}
                                                </div>
                                            </div>
                                            <div className="flex-1 p-6">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                                                            <span className="text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full">
                                                                {product.category}
                                                            </span>
                                                            {product.isNew && (
                                                                <span className="text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full">
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
                                                                    <div><strong>Capacity:</strong> {product.capacity}</div>
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
                                                        className={`px-6 py-3 rounded-lg transition-colors duration-200 font-semibold ${product.inStock
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
                            Built for Serious Lifters
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Professional-grade lifting accessories designed to enhance performance, safety, and training efficiency
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Package className="w-8 h-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Heavy Duty</h3>
                            <p className="text-gray-600 text-sm">
                                Built to withstand the heaviest lifts and intense training sessions
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Grip</h3>
                            <p className="text-gray-600 text-sm">
                                Superior grip technology for maximum control and lifting power
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
                            <p className="text-gray-600 text-sm">
                                Designed with safety features to protect during maximum effort lifts
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                            <p className="text-gray-600 text-sm">
                                Trusted by competitive powerlifters and strength athletes worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}