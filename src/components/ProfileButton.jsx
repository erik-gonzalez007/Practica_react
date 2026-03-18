import React from 'react'
import { UserIcon } from '@heroicons/react/24/solid'


export default function ProfileButton({ text = "Log in / Sign up", onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-1 border-2 border-red-500 text-red-500 bg-white rounded-full cursor-pointer font-bold h-8"
    >
      <UserIcon className="w-5 h-5" />
      {text}
    </button>
  )
}
