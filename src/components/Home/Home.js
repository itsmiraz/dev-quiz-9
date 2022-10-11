import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div >

                <section className=" dark:text-gray-100">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className='md:text-6xl text-4xl  font-bold '>Welcome To

                                <br />
                                <span className='md:text-5xl text-white text-4xl mt-6  bg-slate-900'>
                                    DEV Quiz
                                </span>
                            </h1>
                            <br />
                            <p className="font-semibold mb-8 text-lg sm:mb-12">We have some quiz about Web Development. See yourself How many quiz you can Answer Correctly.
                                <br />
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <Link to='/quiz' className="px-8 py-3 text-lg font-semibold rounded dark:bg-slate-900 hover:border hover:dark:border-gray-100  hover:bg-transparent  ">Start Quiz</Link >
                                <Link to='/blogs' className="px-8 py-3 text-lg font-semibold border  rounded dark:border-gray-100">Watch Blogs</Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img src="https://www.mambaui.com/assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                    </div>
                </section>
                <section className=" dark:text-gray-100">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img className='rounded-lg' src="https://t4.ftcdn.net/jpg/03/14/06/67/360_F_314066785_uAOxjZqdroS7cliA0AXdpkDMx2HcCpUw.jpg" alt="" />
                        </div>
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className='md:text-6xl text-4xl  font-bold '>
                                Well Dev Quiz is a site

                            </h1>
                            <br />
                            <p className="font-semibold mb-8 text-lg sm:mb-12">Where you can improve your Development Knowledge. We have some Latest questions about Web Development.
                                <br />
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <Link to='/quiz' className="px-8 py-3 text-lg font-semibold rounded dark:bg-slate-900 hover:border hover:dark:border-gray-100  hover:bg-transparent  ">Get Started</Link >

                            </div>
                        </div>

                    </div>
                </section>
                <p></p>

            </div >
        </div >
    );
};

export default Home;