import React from 'react';

const Blogs = () => {
    return (
        <div>

            <h1 className='text-4xl text-white my-10 text-center font-semibold'>Frequently Asked <span className='bg-slate-900'>Questions</span></h1>

            <div className=' md:px-20 px-4 my-10'>
                <div className='my-10'>
                    <div className="flex items-center text-3xl font-semibold text-white">
                        <h1 className='text-3xl my-2 bg-slate-900'>Q1:</h1>
                        <p>What is the purpose of React Router?</p>
                    </div>
                    <p className='font-semibold text-white'><span className='bg-red-500'>Ans:</span>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
                <div className='my-10'>
                    <div className="flex items-center text-3xl font-semibold text-white">
                        <h1 className='text-3xl  my-2   bg-slate-900'>Q1:</h1>
                        <p>How does Context API works?</p>
                    </div>
                    <p className='font-semibold text-white'><span className='bg-red-500'>Ans:</span>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
                </div>

                <div className='my-10'>
                    <div className="flex items-center text-3xl font-semibold text-white">
                        <h1 className='text-3xl my-2 bg-slate-900'>Q1:</h1>
                        <p>Explane UseRef Hook</p>
                    </div>
                    <p className='font-semibold text-white'><span className='bg-red-500'>Ans:</span>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>
                <div className='my-10'>
                    <div className="flex items-center text-3xl font-semibold text-white">
                        <h1 className='text-3xl  my-2   bg-slate-900'>Q1:</h1>
                        <p>What is SPA website?</p>
                    </div>
                    <p className='font-semibold text-white'><span className='bg-red-500'>Ans:</span>An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;