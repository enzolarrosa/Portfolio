import React, {useEffect, useRef,useContext} from "react";
import h from '../style/Home.module.css'
import Typed from 'typed.js'
import Particle from "./BGparticles/Particle";
import Menu from "./Menu";
import { FormattedMessage } from "react-intl";
import { langContext } from '../context/context.jsx';

export default function Home(){
     
    const el= useRef(null)
    const lang = useContext(langContext);

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

    useEffect(()=>{
        lang.selectLanguage('en-US')
    })

    return(
        <div id='home'>
        <Particle/>
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