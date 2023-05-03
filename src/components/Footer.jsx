import React from "react";
import {FaWhatsapp} from 'react-icons/fa'
import {FiGithub , FiLinkedin, FiInstagram} from 'react-icons/fi'
import f from '../style/Footer.module.css'
import { FormattedMessage } from "react-intl";


export default function Footer(){

    return(
        <div className={f.conteiner} >
            <div className={f.divOne}>
                <p><FormattedMessage id="footer.derechos1" defaultMessage="Page created by Nicolas Larrosa" /></p>
                <p><FormattedMessage id="footer.derechos2" defaultMessage="© All rights reserved" /></p>
            </div>
            <div className={f.divTwo}> 
            <a className={f.icons} target="_blank" href="https://api.whatsapp.com/send?phone=541166182549"><FaWhatsapp/></a>
            <a className={f.icons} target="_blank" href="https://github.com/enzolarrosa"><FiGithub/></a>
            <a className={f.icons} target="_blank" href="https://www.linkedin.com/in/larrosanicolas/"><FiLinkedin/></a>
            <a className={f.icons} target="_blank" href="https://www.instagram.com/nico_larrosaa/"><FiInstagram/></a>
            </div>
        </div>
    )
}