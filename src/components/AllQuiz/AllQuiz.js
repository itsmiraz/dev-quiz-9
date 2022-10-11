import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const AllQuiz = () => {
    const quizs = useLoaderData()
    const { name, total } = quizs.data;
    const questions = quizs.data.questions;

    const [CorrectAns, setCorrectAns] = useState([0])
    const [WrongAns, setWrongAns] = useState([0])

    const handleWrongAns = () => {
        let NewCorrectAns = parseFloat(WrongAns) + 1;
        setWrongAns(NewCorrectAns)
    }
    const handleCorrectAns = () => {
        let NewCorrectAns = parseFloat(CorrectAns) + 1;
        setCorrectAns(NewCorrectAns)
    }

    return (
        <div>
            <div className='text-center flex justify-center flex-col text-white my-4'>
                <h1 className='text-4xl font-semibold'>{name} Questions </h1>
                <p className='font-semibold'>We have Total {total} Questions</p>
                <div className='grid-col-1  text-slate-900 rounded-lg p-5 text-center '>
                    <h1 className='font-semibold text-center text-green-400'>Right Ans:{CorrectAns}</h1>
                    <h1 className='font-semibold text-center text-red-500'>Wrong Ans:{WrongAns}</h1>
                </div>

            </div>


            <div >

                {
                    questions.map(question => <Question
                        key={question.id}
                        mainquestion={question}
                        handleCorrectAns={handleCorrectAns}
                        handleWrongAns={handleWrongAns}
                    ></Question>)
                }
            </div>


        </div >
    );
};

export default AllQuiz;