// app/gym-equipment/accessories/electronics/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Package, Truck, Shield, Clock } from 'lucide-react';

export default function ElectronicsPage() {
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid');
    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
        connectivity: [],
        batteryLife: [],
        priceRange: [],
        brand: [],
        features: []
    });

    const electronicsProducts = [
        {
            id: 1,
            name: 'Fitness Tracker Watch Pro',
            price: '$149.99',
            originalPrice: '$199.99',
            image: '/fitness-tracker-pro.jpg',
            rating: 4.7,
            reviews: 523,
            category: 'Fitness Trackers',
            brand: 'FitTech',
            description: 'Advanced fitness tracker with GPS, heart rate monitoring, and sleep analysis',
            features: ['Heart Rate Monitor', 'GPS Tracking', 'Sleep Analysis', 'Water Resistant'],
            specifications: {
                display: 'AMOLED Touch',
                battery: '7 Days',
                tracking: '24/7 Heart Rate',
                connectivity: 'Bluetooth & GPS',
                water: '5ATM Waterproof'
            },
            includes: ['Fitness Tracker', 'Charging Cable', '2 Bands'],
            isNew: true,
            isBestseller: true,
            inStock: true,
            connectivity: 'Bluetooth/GPS',
            batteryLife: '7 days'
        },
        {
            id: 2,
            name: 'Wireless Fitness Earbuds Pro',
            price: '$129.99',
            originalPrice: '$169.99',
            image: '/fitness-earbuds-pro.jpg',
            rating: 4.6,
            reviews: 387,
            category: 'Audio',
            brand: 'AudioFit',
            description: 'Sweat-proof wireless earbuds with secure fit and noise cancellation',
            features: ['Active Noise Cancellation', 'Sweat Proof', '8hr Battery', 'Secure Fit'],
            specifications: {
                battery: '8 hours (32 with case)',
                connectivity: 'Bluetooth 5.2',
                rating: 'IPX7 Waterproof',
                charging: 'Wireless Case'
            },
            includes: ['Earbuds', 'Charging Case', 'Ear Tips', 'USB Cable'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            connectivity: 'Bluetooth 5.2',
            batteryLife: '8 hours'
        },
        {
            id: 3,
            name: 'Smart Jump Rope',
            price: '$79.99',
            originalPrice: '$99.99',
            image: '/smart-jump-rope.jpg',
            rating: 4.5,
            reviews: 234,
            category: 'Smart Equipment',
            brand: 'JumpSmart',
            description: 'Smart jump rope with digital counter, calorie tracking, and app connectivity',
            features: ['Digital Counter', 'Calorie Tracking', 'App Connected', 'Adjustable Length'],
            specifications: {
                counter: 'LCD Display',
                length: 'Adjustable 7-9ft',
                bearings: 'Ball Bearings',
                connectivity: 'Bluetooth'
            },
            includes: ['Smart Jump Rope', 'Carry Case'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            connectivity: 'Bluetooth',
            batteryLife: '20 hours'
        },
        {
            id: 4,
            name: 'Heart Rate Monitor Chest Strap',
            price: '$89.99',
            originalPrice: '$119.99',
            image: '/heart-rate-strap.jpg',
            rating: 4.8,
            reviews: 178,
            category: 'Heart Rate Monitors',
            brand: 'CardioTech',
            description: 'Professional chest strap heart rate monitor with accurate ECG tracking',
            features: ['ECG Accurate', 'ANT+ & Bluetooth', 'Comfort Fit', 'Long Battery'],
            specifications: {
                accuracy: 'ECG Grade',
                connectivity: 'ANT+ & Bluetooth',
                battery: '400 Hours',
                transmission: 'Real-time'
            },
            includes: ['Chest Strap', 'Battery', 'Carry Case'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            connectivity: 'ANT+/Bluetooth',
            batteryLife: '400 hours'
        },
        {
            id: 5,
            name: 'Smart Scale Pro',
            price: '$99.99',
            originalPrice: '$129.99',
            image: '/smart-scale.jpg',
            rating: 4.6,
            reviews: 312,
            category: 'Smart Scales',
            brand: 'BodyComp',
            description: 'Advanced smart scale that measures body composition and syncs with apps',
            features: ['Body Composition', 'App Sync', 'Multiple Users', 'WiFi Connected'],
            specifications: {
                metrics: '13 Body Measurements',
                connectivity: 'WiFi & Bluetooth',
                users: 'Unlimited Profiles',
                power: '4 AA Batteries'
            },
            includes: ['Smart Scale', '4 AA Batteries'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            connectivity: 'WiFi/Bluetooth',
            batteryLife: '12 months'
        },
        {
            id: 6,
            name: 'Workout Headphones (Bone Conduction)',
            price: '$149.99',
            originalPrice: '$189.99',
            image: '/bone-conduction.jpg',
            rating: 4.4,
            reviews: 198,
            category: 'Audio',
            brand: 'SoundFlow',
            description: 'Bone conduction headphones for situational awareness during workouts',
            features: ['Bone Conduction', 'Situational Awareness', '8hr Battery', 'Sweat Proof'],
            specifications: {
                technology: 'Bone Conduction',
                battery: '8 Hours',
                charging: 'Magnetic',
                rating: 'IP67 Waterproof'
            },
            includes: ['Headphones', 'Charging Cable', 'Carry Pouch'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            connectivity: 'Bluetooth 5.0',
            batteryLife: '8 hours'
        },
        {
            id: 7,
            name: 'GPS Running Watch',
            price: '$199.99',
            originalPrice: '$249.99',
            image: '/gps-running-watch.jpg',
            rating: 4.8,
            reviews: 267,
            category: 'GPS Watches',
            brand: 'RunTech',
            description: 'Advanced GPS running watch with training metrics and recovery analysis',
            features: ['Multi-band GPS', 'Training Load', 'Recovery Analysis', 'Music Storage'],
            specifications: {
                gps: 'Multi-band',
                battery: '20 Hours GPS',
                storage: '32GB Music',
                display: 'Always-on'
            },
            includes: ['GPS Watch', 'Charging Cable', 'Quick Start Guide'],
            isNew: true,
            isBestseller: true,
            inStock: true,
            connectivity: 'GPS/Bluetooth/WiFi',
            batteryLife: '20 hours GPS'
        },
        {
            id: 8,
            name: 'Smart Water Bottle',
            price: '$49.99',
            originalPrice: '$69.99',
            image: '/smart-water-bottle.jpg',
            rating: 4.3,
            reviews: 156,
            category: 'Smart Hydration',
            brand: 'HydroSmart',
            description: 'Smart water bottle with hydration tracking and LED reminders',
            features: ['Hydration Tracking', 'LED Reminders', 'Leak Proof', 'App Connected'],
            specifications: {
                capacity: '32oz',
                connectivity: 'Bluetooth',
                battery: '2 Weeks',
                display: 'LED Smart Lid'
            },
            includes: ['Smart Bottle', 'Charging Cable'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            connectivity: 'Bluetooth',
            batteryLife: '2 weeks'
        },
        {
            id: 9,
            name: 'Fitness Mirror',
            price: '$399.99',
            originalPrice: '$499.99',
            image: '/fitness-mirror.jpg',
            rating: 4.7,
            reviews: 89,
            category: 'Smart Home Gym',
            brand: 'MirrorFit',
            description: 'Interactive fitness mirror with live classes and on-demand workouts',
            features: ['Interactive Display', 'Live Classes', 'On-demand Workouts', 'Camera-free'],
            specifications: {
                display: '43" HD Mirror',
                connectivity: 'WiFi',
                storage: 'Built-in Library',
                subscription: 'Optional'
            },
            includes: ['Fitness Mirror', 'Mounting Kit', 'Remote'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            connectivity: 'WiFi',
            batteryLife: 'N/A'
        },
        {
            id: 10,
            name: 'Sleep Tracking Ring',
            price: '$179.99',
            originalPrice: '$229.99',
            image: '/sleep-ring.jpg',
            rating: 4.5,
            reviews: 134,
            category: 'Sleep Trackers',
            brand: 'SleepCircle',
            description: 'Comfortable sleep tracking ring with advanced sleep stage analysis',
            features: ['Sleep Stage Tracking', 'SpO2 Monitoring', '7-Day Battery', 'Comfortable Fit'],
            specifications: {
                battery: '7 Days',
                sensors: 'SpO2, Temperature',
                connectivity: 'Bluetooth',
                sizes: '5-13'
            },
            includes: ['Sleep Ring', 'Charging Case', 'Sizing Kit'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            connectivity: 'Bluetooth',
            batteryLife: '7 days'
        },
        {
            id: 11,
            name: 'Smart Resistance Bands Set',
            price: '$129.99',
            originalPrice: '$159.99',
            image: '/smart-resistance-bands.jpg',
            rating: 4.4,
            reviews: 178,
            category: 'Smart Equipment',
            brand: 'PowerTech',
            description: 'Smart resistance bands with force sensors and app-guided workouts',
            features: ['Force Sensors', 'App Guided', '5 Resistance Levels', 'Real-time Feedback'],
            specifications: {
                resistance: '10-50lb Digital',
                connectivity: 'Bluetooth',
                battery: '10 Hours',
                sensors: 'Force & Position'
            },
            includes: ['5 Smart Bands', 'Handles', 'App Access'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            connectivity: 'Bluetooth',
            batteryLife: '10 hours'
        },
        {
            id: 12,
            name: 'Portable Bluetooth Speaker',
            price: '$79.99',
            originalPrice: '$99.99',
            image: '/bluetooth-speaker.jpg',
            rating: 4.6,
            reviews: 423,
            category: 'Audio',
            brand: 'SoundRush',
            description: 'Rugged portable speaker with powerful sound for gym and outdoor use',
            features: ['360° Sound', 'IP67 Waterproof', '20hr Battery', 'Party Pairing'],
            specifications: {
                battery: '20 Hours',
                connectivity: 'Bluetooth 5.0',
                rating: 'IP67 Dust/Water',
                power: '40W Output'
            },
            includes: ['Bluetooth Speaker', 'Charging Cable', 'Carry Strap'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            connectivity: 'Bluetooth 5.0',
            batteryLife: '20 hours'
        },
        {
            id: 13,
            name: 'Smart Gym Timer',
            price: '$59.99',
            originalPrice: '$79.99',
            image: '/smart-gym-timer.jpg',
            rating: 4.5,
            reviews: 145,
            category: 'Timers & Trackers',
            brand: 'TimeMaster',
            description: 'Digital gym timer with interval programming and large display',
            features: ['Interval Timer', 'Large Display', 'Multiple Programs', 'Magnetic Back'],
            specifications: {
                display: '5" LED',
                programs: '99 Custom',
                power: 'Rechargeable',
                mounting: 'Magnetic/Stand'
            },
            includes: ['Smart Timer', 'Charging Cable', 'Wall Mount'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            connectivity: 'Bluetooth',
            batteryLife: '30 hours'
        },
        {
            id: 14,
            name: 'VR Fitness Headset',
            price: '$299.99',
            originalPrice: '$399.99',
            image: '/vr-fitness.jpg',
            rating: 4.3,
            reviews: 98,
            category: 'VR Fitness',
            brand: 'FitVR',
            description: 'Virtual reality headset for immersive fitness games and workouts',
            features: ['Immersive Workouts', 'Fitness Games', 'Wireless', 'Motion Tracking'],
            specifications: {
                resolution: '4K per Eye',
                tracking: '6DOF Motion',
                battery: '2 Hours',
                storage: '128GB'
            },
            includes: ['VR Headset', '2 Controllers', 'Charging Dock'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            connectivity: 'WiFi/Bluetooth',
            batteryLife: '2 hours'
        },
        {
            id: 15,
            name: 'Smart Yoga Mat',
            price: '$199.99',
            originalPrice: '$249.99',
            image: '/smart-yoga-mat.jpg',
            rating: 4.6,
            reviews: 167,
            category: 'Smart Equipment',
            brand: 'YogaTech',
            description: 'Smart yoga mat with pose detection and real-time form correction',
            features: ['Pose Detection', 'Form Correction', 'Guided Sessions', 'Progress Tracking'],
            specifications: {
                sensors: 'Pressure & Motion',
                connectivity: 'Bluetooth',
                battery: '8 Hours',
                material: 'Eco-friendly TPE'
            },
            includes: ['Smart Yoga Mat', 'Charging Pad', 'App Access'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            connectivity: 'Bluetooth',
            batteryLife: '8 hours'
        }
    ];

    const electronicsCategories = [
        {
            name: 'Fitness Trackers',
            image: '/fitness-trackers.jpg',
            description: 'Activity monitoring',
            count: 8,
            icon: '⌚',
            slug: 'fitness-trackers'
        },
        {
            name: 'Audio & Headphones',
            image: '/fitness-audio.jpg',
            description: 'Workout sound',
            count: 6,
            icon: '🎧',
            slug: 'audio'
        },
        {
            name: 'Smart Equipment',
            image: '/smart-equipment.jpg',
            description: 'Connected gear',
            count: 5,
            icon: '🏋️',
            slug: 'smart-equipment'
        },
        {
            name: 'Heart Rate Monitors',
            image: '/heart-rate-monitors.jpg',
            description: 'Precision tracking',
            count: 4,
            icon: '💓',
            slug: 'heart-rate'
        },
        {
            name: 'GPS Watches',
            image: '/gps-watches.jpg',
            description: 'Outdoor training',
            count: 3,
            icon: '📍',
            slug: 'gps-watches'
        },
        {
            name: 'Smart Scales',
            image: '/smart-scales.jpg',
            description: 'Body composition',
            count: 4,
            icon: '⚖️',
            slug: 'smart-scales'
        },
        {
            name: 'Sleep Trackers',
            image: '/sleep-trackers.jpg',
            description: 'Recovery monitoring',
            count: 3,
            icon: '😴',
            slug: 'sleep-trackers'
        },
        {
            name: 'VR Fitness',
            image: '/vr-fitness-cat.jpg',
            description: 'Immersive workouts',
            count: 2,
            icon: '🥽',
            slug: 'vr-fitness'
        }
    ];

    const filters = {
        category: ['Fitness Trackers', 'Audio', 'Smart Equipment', 'Heart Rate Monitors', 'GPS Watches', 'Smart Scales', 'Sleep Trackers', 'Smart Hydration', 'Timers & Trackers', 'VR Fitness'],
        connectivity: ['Bluetooth', 'WiFi', 'GPS', 'ANT+', 'NFC', 'Cellular'],
        batteryLife: ['Under 5 hours', '5-10 hours', '10-20 hours', '20+ hours', 'Multiple days', 'N/A'],
        priceRange: [
            'Under $50',
            '$50 - $100',
            '$100 - $200',
            '$200 - $300',
            '$300 - $500',
            'Above $500'
        ],
        brand: ['FitTech', 'AudioFit', 'JumpSmart', 'CardioTech', 'BodyComp', 'SoundFlow', 'RunTech', 'HydroSmart', 'MirrorFit', 'SleepCircle', 'PowerTech', 'SoundRush', 'TimeMaster', 'FitVR', 'YogaTech'],
        features: ['Waterproof', 'GPS', 'Heart Rate Monitor', 'App Connected', 'Wireless Charging', 'Voice Assistant', 'Music Storage', 'Live Tracking', 'Sleep Tracking', 'Multi-sport']
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
            <section className="bg-gradient-to-r from-purple-800 to-indigo-700 py-16">
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
                                <span className="text-white font-medium">Electronics</span>
                            </nav>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Fitness Electronics
                            </h1>
                            <p className="text-xl text-indigo-100 max-w-2xl">
                                Smart technology to enhance your training. From advanced trackers to connected equipment, 
                                elevate your workouts with cutting-edge electronics.
                            </p>
                        </div>
                        <div className="hidden lg:block">
                            <div className="text-6xl">📱</div>
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
                                <span className="text-2xl font-bold text-gray-900">60+</span>
                            </div>
                            <p className="text-sm text-gray-600">Smart Devices</p>
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
                                <Shield className="w-5 h-5 text-purple-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">2 Year</span>
                            </div>
                            <p className="text-sm text-gray-600">Warranty</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">Smart</span>
                            </div>
                            <p className="text-sm text-gray-600">App Connected</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Navigation */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Electronics Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {electronicsCategories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/gym-equipment/accessories/electronics/${category.slug}`}
                                className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
                            >
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-purple-200 group-hover:to-indigo-300 transition-all duration-200">
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
                                Smart Fitness Electronics
                            </h2>
                            <p className="text-gray-600">
                                {electronicsProducts.length} advanced electronic devices to track, analyze, and enhance your fitness journey
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
                                <option value="battery">Battery Life</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filters Sidebar */}
                        <div className="lg:w-72 flex-shrink-0">
                            <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <Filter className="w-5 h-5 mr-2" />
                                    Filter Electronics
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

                                {/* Connectivity Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-3">Connectivity</h4>
                                    <div className="space-y-2">
                                        {filters.connectivity.map((connectivity) => (
                                            <label key={connectivity} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFilters.connectivity.includes(connectivity)}
                                                    onChange={() => toggleFilter('connectivity', connectivity)}
                                                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{connectivity}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Battery Life Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-3">Battery Life</h4>
                                    <div className="space-y-2">
                                        {filters.batteryLife.map((battery) => (
                                            <label key={battery} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFilters.batteryLife.includes(battery)}
                                                    onChange={() => toggleFilter('batteryLife', battery)}
                                                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{battery}</span>
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

                                {/* Clear Filters */}
                                <button
                                    onClick={() => setSelectedFilters({ category: [], connectivity: [], batteryLife: [], priceRange: [], brand: [], features: [] })}
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
                                    {electronicsProducts.map((product) => (
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
                                                <div className="text-5xl">
                                                    {product.category === 'Fitness Trackers' ? '⌚' :
                                                     product.category === 'Audio' ? '🎧' :
                                                     product.category === 'Smart Equipment' ? '🏋️' :
                                                     product.category === 'Heart Rate Monitors' ? '💓' :
                                                     product.category === 'GPS Watches' ? '📍' :
                                                     product.category === 'Smart Scales' ? '⚖️' :
                                                     product.category === 'Sleep Trackers' ? '😴' :
                                                     product.category === 'Smart Hydration' ? '💧' :
                                                     product.category === 'Timers & Trackers' ? '⏱️' : '🥽'}
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

                                                {/* Connectivity & Battery */}
                                                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                                                    <span><strong>Connectivity:</strong> {product.connectivity}</span>
                                                    <span><strong>Battery:</strong> {product.batteryLife}</span>
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
                                    {electronicsProducts.map((product) => (
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
                                                    {product.category === 'Fitness Trackers' ? '⌚' :
                                                     product.category === 'Audio' ? '🎧' :
                                                     product.category === 'Smart Equipment' ? '🏋️' :
                                                     product.category === 'Heart Rate Monitors' ? '💓' :
                                                     product.category === 'GPS Watches' ? '📍' :
                                                     product.category === 'Smart Scales' ? '⚖️' :
                                                     product.category === 'Sleep Trackers' ? '😴' :
                                                     product.category === 'Smart Hydration' ? '💧' :
                                                     product.category === 'Timers & Trackers' ? '⏱️' : '🥽'}
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
                                                            {product.isNew && (
                                                                <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                                                                    New
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-gray-600 mb-3">{product.description}</p>

                                                        {/* Connectivity & Specifications */}
                                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                                            <div>
                                                                <div className="font-medium text-gray-500 text-sm mb-1">Details</div>
                                                                <div className="text-sm text-gray-600 space-y-1">
                                                                    <div><strong>Connectivity:</strong> {product.connectivity}</div>
                                                                    <div><strong>Battery:</strong> {product.batteryLife}</div>
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
                            Smart Training, Better Results
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Advanced electronics designed to track your progress, optimize your workouts, and take your fitness to the next level
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Package className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Tracking</h3>
                            <p className="text-gray-600 text-sm">
                                Precise metrics for heart rate, GPS, sleep, and activity monitoring
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="w-8 h-8 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Connectivity</h3>
                            <p className="text-gray-600 text-sm">
                                Seamless app integration and real-time data synchronization
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Long Battery Life</h3>
                            <p className="text-gray-600 text-sm">
                                Extended battery performance for uninterrupted training sessions
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Grade</h3>
                            <p className="text-gray-600 text-sm">
                                Technology trusted by athletes and fitness professionals worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}