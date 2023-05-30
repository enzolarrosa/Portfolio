import React from "react";
import yo from '../img/yo.jpg'
import a from '../style/About.module.css'
import cv from '../CV/CV Larrosa .pdf'
import { FormattedMessage } from "react-intl";

export default function About(){

    return(
        <div id="about">
            <div className={a.divTitle}>
            <h2 className="title"><FormattedMessage id="about.title" defaultMessage="About Me" /></h2>
            </div>
            <div className={a.conteiner}>
             <div className={a.divImage}>
                <div className={a.contImage}>
                <img className={a.image} src={yo} alt="imagen mia" />
                </div>
             </div>
             <div className={a.info}>
             <h3><FormattedMessage id="about.subtitle" defaultMessage="Who I am?" /></h3>
                 <p><FormattedMessage id="about.parrafo" defaultMessage="My name is Nicolas Larrosa, I am 21 years old, I am a Full Stack Developer focused on web development. I consider myself someone autonomous, self-taught, with great problem solving and good teamwork. Contact me and I can tell you more about me!" /></p>
             <a href={cv} download='CV Larrosa' className={a.button}><span><FormattedMessage id="about.cv" defaultMessage="Dowloand CV" /></span></a>
             </div>
            </div>
        </div>
    )
}