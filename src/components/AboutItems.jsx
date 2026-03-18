import React from "react";
import { FaBuilding, FaCalendar, FaDatabase, FaGamepad, FaGlobe, FaPuzzlePiece, FaTools, FaTv, FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const aboutData = [
    { Icon: FaDatabase, title: "Game file size", content: "Nintendo Switch: 1.5 GB / Nintendo Switch 2: 2.2 GB" },
    { Icon: FaTv, title: "Supported play modes", content: "TV Mode, Tabletop Mode, Handheld Mode" },
    { Icon: FaUser, title: "Nintendo Account family-group lending", content: "Supported" },
    { Icon: FaPuzzlePiece, title: "Genre", content: "Action, Simulation" },
    { Icon: FaGamepad, title: "Nintendo Switch Online", content: "Online play, Save Data Cloud, Classic Games" },
    { Icon: FaGamepad, title: "System", content: "Nintendo Switch" },
    { Icon: FaBuilding, title: "Publisher", content: "ConcernedApe" },
    { Icon: FaTools, title: "Developer", content: "ConcernedApe" },
    { Icon: FaGlobe, title: "Supported Languages", content: "Japanese, French, German, Italian, Spanish, Korean, Portuguese, Russian, Simplified Chinese, Latin American Spanish, Traditional Chinese, American English" },
    { Icon: FaCalendar, title: "Release date", content: "October 5, 2017" },
    { Icon: FaGear, title: "ESRB rating", content: "Supported" },
];

export default function AboutItems() {
    return (
        <section className="about p-6 w-300 mx-auto">
            <h2 className="text-xl font-semibold mb-6 border-b pb-2">About this item</h2>

            <div className="space-y-8">
                {aboutData.map(({ Icon, title, content }, idx) => (
                    <div
                        key={idx}
                        className="flex items-start space-x-4 border-b border-gray-300 pb-4 last:border-b-0 gap-10"
                    >
                        <div className="flex-shrink-0 text-gray-600">
                            <Icon className="w-7 h-7" />
                        </div>
                        <div className="flex flex-row w-50">
                            <h3 className="text-gray-700 font-semibold">{title}</h3>
                        </div>
                        <div>
                            <p className="text-gray-700 text-sm">{content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}