import React from 'react'
import { FaCoins, FaTruck } from 'react-icons/fa'

export default function SubNavbar() {
    return (
        <div className='flex items-center gap-5'>

            {/* Shipping promo */}
            <p className="flex items-center gap-2 text-gray-700">
                <FaTruck className="text-red-600 w-6 h-6" />
                Free shipping on orders $50 or more. Restrictions apply.
            </p>

            {/* Divider */}
            <p className='text-gray-700'>|</p>

            {/* Rewards promo */}
            <p className="flex items-center gap-2 text-gray-700">
                <FaCoins className="text-red-600 w-6 h-6" />
                Redeem your My Nintendo Platinum Points for fun rewards
            </p>

        </div>
    )
}
