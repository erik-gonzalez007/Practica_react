import React, { useState, useRef, useEffect } from 'react';
import { FaCheckCircle, FaDownload, FaFileDownload } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/store/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7",
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000001801/6016d2f6d874ad4a1063a28181597427f6fe9ee207ce3c8351c10dda377b3bb4",
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000001801/dcd6f1feda032d04e7220e97e24d93d1f9c963285c88bd8e81e06a20d193054c",
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000001801/767ac7ae1903bc92ab31b2e131d422c0f8dc9912fd52ce51afc984b6b6974e83",
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000001801/d76a54c456854df9c9a5059eac394d744aa73fe1d7f391cf79b8a4b73bd7298b",
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000001801/9c33645aee20fb323e579cd75036df000f2322de1be04662c989d42047ffbfdb",
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/store/software/switch/70010000001801/a14b2ba7d7d59e9ab25a74871d4d41f83527cba7485cd024bbc518c1433932c0",
    ];

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const thumbnailsRef = useRef([]);
    const thumbnailsContainerRef = useRef();

    useEffect(() => {
        if (thumbnailsRef.current[currentSlide]) {
            thumbnailsRef.current[currentSlide].scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    }, [currentSlide]);

    return (
        <div className="relative bg-[#d6f0fa] h-175 flex items-center justify-center">
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                <div className="bg-white shadow-xl rounded-xl p-6 px-11 w-310">

                    {/* Breadcrumb */}
                    <div className="breadcrumbs text-sm text-gray-700 pb-4">
                        <ul>
                            <li><a>Store</a></li>
                            <li><a>Games</a></li>
                            <li className='text-black font-medium'>Stardew Valley</li>
                        </ul>
                    </div>

                    {/* Content */}
                    <div className='flex gap-10'>

                        {/* Left */}
                        <div >

                            {/* Carrusel grande */}
                            <div className='flex w-160'>
                                <div className="carousel carousel-center relative w-full h-full border-4 rounded-2xl overflow-hidden">
                                    {slides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`carousel-item relative w-full flex items-center justify-center ${index === currentSlide ? "block" : "hidden"}`}
                                        >
                                            <img
                                                src={slide}
                                                className="w-full h-full object-cover"
                                                alt={`Slide ${index + 1}`}
                                            />
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                                                <button className="btn btn-circle" onClick={prevSlide}>❮</button>
                                                <button className="btn btn-circle" onClick={nextSlide}>❯</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Carrusel de miniaturas */}
                            <div
                                className="flex gap-2 overflow-x-auto scrollbar-hide px-1 mt-2 w-160"
                                ref={thumbnailsContainerRef}
                            >
                                {slides.map((slide, index) => (
                                    <button
                                        key={index}
                                        ref={(el) => (thumbnailsRef.current[index] = el)}
                                        onClick={() => setCurrentSlide(index)}
                                        className="flex-shrink-0 w-24 h-14 rounded-lg overflow-hidden relative focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        aria-label={`Select slide ${index + 1}`}
                                    >
                                        <img
                                            src={slide}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                            draggable={false}
                                        />

                                        {index === currentSlide && (
                                            <span className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 rounded-b-lg" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className='flex items-center gap-1'>
                                <div><img className='w-17 h-17' src="https://mario.wiki.gallery/images/d/d2/ESRB_E10%2B.svg?20230923121929" alt="ESRV +10" /></div>
                                <div className='w-80'>
                                    <p className='text-gray-600 text-xs'>Fantasy Violence, Mild Blood, Mild Language, Simulated Gambling, Use of Alcohol, Use of Tobacco</p>
                                    <hr className="my-2 border-gray-600" />
                                    <p className='text-gray-600 text-xs'>User Interact</p>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <button className="group flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-md w-full h-17 transition cursor-pointer">
                                    <FaCheckCircle className="text-blue-500 w-5 h-5" />
                                    <div className='flex flex-col items-start'>
                                        <span className="text-gray-600 text-xs font-bold">Nintendo Switch 2 Compatibility Information</span>
                                        <span className="text-gray-600 text-xs">Supported – Game behavior is consistent with Nintendo Switch.</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Right */}
                        <div>

                            <h2 className="text-gray-700 font-medium text-3xl pb-5">Stardew Valley</h2>

                            <p className="text-gray-700 font-semibold pb-2">Select a version</p>

                            <div className='flex flex-wrap gap-4 pb-3'>
                                <fieldset className=" flex items-center fieldset h-12 border-gray-300 rounded-box w-45 border p-4 checked:border-red-600 ">
                                    <label className="label text-gray-700 font-medium flex items-center">
                                        <input type="checkbox" className="checkbox border-2 border-gray-700 rounded-2xl checked:bg-red-600 checked:border-red-600" />
                                        <span className="ml-2">Nintendo Switch 2</span>
                                    </label>
                                </fieldset>

                                <fieldset className=" flex items-center fieldset h-12 border-gray-300 rounded-box w-45 border p-4 checked:border-red-600 ">
                                    <label className="label text-gray-700 font-medium flex items-center">
                                        <input type="checkbox" className="checkbox border-2 border-gray-700 rounded-2xl checked:bg-red-600 checked:border-red-600" />
                                        <span className="ml-2">Nintendo Switch</span>
                                    </label>
                                </fieldset>

                                <fieldset className=" flex items-center fieldset h-12 border-gray-300 rounded-box w-30 border p-4 checked:border-red-600 ">
                                    <label className="label text-gray-700 font-medium flex items-center">
                                        <input type="checkbox" className="checkbox border-2 border-gray-700 rounded-2xl checked:bg-red-600 checked:border-red-600" />
                                        <span className="ml-2">Upgrade Pack</span>
                                    </label>
                                </fieldset>
                            </div>

                            <a className="text-red-700 underline" href="">What's an upgrade pack?</a>

                            <div className='flex gap-4 items-center mt-4'>
                                <p className="text-gray-900 font-medium">Edition</p>

                                <button className="group flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-2xl">
                                    <span className="text-gray-600">Digital</span>
                                </button>
                            </div>

                            <div className='flex justify-between gap-4 items-center mt-4'>
                                <p className='text-gray-700 font-medium text-3xl'>$14.99</p>

                                <button className="flex items-center cursor-pointer ">
                                    <FiHeart className="w-6 h-6 text-red-600 stroke-3" />
                                </button>
                            </div>

                            <div className='pt-4.5 h-19'>
                                <button className=" flex bg-red-600 rounded-md justify-center items-center cursor-pointer w-full h-full gap-4">
                                    <FaDownload className=" transition-colors w-6 h-6" />
                                    <span className="text-2xl group-hover:text-red-600 font-bold">Direct Download</span>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}