// app/gym-equipment/accessories/protective-gear/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Package, Truck, Shield, Clock } from 'lucide-react';

export default function ProtectiveGearPage() {
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid');
    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
        size: [],
        material: [],
        priceRange: [],
        brand: [],
        features: []
    });

    const protectiveProducts = [
        {
            id: 1,
            name: 'Professional Gym Gloves',
            price: '$34.99',
            originalPrice: '$44.99',
            image: '/gym-gloves-pro.jpg',
            rating: 4.7,
            reviews: 324,
            category: 'Gloves',
            brand: 'GripMaster',
            description: 'Padded gloves with wrist support and enhanced grip for heavy lifting',
            features: ['Gel Padding', 'Wrist Support', 'Breathable Mesh', 'Hook & Loop Closure'],
            specifications: {
                material: 'Neoprene & Leather',
                padding: 'Gel Palm',
                closure: 'Hook & Loop',
                sizes: 'XS-XXL',
                wrist: '12-inch Support'
            },
            includes: ['Pair of Gloves', 'Care Instructions'],
            isNew: true,
            isBestseller: true,
            inStock: true,
            size: 'Universal',
            material: 'Leather/Neoprene'
        },
        {
            id: 2,
            name: 'Weightlifting Belt (4")',
            price: '$69.99',
            originalPrice: '$89.99',
            image: '/weight-belt-pro.jpg',
            rating: 4.8,
            reviews: 278,
            category: 'Belts',
            brand: 'LiftPro',
            description: 'Professional weightlifting belt with quick-release lever buckle',
            features: ['Genuine Leather', 'Lever Buckle', '4-inch Width', 'Lower Back Support'],
            specifications: {
                material: 'Leather',
                buckle: 'Lever',
                width: '4 inches',
                sizes: 'XS-XXL',
                thickness: '13mm'
            },
            includes: ['Weightlifting Belt'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            size: 'Adjustable',
            material: 'Leather'
        },
        {
            id: 3,
            name: 'Knee Sleeves (Pair)',
            price: '$49.99',
            originalPrice: '$64.99',
            image: '/knee-sleeves.jpg',
            rating: 4.6,
            reviews: 189,
            category: 'Knee Support',
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
            isNew: true,
            isBestseller: false,
            inStock: true,
            size: 'S-XXL',
            material: 'Neoprene'
        },
        {
            id: 4,
            name: 'Lifting Straps with Wrist Wraps',
            price: '$24.99',
            originalPrice: '$34.99',
            image: '/lifting-straps-pro.jpg',
            rating: 4.7,
            reviews: 203,
            category: 'Straps & Wraps',
            brand: 'IronGrip',
            description: 'Professional lifting straps with integrated wrist support',
            features: ['Cotton Webbing', 'Wrist Support', 'Quick Release', 'Durable Stitching'],
            specifications: {
                material: 'Cotton & Velcro',
                length: '18 inches',
                width: '1.5 inches',
                closure: 'Velcro'
            },
            includes: ['Pair of Straps'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            size: 'One Size',
            material: 'Cotton'
        },
        {
            id: 5,
            name: 'Elbow Sleeves (Pair)',
            price: '$39.99',
            originalPrice: '$54.99',
            image: '/elbow-sleeves.jpg',
            rating: 4.5,
            reviews: 156,
            category: 'Elbow Support',
            brand: 'ArmorFlex',
            description: 'Compression elbow sleeves for joint support during pressing movements',
            features: ['Compression Fit', 'Joint Support', 'Breathable', 'Non-slip'],
            specifications: {
                material: '5mm Neoprene',
                sizes: 'S-XXL',
                length: '10 inches',
                support: 'Medical Grade'
            },
            includes: ['Pair of Elbow Sleeves'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            size: 'S-XXL',
            material: 'Neoprene'
        },
        {
            id: 6,
            name: 'Ankle Supports (Pair)',
            price: '$29.99',
            originalPrice: '$39.99',
            image: '/ankle-supports.jpg',
            rating: 4.4,
            reviews: 98,
            category: 'Ankle Support',
            brand: 'StableStep',
            description: 'Ankle supports for stability during leg exercises and running',
            features: ['Lace-up Design', 'Gel Padding', 'Breathable', 'Adjustable'],
            specifications: {
                material: 'Nylon & Gel',
                sizes: 'S-XL',
                closure: 'Lace-up',
                padding: 'Gel Ankle'
            },
            includes: ['Pair of Ankle Supports'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            size: 'S-XL',
            material: 'Nylon/Gel'
        },
        {
            id: 7,
            name: 'Wrist Wraps (Pair)',
            price: '$19.99',
            originalPrice: '$29.99',
            image: '/wrist-wraps.jpg',
            rating: 4.6,
            reviews: 267,
            category: 'Straps & Wraps',
            brand: 'WristStrong',
            description: 'Thumb loop wrist wraps for heavy pressing and lifting support',
            features: ['Thumb Loop', 'Stretch Material', 'Breathable', 'Machine Washable'],
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
            size: 'One Size',
            material: 'Cotton/Spandex'
        },
        {
            id: 8,
            name: 'Lifting Belt (Nylon)',
            price: '$44.99',
            originalPrice: '$59.99',
            image: '/nylon-belt.jpg',
            rating: 4.5,
            reviews: 178,
            category: 'Belts',
            brand: 'FlexLift',
            description: 'Lightweight nylon belt for Olympic lifting and dynamic movements',
            features: ['Lightweight Nylon', 'Quick Release', '4-inch Width', 'Flexible'],
            specifications: {
                material: 'Nylon',
                buckle: 'Quick Release',
                width: '4 inches',
                sizes: 'XS-XXL'
            },
            includes: ['Nylon Belt'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            size: 'Adjustable',
            material: 'Nylon'
        },
        {
            id: 9,
            name: 'Powerlifting Gloves',
            price: '$39.99',
            originalPrice: '$49.99',
            image: '/powerlifting-gloves.jpg',
            rating: 4.8,
            reviews: 223,
            category: 'Gloves',
            brand: 'PowerGrip',
            description: 'Heavy-duty gloves designed specifically for powerlifting',
            features: ['Double Stitching', 'Reinforced Palm', 'Wrist Wrap', 'Durable'],
            specifications: {
                material: 'Leather & Mesh',
                padding: 'Reinforced',
                closure: 'Wrap-around',
                sizes: 'S-XXL'
            },
            includes: ['Pair of Gloves'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            size: 'S-XXL',
            material: 'Leather'
        },
        {
            id: 10,
            name: 'Knee Wraps (Pair)',
            price: '$34.99',
            originalPrice: '$44.99',
            image: '/knee-wraps.jpg',
            rating: 4.7,
            reviews: 145,
            category: 'Knee Support',
            brand: 'SquatPro',
            description: 'Elastic knee wraps for added support during heavy squats',
            features: ['Elastic Material', 'Rebound Support', '2-meter Length', 'Durable'],
            specifications: {
                material: 'Elastic Cotton',
                length: '2 meters',
                width: '3 inches',
                support: 'Rebound'
            },
            includes: ['Pair of Knee Wraps'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            size: 'One Size',
            material: 'Elastic Cotton'
        },
        {
            id: 11,
            name: 'Lifting Hook Straps',
            price: '$27.99',
            originalPrice: '$37.99',
            image: '/hook-straps.jpg',
            rating: 4.4,
            reviews: 112,
            category: 'Straps & Wraps',
            brand: 'HookGrip',
            description: 'Hook-style straps for deadlifts and heavy pulling movements',
            features: ['Steel Hooks', 'Cotton Straps', 'Quick Attach', 'Durable'],
            specifications: {
                material: 'Cotton & Steel',
                hook: 'Steel',
                length: '20 inches',
                weight: 'Heavy Duty'
            },
            includes: ['Pair of Hook Straps'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            size: 'One Size',
            material: 'Cotton/Steel'
        },
        {
            id: 12,
            name: 'Full Hand Wraps',
            price: '$22.99',
            originalPrice: '$32.99',
            image: '/hand-wraps.jpg',
            rating: 4.5,
            reviews: 189,
            category: 'Straps & Wraps',
            brand: 'HandArmor',
            description: 'Mexican-style hand wraps for boxing and martial arts training',
            features: ['180-inch Length', 'Thumb Loop', 'Wrist Support', 'Breathable'],
            specifications: {
                material: 'Cotton/Poly',
                length: '180 inches',
                closure: 'Hook & Loop',
                sizes: 'One Size'
            },
            includes: ['Pair of Hand Wraps'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            size: 'One Size',
            material: 'Cotton/Poly'
        },
        {
            id: 13,
            name: 'Compression Shorts',
            price: '$35.99',
            originalPrice: '$49.99',
            image: '/compression-shorts.jpg',
            rating: 4.6,
            reviews: 234,
            category: 'Compression Wear',
            brand: 'CompressFit',
            description: 'Muscle support compression shorts for lower body workouts',
            features: ['Muscle Support', 'Moisture Wicking', 'Anti-chafing', 'Breathable'],
            specifications: {
                material: 'Nylon/Spandex',
                sizes: 'S-XXL',
                support: 'Compression',
                features: 'Anti-odor'
            },
            includes: ['Compression Shorts'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            size: 'S-XXL',
            material: 'Nylon/Spandex'
        },
        {
            id: 14,
            name: 'Lifting Chalk & Bag',
            price: '$18.99',
            originalPrice: '$24.99',
            image: '/lifting-chalk.jpg',
            rating: 4.7,
            reviews: 312,
            category: 'Grip Aid',
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
            size: 'One Size',
            material: 'Magnesium Carbonate'
        },
        {
            id: 15,
            name: 'Shoulder Support Brace',
            price: '$42.99',
            originalPrice: '$59.99',
            image: '/shoulder-brace.jpg',
            rating: 4.4,
            reviews: 134,
            category: 'Shoulder Support',
            brand: 'ShoulderSafe',
            description: 'Adjustable shoulder brace for stability during upper body workouts',
            features: ['Adjustable Straps', 'Breathable Material', 'Medical Grade', 'Washable'],
            specifications: {
                material: 'Neoprene & Nylon',
                sizes: 'S-XL',
                straps: 'Adjustable',
                support: 'Medical Grade'
            },
            includes: ['Shoulder Brace'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            size: 'S-XL',
            material: 'Neoprene/Nylon'
        }
    ];

    const protectiveCategories = [
        {
            name: 'All Gloves',
            image: '/all-gloves.jpg',
            description: 'Lifting & workout',
            count: 8,
            icon: '🧤',
            slug: 'gloves'
        },
        {
            name: 'Lifting Belts',
            image: '/lifting-belts.jpg',
            description: 'Back support',
            count: 6,
            icon: '🛡️',
            slug: 'belts'
        },
        {
            name: 'Knee Support',
            image: '/knee-support.jpg',
            description: 'Sleeves & wraps',
            count: 4,
            icon: '🦵',
            slug: 'knee-support'
        },
        {
            name: 'Wrist Support',
            image: '/wrist-support.jpg',
            description: 'Wraps & straps',
            count: 5,
            icon: '✋',
            slug: 'wrist-support'
        },
        {
            name: 'Elbow Support',
            image: '/elbow-support.jpg',
            description: 'Sleeves & braces',
            count: 3,
            icon: '💪',
            slug: 'elbow-support'
        },
        {
            name: 'Ankle Support',
            image: '/ankle-support.jpg',
            description: 'Braces & wraps',
            count: 3,
            icon: '👣',
            slug: 'ankle-support'
        },
        {
            name: 'Compression',
            image: '/compression-wear.jpg',
            description: 'Shorts & sleeves',
            count: 4,
            icon: '🎽',
            slug: 'compression'
        },
        {
            name: 'Grip Aids',
            image: '/grip-aids.jpg',
            description: 'Chalk & accessories',
            count: 3,
            icon: '🫳',
            slug: 'grip-aids'
        }
    ];

    const filters = {
        category: ['Gloves', 'Belts', 'Knee Support', 'Elbow Support', 'Ankle Support', 'Shoulder Support', 'Straps & Wraps', 'Compression Wear', 'Grip Aid'],
        size: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Universal', 'Adjustable'],
        material: ['Leather', 'Neoprene', 'Nylon', 'Cotton', 'Spandex', 'Mesh', 'Rubber', 'Steel', 'Magnesium Carbonate'],
        priceRange: [
            'Under $20',
            '$20 - $40',
            '$40 - $60',
            '$60 - $80',
            '$80 - $100',
            'Above $100'
        ],
        brand: ['GripMaster', 'LiftPro', 'KneeGuard', 'IronGrip', 'ArmorFlex', 'StableStep', 'WristStrong', 'FlexLift', 'PowerGrip', 'SquatPro', 'HookGrip', 'HandArmor', 'CompressFit', 'ChalkMaster', 'ShoulderSafe'],
        features: ['Gel Padding', 'Wrist Support', 'Quick Release', 'Breathable', 'Medical Grade', 'Adjustable', 'Machine Washable', 'Anti-slip', 'Compression']
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
            <section className="bg-gradient-to-r from-blue-800 to-indigo-700 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <nav className="flex items-center space-x-2 text-sm text-indigo-200 mb-4">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <ChevronLeft className="w-4 h-4 rotate-180" />
                                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                                <ChevronLeft className="w-4 h-4 rotate-180" />
                                <Link href="/gym-equipment/accessories" className="hover:text-white transition-colors">Accessories</Link>
                                <ChevronLeft className="w-4 h-4 rotate-180" />
                                <span className="text-white font-medium">Protective Gear</span>
                            </nav>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Protective Gear
                            </h1>
                            <p className="text-xl text-indigo-100 max-w-2xl">
                                Train safer and stronger with premium protective equipment. From gloves to braces, 
                                we have everything to support your heaviest lifts.
                            </p>
                        </div>
                        <div className="hidden lg:block">
                            <div className="text-6xl">🛡️</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-6 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="flex items-center justify-center">
                                <Package className="w-5 h-5 text-blue-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">60+</span>
                            </div>
                            <p className="text-sm text-gray-600">Protective Items</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Truck className="w-5 h-5 text-indigo-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">Free</span>
                            </div>
                            <p className="text-sm text-gray-600">Shipping Over $75</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">2 Year</span>
                            </div>
                            <p className="text-sm text-gray-600">Warranty</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Clock className="w-5 h-5 text-green-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">Medical</span>
                            </div>
                            <p className="text-sm text-gray-600">Grade Quality</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Navigation */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Protection Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {protectiveCategories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/gym-equipment/accessories/protective-gear/${category.slug}`}
                                className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
                            >
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-blue-200 group-hover:to-indigo-300 transition-all duration-200">
                                    <div className="text-lg">{category.icon}</div>
                                </div>
                                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200">
                                    {category.name}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                                <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full">
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
                                Protective Gear Collection
                            </h2>
                            <p className="text-gray-600">
                                {protectiveProducts.length} premium protective items for safe and effective training
                            </p>
                        </div>

                        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                            {/* View Mode Toggle */}
                            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                                >
                                    <Grid className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                                >
                                    <List className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Sort By */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                                <option value="newest">Newest First</option>
                                <option value="essential">Most Protective</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filters Sidebar */}
                        <div className="lg:w-72 flex-shrink-0">
                            <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <Filter className="w-5 h-5 mr-2" />
                                    Filter Gear
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
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{category}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Size Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-3">Size</h4>
                                    <div className="space-y-2">
                                        {filters.size.map((size) => (
                                            <label key={size} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFilters.size.includes(size)}
                                                    onChange={() => toggleFilter('size', size)}
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{size}</span>
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
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{feature}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Clear Filters */}
                                <button
                                    onClick={() => setSelectedFilters({ category: [], size: [], material: [], priceRange: [], brand: [], features: [] })}
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
                                    {protectiveProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                                        >
                                            <div className="relative h-64 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                                                {product.isNew && (
                                                    <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        New
                                                    </span>
                                                )}
                                                {product.isBestseller && (
                                                    <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        Bestseller
                                                    </span>
                                                )}
                                                <div className="text-5xl">
                                                    {product.category === 'Gloves' ? '🧤' :
                                                     product.category === 'Belts' ? '🛡️' :
                                                     product.category === 'Knee Support' ? '🦵' :
                                                     product.category === 'Elbow Support' ? '💪' :
                                                     product.category === 'Ankle Support' ? '👣' :
                                                     product.category === 'Shoulder Support' ? '🤸' :
                                                     product.category === 'Straps & Wraps' ? '🎗️' :
                                                     product.category === 'Compression Wear' ? '🎽' : '🫳'}
                                                </div>
                                                <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    <Heart className="w-5 h-5 text-gray-600" />
                                                </button>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                                                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                                        {product.category}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-3">{product.description}</p>

                                                {/* Material & Size */}
                                                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                                                    <span><strong>Material:</strong> {product.material}</span>
                                                    <span><strong>Size:</strong> {product.size}</span>
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
                                                            <span key={index} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
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
                                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
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
                                    {protectiveProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                                        >
                                            <div className="w-48 relative bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                                                {product.isNew && (
                                                    <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        New
                                                    </span>
                                                )}
                                                {product.isBestseller && (
                                                    <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        Bestseller
                                                    </span>
                                                )}
                                                <div className="text-4xl">
                                                    {product.category === 'Gloves' ? '🧤' :
                                                     product.category === 'Belts' ? '🛡️' :
                                                     product.category === 'Knee Support' ? '🦵' :
                                                     product.category === 'Elbow Support' ? '💪' :
                                                     product.category === 'Ankle Support' ? '👣' :
                                                     product.category === 'Shoulder Support' ? '🤸' :
                                                     product.category === 'Straps & Wraps' ? '🎗️' :
                                                     product.category === 'Compression Wear' ? '🎽' : '🫳'}
                                                </div>
                                            </div>
                                            <div className="flex-1 p-6">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                                                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                                                {product.category}
                                                            </span>
                                                            {product.isNew && (
                                                                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
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
                                                                    <div><strong>Size:</strong> {product.size}</div>
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
                                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
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
            <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Train Protected, Lift Confidently
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our protective gear is designed with professional athletes to provide maximum safety and performance
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Package className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Medical Grade</h3>
                            <p className="text-gray-600 text-sm">
                                All supports and braces meet medical-grade quality standards
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="w-8 h-8 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Safety</h3>
                            <p className="text-gray-600 text-sm">
                                Reduce injury risk and improve performance with proper protection
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Durable Materials</h3>
                            <p className="text-gray-600 text-sm">
                                Built to withstand intense training sessions and heavy use
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Comfort Fit</h3>
                            <p className="text-gray-600 text-sm">
                                Ergonomically designed for maximum comfort during workouts
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}