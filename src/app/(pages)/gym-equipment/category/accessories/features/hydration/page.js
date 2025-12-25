// app/gym-equipment/accessories/hydration/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Package, Truck, Shield, Clock } from 'lucide-react';

export default function HydrationPage() {
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid');
    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
        capacity: [],
        material: [],
        priceRange: [],
        brand: [],
        features: []
    });

    const hydrationProducts = [
        {
            id: 1,
            name: 'Smart Water Bottle Pro',
            price: '$39.99',
            originalPrice: '$49.99',
            image: '/smart-water-bottle.jpg',
            rating: 4.6,
            reviews: 423,
            category: 'Smart Bottles',
            brand: 'HydroFit',
            description: 'Hydration tracking smart bottle with LED reminders and app connectivity',
            features: ['Hydration Tracking', 'LED Reminders', 'Leak Proof', 'BPA Free'],
            specifications: {
                capacity: '32oz',
                material: 'Tritan Plastic',
                connectivity: 'Bluetooth',
                battery: '2 Weeks',
                display: 'LED Smart Lid'
            },
            includes: ['Water Bottle', 'Charging Cable', 'User Manual'],
            isNew: true,
            isBestseller: true,
            inStock: true,
            capacity: '32oz',
            material: 'Tritan'
        },
        {
            id: 2,
            name: 'Insulated Shaker Bottle',
            price: '$24.99',
            originalPrice: '$34.99',
            image: '/shaker-bottle.jpg',
            rating: 4.7,
            reviews: 567,
            category: 'Shaker Bottles',
            brand: 'MixMaster',
            description: 'Double-walled insulated shaker bottle with stainless steel ball',
            features: ['Double Wall Insulation', 'Leak Proof', 'Stainless Steel Ball', '28oz Capacity'],
            specifications: {
                capacity: '28oz',
                material: 'Stainless Steel',
                insulation: 'Double Wall',
                leak: 'Screw-on Lid'
            },
            includes: ['Shaker Bottle', 'Steel Mixing Ball'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            capacity: '28oz',
            material: 'Stainless Steel'
        },
        {
            id: 3,
            name: 'Gallon Water Jug',
            price: '$29.99',
            originalPrice: '$39.99',
            image: '/gallon-jug.jpg',
            rating: 4.8,
            reviews: 289,
            category: 'Large Capacity',
            brand: 'GallonGrip',
            description: '1-gallon water jug with time markers and carrying handle',
            features: ['Time Markings', 'Carry Handle', 'BPA Free', 'Wide Mouth'],
            specifications: {
                capacity: '128oz (1 Gallon)',
                material: 'Tritan Plastic',
                markings: 'Time Indicators',
                handle: 'Ergonomic'
            },
            includes: ['Gallon Jug'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            capacity: '128oz',
            material: 'Tritan'
        },
        {
            id: 4,
            name: 'Electrolyte Powder Tubes',
            price: '$19.99',
            originalPrice: '$29.99',
            image: '/electrolyte-tubes.jpg',
            rating: 4.5,
            reviews: 334,
            category: 'Electrolytes',
            brand: 'ElectroFuel',
            description: 'Portable electrolyte powder tubes for rapid hydration',
            features: ['Rapid Hydration', '10 Tubes', 'Multiple Flavors', 'Zero Sugar'],
            specifications: {
                servings: '10 Tubes',
                electrolytes: 'Sodium, Potassium, Magnesium',
                sugar: 'Zero Sugar',
                flavors: '4 Options'
            },
            includes: ['10 Electrolyte Tubes'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            capacity: 'N/A',
            material: 'Powder'
        },
        {
            id: 5,
            name: 'Collapsible Water Bottle',
            price: '$17.99',
            originalPrice: '$24.99',
            image: '/collapsible-bottle.jpg',
            rating: 4.4,
            reviews: 198,
            category: 'Travel Bottles',
            brand: 'PackLight',
            description: 'Silicone collapsible water bottle for travel and outdoor activities',
            features: ['Collapsible', 'Lightweight', 'BPA Free', 'Carabiner Clip'],
            specifications: {
                capacity: '22oz',
                material: 'Food Grade Silicone',
                collapsed: '2 inches',
                weight: '4.2oz'
            },
            includes: ['Collapsible Bottle', 'Carabiner'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            capacity: '22oz',
            material: 'Silicone'
        },
        {
            id: 6,
            name: 'Stainless Steel Insulated Bottle',
            price: '$34.99',
            originalPrice: '$44.99',
            image: '/insulated-bottle.jpg',
            rating: 4.8,
            reviews: 412,
            category: 'Insulated Bottles',
            brand: 'IceCold',
            description: 'Vacuum insulated stainless steel bottle keeps drinks cold 24 hours',
            features: ['24hr Cold', 'Vacuum Insulated', 'Stainless Steel', 'No Sweat'],
            specifications: {
                capacity: '32oz',
                material: '18/8 Stainless Steel',
                insulation: 'Double Wall Vacuum',
                cold: '24 Hours'
            },
            includes: ['Insulated Bottle', '3 Lids'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            capacity: '32oz',
            material: 'Stainless Steel'
        },
        {
            id: 7,
            name: 'Hydration Backpack 2L',
            price: '$49.99',
            originalPrice: '$69.99',
            image: '/hydration-pack.jpg',
            rating: 4.7,
            reviews: 278,
            category: 'Hydration Packs',
            brand: 'RunHydrate',
            description: '2L hydration backpack with drinking tube and multiple pockets',
            features: ['2L Reservoir', 'Drinking Tube', 'Multiple Pockets', 'Adjustable Straps'],
            specifications: {
                capacity: '2 Liters',
                material: 'TPU Reservoir',
                pockets: '3 Storage',
                weight: '1.2lb'
            },
            includes: ['Hydration Pack', '2L Reservoir', 'Cleaning Kit'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            capacity: '2L',
            material: 'TPU/Nylon'
        },
        {
            id: 8,
            name: 'Glass Water Bottle with Sleeve',
            price: '$22.99',
            originalPrice: '$32.99',
            image: '/glass-bottle.jpg',
            rating: 4.5,
            reviews: 156,
            category: 'Glass Bottles',
            brand: 'PureGlass',
            description: 'Borosilicate glass water bottle with protective silicone sleeve',
            features: ['Borosilicate Glass', 'Silicone Sleeve', 'No Plastic Taste', 'Eco-friendly'],
            specifications: {
                capacity: '20oz',
                material: 'Borosilicate Glass',
                sleeve: 'Protective Silicone',
                lid: 'Bamboo'
            },
            includes: ['Glass Bottle', 'Silicone Sleeve'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            capacity: '20oz',
            material: 'Glass'
        },
        {
            id: 9,
            name: 'Electrolyte Drink Tablets',
            price: '$14.99',
            originalPrice: '$19.99',
            image: '/electrolyte-tablets.jpg',
            rating: 4.6,
            reviews: 289,
            category: 'Electrolytes',
            brand: 'TabHydrate',
            description: 'Effervescent electrolyte tablets for quick hydration on the go',
            features: ['Rapid Dissolve', '10 Tablets', 'BCAAs Added', 'Natural Flavors'],
            specifications: {
                tablets: '10 per Tube',
                dissolution: '30 Seconds',
                electrolytes: 'Complete Profile',
                bcaas: '2g per Tablet'
            },
            includes: ['Tube of 10 Tablets'],
            isNew: true,
            isBestseller: true,
            inStock: true,
            capacity: 'N/A',
            material: 'Tablets'
        },
        {
            id: 10,
            name: 'Copper Water Bottle',
            price: '$44.99',
            originalPrice: '$59.99',
            image: '/copper-bottle.jpg',
            rating: 4.4,
            reviews: 134,
            category: 'Specialty Bottles',
            brand: 'CopperPure',
            description: 'Pure copper water bottle with Ayurvedic benefits and elegant design',
            features: ['Pure Copper', 'Ayurvedic Benefits', 'Handcrafted', 'Antimicrobial'],
            specifications: {
                capacity: '32oz',
                material: '100% Copper',
                weight: '1.8lb',
                care: 'Copper Cleaner Included'
            },
            includes: ['Copper Bottle', 'Cleaning Cloth', 'Care Guide'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            capacity: '32oz',
            material: 'Copper'
        },
        {
            id: 11,
            name: 'Smart Lid for Any Bottle',
            price: '$29.99',
            originalPrice: '$39.99',
            image: '/smart-lid.jpg',
            rating: 4.3,
            reviews: 178,
            category: 'Smart Accessories',
            brand: 'HydraSmart',
            description: 'Universal smart lid that turns any bottle into a smart hydration tracker',
            features: ['Universal Fit', 'Hydration Tracking', 'LED Display', 'App Connected'],
            specifications: {
                compatibility: 'Standard Bottle Threads',
                battery: '1 Week',
                display: 'LED Ring',
                app: 'iOS & Android'
            },
            includes: ['Smart Lid', 'Charging Cable'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            capacity: 'N/A',
            material: 'Plastic/Electronics'
        },
        {
            id: 12,
            name: 'Water Filter Bottle',
            price: '$39.99',
            originalPrice: '$49.99',
            image: '/filter-bottle.jpg',
            rating: 4.7,
            reviews: 223,
            category: 'Filter Bottles',
            brand: 'PureFlow',
            description: 'Water bottle with built-in filter for clean drinking water anywhere',
            features: ['Built-in Filter', 'Removes Impurities', 'Long Lasting Filter', 'BPA Free'],
            specifications: {
                capacity: '24oz',
                material: 'Tritan Plastic',
                filter: 'Carbon & Fiber',
                filterLife: '150 Gallons'
            },
            includes: ['Filter Bottle', '2 Replacement Filters'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            capacity: '24oz',
            material: 'Tritan'
        },
        {
            id: 13,
            name: 'Hydration Mix Variety Pack',
            price: '$24.99',
            originalPrice: '$34.99',
            image: '/hydration-mix-pack.jpg',
            rating: 4.6,
            reviews: 189,
            category: 'Hydration Mixes',
            brand: 'HydraFuel',
            description: 'Variety pack of hydration mixes with electrolytes and vitamins',
            features: ['4 Flavors', 'Electrolytes + Vitamins', 'Low Calorie', 'Quick Mixing'],
            specifications: {
                servings: '20 Total',
                flavors: '4 Variety',
                calories: '10 per Serving',
                vitamins: 'B-Complex Added'
            },
            includes: ['20 Single-Serve Packets'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            capacity: 'N/A',
            material: 'Powder'
        },
        {
            id: 14,
            name: 'Infuser Water Bottle',
            price: '$19.99',
            originalPrice: '$29.99',
            image: '/infuser-bottle.jpg',
            rating: 4.5,
            reviews: 267,
            category: 'Infuser Bottles',
            brand: 'FruitFusion',
            description: 'Water bottle with fruit infuser for natural flavored water',
            features: ['Fruit Infuser', 'BPA Free', 'Leak Proof', 'Easy Clean'],
            specifications: {
                capacity: '32oz',
                material: 'Tritan Plastic',
                infuser: 'Removable Basket',
                lid: 'Straw Included'
            },
            includes: ['Infuser Bottle', 'Infuser Basket'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            capacity: '32oz',
            material: 'Tritan'
        },
        {
            id: 15,
            name: 'Hydration Belt with Bottles',
            price: '$34.99',
            originalPrice: '$44.99',
            image: '/hydration-belt.jpg',
            rating: 4.4,
            reviews: 156,
            category: 'Hydration Accessories',
            brand: 'RunBelt',
            description: 'Running hydration belt with two 10oz bottles and storage pocket',
            features: ['2 Bottles Included', 'Adjustable Belt', 'Storage Pocket', 'Bounce Free'],
            specifications: {
                bottles: '2 x 10oz',
                material: 'Nylon & Plastic',
                sizes: 'S-XL',
                pocket: 'Zippered'
            },
            includes: ['Hydration Belt', '2 Bottles'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            capacity: '20oz total',
            material: 'Nylon/Plastic'
        }
    ];

    const hydrationCategories = [
        {
            name: 'Smart Bottles',
            image: '/smart-bottles.jpg',
            description: 'Tech-enabled',
            count: 6,
            icon: '📱',
            slug: 'smart-bottles'
        },
        {
            name: 'Shaker Bottles',
            image: '/shaker-bottles.jpg',
            description: 'Mixing & protein',
            count: 8,
            icon: '🥤',
            slug: 'shaker-bottles'
        },
        {
            name: 'Insulated',
            image: '/insulated-bottles.jpg',
            description: 'Temp control',
            count: 5,
            icon: '❄️',
            slug: 'insulated'
        },
        {
            name: 'Large Capacity',
            image: '/large-bottles.jpg',
            description: 'Gallon & more',
            count: 4,
            icon: '💧',
            slug: 'large-capacity'
        },
        {
            name: 'Electrolytes',
            image: '/electrolytes.jpg',
            description: 'Hydration boost',
            count: 6,
            icon: '⚡',
            slug: 'electrolytes'
        },
        {
            name: 'Travel',
            image: '/travel-bottles.jpg',
            description: 'Portable',
            count: 5,
            icon: '🎒',
            slug: 'travel'
        },
        {
            name: 'Specialty',
            image: '/specialty-bottles.jpg',
            description: 'Glass, copper',
            count: 4,
            icon: '⭐',
            slug: 'specialty'
        },
        {
            name: 'Accessories',
            image: '/hydration-accessories.jpg',
            description: 'Belts, filters',
            count: 5,
            icon: '🎗️',
            slug: 'accessories'
        }
    ];

    const filters = {
        category: ['Smart Bottles', 'Shaker Bottles', 'Insulated Bottles', 'Large Capacity', 'Glass Bottles', 'Travel Bottles', 'Filter Bottles', 'Infuser Bottles', 'Specialty Bottles', 'Hydration Packs', 'Electrolytes', 'Hydration Mixes', 'Hydration Accessories'],
        capacity: ['Under 20oz', '20-32oz', '32-64oz', '64oz+', '1 Gallon', '2 Liters', 'N/A'],
        material: ['Tritan Plastic', 'Stainless Steel', 'Glass', 'Silicone', 'Copper', 'Nylon', 'TPU', 'Powder', 'Tablets'],
        priceRange: [
            'Under $15',
            '$15 - $25',
            '$25 - $40',
            '$40 - $60',
            '$60 - $80',
            'Above $80'
        ],
        brand: ['HydroFit', 'MixMaster', 'GallonGrip', 'ElectroFuel', 'PackLight', 'IceCold', 'RunHydrate', 'PureGlass', 'TabHydrate', 'CopperPure', 'HydraSmart', 'PureFlow', 'HydraFuel', 'FruitFusion', 'RunBelt'],
        features: ['Smart Tracking', 'Insulated', 'Leak Proof', 'BPA Free', 'Eco-friendly', 'Portable', 'Filtered', 'Infuser', 'Electrolytes', 'App Connected']
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
            <section className="bg-gradient-to-r from-cyan-700 to-blue-500 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <nav className="flex items-center space-x-2 text-sm text-blue-200 mb-4">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <ChevronLeft className="w-4 h-4 rotate-180" />
                                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                                <ChevronLeft className="w-4 h-4 rotate-180" />
                                <Link href="/gym-equipment/accessories" className="hover:text-white transition-colors">Accessories</Link>
                                <ChevronLeft className="w-4 h-4 rotate-180" />
                                <span className="text-white font-medium">Hydration</span>
                            </nav>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Hydration Essentials
                            </h1>
                            <p className="text-xl text-blue-100 max-w-2xl">
                                Stay perfectly hydrated with smart bottles, electrolyte supplements, and premium hydration gear. 
                                Optimize your performance with every sip.
                            </p>
                        </div>
                        <div className="hidden lg:block">
                            <div className="text-6xl">💦</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-6 bg-gradient-to-r from-cyan-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="flex items-center justify-center">
                                <Package className="w-5 h-5 text-cyan-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">70+</span>
                            </div>
                            <p className="text-sm text-gray-600">Hydration Products</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Truck className="w-5 h-5 text-blue-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">Free</span>
                            </div>
                            <p className="text-sm text-gray-600">Shipping Over $50</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Shield className="w-5 h-5 text-cyan-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">BPA Free</span>
                            </div>
                            <p className="text-sm text-gray-600">All Products</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Clock className="w-5 h-5 text-green-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">Smart</span>
                            </div>
                            <p className="text-sm text-gray-600">Tracking Options</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Navigation */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Hydration Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {hydrationCategories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/gym-equipment/accessories/hydration/${category.slug}`}
                                className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
                            >
                                <div className="w-10 h-10 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-cyan-200 group-hover:to-blue-300 transition-all duration-200">
                                    <div className="text-lg">{category.icon}</div>
                                </div>
                                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-cyan-600 transition-colors duration-200">
                                    {category.name}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                                <span className="inline-block mt-2 text-xs bg-cyan-100 text-cyan-600 px-1.5 py-0.5 rounded-full">
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
                                Hydration Collection
                            </h2>
                            <p className="text-gray-600">
                                {hydrationProducts.length} essential hydration products to keep you fueled and refreshed
                            </p>
                        </div>

                        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                            {/* View Mode Toggle */}
                            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 ${viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'bg-white text-gray-600'}`}
                                >
                                    <Grid className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 ${viewMode === 'list' ? 'bg-cyan-600 text-white' : 'bg-white text-gray-600'}`}
                                >
                                    <List className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Sort By */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                                <option value="newest">Newest First</option>
                                <option value="capacity">Bottle Capacity</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filters Sidebar */}
                        <div className="lg:w-72 flex-shrink-0">
                            <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <Filter className="w-5 h-5 mr-2" />
                                    Filter Hydration
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
                                                    className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{category}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Capacity Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-3">Capacity</h4>
                                    <div className="space-y-2">
                                        {filters.capacity.map((capacity) => (
                                            <label key={capacity} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFilters.capacity.includes(capacity)}
                                                    onChange={() => toggleFilter('capacity', capacity)}
                                                    className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{capacity}</span>
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
                                                    className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
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
                                                    className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
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
                                                    className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{feature}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Clear Filters */}
                                <button
                                    onClick={() => setSelectedFilters({ category: [], capacity: [], material: [], priceRange: [], brand: [], features: [] })}
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
                                    {hydrationProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                                        >
                                            <div className="relative h-64 bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center">
                                                {product.isNew && (
                                                    <span className="absolute top-3 left-3 bg-cyan-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        New
                                                    </span>
                                                )}
                                                {product.isBestseller && (
                                                    <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        Bestseller
                                                    </span>
                                                )}
                                                <div className="text-5xl">
                                                    {product.category === 'Smart Bottles' ? '📱' :
                                                     product.category === 'Shaker Bottles' ? '🥤' :
                                                     product.category === 'Insulated Bottles' ? '❄️' :
                                                     product.category === 'Large Capacity' ? '💧' :
                                                     product.category === 'Glass Bottles' ? '🍶' :
                                                     product.category === 'Travel Bottles' ? '🎒' :
                                                     product.category === 'Filter Bottles' ? '💎' :
                                                     product.category === 'Infuser Bottles' ? '🍓' :
                                                     product.category === 'Specialty Bottles' ? '⭐' :
                                                     product.category === 'Hydration Packs' ? '🎒' :
                                                     product.category === 'Electrolytes' ? '⚡' :
                                                     product.category === 'Hydration Mixes' ? '🥄' : '🎗️'}
                                                </div>
                                                <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    <Heart className="w-5 h-5 text-gray-600" />
                                                </button>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                                                    <span className="text-xs bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full">
                                                        {product.category}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-3">{product.description}</p>

                                                {/* Capacity & Material */}
                                                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                                                    {product.capacity !== 'N/A' && (
                                                        <span><strong>Capacity:</strong> {product.capacity}</span>
                                                    )}
                                                    <span><strong>Material:</strong> {product.material}</span>
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
                                                            <span key={index} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
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
                                                            ? 'bg-cyan-600 text-white hover:bg-cyan-700'
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
                                    {hydrationProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                                        >
                                            <div className="w-48 relative bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center">
                                                {product.isNew && (
                                                    <span className="absolute top-3 left-3 bg-cyan-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        New
                                                    </span>
                                                )}
                                                {product.isBestseller && (
                                                    <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        Bestseller
                                                    </span>
                                                )}
                                                <div className="text-4xl">
                                                    {product.category === 'Smart Bottles' ? '📱' :
                                                     product.category === 'Shaker Bottles' ? '🥤' :
                                                     product.category === 'Insulated Bottles' ? '❄️' :
                                                     product.category === 'Large Capacity' ? '💧' :
                                                     product.category === 'Glass Bottles' ? '🍶' :
                                                     product.category === 'Travel Bottles' ? '🎒' :
                                                     product.category === 'Filter Bottles' ? '💎' :
                                                     product.category === 'Infuser Bottles' ? '🍓' :
                                                     product.category === 'Specialty Bottles' ? '⭐' :
                                                     product.category === 'Hydration Packs' ? '🎒' :
                                                     product.category === 'Electrolytes' ? '⚡' :
                                                     product.category === 'Hydration Mixes' ? '🥄' : '🎗️'}
                                                </div>
                                            </div>
                                            <div className="flex-1 p-6">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                                                            <span className="text-xs bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full">
                                                                {product.category}
                                                            </span>
                                                            {product.isNew && (
                                                                <span className="text-xs bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full">
                                                                    New
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-gray-600 mb-3">{product.description}</p>

                                                        {/* Capacity & Specifications */}
                                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                                            <div>
                                                                <div className="font-medium text-gray-500 text-sm mb-1">Details</div>
                                                                <div className="text-sm text-gray-600 space-y-1">
                                                                    {product.capacity !== 'N/A' && (
                                                                        <div><strong>Capacity:</strong> {product.capacity}</div>
                                                                    )}
                                                                    <div><strong>Material:</strong> {product.material}</div>
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
                                                                    <span key={index} className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
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
                                                            ? 'bg-cyan-600 text-white hover:bg-cyan-700'
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
            <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Stay Hydrated, Perform Better
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Premium hydration solutions designed to keep you fueled, focused, and performing at your peak
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Package className="w-8 h-8 text-cyan-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Tracking</h3>
                            <p className="text-gray-600 text-sm">
                                Smart bottles and apps to track your hydration throughout the day
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Materials</h3>
                            <p className="text-gray-600 text-sm">
                                BPA-free, food-grade materials for safe and healthy hydration
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-cyan-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Electrolyte Balance</h3>
                            <p className="text-gray-600 text-sm">
                                Advanced electrolyte formulas for optimal hydration and recovery
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Temperature Control</h3>
                            <p className="text-gray-600 text-sm">
                                Insulated bottles to keep drinks cold for hours during workouts
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}