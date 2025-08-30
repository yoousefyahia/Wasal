"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

export default function Factory() {
  const checkboxStyle = {
    accentColor: '#448AB1CC',
    WebkitAccentColor: '#448AB1CC',
    MozAccentColor: '#448AB1CC'
  };
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    stock: [],
    type: [],
    colors: []
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [appliedSearchFilters, setAppliedSearchFilters] = useState([]);

  const products = [
    {
      id: 1,
      name: "Red Plain Chiffon",
      shop: "Talia Fabric Shop",
      rating: 4.5,
      reviews: 128,
      price: 28,
      originalPrice: 35,
      stock: "in-stock",
      type: "plain",
      category: "chiffon",
      color: "red",
      isSale: true
    },
    {
      id: 2,
      name: "Green Plain Satin",
      shop: "Kaly Fabric Shop",
      rating: 4.2,
      reviews: 89,
      price: 31,
      originalPrice: 31,
      stock: "out-of-stock",
      type: "plain",
      category: "satin",
      color: "green",
      isSale: false
    },
    {
      id: 3,
      name: "Red Plain Chiffon",
      shop: "Talia Fabric Shop",
      rating: 4.7,
      reviews: 156,
      price: 29,
      originalPrice: 29,
      stock: "in-stock",
      type: "plain",
      category: "chiffon",
      color: "red",
      isSale: false
    },
    {
      id: 4,
      name: "Red Plain Chiffon",
      shop: "Talia Fabric Shop",
      rating: 4.3,
      reviews: 92,
      price: 20,
      originalPrice: 25,
      stock: "in-stock",
      type: "plain",
      category: "chiffon",
      color: "red",
      isSale: true
    },
    {
      id: 5,
      name: "Green Plain Chiffon",
      shop: "Kaly Fabric Shop",
      rating: 4.1,
      reviews: 67,
      price: 32,
      originalPrice: 32,
      stock: "out-of-stock",
      type: "plain",
      category: "chiffon",
      color: "green",
      isSale: false
    },
    {
      id: 6,
      name: "Black Plain Chiffon",
      shop: "Talia Fabric Shop",
      rating: 4.6,
      reviews: 134,
      price: 34,
      originalPrice: 34,
      stock: "in-stock",
      type: "plain",
      category: "chiffon",
      color: "black",
      isSale: false
    },
    {
      id: 7,
      name: "Yellow Patterned Satin",
      shop: "Kaly Fabric Shop",
      rating: 4.4,
      reviews: 78,
      price: 30,
      originalPrice: 30,
      stock: "out-of-stock",
      type: "patterned",
      category: "satin",
      color: "yellow",
      isSale: false
    },
    {
      id: 8,
      name: "Black Plain Satin",
      shop: "Talia Fabric Shop",
      rating: 4.8,
      reviews: 201,
      price: 26,
      originalPrice: 26,
      stock: "in-stock",
      type: "plain",
      category: "satin",
      color: "black",
      isSale: false
    },
    {
      id: 9,
      name: "Red Patterned Satin",
      shop: "Kaly Fabric Shop",
      rating: 4.9,
      reviews: 167,
      price: 38,
      originalPrice: 38,
      stock: "in-stock",
      type: "patterned",
      category: "satin",
      color: "red",
      isSale: false
    }
  ];

  // Filtered products based on search and filters
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search query filter - search in real-time as user types
      const matchesSearch = searchQuery === "" || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shop.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.color.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory = selectedFilters.category.length === 0 || 
        selectedFilters.category.includes(product.category);

      // Stock filter
      const matchesStock = selectedFilters.stock.length === 0 || 
        selectedFilters.stock.includes(product.stock);

      // Type filter
      const matchesType = selectedFilters.type.length === 0 || 
        selectedFilters.type.includes(product.type);

      // Color filter
      const matchesColor = selectedFilters.colors.length === 0 || 
        selectedFilters.colors.includes(product.color);

      return matchesSearch && matchesCategory && matchesStock && matchesType && matchesColor;
    });
  }, [products, searchQuery, selectedFilters]);

  const getColorClass = (color) => {
    const colorMap = {
      'red': 'bg-red-500',
      'green': 'bg-green-500',
      'black': 'bg-gray-900',
      'yellow': 'bg-yellow-400',
      'blue': 'bg-blue-500',
      'purple': 'bg-purple-500',
      'pink': 'bg-pink-400',
      'orange': 'bg-orange-400',
      'light-green': 'bg-green-300'
    };
    return colorMap[color] || 'bg-gray-300';
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      category: [],
      stock: [],
      type: [],
      colors: []
    });
    setSearchQuery("");
    setAppliedSearchFilters([]);
  };

  // Auto-add filters based on search content
  const autoAddFilters = (query) => {
    const newFilters = [];
    
    // Check if query matches any category
    if (query.toLowerCase().includes('chiffon')) {
      newFilters.push('Chiffon');
      if (!selectedFilters.category.includes('chiffon')) {
        setSelectedFilters(prev => ({
          ...prev,
          category: [...prev.category, 'chiffon']
        }));
      }
    }
    
    if (query.toLowerCase().includes('satin')) {
      newFilters.push('Satin');
      if (!selectedFilters.category.includes('satin')) {
        setSelectedFilters(prev => ({
          ...prev,
          category: [...prev.category, 'satin']
        }));
      }
    }
    
    if (query.toLowerCase().includes('velvet')) {
      newFilters.push('Velvet');
      if (!selectedFilters.category.includes('velvet')) {
        setSelectedFilters(prev => ({
          ...prev,
          category: [...prev.category, 'velvet']
        }));
      }
    }

    // Check if query matches any type
    if (query.toLowerCase().includes('plain')) {
      newFilters.push('Plain');
      if (!selectedFilters.type.includes('plain')) {
        setSelectedFilters(prev => ({
          ...prev,
          type: [...prev.type, 'plain']
        }));
      }
    }
    
    if (query.toLowerCase().includes('patterned')) {
      newFilters.push('Patterned');
      if (!selectedFilters.type.includes('patterned')) {
        setSelectedFilters(prev => ({
          ...prev,
          type: [...prev.type, 'patterned']
        }));
      }
    }

    // Check if query matches any color
    const colors = ['red', 'green', 'black', 'yellow', 'blue', 'purple', 'pink', 'orange'];
    colors.forEach(color => {
      if (query.toLowerCase().includes(color)) {
        newFilters.push(color.charAt(0).toUpperCase() + color.slice(1));
        if (!selectedFilters.colors.includes(color)) {
          setSelectedFilters(prev => ({
            ...prev,
            colors: [...prev.colors, color]
          }));
        }
      }
    });

    // Check if query matches any shop
    if (query.toLowerCase().includes('talia')) {
      newFilters.push('Talia Shop');
    }
    
    if (query.toLowerCase().includes('kaly')) {
      newFilters.push('Kaly Shop');
    }

    // Add fabric as general category if not already added
    if (query.toLowerCase().includes('fabric') && !newFilters.includes('Fabric')) {
      newFilters.push('Fabric');
    }

    // Update applied filters
    setAppliedSearchFilters(prev => {
      const combined = [...prev, ...newFilters];
      return [...new Set(combined)]; // Remove duplicates
    });
  };

  const removeSearchFilter = (filter) => {
    setAppliedSearchFilters(prev => prev.filter(f => f !== filter));
    
    // Remove from selected filters if it's a category
    if (filter === 'Chiffon') {
      setSelectedFilters(prev => ({
        ...prev,
        category: prev.category.filter(c => c !== 'chiffon')
      }));
    } else if (filter === 'Satin') {
      setSelectedFilters(prev => ({
        ...prev,
        category: prev.category.filter(c => c !== 'satin')
      }));
    } else if (filter === 'Velvet') {
      setSelectedFilters(prev => ({
        ...prev,
        category: prev.category.filter(c => c !== 'velvet')
      }));
    } else if (filter === 'Plain') {
      setSelectedFilters(prev => ({
        ...prev,
        type: prev.type.filter(t => t !== 'plain')
      }));
    } else if (filter === 'Patterned') {
      setSelectedFilters(prev => ({
        ...prev,
        type: prev.type.filter(t => t !== 'patterned')
      }));
    } else if (['Red', 'Green', 'Black', 'Yellow', 'Blue', 'Purple', 'Pink', 'Orange'].includes(filter)) {
      const color = filter.toLowerCase();
      setSelectedFilters(prev => ({
        ...prev,
        colors: prev.colors.filter(c => c !== color)
      }));
    }
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Auto-add filters based on search content
    if (query.trim()) {
      autoAddFilters(query);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      autoAddFilters(searchQuery);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Brand */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">Wasal</h1>
            </div>
            
            {/* Navigation */}
            <nav className="flex space-x-8">
              <Link href="/" className="text-blue-900 border-b-2 border-blue-900 pb-1 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-900 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-900 transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-900 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search fabrics, colors, types..."
                  className="bg-transparent outline-none text-sm min-w-32"
                />
                <button type="submit" className="text-gray-500 hover:text-gray-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>

              {/* View Cart Button */}
              <button className="bg-[#448AB1CC] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <span>View Cart</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar - Filters */}
        <div className="w-80 bg-white shadow-sm p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">▼ Filters</h2>
            
            {/* Applied Filters */}
            <div className="mb-4">
              <button
                onClick={clearAllFilters}
                className="text-[#448AB1CC] hover:opacity-80 text-sm underline mb-2"
              >
                Clear all
              </button>
              <div className="flex flex-wrap gap-2">
                {appliedSearchFilters.map((filter, index) => (
                  <span key={index} className="bg-[#448AB1CC] text-white px-2 py-1 rounded text-sm flex items-center">
                    {filter}
                    <button 
                      onClick={() => removeSearchFilter(filter)}
                      className="ml-2 hover:text-red-200"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Category</h3>
              <div className="space-y-2">
                {['All', 'Chiffon', 'Satin', 'Velvet'].map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={category === 'All' ? selectedFilters.category.length === 0 : selectedFilters.category.includes(category.toLowerCase())}
                      onChange={() => {
                        if (category === 'All') {
                          setSelectedFilters(prev => ({ ...prev, category: [] }));
                        } else {
                          toggleFilter('category', category.toLowerCase());
                        }
                      }}
                      style={checkboxStyle}
                      className="rounded border-gray-300 text-[#448AB1CC] focus:ring-[#448AB1CC] [&:checked]:text-[#448AB1CC] [&:checked]:bg-[#448AB1CC]"
                    />
                    <span className="ml-2 text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Stock Status</h3>
              <div className="space-y-2">
                {['In Stock', 'Out of Stock'].map((status) => (
                  <label key={status} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedFilters.stock.includes(status.toLowerCase().replace(' ', '-'))}
                      onChange={() => toggleFilter('stock', status.toLowerCase().replace(' ', '-'))}
                      style={checkboxStyle}
                      className="rounded border-gray-300 text-[#448AB1CC] focus:ring-[#448AB1CC] [&:checked]:text-[#448AB1CC] [&:checked]:bg-[#448AB1CC]"
                    />
                    <span className="ml-2 text-gray-700">{status}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Type */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Type</h3>
              <div className="space-y-2">
                {['Plain', 'Patterned'].map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedFilters.type.includes(type.toLowerCase())}
                      onChange={() => toggleFilter('type', type.toLowerCase())}
                      style={checkboxStyle}
                      className="rounded border-gray-300 text-[#448AB1CC] focus:ring-[#448AB1CC] [&:checked]:text-[#448AB1CC] [&:checked]:bg-[#448AB1CC]"
                    />
                    <span className="ml-2 text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Color</h3>
              <div className="grid grid-cols-3 gap-2">
                {['red', 'green', 'black', 'yellow', 'blue', 'purple', 'pink', 'orange', 'light-green'].map((color) => (
                  <button
                    key={color}
                    onClick={() => toggleFilter('colors', color)}
                    className={`w-8 h-8 rounded-full ${getColorClass(color)} ${
                      selectedFilters.colors.includes(color) ? 'ring-2 ring-[#448AB1CC] ring-offset-2' : ''
                    }`}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 mb-4">
            Home / Search / {appliedSearchFilters.length > 0 ? appliedSearchFilters.join(' / ') : 'All Products'}
          </div>

          {/* Search Results Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {appliedSearchFilters.length > 0 ? appliedSearchFilters.join(' ') : 'All Products'}
              </h1>
              <p className="text-gray-600">{filteredProducts.length} Results</p>
            </div>
            <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
              </svg>
              <span>Sort by</span>
            </button>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Product Image */}
                  <div className="relative h-48 bg-gray-100">
                    {/* Color Background instead of product image */}
                    <div className={`w-full h-full ${getColorClass(product.color)} flex items-center justify-center`}>
                      <div className="text-white text-4xl font-bold opacity-20">
                        {product.name.split(' ')[0].charAt(0)}
                      </div>
                    </div>
                    
                    {/* Sale Tag */}
                    {product.isSale && (
                      <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-sm font-semibold">
                        Sale
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.shop}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm ml-1">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center mb-3">
                      <span className="text-lg font-bold text-gray-900">${product.price}/Meter</span>
                      {product.originalPrice !== product.price && (
                        <span className="text-gray-500 line-through ml-2">${product.originalPrice}</span>
                      )}
                    </div>

                    {/* Stock Status */}
                    <div className="mb-3">
                      <span className={`text-sm font-medium ${
                        product.stock === 'in-stock' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {product.stock === 'in-stock' ? 'In Stock' : 'Out Of Stock'}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <button className="bg-[#448AB1CC] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-colors">
                        Add To Cart
                      </button>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}

          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <div className="flex justify-between items-center mt-8">
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">01</span>
                <span className="text-gray-400">or</span>
                <span className="text-gray-600">50</span>
              </div>
              
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
