import React, {useEffect, useRef} from "react";
import h from '../style/Home.module.css'
import Nav from './Nav'
import Typed from 'typed.js'
import Particle from "./BGparticles/Particle";
import Menu from "./Menu";
import { useTranslation } from "react-i18next";
import { FormattedMessage } from "react-intl";

export default function Home(){
     
    const {t} = useTranslation("global")
    const el= useRef(null)

    useEffect(() => {
        const typed= new Typed (el.current,{
            strings:["Full Stack Developer","Web Designer"],
            startDelay: 1000,
            typeSpeed:30,
            backSpeed:80,
            backDelay:1000,
            smartBackspace:true,
            showCursor:true,
            autoInsertCss:true,
            loop:true
        });

    })

    return(
        <div id='home'>
        <Particle/>
            <Nav/>
        <div className={h.home}>
            <div className={h.divInfo}>
                <p className={h.info}><FormattedMessage id={"home.parrafo1"} defaultMessage='Hello, I am'/></p>
                <h1 className={h.name}>Nicolas Larrosa</h1>
                <p className={h.full}><span ref={el}></span></p>
            </div>
        </div>
        <Menu/>
        </div>
    )
} 