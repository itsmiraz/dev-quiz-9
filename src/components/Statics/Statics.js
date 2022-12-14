import React from 'react';
import SimpleAreaChart from '../SimpleAreaChart/SimpleAreaChart';
import './Statics.css'

const Statics = () => {

    return (
        <div>
            <div className='text-center text-white'>
                <div className='md:mx-40 mx-2 font-semibold my-4'>
                    <h1 className='text-4xl font-bold my-6'>We have some Latest Quiz About <span className='bg-slate-900'>Web Development</span></h1>
                    <p>
                        Now Days Web Development is one of the best skills there to learn.It's Popularity is increasing day by day. Everyone Should Learn this skill not for only job also it is really a usefull skill. If you are Buisnessman you can Build Your Website , If you are Photographer you can build a portflio where you can showcase your photography and so on.
                        <br />
                        <br />

                        So we Bring some Latest Quiz About Web Development where you can check yourself.
                    </p>
                    <h1 className='text-4xl my-4'>Here you can see How many <span className="bg-slate-900">Quiz</span> we have of each topics</h1>
                </div>
                <div id='container' className='z-10 flex justify-center md:ml-14' >
                    <SimpleAreaChart></SimpleAreaChart>
                </div>
                <p className='my-4 font-semibold md:mx-40 mx-4'>
                    Here are some popular Technologies about Web Development such as React for Single Page Application , Javascript for Interactive website , CSS for styling and Git for store the code.
                </p>
            </div>
        </div>
    );
};

export default Statics;