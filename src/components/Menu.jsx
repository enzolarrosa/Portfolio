import React from "react";
import h from '../style/Home.module.css'
import { FaHome, FaUserAlt, FaClipboardList } from "react-icons/fa";
import { AiFillFile } from "react-icons/ai";
import { SiGooglemessages } from "react-icons/si";
import {Link} from 'react-scroll'

export default function Menu(){

    return(
        <div className={h.menu}>
            <ul className={h.ulMenu}>
                <li className={h.liMenu}><Link to='home' offset={-50} spy={true} href="#home"><FaHome/></Link></li>
                <li className={h.liMenu}><Link to='about' offset={-50} spy={true} href="#about"><FaUserAlt/></Link></li>
                <li className={h.liMenu}><Link to='skills' offset={-50} spy={true} href="#skills"><FaClipboardList/></Link></li>
                <li className={h.liMenu}><Link to='proyects' offset={-50} spy={true} href="#proyects"><AiFillFile/></Link></li>
                <li className={h.liMenu}><Link to='contact' offset={-70} spy={true} href="#contact"><SiGooglemessages/></Link></li>
            </ul>
        </div>
    )
}