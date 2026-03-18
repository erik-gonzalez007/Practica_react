import React from 'react'
import { FaPlus } from 'react-icons/fa'

export default function GameDescription() {
    return (
        <div className="flex justify-center gap-5 mt-30 h-120 ">
            <div className="w-143 space-y-4">
                <h3 className='text-gray-600 font-medium text-2xl'>You're moving to the valley...</h3>
                <p className='text-gray-600 '>
                    You’ve inherited your grandfather’s old farm plot in Stardew Valley.
                    Armed with hand-me-down tools and a few coins, you set out to begin
                    your new life. Can you learn to live off the land and turn these
                    overgrown fields into a thriving home? It won’t be easy. Ever since
                    Joja Corporation came to town, the old ways of life have all but
                    disappeared. The community center, once the town’s most vibrant hub
                    of activity, now lies in shambles. But the valley seems full of
                    opportunity. With a little dedication, you might just be the one to
                    restore Stardew Valley to greatness!
                </p>

                <button className="group flex items-center cursor-pointer gap-1 px-4 py-2  ">
                    <FaPlus className="text-red-600 w-6 h-6 group-hover:text-red-800" />
                    <span className="text-red-600 font-bold group-hover:text-red-800">Read more</span>
                </button>

                <p className="text-gray-600 text-xs">
                    Software description provided by the publisher.
                </p>

                <button className=" flex bg-red-600 rounded-md justify-center items-center cursor-pointer w-90 h-13 gap-4">
                    <span className=" group-hover:text-red-600 font-bold">Explore this game's official website</span>
                </button>
            </div>

            <div className="h-140 w-140">
                <img className='rounded-2xl' src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_600/store/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7" alt="Game preview" />
            </div>
        </div>
    )
}
