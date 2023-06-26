import React, {useEffect,useContext} from "react";
import h from '../style/Home.module.css'
import Particle from "./BGparticles/Particle";
import Menu from "./Menu";
import { FormattedMessage } from "react-intl";
import { langContext } from '../context/context.jsx';

export default function Home(){
    const lang = useContext(langContext);
     
    return(
        <div id='home'>
        <Particle/>
        <div className={h.home}>
            <div className={h.divInfo}>
                <p className={h.info}><FormattedMessage id={"home.parrafo1"} defaultMessage='Hello, I am'/></p>
                <h1 className={h.name}>Nicolas Larrosa</h1>
                <p className={h.full}>Full Stack Developer</p>
            </div>
        </div>
        <Menu/>
        </div>
    )
} 