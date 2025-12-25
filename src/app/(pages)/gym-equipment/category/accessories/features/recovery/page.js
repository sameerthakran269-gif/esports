// app/gym-equipment/accessories/recovery/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Package, Truck, Shield, Clock } from 'lucide-react';

export default function RecoveryPage() {
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid');
    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
        material: [],
        intensity: [],
        priceRange: [],
        brand: [],
        features: []
    });

    const recoveryProducts = [
        {
            id: 1,
            name: 'Massage Gun Pro',
            price: '$149.99',
            originalPrice: '$199.99',
            image: '/massage-gun-pro.jpg',
            rating: 4.8,
            reviews: 512,
            category: 'Percussion Massagers',
            brand: 'TheraGun',
            description: 'Professional percussion massager with multiple attachments for deep tissue therapy',
            features: ['6 Attachments', '5 Speed Settings', 'Quiet Operation', 'Long Battery'],
            specifications: {
                attachments: '6 Different Heads',
                speed: '5 Levels (1800-3200rpm)',
                battery: '4 Hours',
                noise: '<45dB',
                pressure: '60lbs Force'
            },
            includes: ['Massage Gun', '6 Attachments', 'Carry Case', 'Charger'],
            isNew: true,
            isBestseller: true,
            inStock: true,
            material: 'Aluminum/Plastic',
            intensity: 'Professional'
        },
        {
            id: 2,
            name: 'Foam Roller Set (3-Piece)',
            price: '$59.99',
            originalPrice: '$79.99',
            image: '/foam-roller-set.jpg',
            rating: 4.7,
            reviews: 289,
            category: 'Foam Rollers',
            brand: 'RecoverPro',
            description: '3-piece foam roller set for muscle recovery and mobility with different densities',
            features: ['3 Densities', 'Textured Surface', 'Travel Bag', 'Eco-friendly'],
            specifications: {
                densities: 'Soft, Medium, Firm',
                material: 'EPP Foam',
                sizes: '12", 18", 24"',
                texture: 'Multi-surface'
            },
            includes: ['3 Foam Rollers', 'Travel Bag'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            material: 'EPP Foam',
            intensity: 'Multi-Level'
        },
        {
            id: 3,
            name: 'Vibration Therapy Roller',
            price: '$129.99',
            originalPrice: '$169.99',
            image: '/vibration-roller.jpg',
            rating: 4.6,
            reviews: 178,
            category: 'Vibration Therapy',
            brand: 'VibeRecover',
            description: 'Smart vibration foam roller with adjustable intensity and heating function',
            features: ['Vibration Therapy', 'Heat Function', '3 Speeds', 'Rechargeable'],
            specifications: {
                speeds: '3 Vibration Levels',
                heat: '40-45°C',
                battery: '3 Hours',
                material: 'Memory Foam'
            },
            includes: ['Vibration Roller', 'Charger', 'Travel Bag'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            material: 'Memory Foam',
            intensity: 'Adjustable'
        },
        {
            id: 4,
            name: 'Acupressure Mat & Pillow Set',
            price: '$49.99',
            originalPrice: '$69.99',
            image: '/acupressure-mat.jpg',
            rating: 4.5,
            reviews: 234,
            category: 'Acupressure',
            brand: 'ZenMat',
            description: 'Acupressure mat and pillow set for relaxation and muscle tension relief',
            features: ['6000+ Points', 'Eco-friendly', 'Portable', 'Multiple Colors'],
            specifications: {
                points: '6000+ Acupressure',
                material: 'Cotton & ABS',
                size: '68x42cm',
                pillow: 'Included'
            },
            includes: ['Acupressure Mat', 'Pillow', 'Carry Bag'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            material: 'Cotton/ABS',
            intensity: 'Firm'
        },
        {
            id: 5,
            name: 'Compression Boots System',
            price: '$299.99',
            originalPrice: '$399.99',
            image: '/compression-boots.jpg',
            rating: 4.9,
            reviews: 89,
            category: 'Compression Therapy',
            brand: 'RecoveryPump',
            description: 'Professional pneumatic compression boots for enhanced recovery',
            features: ['3 Zone Compression', 'Adjustable Pressure', 'Portable', 'Quick Setup'],
            specifications: {
                zones: '3 Compression Zones',
                pressure: 'Adjustable 30-110mmHg',
                battery: '2 Hours',
                sizes: 'S-XXL'
            },
            includes: ['Compression Boots', 'Control Unit', 'Carry Case'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            material: 'Nylon/Plastic',
            intensity: 'Professional'
        },
        {
            id: 6,
            name: 'Lacrosse Ball Set (4)',
            price: '$19.99',
            originalPrice: '$29.99',
            image: '/lacrosse-balls.jpg',
            rating: 4.7,
            reviews: 367,
            category: 'Trigger Point',
            brand: 'TriggerPoint',
            description: 'High-density lacrosse balls for targeted trigger point release',
            features: ['High Density', 'Multiple Colors', 'Durable', 'Portable'],
            specifications: {
                material: 'Rubber',
                diameter: '2.5 inches',
                density: 'High',
                colors: '4 Different'
            },
            includes: ['4 Lacrosse Balls', 'Mesh Bag'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            material: 'Rubber',
            intensity: 'Firm'
        },
        {
            id: 7,
            name: 'Muscle Scraping Tools Set',
            price: '$34.99',
            originalPrice: '$49.99',
            image: '/scraping-tools.jpg',
            rating: 4.6,
            reviews: 198,
            category: 'Gua Sha Tools',
            brand: 'ScrapePro',
            description: 'Professional muscle scraping tools for myofascial release',
            features: ['4 Different Tools', 'Stainless Steel', 'Ergonomic', 'Instruction Guide'],
            specifications: {
                material: 'Stainless Steel',
                tools: '4 Different Shapes',
                edges: 'Rounded & Beveled',
                care: 'Dishwasher Safe'
            },
            includes: ['4 Scraping Tools', 'Instruction Guide', 'Case'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            material: 'Stainless Steel',
            intensity: 'Professional'
        },
        {
            id: 8,
            name: 'Heated Massage Pillow',
            price: '$79.99',
            originalPrice: '$99.99',
            image: '/heated-pillow.jpg',
            rating: 4.5,
            reviews: 156,
            category: 'Heat Therapy',
            brand: 'ThermaRelax',
            description: 'Shiatsu heated massage pillow for neck and back relief',
            features: ['Heat Therapy', 'Shiatsu Massage', '4 Nodes', 'Portable'],
            specifications: {
                heat: 'Adjustable 40-45°C',
                nodes: '4 Shiatsu Nodes',
                power: 'AC Adapter',
                coverage: 'Neck & Back'
            },
            includes: ['Massage Pillow', 'AC Adapter', 'Carry Bag'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            material: 'Polyester/Foam',
            intensity: 'Medium'
        },
        {
            id: 9,
            name: 'Vibration Plate Platform',
            price: '$199.99',
            originalPrice: '$249.99',
            image: '/vibration-plate.jpg',
            rating: 4.4,
            reviews: 223,
            category: 'Vibration Therapy',
            brand: 'PowerPlate',
            description: 'Whole body vibration platform for muscle recovery and circulation',
            features: ['3D Vibration', 'Remote Control', 'LED Display', 'Foldable'],
            specifications: {
                vibration: '3D Multi-directional',
                speeds: '99 Levels',
                display: 'LED Smart Screen',
                weight: '35lb Capacity'
            },
            includes: ['Vibration Plate', 'Remote', 'Exercise Guide'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            material: 'Steel/Plastic',
            intensity: 'Adjustable'
        },
        {
            id: 10,
            name: 'Recovery Sandals',
            price: '$39.99',
            originalPrice: '$59.99',
            image: '/recovery-sandals.jpg',
            rating: 4.3,
            reviews: 278,
            category: 'Foot Recovery',
            brand: 'RecoveryWalk',
            description: 'Acupressure recovery sandals for foot massage and relaxation',
            features: ['Acupressure Nodes', 'Arch Support', 'Adjustable Straps', 'Lightweight'],
            specifications: {
                nodes: 'Multiple Acupressure',
                material: 'EVA Foam',
                sizes: 'S-XL',
                weight: '0.8lb per pair'
            },
            includes: ['Pair of Sandals'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            material: 'EVA Foam',
            intensity: 'Medium'
        },
        {
            id: 11,
            name: 'Portable Compression Sleeves',
            price: '$89.99',
            originalPrice: '$119.99',
            image: '/compression-sleeves.jpg',
            rating: 4.7,
            reviews: 145,
            category: 'Compression Therapy',
            brand: 'NormaTec',
            description: 'Portable compression sleeves for legs and arms recovery',
            features: ['Portable Design', 'Rechargeable', '3 Pressure Levels', 'Smart App'],
            specifications: {
                pressure: '3 Adjustable Levels',
                battery: '4 Hours',
                connectivity: 'Bluetooth',
                sizes: 'Universal Fit'
            },
            includes: ['Compression Sleeves', 'Controller', 'Charger', 'Case'],
            isNew: true,
            isBestseller: true,
            inStock: true,
            material: 'Nylon/Spandex',
            intensity: 'Adjustable'
        },
        {
            id: 12,
            name: 'CBD Recovery Cream',
            price: '$29.99',
            originalPrice: '$39.99',
            image: '/cbd-cream.jpg',
            rating: 4.6,
            reviews: 412,
            category: 'Topical Recovery',
            brand: 'CBDRecover',
            description: 'Premium CBD recovery cream with arnica and menthol for muscle relief',
            features: ['1000mg CBD', 'Arnica & Menthol', 'Non-greasy', 'Fast Absorbing'],
            specifications: {
                cbd: '1000mg Full Spectrum',
                size: '4oz Jar',
                ingredients: 'Natural',
                scent: 'Light Mint'
            },
            includes: ['4oz CBD Cream'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            material: 'Natural Oils',
            intensity: 'Soothing'
        },
        {
            id: 13,
            name: 'Muscle Recovery Drink Mix',
            price: '$24.99',
            originalPrice: '$34.99',
            image: '/recovery-drink.jpg',
            rating: 4.5,
            reviews: 189,
            category: 'Nutrition',
            brand: 'RecoverFuel',
            description: 'Post-workout recovery drink with electrolytes and BCAAs',
            features: ['BCAAs', 'Electrolytes', 'Gluten Free', 'Multiple Flavors'],
            specifications: {
                servings: '20 Servings',
                bcaas: '5g per Serving',
                electrolytes: 'Sodium, Potassium, Magnesium',
                flavors: '4 Options'
            },
            includes: ['20 Servings Mix'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            material: 'Powder',
            intensity: 'N/A'
        },
        {
            id: 14,
            name: 'Smart Recovery Wearable',
            price: '$149.99',
            originalPrice: '$199.99',
            image: '/recovery-wearable.jpg',
            rating: 4.4,
            reviews: 134,
            category: 'Smart Recovery',
            brand: 'Whoop',
            description: 'Smart wearable that tracks recovery, sleep, and training readiness',
            features: ['Recovery Tracking', 'Sleep Analysis', '24/7 Wear', 'Waterproof'],
            specifications: {
                battery: '5 Days',
                tracking: 'HRV, RHR, Sleep',
                connectivity: 'Bluetooth',
                waterproof: 'IP68'
            },
            includes: ['Wearable', 'Charger', '2 Bands'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            material: 'Plastic/Silicone',
            intensity: 'N/A'
        },
        {
            id: 15,
            name: 'Ice Bath Tub',
            price: '$179.99',
            originalPrice: '$229.99',
            image: '/ice-bath-tub.jpg',
            rating: 4.8,
            reviews: 97,
            category: 'Cold Therapy',
            brand: 'IceBarrel',
            description: 'Portable ice bath tub for cold water immersion therapy',
            features: ['Insulated', 'Portable', 'Durable', 'Easy Drain'],
            specifications: {
                capacity: '100 Gallons',
                material: 'Insulated Plastic',
                setup: '5 Minutes',
                weight: '25lb Empty'
            },
            includes: ['Ice Bath Tub', 'Cover', 'Drain Hose'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            material: 'Plastic',
            intensity: 'Extreme'
        }
    ];

    const recoveryCategories = [
        {
            name: 'Massage Guns',
            image: '/massage-guns.jpg',
            description: 'Percussion therapy',
            count: 8,
            icon: '🔫',
            slug: 'massage-guns'
        },
        {
            name: 'Foam Rollers',
            image: '/foam-rollers.jpg',
            description: 'Self myofascial',
            count: 6,
            icon: '🔄',
            slug: 'foam-rollers'
        },
        {
            name: 'Compression',
            image: '/compression-therapy.jpg',
            description: 'Circulation boost',
            count: 5,
            icon: '💨',
            slug: 'compression'
        },
        {
            name: 'Heat Therapy',
            image: '/heat-therapy.jpg',
            description: 'Muscle relaxation',
            count: 4,
            icon: '🔥',
            slug: 'heat-therapy'
        },
        {
            name: 'Cold Therapy',
            image: '/cold-therapy.jpg',
            description: 'Inflammation',
            count: 3,
            icon: '🧊',
            slug: 'cold-therapy'
        },
        {
            name: 'Vibration',
            image: '/vibration-therapy.jpg',
            description: 'Whole body',
            count: 4,
            icon: '📳',
            slug: 'vibration'
        },
        {
            name: 'Acupressure',
            image: '/acupressure.jpg',
            description: 'Trigger points',
            count: 5,
            icon: '📍',
            slug: 'acupressure'
        },
        {
            name: 'Recovery Tech',
            image: '/recovery-tech.jpg',
            description: 'Smart devices',
            count: 4,
            icon: '📊',
            slug: 'recovery-tech'
        }
    ];

    const filters = {
        category: ['Percussion Massagers', 'Foam Rollers', 'Vibration Therapy', 'Acupressure', 'Compression Therapy', 'Heat Therapy', 'Cold Therapy', 'Trigger Point', 'Gua Sha Tools', 'Topical Recovery', 'Nutrition', 'Smart Recovery'],
        material: ['EPP Foam', 'Memory Foam', 'Stainless Steel', 'Aluminum', 'Plastic', 'Rubber', 'Nylon', 'Cotton', 'Natural Oils', 'Powder', 'Silicone'],
        intensity: ['Soothing', 'Light', 'Medium', 'Firm', 'Professional', 'Extreme', 'Adjustable', 'Multi-Level'],
        priceRange: [
            'Under $25',
            '$25 - $50',
            '$50 - $100',
            '$100 - $200',
            '$200 - $300',
            'Above $300'
        ],
        brand: ['TheraGun', 'RecoverPro', 'VibeRecover', 'ZenMat', 'RecoveryPump', 'TriggerPoint', 'ScrapePro', 'ThermaRelax', 'PowerPlate', 'RecoveryWalk', 'NormaTec', 'CBDRecover', 'RecoverFuel', 'Whoop', 'IceBarrel'],
        features: ['Rechargeable', 'Portable', 'Adjustable', 'Heating', 'Vibration', 'Smart App', 'Waterproof', 'Professional Grade', 'Natural Ingredients']
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
            <section className="bg-gradient-to-r from-teal-700 to-blue-600 py-16">
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
                                <span className="text-white font-medium">Recovery</span>
                            </nav>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Recovery & Therapy
                            </h1>
                            <p className="text-xl text-blue-100 max-w-2xl">
                                Accelerate your recovery with advanced therapy tools. From percussion massage to compression therapy, 
                                optimize your body's healing process.
                            </p>
                        </div>
                        <div className="hidden lg:block">
                            <div className="text-6xl">💆‍♂️</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-6 bg-gradient-to-r from-teal-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="flex items-center justify-center">
                                <Package className="w-5 h-5 text-teal-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">65+</span>
                            </div>
                            <p className="text-sm text-gray-600">Recovery Tools</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Truck className="w-5 h-5 text-blue-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">Free</span>
                            </div>
                            <p className="text-sm text-gray-600">Shipping Over $75</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Shield className="w-5 h-5 text-teal-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">2 Year</span>
                            </div>
                            <p className="text-sm text-gray-600">Warranty</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Clock className="w-5 h-5 text-purple-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">Fast</span>
                            </div>
                            <p className="text-sm text-gray-600">Recovery Results</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Navigation */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Recovery Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {recoveryCategories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/gym-equipment/accessories/recovery/${category.slug}`}
                                className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
                            >
                                <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-teal-200 group-hover:to-blue-300 transition-all duration-200">
                                    <div className="text-lg">{category.icon}</div>
                                </div>
                                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-teal-600 transition-colors duration-200">
                                    {category.name}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                                <span className="inline-block mt-2 text-xs bg-teal-100 text-teal-600 px-1.5 py-0.5 rounded-full">
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
                                Recovery Tools Collection
                            </h2>
                            <p className="text-gray-600">
                                {recoveryProducts.length} advanced recovery tools to enhance muscle repair and reduce soreness
                            </p>
                        </div>

                        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                            {/* View Mode Toggle */}
                            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 ${viewMode === 'grid' ? 'bg-teal-600 text-white' : 'bg-white text-gray-600'}`}
                                >
                                    <Grid className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 ${viewMode === 'list' ? 'bg-teal-600 text-white' : 'bg-white text-gray-600'}`}
                                >
                                    <List className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Sort By */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                                <option value="newest">Newest First</option>
                                <option value="intensity">Therapy Intensity</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filters Sidebar */}
                        <div className="lg:w-72 flex-shrink-0">
                            <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <Filter className="w-5 h-5 mr-2" />
                                    Filter Recovery Tools
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
                                                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{category}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Intensity Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-3">Therapy Intensity</h4>
                                    <div className="space-y-2">
                                        {filters.intensity.map((intensity) => (
                                            <label key={intensity} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFilters.intensity.includes(intensity)}
                                                    onChange={() => toggleFilter('intensity', intensity)}
                                                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{intensity}</span>
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
                                                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
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
                                                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
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
                                                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{feature}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Clear Filters */}
                                <button
                                    onClick={() => setSelectedFilters({ category: [], material: [], intensity: [], priceRange: [], brand: [], features: [] })}
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
                                    {recoveryProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                                        >
                                            <div className="relative h-64 bg-gradient-to-br from-teal-50 to-blue-100 flex items-center justify-center">
                                                {product.isNew && (
                                                    <span className="absolute top-3 left-3 bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        New
                                                    </span>
                                                )}
                                                {product.isBestseller && (
                                                    <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        Bestseller
                                                    </span>
                                                )}
                                                <div className="text-5xl">
                                                    {product.category === 'Percussion Massagers' ? '🔫' :
                                                     product.category === 'Foam Rollers' ? '🔄' :
                                                     product.category === 'Vibration Therapy' ? '📳' :
                                                     product.category === 'Acupressure' ? '📍' :
                                                     product.category === 'Compression Therapy' ? '💨' :
                                                     product.category === 'Heat Therapy' ? '🔥' :
                                                     product.category === 'Cold Therapy' ? '🧊' :
                                                     product.category === 'Trigger Point' ? '🎯' :
                                                     product.category === 'Gua Sha Tools' ? '⚔️' :
                                                     product.category === 'Topical Recovery' ? '🧴' :
                                                     product.category === 'Nutrition' ? '🥤' : '📊'}
                                                </div>
                                                <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    <Heart className="w-5 h-5 text-gray-600" />
                                                </button>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                                                    <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full">
                                                        {product.category}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-3">{product.description}</p>

                                                {/* Material & Intensity */}
                                                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                                                    <span><strong>Material:</strong> {product.material}</span>
                                                    <span><strong>Intensity:</strong> {product.intensity}</span>
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
                                                            ? 'bg-teal-600 text-white hover:bg-teal-700'
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
                                    {recoveryProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                                        >
                                            <div className="w-48 relative bg-gradient-to-br from-teal-50 to-blue-100 flex items-center justify-center">
                                                {product.isNew && (
                                                    <span className="absolute top-3 left-3 bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        New
                                                    </span>
                                                )}
                                                {product.isBestseller && (
                                                    <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                        Bestseller
                                                    </span>
                                                )}
                                                <div className="text-4xl">
                                                    {product.category === 'Percussion Massagers' ? '🔫' :
                                                     product.category === 'Foam Rollers' ? '🔄' :
                                                     product.category === 'Vibration Therapy' ? '📳' :
                                                     product.category === 'Acupressure' ? '📍' :
                                                     product.category === 'Compression Therapy' ? '💨' :
                                                     product.category === 'Heat Therapy' ? '🔥' :
                                                     product.category === 'Cold Therapy' ? '🧊' :
                                                     product.category === 'Trigger Point' ? '🎯' :
                                                     product.category === 'Gua Sha Tools' ? '⚔️' :
                                                     product.category === 'Topical Recovery' ? '🧴' :
                                                     product.category === 'Nutrition' ? '🥤' : '📊'}
                                                </div>
                                            </div>
                                            <div className="flex-1 p-6">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                                                            <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full">
                                                                {product.category}
                                                            </span>
                                                            {product.isNew && (
                                                                <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full">
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
                                                                    <div><strong>Intensity:</strong> {product.intensity}</div>
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
                                                            ? 'bg-teal-600 text-white hover:bg-teal-700'
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
            <section className="py-16 bg-gradient-to-r from-teal-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Optimize Your Recovery Process
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Professional-grade recovery tools designed to reduce soreness, improve mobility, and accelerate muscle repair
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Package className="w-8 h-8 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Science Backed</h3>
                            <p className="text-gray-600 text-sm">
                                All tools based on scientific principles of muscle recovery and therapy
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Grade</h3>
                            <p className="text-gray-600 text-sm">
                                Used by athletes, physical therapists, and recovery specialists
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Results</h3>
                            <p className="text-gray-600 text-sm">
                                Experience noticeable recovery improvements in just days
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy to Use</h3>
                            <p className="text-gray-600 text-sm">
                                Simple, intuitive designs for effective at-home recovery sessions
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}