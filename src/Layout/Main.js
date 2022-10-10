import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
export const SubjectContext = createContext();
const Main = () => {
    const subjects = useLoaderData()
    return (
        <div>
            <SubjectContext.Provider value={subjects}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </SubjectContext.Provider>
        </div>
    );
};

export default Main;