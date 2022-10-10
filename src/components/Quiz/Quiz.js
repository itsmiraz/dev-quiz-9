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
                <h1 className='text-5xl font-semibold text-slate-900 text-center m-5'>Develop Your Knowledge About Web Developmnet</h1>
            </div>
            <div className='flex gap-5 m-10 flex-col md:flex-row'>
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