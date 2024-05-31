'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';

const TickerInfo = ({ item }: any) => {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <div className="container border rounded-sm px-4 py-3">
                <div className="flex justify-between items-center  cursor-pointer" onClick={toggleDropdown}>
                    <h2 className="font-semibold text-lg">{item?.name}</h2>
                    <div className='flex gap-2' >
                        {isDropdownOpen ? (
                            <i className="fa-sharp fa-solid fa-angle-down w-6 h-6 transition-transform transform"></i>

                        ) : (
                            <i className="fa-sharp fa-solid fa-angle-right w-6 h-6 transition-transform transform"></i>
                        )}
                    </div>
                </div>
                {isDropdownOpen && (
                    <div className='flex flex-col  mb-3'>
                        <h2 className="font-semibold text-lg mb-3">{item?.ticker}</h2>
                        <h2 className="text-sm text-left w-[90%] mb-3">{item?.description}</h2>
                        <div className='flex flex-col items-end'>
                            <Link href={`/${item?.ticker}`}
                                className='px-4 py-2  text-white bg-[#eec78c] hover:bg-black flex justify-between items-center gap-2'
                            >
                                View
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TickerInfo;
