import React from 'react';
import { BeakerIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const Subject = ({ subject }) => {
    console.log(subject);
    const { name, logo, total } = subject
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-800 hover:bg-gray-900 transition dark:text-gray-50">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2 flex items-center justify-between text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{name}</span>
                    <p>Total Quiz: {total}</p>
                </div>
                <button className="bg-gray-600 rounded px-4 items-center flex">
                    <span className='mr-1'>Start Quiz </span>
                    <ArrowRightIcon className="h-5 w-5 " /></button>
            </div>
        </div>
    );
};

export default Subject;