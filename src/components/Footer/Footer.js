import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="px-4 py-8 bg-gray-800 text-gray-400">
                <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                        <div className="flex text-3xl font-semibold z-10 text-white items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">

                            <h1>Dev Quiz</h1>
                        </div>
                        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                            <li>
                                <a rel="noopener noreferrer" href="#/">Terms of Use</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#/">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                        <li>
                            <a rel="noopener noreferrer" href="#/">Instagram</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#/">Facebook</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#/">Twitter</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;