// app/gym-equipment/accessories/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Package, Truck, Shield, Clock } from 'lucide-react';

export default function AccessoriesPage() {
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid');
    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
        priceRange: [],
        brand: [],
        features: []
    });

    const accessoryProducts = [
        {
            id: 1,
            name: 'Premium Yoga Mat Set',
            price: '$89.99',
            originalPrice: '$119.99',
            image: '/yoga-mat.jpg',
            rating: 4.6,
            reviews: 234,
            category: 'Yoga & Mats',
            brand: 'FlexGear',
            description: 'Non-slip yoga mat with carrying strap, blocks, and resistance band',
            features: ['Non-slip Surface', 'Eco-friendly TPE', '6mm Thickness', 'Accessory Kit'],
            specifications: {
                material: 'TPE Eco-friendly',
                thickness: '6mm',
                size: '72x24 inches',
                weight: '4.5lb'
            },
            includes: ['Yoga Mat', 'Carry Strap', '2 Blocks', 'Resistance Band'],
            isNew: true,
            isBestseller: true,
            inStock: true,
            essential: true
        },
        {
            id: 2,
            name: 'Professional Gym Gloves',
            price: '$34.99',
            originalPrice: '$44.99',
            image: '/gym-gloves.jpg',
            rating: 4.5,
            reviews: 156,
            category: 'Protective Gear',
            brand: 'GripMaster',
            description: 'Padded gloves with wrist support and enhanced grip',
            features: ['Gel Padding', 'Wrist Support', 'Breathable Mesh', 'Hook & Loop Closure'],
            specifications: {
                material: 'Neoprene & Leather',
                padding: 'Gel Palm',
                closure: 'Hook & Loop',
                sizes: 'XS-XXL'
            },
            includes: ['Pair of Gloves'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            essential: true
        },
        {
            id: 3,
            name: 'Smart Water Bottle',
            price: '$39.99',
            originalPrice: '$49.99',
            image: '/water-bottle.jpg',
            rating: 4.3,
            reviews: 98,
            category: 'Hydration',
            brand: 'HydroFit',
            description: 'Hydration tracking smart bottle with LED reminders',
            features: ['Hydration Tracking', 'LED Reminders', 'Leak Proof', 'BPA Free'],
            specifications: {
                capacity: '32oz',
                material: 'Tritan Plastic',
                connectivity: 'Bluetooth',
                battery: '2 Weeks'
            },
            includes: ['Water Bottle', 'Charging Cable'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            essential: false
        },
        {
            id: 4,
            name: 'Resistance Band Set',
            price: '$49.99',
            originalPrice: '$69.99',
            image: '/resistance-bands.jpg',
            rating: 4.4,
            reviews: 189,
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
            includes: ['5 Bands', '2 Handles', 'Door Anchor', 'Ankle Straps', 'Carry Bag'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            essential: true
        },
        {
            id: 5,
            name: 'Lifting Straps with Wrist Wraps',
            price: '$24.99',
            originalPrice: '$34.99',
            image: '/lifting-straps.jpg',
            rating: 4.7,
            reviews: 203,
            category: 'Lifting Accessories',
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
            isBestseller: false,
            inStock: true,
            essential: true
        },
        {
            id: 6,
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
            includes: ['3 Foam Rollers', 'Travel Bag'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            essential: false
        },
        {
            id: 7,
            name: 'Digital Jump Rope',
            price: '$29.99',
            originalPrice: '$39.99',
            image: '/jump-rope.jpg',
            rating: 4.4,
            reviews: 134,
            category: 'Cardio Accessories',
            brand: 'SpeedRope',
            description: 'Smart jump rope with digital counter and adjustable length',
            features: ['Digital Counter', 'Adjustable Length', 'Ball Bearings', 'Carry Case'],
            specifications: {
                counter: 'LCD Display',
                length: 'Adjustable 7-9ft',
                bearings: 'Ball Bearings',
                rope: 'PVC Coated Steel'
            },
            includes: ['Jump Rope', 'Carry Case'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            essential: false
        },
        {
            id: 8,
            name: 'Gym Towel Set (6 Pack)',
            price: '$19.99',
            originalPrice: '$29.99',
            image: '/gym-towels.jpg',
            rating: 4.5,
            reviews: 267,
            category: 'Hygiene',
            brand: 'FreshFit',
            description: 'Microfiber gym towels with quick-dry technology',
            features: ['Microfiber', 'Quick Dry', 'Antimicrobial', 'Multiple Colors'],
            specifications: {
                material: 'Microfiber',
                size: '16x24 inches',
                pack: '6 Towels',
                care: 'Machine Washable'
            },
            includes: ['6 Gym Towels'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            essential: true
        },
        {
            id: 9,
            name: 'Weightlifting Belt (4")',
            price: '$69.99',
            originalPrice: '$89.99',
            image: '/weight-belt.jpg',
            rating: 4.8,
            reviews: 203,
            category: 'Lifting Accessories',
            brand: 'LiftPro',
            description: 'Professional weightlifting belt with lever buckle',
            features: ['Genuine Leather', 'Lever Buckle', '4-inch Width', 'Lower Back Support'],
            specifications: {
                material: 'Leather',
                buckle: 'Lever',
                width: '4 inches',
                sizes: 'XS-XXL'
            },
            includes: ['Weightlifting Belt'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            essential: true
        },
        {
            id: 10,
            name: 'Wireless Fitness Earbuds',
            price: '$79.99',
            originalPrice: '$99.99',
            image: '/fitness-earbuds.jpg',
            rating: 4.3,
            reviews: 156,
            category: 'Electronics',
            brand: 'AudioFit',
            description: 'Sweat-proof wireless earbuds with secure fit for workouts',
            features: ['Sweat Proof', '8hr Battery', 'Secure Fit', 'Touch Controls'],
            specifications: {
                battery: '8 hours',
                connectivity: 'Bluetooth 5.0',
                rating: 'IPX7 Waterproof',
                charging: 'Wireless Case'
            },
            includes: ['Earbuds', 'Charging Case', 'Ear Tips', 'USB Cable'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            essential: false
        },
        {
            id: 11,
            name: 'Gym Bag Pro',
            price: '$49.99',
            originalPrice: '$69.99',
            image: '/gym-bag.jpg',
            rating: 4.6,
            reviews: 189,
            category: 'Bags & Storage',
            brand: 'GearMaster',
            description: 'Multi-compartment gym bag with shoe storage and wet pocket',
            features: ['Multiple Compartments', 'Shoe Storage', 'Wet Pocket', 'Laptop Sleeve'],
            specifications: {
                capacity: '35L',
                material: 'Water-resistant Polyester',
                compartments: '5+',
                features: 'TSA Lock'
            },
            includes: ['Gym Bag', 'Detachable Shoulder Strap'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            essential: true
        },
        {
            id: 12,
            name: 'Massage Gun Pro',
            price: '$149.99',
            originalPrice: '$199.99',
            image: '/massage-gun.jpg',
            rating: 4.7,
            reviews: 278,
            category: 'Recovery',
            brand: 'TheraGun',
            description: 'Professional percussion massager with multiple attachments',
            features: ['6 Attachments', '5 Speed Settings', 'Quiet Operation', 'Long Battery'],
            specifications: {
                attachments: '6 Different Heads',
                speed: '5 Levels (1800-3200rpm)',
                battery: '4 Hours',
                noise: '<45dB'
            },
            includes: ['Massage Gun', '6 Attachments', 'Carry Case', 'Charger'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            essential: false
        },
        {
            id: 13,
            name: 'Weight Plate Clamps (4 Pack)',
            price: '$19.99',
            originalPrice: '$29.99',
            image: '/weight-clamps.jpg',
            rating: 4.4,
            reviews: 145,
            category: 'Lifting Accessories',
            brand: 'SecureLift',
            description: 'Spring-loaded weight plate clamps for Olympic bars',
            specifications: {
                type: 'Spring Loaded',
                fit: '2-inch Olympic',
                material: 'Steel Spring',
                finish: 'Chrome Plated'
            },
            includes: ['4 Weight Clamps'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            essential: true
        },
        {
            id: 14,
            name: 'Fitness Tracker Watch',
            price: '$99.99',
            originalPrice: '$129.99',
            image: '/fitness-tracker.jpg',
            rating: 4.5,
            reviews: 312,
            category: 'Electronics',
            brand: 'FitTech',
            description: 'Advanced fitness tracker with heart rate and GPS',
            features: ['Heart Rate Monitor', 'GPS Tracking', 'Sleep Analysis', 'Water Resistant'],
            specifications: {
                display: 'AMOLED Touch',
                battery: '7 Days',
                tracking: '24/7 Heart Rate',
                connectivity: 'Bluetooth & GPS'
            },
            includes: ['Fitness Tracker', 'Charging Cable', '2 Bands'],
            isNew: true,
            isBestseller: true,
            inStock: true,
            essential: false
        },
        {
            id: 15,
            name: 'Doorway Pull-up Bar',
            price: '$39.99',
            originalPrice: '$59.99',
            image: '/pull-up-bar.jpg',
            rating: 4.6,
            reviews: 223,
            category: 'Home Gym',
            brand: 'HomeFit',
            description: 'No-drill doorway pull-up bar with multiple grip positions',
            features: ['No Installation', 'Multiple Grips', '300lb Capacity', 'Padded Bars'],
            specifications: {
                capacity: '300lb',
                installation: 'No Drilling',
                grips: '3 Positions',
                padding: 'Foam Handles'
            },
            includes: ['Pull-up Bar'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            essential: true
        }
    ];

    const accessoryCategories = [
        {
            name: 'Yoga & Mats',
            image: '/yoga-mats-cat.jpg',
            description: 'Mats and yoga accessories',
            count: 18,
            icon: '🧘',
            slug: 'yoga-&-mats'
        },
        {
            name: 'Protective Gear',
            image: '/protective-gear.jpg',
            description: 'Gloves, belts, and wraps',
            count: 12,
            icon: '🥊',
            slug: 'protection-gear'
        },
        {
            name: 'Lifting Accessories',
            image: '/lifting-accessories.jpg',
            description: 'Straps, clamps, and chalk',
            count: 15,
            icon: '🏋️',
            slug: 'lifting-accessories'
        },
        {
            name: 'Recovery',
            image: '/recovery-cat.jpg',
            description: 'Rollers and massage tools',
            count: 8,
            icon: '💆',
            slug: 'recovery'
        },
        {
            name: 'Hydration',
            image: '/hydration-cat.jpg',
            description: 'Bottles and shakers',
            count: 10,
            icon: '💧',
            slug: 'hydration'
        },
        {
            name: 'Electronics',
            image: '/electronics-cat.jpg',
            description: 'Trackers and audio',
            count: 7,
            icon: '📱',
            slug: 'electronics'
        },
        {
            name: 'Bags & Storage',
            image: '/bags-storage.jpg',
            description: 'Gym bags and organizers',
            count: 9,
            icon: '🎒',
            slug: 'bags-&-storage'
        },
        {
            name: 'Cardio Accessories',
            image: '/cardio-accessories.jpg',
            description: 'Ropes and monitors',
            count: 6,
            icon: '🏃',
            slug: 'cardio-accessories'
        }
    ];

    const filters = {
        category: ['Yoga & Mats', 'Protective Gear', 'Lifting Accessories', 'Recovery', 'Hydration', 'Electronics', 'Bags & Storage', 'Cardio Accessories', 'Hygiene'],
        priceRange: [
            'Under $25',
            '$25 - $50',
            '$50 - $100',
            '$100 - $200',
            'Above $200'
        ],
        brand: ['FlexGear', 'GripMaster', 'HydroFit', 'PowerFlex', 'IronGrip', 'RecoverPro', 'SpeedRope', 'FreshFit', 'LiftPro', 'AudioFit', 'GearMaster', 'TheraGun', 'SecureLift', 'FitTech', 'HomeFit'],
        features: ['Essential', 'New Arrival', 'Bestseller', 'Portable', 'Eco-friendly', 'Smart Tech', 'Washable', 'Adjustable']
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
            <section className="bg-gradient-to-r from-purple-800 to-pink-700 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <nav className="flex items-center space-x-2 text-sm text-pink-200 mb-4">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <ChevronLeft className="w-4 h-4 rotate-180" />
                                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                                <ChevronLeft className="w-4 h-4 rotate-180" />
                                <span className="text-white font-medium">Accessories</span>
                            </nav>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Gym Accessories
                            </h1>
                            <p className="text-xl text-pink-100 max-w-2xl">
                                Complete your workout setup with premium accessories. From protection to recovery,
                                we have everything you need to enhance your fitness journey.
                            </p>
                        </div>
                        <div className="hidden lg:block">
                            <div className="text-6xl">🎯</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-6 bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="flex items-center justify-center">
                                <Package className="w-5 h-5 text-purple-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">100+</span>
                            </div>
                            <p className="text-sm text-gray-600">Accessory Items</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Truck className="w-5 h-5 text-pink-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">Free</span>
                            </div>
                            <p className="text-sm text-gray-600">Shipping Over $50</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Shield className="w-5 h-5 text-green-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">1 Year</span>
                            </div>
                            <p className="text-sm text-gray-600">Warranty</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">24h</span>
                            </div>
                            <p className="text-sm text-gray-600">Delivery Available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Navigation */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Accessory Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {accessoryCategories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/gym-equipment/category/accessories/features/${category.slug}`}
                                className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
                            >
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-purple-200 group-hover:to-pink-300 transition-all duration-200">
                                    <div className="text-lg">{category.icon}</div>
                                </div>
                                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-purple-600 transition-colors duration-200">
                                    {category.name}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                                <span className="inline-block mt-2 text-xs bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded-full">
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
                                Gym Accessories Collection
                            </h2>
                            <p className="text-gray-600">
                                {accessoryProducts.length} essential accessories to complete your gym setup
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
                                <option value="essential">Essential Items</option>
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
                                                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
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
                                                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{brand}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Additional Filters */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-3">Product Type</h4>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                            />
                                            <span className="ml-2 text-sm text-gray-700">Essential Items</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                            />
                                            <span className="ml-2 text-sm text-gray-700">Gift Ideas</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                            />
                                            <span className="ml-2 text-sm text-gray-700">Stocking Stuffers</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                            />
                                            <span className="ml-2 text-sm text-gray-700">Under $25</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Clear Filters */}
                                <button
                                    onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], features: [] })}
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
                                    {accessoryProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                                        >
                                            <div className="relative h-64 bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
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
                                                {product.essential && (
                                                    <span className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        Essential
                                                    </span>
                                                )}
                                                {!product.inStock && (
                                                    <span className="absolute top-12 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        Out of Stock
                                                    </span>
                                                )}
                                                <div className="text-5xl">
                                                    {product.category === 'Yoga & Mats' ? '🧘' :
                                                        product.category === 'Protective Gear' ? '🥊' :
                                                            product.category === 'Lifting Accessories' ? '🏋️' :
                                                                product.category === 'Recovery' ? '💆' :
                                                                    product.category === 'Hydration' ? '💧' :
                                                                        product.category === 'Electronics' ? '📱' :
                                                                            product.category === 'Bags & Storage' ? '🎒' : '🏃'}
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
                                                        {product.features?.slice(0, 2).map((feature, index) => (
                                                            <span key={index} className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded">
                                                                {feature}
                                                            </span>
                                                        ))}
                                                        {product.features?.length > 2 && (
                                                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                                +{product.features.length - 2} more
                                                            </span>
                                                        )}{product.features?.length > 2 && (
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
                                    {accessoryProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                                        >
                                            <div className="w-48 relative bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
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
                                                    {product.category === 'Yoga & Mats' ? '🧘' :
                                                        product.category === 'Protective Gear' ? '🥊' :
                                                            product.category === 'Lifting Accessories' ? '🏋️' :
                                                                product.category === 'Recovery' ? '💆' :
                                                                    product.category === 'Hydration' ? '💧' :
                                                                        product.category === 'Electronics' ? '📱' :
                                                                            product.category === 'Bags & Storage' ? '🎒' : '🏃'}
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
                                                            {product.essential && (
                                                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                                                    Essential
                                                                </span>
                                                            )}
                                                            {!product.inStock && (
                                                                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                                                    Out of Stock
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-gray-600 mb-3">{product.description}</p>

                                                        {/* Includes and Specifications */}
                                                        <div className="grid grid-cols-2 gap-4 mb-4">
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
                                                            <div>
                                                                <div className="font-medium text-gray-500 text-sm mb-1">Specifications</div>
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
                                                                    <span key={index} className="text-sm bg-pink-50 text-pink-600 px-3 py-1 rounded-full">
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
            <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Complete Your Gym Experience
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From protection to performance tracking, our accessories are designed to enhance every aspect of your workout
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Package className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Gear</h3>
                            <p className="text-gray-600 text-sm">
                                Must-have accessories for safety, comfort, and optimal performance
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="w-8 h-8 text-pink-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Delivery</h3>
                            <p className="text-gray-600 text-sm">
                                Fast shipping on all accessory orders, most arrive within 2-3 days
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
                            <p className="text-gray-600 text-sm">
                                All accessories backed by 1-year warranty and satisfaction guarantee
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Perfect Gifts</h3>
                            <p className="text-gray-600 text-sm">
                                Great gift ideas for fitness enthusiasts at every price point
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}