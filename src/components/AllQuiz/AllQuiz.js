import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const AllQuiz = () => {
    const quizs = useLoaderData()
    const { name, total } = quizs.data;
    const questions = quizs.data.questions;
    return (
        <div>
            <div className='text-center text-white my-4'>
                <h1 className='text-4xl font-semibold'>{name} Questions </h1>
                <p className='font-semibold'>We have Total {total} Questions</p>
            </div>
            <div>
                {
                    questions.map(question => <Question
                        key={question.id}
                        mainquestion={question}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default AllQuiz;