import React from "react";
import About from '../components/AboutMe'
import ContactMe from '../components/Contact';
import Footer from '../components/Footer';
import Home from '../components/Home';
import {Proyects} from '../components/Proyects';
import Skills from '../components/Skills';
import Nav from '../components/Nav.jsx'


export default function HomePage(){

    return(
        <div>
            <Nav/>
            <Home/>
            <About/>
            <Skills/>
            <Proyects/>
            <ContactMe/>
            <Footer/>
        </div>
    )
}