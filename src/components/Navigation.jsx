import React from 'react'
import { FaCompass, FaShoppingBag } from 'react-icons/fa'
import { FaShield } from 'react-icons/fa6'

export default function Navigation() {
    return (
        <div className="flex gap-5">

            {/* Explore Button */}
            <button className="group flex items-center cursor-pointer gap-1 px-4 py-2 ">
                <FaCompass className="text-red-600 transition-colors w-4 h-4" />
                <span className="text-gray-600 group-hover:text-red-600 font-bold">Explore</span>
            </button>

            {/* Shop Button */}
            <button className="group flex items-center cursor-pointer gap-3 px-4 py-2 ">
                <FaShoppingBag className="text-red-600 transition-colors w-4 h-4" />
                <span className="text-gray-600 group-hover:text-red-600 font-bold">Shop</span>
            </button>

            {/* Support Button */}
            <button className="group flex items-center cursor-pointer gap-3 px-4 py-2 ">
                <FaShield className="text-red-600 transition-colors w-4 h-4" />
                <span className="text-gray-600 group-hover:text-red-600 font-bold">Support</span>
            </button>

        </div>
    )
}
