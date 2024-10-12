import React, {Fragment} from 'react';

import {Route, Routes} from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';

import Home from './Core/Home';
import Header from './Core/Header';
import Footer from './Core/Footer';
import Profile from './Pages/Profile';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Publications from './Pages/Publications';
import Miscellaneous from './Pages/Miscellaneous';

const MainRouter = () => {

    // const isDesktopOrLaptop = useMediaQuery({
    //     query: '(min-device-width: 900px)'
    // })

    return ( 
        //     { isDesktopOrLaptop && <Menu />}
        //     { !isDesktopOrLaptop && <MenuMobile />}
            <Fragment>

                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    {/* <Route path="/ResumeWebsite/" element={<Home />}></Route> */}
                    <Route path="/Profile" element={<Profile />}></Route>
                    <Route path="/Education" element={<Education />}></Route>
                    <Route path="/Skills" element={<Skills />}></Route>
                    <Route path="/Projects" element={<Projects />}></Route>
                    <Route path="/Publications" element={<Publications />}></Route>
                    <Route path="/Miscellaneous" element={<Miscellaneous />}></Route>

                </Routes>
                <Footer />

            </ Fragment>        
    )
};

export default MainRouter;