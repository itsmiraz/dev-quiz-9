import React from 'react';

const Options = ({ option, checkRightORWrong }) => {
    return (
        <div>
            <button onClick={() => checkRightORWrong(option)} type="button" className="px-8 py-3 w-80 font-semibold border rounded dark:border-gray-100 hover:bg-slate-900 dark:text-gray-100">{option}</button>
        </div >
    );
};

export default Options;