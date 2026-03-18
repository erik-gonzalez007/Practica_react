import React from 'react'

const RelatedTags = () => {
    const tags = [
        "Action",
        "Simulation",
        "Character Customization",
        "Choose your own path",
        "Pixel Art",
        "Romance",
        "Meet up & play together",
        "Online co-op",
        "Play together on multiple consoles",
        "Play together on one console",
    ];

    return (
        <section className="flex justify-center">
            <div className='flex-col w-290'>
                <div className="rt-title mb-3">
                    <h2 className="text-3xl font-bold text-gray-600 pb-3">Related Tags</h2>
                </div>
                <div className="rt-btns flex flex-wrap gap-4">
                    {tags.map((tag, index) => (
                        <button
                            key={index}
                            type="button"
                            className="rt-btn bg-gray-200 text-gray-600 hover:text-red-600  font-bold px-4 py-2 rounded-2xl"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedTags;