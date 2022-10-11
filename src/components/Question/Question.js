import React from 'react';
import Options from './Options';
import { EyeIcon } from '@heroicons/react/24/solid'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


const RightAns = () => toast.success(' Your Ans is Correct', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});
const WrongAns = () => toast.error(' Your Answer is Wrong!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});

const Question = ({ mainquestion, handleCorrectAns, handleWrongAns }) => {
    const { question, options, correctAnswer } = mainquestion;

    const [show, setShow] = useState(false)




    const checkRightORWrong = (selectedOption) => {
        if (correctAnswer === selectedOption) {
            RightAns()
            handleCorrectAns()
        }
        else {
            WrongAns();
            handleWrongAns()

        }
    }
    return (
        <div>
            <div className='text-center font-semibold text-white my-10'>

                <div className='px-10 md:mr-60 md:ml-60 '>
                    <div className='flex items-center justify-between md:px-10 px-2 bg-slate-900 my-4'>
                        <div>
                            <p className='my-5  '> Question:{question}</p>
                        </div>
                        <div>
                            <EyeIcon onClick={() => setShow(!show)} className="h-4 w-4 my-0 py-0 text-white" />

                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-x-2 gap-y-2 md:px-10 px-0'>
                        {
                            options.map(option => <Options
                                key={option.id}

                                checkRightORWrong={checkRightORWrong}
                                option={option}
                            ></Options>)
                        }
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                    </div>
                    <div>
                        <p className={`${show ? 'block' : 'hidden'}`}>
                            Correct Ans: {correctAnswer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;