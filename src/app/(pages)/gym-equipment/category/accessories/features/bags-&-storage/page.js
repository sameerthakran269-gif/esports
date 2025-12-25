// app/gym-equipment/accessories/bags-storage/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Package, Truck, Shield, Clock, Search } from 'lucide-react';

export default function BagsStoragePage() {
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
        priceRange: [],
        brand: [],
        features: [],
        capacity: [],
        compartments: []
    });

    const bagsStorageProducts = [
        {
            id: 1,
            name: 'Gym Bag Pro - Large',
            price: '$89.99',
            originalPrice: '$119.99',
            image: '/gym-bag-pro.jpg',
            rating: 4.7,
            reviews: 342,
            category: 'Gym Bags',
            brand: 'GearMaster',
            description: 'Professional gym bag with multiple compartments, shoe storage, and laptop sleeve',
            features: ['Multiple Compartments', 'Shoe Storage', 'Wet Pocket', 'Laptop Sleeve', 'TSA Lock'],
            specifications: {
                capacity: '45L',
                material: 'Water-resistant Polyester',
                compartments: '7+',
                weight: '2.8lb',
                dimensions: '20x12x10 inches'
            },
            includes: ['Gym Bag', 'Detachable Shoulder Strap', 'Shoe Bag'],
            isNew: true,
            isBestseller: true,
            inStock: true,
            essential: true,
            capacity: 'Large',
            compartments: '7+',
            color: 'Black'
        },
        {
            id: 2,
            name: 'Backpack Gym Bag',
            price: '$64.99',
            originalPrice: '$84.99',
            image: '/backpack-gym.jpg',
            rating: 4.6,
            reviews: 278,
            category: 'Backpacks',
            brand: 'FitPack',
            description: 'Convertible backpack gym bag with dedicated shoe compartment and hydration pocket',
            features: ['Backpack Style', 'Shoe Compartment', 'Hydration Pocket', 'Laptop Sleeve', 'USB Port'],
            specifications: {
                capacity: '35L',
                material: 'Nylon',
                compartments: '5+',
                weight: '2.2lb',
                dimensions: '19x13x8 inches'
            },
            includes: ['Backpack', 'Rain Cover'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            essential: true,
            capacity: 'Medium',
            compartments: '5+',
            color: 'Navy Blue'
        },
        {
            id: 3,
            name: 'Duffel Bag - Medium',
            price: '$49.99',
            originalPrice: '$69.99',
            image: '/duffel-bag.jpg',
            rating: 4.5,
            reviews: 189,
            category: 'Duffel Bags',
            brand: 'SportFlex',
            description: 'Classic duffel bag with multiple pockets and comfortable carry handles',
            features: ['Multiple Pockets', 'Comfortable Handles', 'Shoulder Strap', 'Durable Zippers'],
            specifications: {
                capacity: '30L',
                material: 'Polyester',
                compartments: '3+',
                weight: '1.8lb',
                dimensions: '18x10x10 inches'
            },
            includes: ['Duffel Bag', 'Shoulder Strap'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            essential: true,
            capacity: 'Medium',
            compartments: '3+',
            color: 'Charcoal'
        },
        {
            id: 4,
            name: 'Luxury Leather Gym Bag',
            price: '$199.99',
            originalPrice: '$249.99',
            image: '/leather-gym-bag.jpg',
            rating: 4.8,
            reviews: 156,
            category: 'Premium Bags',
            brand: 'EliteGear',
            description: 'Premium full-grain leather gym bag with brass hardware and luxury lining',
            features: ['Full-grain Leather', 'Brass Hardware', 'Luxury Lining', 'Dust Bag'],
            specifications: {
                capacity: '25L',
                material: 'Full-grain Leather',
                compartments: '4+',
                weight: '3.2lb',
                dimensions: '17x11x8 inches'
            },
            includes: ['Leather Bag', 'Dust Bag', 'Care Kit'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            essential: false,
            capacity: 'Small',
            compartments: '4+',
            color: 'Brown'
        },
        {
            id: 5,
            name: 'Weight Plate Storage Tree',
            price: '$129.99',
            originalPrice: '$159.99',
            image: '/plate-storage-tree.jpg',
            rating: 4.7,
            reviews: 234,
            category: 'Weight Storage',
            brand: 'IronStorage',
            description: 'Heavy-duty weight plate storage tree with 6 pegs and rubber base',
            features: ['6 Storage Pegs', 'Rubber Base', 'Easy Assembly', 'Heavy-duty Steel'],
            specifications: {
                capacity: '600lb',
                material: 'Steel with Rubber',
                pegs: '6',
                weight: '28lb',
                dimensions: '24x24x48 inches'
            },
            includes: ['Storage Tree', 'Assembly Hardware'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            essential: true,
            capacity: '600lb',
            compartments: '6 Pegs',
            color: 'Black'
        },
        {
            id: 6,
            name: 'Dumbbell Rack',
            price: '$79.99',
            originalPrice: '$99.99',
            image: '/dumbbell-rack.jpg',
            rating: 4.6,
            reviews: 198,
            category: 'Dumbbell Storage',
            brand: 'RackPro',
            description: 'Compact dumbbell rack with 5 tiers and non-slip surface',
            features: ['5 Tiers', 'Non-slip Surface', 'Compact Design', 'Easy Assembly'],
            specifications: {
                capacity: '400lb',
                material: 'Steel',
                tiers: '5',
                weight: '18lb',
                dimensions: '36x18x24 inches'
            },
            includes: ['Dumbbell Rack', 'Assembly Hardware'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            essential: true,
            capacity: '400lb',
            compartments: '5 Tiers',
            color: 'Gray'
        },
        {
            id: 7,
            name: 'Wall Mount Storage System',
            price: '$149.99',
            originalPrice: '$189.99',
            image: '/wall-storage.jpg',
            rating: 4.5,
            reviews: 167,
            category: 'Wall Storage',
            brand: 'WallGear',
            description: 'Modular wall storage system with adjustable shelves and hooks',
            features: ['Modular Design', 'Adjustable Shelves', 'Heavy-duty Hooks', 'Wall Mount'],
            specifications: {
                capacity: '200lb',
                material: 'Steel',
                components: 'Modular',
                weight: '25lb',
                dimensions: 'Customizable'
            },
            includes: ['Wall Panels', 'Shelves', 'Hooks', 'Mounting Hardware'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            essential: false,
            capacity: '200lb',
            compartments: 'Modular',
            color: 'Silver'
        },
        {
            id: 8,
            name: 'Yoga Mat Bag',
            price: '$29.99',
            originalPrice: '$39.99',
            image: '/yoga-mat-bag.jpg',
            rating: 4.4,
            reviews: 145,
            category: 'Specialty Bags',
            brand: 'YogaFlow',
            description: 'Lightweight yoga mat bag with shoulder strap and accessory pockets',
            features: ['Lightweight', 'Shoulder Strap', 'Accessory Pockets', 'Ventilated'],
            specifications: {
                capacity: '1 Mat + Accessories',
                material: 'Canvas',
                compartments: '2+',
                weight: '0.8lb',
                dimensions: '28x8 inches'
            },
            includes: ['Yoga Mat Bag'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            essential: false,
            capacity: 'Single Mat',
            compartments: '2+',
            color: 'Purple'
        },
        {
            id: 9,
            name: 'Barbell Storage Rack',
            price: '$89.99',
            originalPrice: '$119.99',
            image: '/barbell-rack.jpg',
            rating: 4.7,
            reviews: 223,
            category: 'Barbell Storage',
            brand: 'BarStorage',
            description: 'Vertical barbell storage rack with protective coating',
            features: ['Vertical Storage', 'Protective Coating', 'Space Saving', 'Heavy-duty'],
            specifications: {
                capacity: '4 Barbells',
                material: 'Steel with Coating',
                slots: '4',
                weight: '15lb',
                dimensions: '18x18x60 inches'
            },
            includes: ['Barbell Rack', 'Floor Protectors'],
            isNew: false,
            isBestseller: true,
            inStock: true,
            essential: true,
            capacity: '4 Barbells',
            compartments: '4 Slots',
            color: 'Black'
        },
        {
            id: 10,
            name: 'Travel Gym Bag',
            price: '$74.99',
            originalPrice: '$94.99',
            image: '/travel-gym-bag.jpg',
            rating: 4.6,
            reviews: 189,
            category: 'Travel Bags',
            brand: 'TravelFit',
            description: 'TSA-friendly travel gym bag with compression straps and document pocket',
            features: ['TSA Friendly', 'Compression Straps', 'Document Pocket', 'Wheeled Option'],
            specifications: {
                capacity: '40L',
                material: 'Nylon',
                compartments: '6+',
                weight: '3.1lb',
                dimensions: '22x14x9 inches'
            },
            includes: ['Travel Bag', 'TSA Lock', 'Shoe Bag'],
            isNew: true,
            isBestseller: false,
            inStock: true,
            essential: false,
            capacity: 'Large',
            compartments: '6+',
            color: 'Dark Gray'
        },
        {
            id: 11,
            name: 'Kettlebell Storage Rack',
            price: '$59.99',
            originalPrice: '$79.99',
            image: '/kettlebell-rack.jpg',
            rating: 4.5,
            reviews: 134,
            category: 'Kettlebell Storage',
            brand: 'KettleRack',
            description: 'Compact kettlebell storage rack with 5 slots and rubber feet',
            features: ['5 Slots', 'Rubber Feet', 'Compact Design', 'Easy Assembly'],
            specifications: {
                capacity: '200lb',
                material: 'Steel',
                slots: '5',
                weight: '12lb',
                dimensions: '24x16x12 inches'
            },
            includes: ['Kettlebell Rack', 'Assembly Hardware'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            essential: true,
            capacity: '200lb',
            compartments: '5 Slots',
            color: 'Black'
        },
        {
            id: 12,
            name: 'Premium Shoe Bag',
            price: '$19.99',
            originalPrice: '$29.99',
            image: '/shoe-bag.jpg',
            rating: 4.3,
            reviews: 98,
            category: 'Shoe Bags',
            brand: 'FreshShoe',
            description: 'Ventilated shoe bag with separate compartments and carry handle',
            features: ['Ventilated', 'Separate Compartments', 'Carry Handle', 'Water-resistant'],
            specifications: {
                capacity: '2 Pairs',
                material: 'Polyester',
                compartments: '2',
                weight: '0.5lb',
                dimensions: '16x10x8 inches'
            },
            includes: ['Shoe Bag'],
            isNew: false,
            isBestseller: false,
            inStock: true,
            essential: false,
            capacity: '2 Pairs',
            compartments: '2',
            color: 'Gray'
        }
    ];

    const bagsCategories = [
        {
            name: 'Gym Bags',
            image: '/gym-bags-cat.jpg',
            description: 'Carry all your gear',
            count: 15,
            icon: '🎒',
            slug: 'gym-bags'
        },
        {
            name: 'Backpacks',
            image: '/backpacks-cat.jpg',
            description: 'Hands-free carrying',
            count: 8,
            icon: '🎒',
            slug: 'backpacks'
        },
        {
            name: 'Duffel Bags',
            image: '/duffel-bags-cat.jpg',
            description: 'Classic style bags',
            count: 6,
            icon: '👜',
            slug: 'duffel-bags'
        },
        {
            name: 'Weight Storage',
            image: '/weight-storage-cat.jpg',
            description: 'Plates and bars',
            count: 12,
            icon: '🏋️',
            slug: 'weight-storage'
        },
        {
            name: 'Dumbbell Storage',
            image: '/dumbbell-storage-cat.jpg',
            description: 'Racks and stands',
            count: 7,
            icon: '💪',
            slug: 'dumbbell-storage'
        },
        {
            name: 'Wall Storage',
            image: '/wall-storage-cat.jpg',
            description: 'Space saving solutions',
            count: 5,
            icon: '📐',
            slug: 'wall-storage'
        },
        {
            name: 'Travel Bags',
            image: '/travel-bags-cat.jpg',
            description: 'On-the-go fitness',
            count: 4,
            icon: '✈️',
            slug: 'travel-bags'
        },
        {
            name: 'Specialty Bags',
            image: '/specialty-bags-cat.jpg',
            description: 'Yoga and shoe bags',
            count: 9,
            icon: '🧘',
            slug: 'specialty-bags'
        }
    ];

    const filters = {
        category: ['Gym Bags', 'Backpacks', 'Duffel Bags', 'Weight Storage', 'Dumbbell Storage', 'Wall Storage', 'Travel Bags', 'Specialty Bags', 'Premium Bags'],
        priceRange: [
            'Under $50',
            '$50 - $100',
            '$100 - $200',
            '$200 - $300',
            'Above $300'
        ],
        brand: ['GearMaster', 'FitPack', 'SportFlex', 'EliteGear', 'IronStorage', 'RackPro', 'WallGear', 'YogaFlow', 'BarStorage', 'TravelFit', 'KettleRack', 'FreshShoe'],
        features: ['Essential', 'New Arrival', 'Bestseller', 'Water-resistant', 'TSA Friendly', 'Wheeled', 'Ventilated', 'Heavy-duty'],
        capacity: ['Small', 'Medium', 'Large', 'Extra Large'],
        compartments: ['1-2', '3-4', '5-6', '7+']
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
    const filteredProducts = bagsStorageProducts.filter(product => {
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

        return matchesSearch && matchesCategory && matchesBrand && matchesFeatures;
    });

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-800 to-indigo-700 py-16">
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
                                <span className="text-white font-medium">Bags & Storage</span>
                            </nav>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Bags & Storage
                            </h1>
                            <p className="text-xl text-blue-100 max-w-2xl">
                                Carry your gear in style and keep your gym organized. From professional gym bags to heavy-duty storage solutions.
                            </p>
                        </div>
                        <div className="hidden lg:block">
                            <div className="text-6xl">🎒</div>
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
                                <span className="text-2xl font-bold text-gray-900">50+</span>
                            </div>
                            <p className="text-sm text-gray-600">Bags & Storage Items</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <Truck className="w-5 h-5 text-indigo-600 mr-2" />
                                <span className="text-2xl font-bold text-gray-900">Free</span>
                            </div>
                            <p className="text-sm text-gray-600">Assembly Available</p>
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
                                <span className="text-2xl font-bold text-gray-900">Same Day</span>
                            </div>
                            <p className="text-sm text-gray-600">Shipping Available</p>
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
                                placeholder="Search bags, storage, brands..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Navigation */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Storage Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {bagsCategories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/gym-equipment/accessories/bags-storage/${category.slug}`}
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
                                Bags & Storage Collection
                            </h2>
                            <p className="text-gray-600">
                                {filteredProducts.length} products to carry and organize your fitness gear
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
                                <option value="capacity">By Capacity</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filters Sidebar */}
                        <div className="lg:w-80 flex-shrink-0">
                            <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <Filter className="w-5 h-5 mr-2" />
                                    Filter Products
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
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{capacity}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Compartments Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-3">Compartments</h4>
                                    <div className="space-y-2">
                                        {filters.compartments.map((comp) => (
                                            <label key={comp} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFilters.compartments.includes(comp)}
                                                    onChange={() => toggleFilter('compartments', comp)}
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                                        capacity: [],
                                        compartments: []
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
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {filteredProducts.map((product) => (
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
                                                    {product.category === 'Gym Bags' ? '🎒' :
                                                     product.category === 'Backpacks' ? '🎒' :
                                                     product.category === 'Duffel Bags' ? '👜' :
                                                     product.category === 'Weight Storage' ? '🏋️' :
                                                     product.category === 'Dumbbell Storage' ? '💪' :
                                                     product.category === 'Wall Storage' ? '📐' :
                                                     product.category === 'Travel Bags' ? '✈️' : '🧘'}
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

                                                {/* Capacity and Specifications */}
                                                <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                                                    <div className="text-gray-500">
                                                        <strong>Capacity:</strong> {product.capacity}
                                                    </div>
                                                    <div className="text-gray-500">
                                                        <strong>Compartments:</strong> {product.compartments}
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
                                                            <span key={index} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
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
                                    {filteredProducts.map((product) => (
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
                                                    {product.category === 'Gym Bags' ? '🎒' :
                                                     product.category === 'Backpacks' ? '🎒' :
                                                     product.category === 'Duffel Bags' ? '👜' :
                                                     product.category === 'Weight Storage' ? '🏋️' :
                                                     product.category === 'Dumbbell Storage' ? '💪' :
                                                     product.category === 'Wall Storage' ? '📐' :
                                                     product.category === 'Travel Bags' ? '✈️' : '🧘'}
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
                                                                <div className="font-medium text-gray-500 text-sm mb-1">Capacity</div>
                                                                <div className="text-sm text-gray-900">{product.capacity}</div>
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-500 text-sm mb-1">Compartments</div>
                                                                <div className="text-sm text-gray-900">{product.compartments}</div>
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-500 text-sm mb-1">Material</div>
                                                                <div className="text-sm text-gray-900">{product.specifications.material}</div>
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
                            Organized Fitness, Better Results
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Keep your gear protected and your space organized with our premium bags and storage solutions
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Package className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Durable Materials</h3>
                            <p className="text-gray-600 text-sm">
                                Built with high-quality materials that withstand daily use and heavy loads
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="w-8 h-8 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Assembly</h3>
                            <p className="text-gray-600 text-sm">
                                Most storage solutions include easy-to-follow assembly instructions
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Extended Warranty</h3>
                            <p className="text-gray-600 text-sm">
                                2-year warranty on all storage products and premium bags
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Space Saving</h3>
                            <p className="text-gray-600 text-sm">
                                Smart designs that maximize storage while minimizing floor space
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}