// app/gym-equipment/accessories/cardio-accessories/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Package, Truck, Shield, Clock, Search, Activity, Monitor, Headphones, Watch } from 'lucide-react';

export default function CardioAccessoriesPage() {
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
        priceRange: [],
        brand: [],
        features: [],
        compatibility: []
    });

    const cardioAccessoriesProducts = [
        {
            id: 1,
            name: 'Digital Jump Rope Pro',
            price: '$34.99',
            originalPrice: '$49.99',
            image: '/jump-rope-pro.jpg',
            rating: 4.6,
            reviews: 287,
            category: 'Jump Ropes',
            brand: 'SpeedRope',
            description: 'Smart jump rope with digital counter, adjustable length, and ball bearings for smooth rotation',
            features: ['Digital Counter', 'Adjustable Length', 'Ball Bearings', 'Carry Case', 'LCD Display'],
            specifications: {
                counter: 'LCD Digital Display',
                length: 'Adjustable 7-9ft',
                bearings: 'High-speed Ball Bearings',
                rope: 'PVC Coated Steel Cable',
                battery: 'CR2032 (6 months)'
            },
            includes: ['Jump Rope', 'Carry Case', 'Extra Bearings'],
            isNew: true,
            isBestseller: true,
            inStock: true,
            essential: true,
            compatibility: ['All Fitness Levels'],
            activityType: 'HIIT/Cardio'
        },
        {
            id: 2,
            name: 'Wireless Heart Rate Monitor',
            price: '$79.99',
            originalPrice: '$99.99',
            image: '/heart-rate-monitor.jpg',
            rating: 4.7,
            reviews: 456,
            category: 'Monitoring',
            brand: 'CardioTech',
            description: 'Chest strap heart rate monitor with Bluetooth connectivity and real-time tracking',
            features: ['Bluetooth Connectivity', 'Real-time Tracking', 'Water Resistant', 'App Integration', 'Long Battery'],
            specifications: {
                connectivity: 'Bluetooth 5.0',
                battery: '1 Year (CR2032)',
                waterResistance: 'IP67',
                range: '33ft',
                compatibility: 'iOS/Android'
            },
            includes: ['Chest Strap', 'CR2032 Battery', 'Carry Pouch'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            essential: true,
            compatibility: ['iOS', 'Android', 'Smart Watches'],
            activityType: 'All Cardio'
        },
        {
            id: 3,
            name: 'Treadmill Phone Mount',
            price: '$24.99',
            originalPrice: '$34.99',
            image: '/treadmill-phone-mount.jpg',
            rating: 4.4,
            reviews: 189,
            category: 'Equipment Mounts',
            brand: 'FitMount',
            description: 'Universal phone mount for treadmills and cardio equipment with adjustable grip',
            features: ['Universal Fit', 'Adjustable Grip', '360° Rotation', 'Rubber Padding', 'Easy Installation'],
            specifications: {
                compatibility: 'All Phones 4-7"',
                material: 'ABS Plastic + Rubber',
                adjustment: '360° Rotatable',
                installation: 'No Tools Required',
                weight: '0.3lb'
            },
            includes: ['Phone Mount', 'Rubber Pads'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            essential: false,
            compatibility: ['All Treadmills', 'Exercise Bikes', 'Ellipticals'],
            activityType: 'Indoor Cardio'
        },
        {
            id: 4,
            name: 'Sweat-Proof Wireless Earbuds',
            price: '$89.99',
            originalPrice: '$119.99',
            image: '/sweatproof-earbuds.jpg',
            rating: 4.5,
            reviews: 523,
            category: 'Audio',
            brand: 'AudioFit',
            description: 'Secure fit wireless earbuds with IPX7 waterproof rating and 8-hour battery',
            features: ['IPX7 Waterproof', '8hr Battery', 'Secure Fit', 'Touch Controls', 'Ambient Sound'],
            specifications: {
                battery: '8 hours (24 with case)',
                connectivity: 'Bluetooth 5.2',
                waterproof: 'IPX7',
                charging: 'Wireless Case',
                weight: '0.2oz per earbud'
            },
            includes: ['Earbuds', 'Charging Case', 'Ear Tips', 'USB-C Cable'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            essential: true,
            compatibility: ['Bluetooth Devices'],
            activityType: 'All Cardio'
        },
        {
            id: 5,
            name: 'Exercise Bike Phone Tablet Holder',
            price: '$29.99',
            originalPrice: '$39.99',
            image: '/bike-tablet-holder.jpg',
            rating: 4.3,
            reviews: 167,
            category: 'Equipment Mounts',
            brand: 'CycleMount',
            description: 'Adjustable holder for phones and tablets on exercise bikes and spin bikes',
            features: ['Phone & Tablet Compatible', 'Adjustable Clamp', 'Anti-slip Padding', 'Easy Adjust', 'Sturdy Build'],
            specifications: {
                compatibility: 'Phones & Tablets 4-12"',
                material: 'Aluminum + Rubber',
                adjustment: 'Multi-angle',
                clamp: '1-2.5" diameter',
                weight: '0.8lb'
            },
            includes: ['Tablet Holder', 'Mounting Clamp'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            essential: false,
            compatibility: ['Exercise Bikes', 'Spin Bikes'],
            activityType: 'Cycling'
        },
        {
            id: 6,
            name: 'Cardio Workout Fan',
            price: '$39.99',
            originalPrice: '$49.99',
            image: '/workout-fan.jpg',
            rating: 4.6,
            reviews: 234,
            category: 'Comfort',
            brand: 'CoolWorkout',
            description: 'Personal workout fan with adjustable mount and USB rechargeable battery',
            features: ['USB Rechargeable', 'Adjustable Mount', '3 Speed Settings', 'Quiet Operation', 'LED Display'],
            specifications: {
                battery: '2000mAh (8 hours)',
                speeds: '3 Settings',
                noise: '<30dB',
                charging: 'USB-C',
                runtime: '4-8 hours'
            },
            includes: ['Workout Fan', 'USB-C Cable', 'Mounting Bracket'],
            isNew: true,
            isBestseller: true,
            inStock: true,
            essential: false,
            compatibility: ['Treadmills', 'Bikes', 'Ellipticals'],
            activityType: 'Indoor Cardio'
        },
        {
            id: 7,
            name: 'Elite Speed Rope',
            price: '$19.99',
            originalPrice: '$29.99',
            image: '/speed-rope.jpg',
            rating: 4.7,
            reviews: 378,
            category: 'Jump Ropes',
            brand: 'JumpElite',
            description: 'Competition-grade speed rope with ball bearing system and lightweight cable',
            features: ['Competition Grade', 'Ball Bearings', 'Lightweight Cable', 'Adjustable Length', 'Carry Bag'],
            specifications: {
                bearings: 'High-speed Ball Bearings',
                cable: '2.5mm Steel Cable',
                length: 'Adjustable 8-9ft',
                handles: 'Composite Material',
                weight: '0.4lb'
            },
            includes: ['Speed Rope', 'Carry Bag'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            essential: true,
            compatibility: ['All Fitness Levels'],
            activityType: 'HIIT/Boxing'
        },
        {
            id: 8,
            name: 'Fitness Armband Phone Holder',
            price: '$16.99',
            originalPrice: '$24.99',
            image: '/armband-holder.jpg',
            rating: 4.2,
            reviews: 145,
            category: 'Wearables',
            brand: 'RunSecure',
            description: 'Comfortable armband phone holder with touchscreen access and reflective strip',
            features: ['Touchscreen Access', 'Reflective Strip', 'Adjustable Strap', 'Sweat Resistant', 'Universal Fit'],
            specifications: {
                compatibility: 'Phones up to 6.5"',
                material: 'Neoprene + Plastic',
                strap: 'Adjustable 8-16"',
                features: 'Reflective Safety',
                weight: '0.2lb'
            },
            includes: ['Armband', 'Cable Management'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            essential: false,
            compatibility: ['All Phones'],
            activityType: 'Running/Walking'
        },
        {
            id: 9,
            name: 'Smart Water Bottle with Hydration Tracking',
            price: '$49.99',
            originalPrice: '$69.99',
            image: '/smart-water-bottle.jpg',
            rating: 4.4,
            reviews: 198,
            category: 'Hydration',
            brand: 'HydroSmart',
            description: 'Smart water bottle with hydration tracking and LED reminders',
            features: ['Hydration Tracking', 'LED Reminders', 'Leak Proof', 'BPA Free', 'App Connectivity'],
            specifications: {
                capacity: '32oz',
                material: 'Tritan Plastic',
                connectivity: 'Bluetooth',
                battery: '2 Weeks',
                tracking: 'ML-based Sensor'
            },
            includes: ['Water Bottle', 'Charging Cable', 'User Manual'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            essential: false,
            compatibility: ['iOS', 'Android'],
            activityType: 'All Cardio'
        },
        {
            id: 10,
            name: 'Resistance Bands for Cardio',
            price: '$44.99',
            originalPrice: '$59.99',
            image: '/cardio-resistance-bands.jpg',
            rating: 4.5,
            reviews: 267,
            category: 'Resistance Training',
            brand: 'CardioBands',
            description: 'Set of 5 resistance bands specifically designed for cardio and HIIT workouts',
            features: ['5 Resistance Levels', 'Door Anchor', 'Ankle Straps', 'Carry Bag', 'Latex Free'],
            specifications: {
                resistance: '10-50lb Total',
                material: 'Natural Latex Free',
                length: '48 inches',
                set: '5 Bands + Accessories',
                storage: 'Carry Bag Included'
            },
            includes: ['5 Bands', 'Door Anchor', 'Ankle Straps', 'Handles', 'Carry Bag'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            essential: true,
            compatibility: ['Home Gym', 'Travel'],
            activityType: 'HIIT/Resistance'
        },
        {
            id: 11,
            name: 'Running Belt with Water Bottle',
            price: '$32.99',
            originalPrice: '$44.99',
            image: '/running-belt.jpg',
            rating: 4.3,
            reviews: 189,
            category: 'Wearables',
            brand: 'RunHydrate',
            description: 'Hydration running belt with water bottle pocket and phone compartment',
            features: ['Water Bottle Pocket', 'Phone Compartment', 'Adjustable Fit', 'Reflective', 'Sweat Proof'],
            specifications: {
                capacity: '16oz Bottle + Phone',
                material: 'Nylon + Spandex',
                waist: 'Adjustable 25-42"',
                pockets: '3 Compartments',
                weight: '0.3lb'
            },
            includes: ['Running Belt', '16oz Water Bottle'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            essential: false,
            compatibility: ['All Phones'],
            activityType: 'Running'
        },
        {
            id: 12,
            name: 'Elliptical Device Holder',
            price: '$27.99',
            originalPrice: '$37.99',
            image: '/elliptical-holder.jpg',
            rating: 4.4,
            reviews: 134,
            category: 'Equipment Mounts',
            brand: 'ElliptiMount',
            description: 'Secure device holder specifically designed for elliptical machines',
            features: ['Elliptical Specific', 'Secure Grip', 'Easy Installation', 'Angle Adjustment', 'Universal Fit'],
            specifications: {
                compatibility: 'Elliptical Consoles',
                material: 'ABS + Rubber',
                adjustment: 'Multi-position',
                installation: 'Tool-free',
                weight: '0.5lb'
            },
            includes: ['Device Holder', 'Mounting Hardware'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            essential: false,
            compatibility: ['Most Ellipticals'],
            activityType: 'Elliptical'
        },
        {
            id: 13,
            name: 'Cardio Workout Mat',
            price: '$54.99',
            originalPrice: '$74.99',
            image: '/cardio-mat.jpg',
            rating: 4.6,
            reviews: 278,
            category: 'Flooring',
            brand: 'MatPro',
            description: 'Extra-thick cardio workout mat with non-slip surface and shock absorption',
            features: ['Shock Absorption', 'Non-slip Surface', 'Extra Thick', 'Easy Clean', 'Portable'],
            specifications: {
                thickness: '12mm',
                material: 'High-density Foam',
                size: '6x4 feet',
                weight: '8.5lb',
                features: 'Non-toxic Materials'
            },
            includes: ['Cardio Mat', 'Carry Strap'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            essential: true,
            compatibility: ['All Floor Types'],
            activityType: 'HIIT/Floor Workouts'
        },
        {
            id: 14,
            name: 'Wireless Fitness Tracker',
            price: '$99.99',
            originalPrice: '$129.99',
            image: '/fitness-tracker.jpg',
            rating: 4.7,
            reviews: 645,
            category: 'Monitoring',
            brand: 'FitTrack',
            description: 'Advanced fitness tracker with heart rate, GPS, and 20+ sport modes',
            features: ['Heart Rate Monitor', 'GPS Tracking', '20 Sport Modes', 'Sleep Tracking', 'Water Resistant'],
            specifications: {
                display: 'AMOLED Touch',
                battery: '7 Days',
                tracking: '24/7 Heart Rate',
                connectivity: 'Bluetooth & GPS',
                waterResistance: '5ATM'
            },
            includes: ['Fitness Tracker', 'Charging Cable', '2 Bands'],
            isNew: true,
            isBestseller: true,
            inStock: true,
            essential: false,
            compatibility: ['iOS', 'Android'],
            activityType: 'All Cardio'
        },
        {
            id: 15,
            name: 'Portable Exercise Mat',
            price: '$39.99',
            originalPrice: '$54.99',
            image: '/portable-mat.jpg',
            rating: 4.5,
            reviews: 223,
            category: 'Flooring',
            brand: 'GoMat',
            description: 'Lightweight portable exercise mat for cardio workouts anywhere',
            features: ['Ultra Lightweight', 'Roll-up Design', 'Non-slip Bottom', 'Easy Clean', 'Carry Strap'],
            specifications: {
                thickness: '6mm',
                material: 'TPE Eco-friendly',
                size: '72x24 inches',
                weight: '3.2lb',
                features: 'Antimicrobial'
            },
            includes: ['Exercise Mat', 'Carry Strap'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            essential: true,
            compatibility: ['Indoor/Outdoor'],
            activityType: 'Travel Cardio'
        }
    ];

    const cardioCategories = [
        {
            name: 'Jump Ropes',
            image: '/jump-ropes-cat.jpg',
            description: 'Speed and weighted ropes',
            count: 12,
            icon: '🏃',
            slug: 'jump-ropes'
        },
        {
            name: 'Monitoring',
            image: '/monitoring-cat.jpg',
            description: 'Heart rate and trackers',
            count: 8,
            icon: '❤️',
            slug: 'monitoring'
        },
        {
            name: 'Equipment Mounts',
            image: '/equipment-mounts-cat.jpg',
            description: 'Phone and tablet holders',
            count: 15,
            icon: '📱',
            slug: 'equipment-mounts'
        },
        {
            name: 'Audio',
            image: '/audio-cat.jpg',
            description: 'Headphones and speakers',
            count: 9,
            icon: '🎧',
            slug: 'audio'
        },
        {
            name: 'Hydration',
            image: '/hydration-cat.jpg',
            description: 'Bottles and belts',
            count: 11,
            icon: '💧',
            slug: 'hydration'
        },
        {
            name: 'Wearables',
            image: '/wearables-cat.jpg',
            description: 'Belts and armbands',
            count: 7,
            icon: '⌚',
            slug: 'wearables'
        },
        {
            name: 'Resistance Training',
            image: '/resistance-cat.jpg',
            description: 'Bands and tubes',
            count: 6,
            icon: '💪',
            slug: 'resistance-training'
        },
        {
            name: 'Flooring',
            image: '/flooring-cat.jpg',
            description: 'Mats and flooring',
            count: 5,
            icon: '🧘',
            slug: 'flooring'
        }
    ];

    const filters = {
        category: ['Jump Ropes', 'Monitoring', 'Equipment Mounts', 'Audio', 'Hydration', 'Wearables', 'Resistance Training', 'Flooring', 'Comfort'],
        priceRange: [
            'Under $25',
            '$25 - $50',
            '$50 - $100',
            '$100 - $200',
            'Above $200'
        ],
        brand: ['SpeedRope', 'CardioTech', 'FitMount', 'AudioFit', 'CycleMount', 'CoolWorkout', 'JumpElite', 'RunSecure', 'HydroSmart', 'CardioBands', 'RunHydrate', 'ElliptiMount', 'MatPro', 'FitTrack', 'GoMat'],
        features: ['Essential', 'New Arrival', 'Bestseller', 'Wireless', 'Water Resistant', 'Adjustable', 'App Connected', 'Portable'],
        compatibility: ['iOS', 'Android', 'Treadmills', 'Exercise Bikes', 'Ellipticals', 'All Phones', 'Smart Watches']
    };

    const toggleFilter = (filterType, value) => {
        setSelectedFilters(prev => ({
            ...prev,
            [filterType]: prev[filterType].includes(value)
                ? prev[filterType].filter((item) => item !== value)
                : [...prev[filterType], value]
        }));
    };

    // Filter products based on search query and selected filters
    const filteredProducts = cardioAccessoriesProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.brand.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesCategory = selectedFilters.category.length === 0 || 
                               selectedFilters.category.includes(product.category);
        
        const matchesBrand = selectedFilters.brand.length === 0 || 
                            selectedFilters.brand.includes(product.brand);
        
        const matchesFeatures = selectedFilters.features.length === 0 || 
                               selectedFilters.features.some(feature => {
                                   if (feature === 'Essential') return product.essential;
                                   if (feature === 'New Arrival') return product.isNew;
                                   if (feature === 'Bestseller') return product.isBestseller;
                                   return product.features.includes(feature);
                               });

        const matchesCompatibility = selectedFilters.compatibility.length === 0 || 
                                   selectedFilters.compatibility.some(comp => 
                                       product.compatibility.includes(comp)
                                   );

        return matchesSearch && matchesCategory && matchesBrand && matchesFeatures && matchesCompatibility;
    });

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-red-700 to-orange-600 py-16">
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
                                <span className="text-white font-medium">Cardio Accessories</span>
                            </nav>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Cardio Accessories
                            </h1>
                            <p className="text-xl text-orange-100 max-w-2xl">
                                Enhance your cardio workouts with smart monitoring, comfortable gear, and performance-boosting accessories.
                            </p>
                        </div>
                        <div className="hidden lg:block">
                            <div className="text-6xl">🏃‍♂️</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-6 bg-gradient-to-r from-red-50 to-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="flex items-center justify-center">
                                <Activity className="w-5 h-5 text-red-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">60+</span>
                            </div>
                            <p className="text-sm text-gray-600">Cardio Accessories</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Monitor className="w-5 h-5 text-orange-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">Smart</span>
                            </div>
                            <p className="text-sm text-gray-600">Tech Enabled</p>
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
                                <span className="text-2xl font-bold text-gray-900">Fast</span>
                            </div>
                            <p className="text-sm text-gray-600">Same Day Shipping</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search Bar */}
            <section className="py-6 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search cardio accessories, monitors, trackers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Navigation */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Cardio Accessory Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {cardioCategories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/gym-equipment/accessories/cardio-accessories/${category.slug}`}
                                className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
                            >
                                <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-red-200 group-hover:to-orange-300 transition-all duration-200">
                                    <div className="text-lg">{category.icon}</div>
                                </div>
                                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-red-600 transition-colors duration-200">
                                    {category.name}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                                <span className="inline-block mt-2 text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full">
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
                                Cardio Accessories Collection
                            </h2>
                            <p className="text-gray-600">
                                {filteredProducts.length} products to enhance your cardio workouts and track your performance
                            </p>
                        </div>

                        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                            {/* View Mode Toggle */}
                            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-white text-gray-600'}`}
                                >
                                    <Grid className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 ${viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-white text-gray-600'}`}
                                >
                                    <List className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Sort By */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                                <option value="newest">Newest First</option>
                                <option value="essential">Essential Items</option>
                                <option value="activity">By Activity Type</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filters Sidebar */}
                        <div className="lg:w-80 flex-shrink-0">
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
                                                    className="rounded border-gray-300 text-red-600 focus:ring-red-500"
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
                                                    className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{range}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Compatibility Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-3">Compatibility</h4>
                                    <div className="space-y-2">
                                        {filters.compatibility.map((comp) => (
                                            <label key={comp} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFilters.compatibility.includes(comp)}
                                                    onChange={() => toggleFilter('compatibility', comp)}
                                                    className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{comp}</span>
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
                                                    className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{feature}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Activity Type Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-3">Activity Type</h4>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                            <span className="ml-2 text-sm text-gray-700">Running</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                            <span className="ml-2 text-sm text-gray-700">Cycling</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                            <span className="ml-2 text-sm text-gray-700">HIIT</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                            <span className="ml-2 text-sm text-gray-700">Indoor Cardio</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                            <span className="ml-2 text-sm text-gray-700">All Activities</span>
                                        </label>
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
                                                    className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{brand}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Clear Filters */}
                                <button
                                    onClick={() => setSelectedFilters({ 
                                        category: [], 
                                        priceRange: [], 
                                        brand: [], 
                                        features: [],
                                        compatibility: []
                                    })}
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
                                    {filteredProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                                        >
                                            <div className="relative h-64 bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center">
                                                {product.isNew && (
                                                    <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
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
                                                    {product.category === 'Jump Ropes' ? '🏃' :
                                                     product.category === 'Monitoring' ? '❤️' :
                                                     product.category === 'Equipment Mounts' ? '📱' :
                                                     product.category === 'Audio' ? '🎧' :
                                                     product.category === 'Hydration' ? '💧' :
                                                     product.category === 'Wearables' ? '⌚' :
                                                     product.category === 'Resistance Training' ? '💪' : '🧘'}
                                                </div>
                                                <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    <Heart className="w-5 h-5 text-gray-600" />
                                                </button>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                                                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                                        {product.category}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-3">{product.description}</p>

                                                {/* Activity Type and Compatibility */}
                                                <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                                                    <div className="text-gray-500">
                                                        <strong>Activity:</strong> {product.activityType}
                                                    </div>
                                                    <div className="text-gray-500">
                                                        <strong>Compatibility:</strong> {product.compatibility[0]}
                                                    </div>
                                                    {Object.entries(product.specifications).slice(0, 2).map(([key, value], index) => (
                                                        <div key={index} className="text-gray-500">
                                                            <strong>{key}:</strong> {value}
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Features */}
                                                <div className="mb-3">
                                                    <div className="flex flex-wrap gap-1">
                                                        {product.features.slice(0, 3).map((feature, index) => (
                                                            <span key={index} className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded">
                                                                {feature}
                                                            </span>
                                                        ))}
                                                        {product.features.length > 3 && (
                                                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                                +{product.features.length - 3} more
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
                                                            ? 'bg-red-600 text-white hover:bg-red-700'
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
                                    {filteredProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                                        >
                                            <div className="w-48 relative bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center">
                                                {product.isNew && (
                                                    <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        New
                                                    </span>
                                                )}
                                                {product.isBestseller && (
                                                    <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        Bestseller
                                                    </span>
                                                )}
                                                <div className="text-4xl">
                                                    {product.category === 'Jump Ropes' ? '🏃' :
                                                     product.category === 'Monitoring' ? '❤️' :
                                                     product.category === 'Equipment Mounts' ? '📱' :
                                                     product.category === 'Audio' ? '🎧' :
                                                     product.category === 'Hydration' ? '💧' :
                                                     product.category === 'Wearables' ? '⌚' :
                                                     product.category === 'Resistance Training' ? '💪' : '🧘'}
                                                </div>
                                            </div>
                                            <div className="flex-1 p-6">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                                                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
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

                                                        {/* Specifications Grid */}
                                                        <div className="grid grid-cols-3 gap-4 mb-4">
                                                            <div>
                                                                <div className="font-medium text-gray-500 text-sm mb-1">Activity Type</div>
                                                                <div className="text-sm text-gray-900">{product.activityType}</div>
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-500 text-sm mb-1">Compatibility</div>
                                                                <div className="text-sm text-gray-900">{product.compatibility.join(', ')}</div>
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-500 text-sm mb-1">Key Spec</div>
                                                                <div className="text-sm text-gray-900">{Object.values(product.specifications)[0]}</div>
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
                                                            ? 'bg-red-600 text-white hover:bg-red-700'
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
            <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Elevate Your Cardio Experience
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From performance tracking to workout comfort, our cardio accessories help you achieve better results
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Activity className="w-8 h-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Tracking</h3>
                            <p className="text-gray-600 text-sm">
                                Monitor heart rate, calories, and performance metrics in real-time
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Headphones className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Workout Entertainment</h3>
                            <p className="text-gray-600 text-sm">
                                Stay motivated with comfortable audio and device mounting solutions
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Durability Guaranteed</h3>
                            <p className="text-gray-600 text-sm">
                                All accessories built to withstand intense cardio sessions
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Watch className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Technology</h3>
                            <p className="text-gray-600 text-sm">
                                Connected accessories that sync with your favorite fitness apps
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}