'use client'
import React, { useState } from "react";

interface AnalyticsItemProps {
    item: any;
}

const AnalyticsItem: React.FC<AnalyticsItemProps> = ({ item }) => {
    const [activeItem, setActiveItem] = useState<number | null>(null);

    const handleAccordionClick = (id: number) => {
        setActiveItem(prev => (prev === id ? null : id));
    };

    return (
        <div className="border rounded-sm">
            <div
                className="flex justify-between items-center px-4 py-3  cursor-pointer"
                onClick={() => handleAccordionClick(item.id)}
            >
                <h2 className="font-semibold text-lg text-center text-[#1b95e0] ">{item.name}</h2>
                <svg

                    className={`w-6 h-6 transition-transform cursor-pointer transform ${activeItem === item.id ? 'rotate-180' : 'rotate-0'}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18 15L12 9L6 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            {activeItem === item.id && (
                <div className="px-4 py-3 border-t">
                    <p className="text-gray-700">{item.description}</p>
                    <div>

                        <p className="text-gray-700 font-semibold">Email : <span className="text-gray-700" >
                            {item.email}
                        </span>
                        </p>
                    </div>
                    {/* {item?.socialMedia && (
            <span className="inline-block mt-2 px-3 py-1 text-sm text-white bg-blue-500 rounded-full">Follow {item.socialMedia}</span>
          )} */}
                </div>
            )}
        </div>
    );
};

export default AnalyticsItem;
