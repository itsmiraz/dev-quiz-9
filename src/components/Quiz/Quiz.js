import React from 'react';
import { useContext } from 'react';
import { SubjectContext } from '../../Layout/Main';
import Subject from '../Subject/Subject';

const Quiz = () => {
    const subjects = useContext(SubjectContext)
    const SubjectArray = subjects.data;
    return (
        <div>
            <div>
                <h1 className='text-5xl my-10 text-white font-semibold  text-center m-5'>Develop Your <span className='bg-slate-900 md:text-5xl text-4xl'>Knowledge</span> About Web <span className='bg-slate-900 md:text-5xl text-4xl'>Developmnet</span></h1>
            </div>
            <div className='flex gap-5 mx-10 my-20 flex-col md:flex-row'>
                {
                    SubjectArray.map(subject => <Subject
                        key={subject.id}
                        subject={subject}
                    ></Subject>)
                }
            </div>
        </div>
    );
};

export default Quiz;