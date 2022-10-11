import React, { useContext } from 'react';
import { SubjectContext } from '../../Layout/Main';
import Rechart from '../Rechart/Rechart';
import SimpleAreaChart from '../SimpleAreaChart/SimpleAreaChart';
import './Statics.css'

const Statics = () => {

    return (
        <div>
            <div className='text-center text-white'>
                <div className='mx-40 font-semibold my-4'>
                    <h1 className='text-4xl  my-6'>We have some Latest Quiz About <span className='bg-slate-900'> Web Development</span></h1>
                    <p>
                        Now Days Web Development is one of the best skills there to learn.It's Popularity is increasing day by day. Everyone Should Learn this skill not for only job also it is really a usefull skill. If you are Buisnessman you can Build Your Website , If you are Photographer you can build a portflio where you can showcase your photography and so on.
                        <br />
                        <br />

                        So we Bring some Latest Quiz About Web Development where you can check yourself.
                    </p>
                </div>
                <div id='container' className='z-10 my-10' >
                    <SimpleAreaChart></SimpleAreaChart>
                </div>
                <p className='my-4 font-semibold mx-40'>
                    Here are some popular Technologies about Web Development such as React for Single Page Application , Javascript for Interactive website , CSS for styling and Git for store the code.
                </p>
            </div>
        </div>
    );
};

export default Statics;