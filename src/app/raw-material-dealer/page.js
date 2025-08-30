"use client";

import Link from "next/link";
import { useState, useRef } from "react";

export default function RawMaterialDealer() {
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const fileInputRef = useRef(null);
  const mainImageInputRef = useRef(null);

  // image upload
  const handleMainImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMainImage({
          file: file,
          preview: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalImagesUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onload = (e) => {
          resolve({
            file: file,
            preview: e.target.result
          });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(newImages).then(images => {
      setImages(prev => [...prev, ...images]);
    });
  };

  // Remove image
  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  // Remove main image
  const removeMainImage = () => {
    setMainImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Sidebar Navigation - Hidden on mobile */}
      <div className="hidden lg:flex w-full lg:w-64 bg-gray-800 text-white">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-8">Dashboard</h2>
          
          {/* Navigation Menu */}
          <nav className="space-y-2">
            {/* Profile */}
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Profile</span>
            </div>

            {/* Add New Product - Active */}
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-500 text-white relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Add New Product</span>
              {/* Blue Triangle Pointer */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-blue-500 border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
            </div>

            {/* Orders */}
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span>Orders</span>
            </div>

            {/* Reviews */}
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              </svg>
              <span>Reviews</span>
            </div>

            {/* Product Q&A */}
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Product Q&A(3)</span>
            </div>

            {/* Raw Materials */}
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span>Raw Materials</span>
            </div>

            {/* Workers */}
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              <span>Workers</span>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white p-4 lg:p-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New Product</h1>

        <div className="flex gap-8">
          {/* Left Column - Product Details Form */}
          <div className="flex-1">
            <form className="space-y-6">
              {/* Title */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <label htmlFor="title" className="text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="title"
                  placeholder="Product name..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <label htmlFor="category" className="text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <select
                  id="category"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Uncategorized</option>
                </select>
              </div>

              {/* Product Type */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <label htmlFor="productType" className="text-sm font-medium text-gray-700">
                    Product Type
                  </label>
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <select
                  id="productType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>product type</option>
                </select>
              </div>

              {/* Price */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <label htmlFor="price" className="text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="price"
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Discount */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <label htmlFor="discount" className="text-sm font-medium text-gray-700">
                    Discount
                  </label>
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="discount"
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Product ID */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <label htmlFor="productId" className="text-sm font-medium text-gray-700">
                    Product ID
                  </label>
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="productId"
                  placeholder="product id"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Description */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <label htmlFor="description" className="text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="description about the product"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              {/* Status */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <label className="text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="status" value="inStock" className="text-blue-500" />
                    <span className="text-green-600">In stock</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="status" value="outOfStock" className="text-blue-500" defaultChecked />
                    <span className="text-red-600">Out of stock</span>
                  </label>
                </div>
              </div>

              {/* Save Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Save
              </button>
            </form>
          </div>

          {/* Right Column - Image Upload */}
          <div className="w-80">
            <div className="space-y-6">
              {/* Main Image Upload */}
              <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {mainImage ? (
                    <img 
                      src={mainImage.preview} 
                      alt="Main product" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </div>
                
                <input
                  ref={mainImageInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleMainImageUpload}
                  className="hidden"
                />
                <button 
                  onClick={() => mainImageInputRef.current?.click()}
                  className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors"
                >
                  {mainImage ? 'Change Image' : 'Upload product image'}
                </button>
                
                {/* Remove button for main image */}
                {mainImage && (
                  <button
                    onClick={removeMainImage}
                    className="mt-2 text-red-500 hover:text-red-700 text-sm underline"
                  >
                    Remove Image
                  </button>
                )}
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-gray-300"></div>

              {/* Additional Images */}
              <div className="space-y-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleAdditionalImagesUpload}
                  className="hidden"
                />
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Add more images</span>
                </button>

                {/* Display uploaded images */}
                {images.length > 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <img 
                          src={image.preview} 
                          alt={`Product ${index + 1}`} 
                          className="w-full h-20 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-600 text-xs"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
