import React from 'react';

const Subject = ({ subject }) => {
    console.log(subject);
    const { name, logo, total } = subject
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-800 hover:bg-gray-900 transition dark:text-gray-50">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{name}</span>
                </div>
                <button className="bg-cyan-900 rounded px-4">Start Quiz</button>
            </div>
        </div>
    );
};

export default Subject;