import React from 'react';
import Route from '../Route/Route';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Quiz', path: '/quiz' },
        { id: 3, name: 'Statics', path: '/statics' },
        { id: 4, name: 'Blogs', path: '/blogs' }
    ]
    return (
        <div className=' bg-slate-900  py-3 flex items-center justify-between text-white w-full'>
            <h1 className='text-3xl font-semibold w-full ml-3'>Dev Quiz</h1>



            <ul className={`md:flex bg-slate-900 w-full text-white text-center md:text-right justify-center md:static duration-300 ease-linear absolute ${open ? 'top-12' : 'top-[-150px]'}`}>
                {
                    routes.map(route => <Route
                        key={route.id}
                        route={route}
                    ></Route>)
                }
            </ul>
            <div onClick={() => setOpen(!open)} className="h-6  bg-slate-700 text-white w-6 mr-3 md:hidden" >
                {open ? <XMarkIcon />
                    : <Bars3Icon />
                }
            </div>
        </div >
    );
};

export default Navbar;