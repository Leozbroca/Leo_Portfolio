import React from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import HomePage from "../pages/home/Home";
import AboutPage from "../pages/about/About";
import SkillsPage from "../pages/skills/Skills";
import ProjectsPage from "../pages/projects/Projects";
import ContactPage from "../pages/contact/Contact";
import ErrorPage from "../pages/error/Error";

const Router = () => {
    const location = useLocation();
    return(
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<HomePage/>}/> 
                <Route exact path="/about" element={<AboutPage/>}/>
                <Route exact path="/skills" element={<SkillsPage/>}/>
                <Route exact path="/projects" element={<ProjectsPage/>}/>
                <Route exact path="/contact" element={<ContactPage/>}/> 
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
    )
}

export default Router