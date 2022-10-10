import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='text-center hero-section'>
                <div className='text-white font-semibold p-5'>
                    <h1 className="text-4xl ">Quiz Time</h1>
                    <br />
                    <p>We have some quiz about Web Development. See yourself How many quiz you can Answer Correctly.</p>
                </div>
                <img src="https://webengage.com/blog/wp-content/uploads/sites/4/2018/04/How-to-Use-an-Interactive-Quiz-to-Boost-Your-Online-Conversions.png" alt="" />
            </div>
        </div>
    );
};

export default Home;