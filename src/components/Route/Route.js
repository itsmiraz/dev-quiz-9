import React from 'react';
import { NavLink } from 'react-router-dom';

const Route = ({ route }) => {
    return (
        <div>
            <li className='md:mr-12 mr-5  font-semibold'>
                <NavLink className={({ isActive }) =>
                    isActive ? 'text-red-400' : undefined
                } to={route.path}>{route.name}</NavLink>
            </li>
        </div>
    );
};

export default Route;