import React from 'react'
import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa'

export default function ActionButtons() {
  return (
    <div className="flex gap-5">

      {/* Search Button */}
      <button className="group flex items-center gap-3 px-4 py-2 bg-gray-200 rounded-full transition cursor-pointer">
        <FaSearch className="text-gray-600 group-hover:text-red-600 transition-colors w-4 h-4" />
        <span className="text-gray-600 group-hover:text-red-600 font-bold">Search</span>
      </button>

      {/* Heart Button */}
      <button className="group flex items-center px-4 py-2 bg-gray-200 rounded-full transition cursor-pointer">
        <FaHeart className="text-gray-600 group-hover:text-red-600 transition-colors w-4 h-4" />
      </button>

      {/* Cart Button */}
      <button className="group flex items-center px-4 py-2 bg-gray-200 rounded-full transition cursor-pointer">
        <FaShoppingCart className="text-gray-600 group-hover:text-red-600 transition-colors w-4 h-4" />
      </button>

    </div>
  )
}