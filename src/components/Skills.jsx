import React from "react";
import {SiPostman} from 'react-icons/si'
import {FaNpm} from 'react-icons/fa'
import {DiScrum} from 'react-icons/di'
import s from '../style/Skills.module.css'
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills () {
    
    AOS.init()

    return(
        <div id="skills">
            <h1 className="title"><FormattedMessage id="skills.title" defaultMessage="Skills" /></h1>
            <div className={s.conteiner}>
                <div data-aos-once="true" data-aos-delay="150" data-aos-duration="1000" data-aos="flip-right" className={s.divSkills}>
                    <h2 className={s.subtitle} ><FormattedMessage id="skills.subtitle1" defaultMessage="Front End" /></h2>
                    <div className={s.conteinerIcons} >
                    <div className={s.divIcons}>
                    <div className={s.divH5}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" className={s.icons}/>
                    <h5 className={s.h5}>HTML</h5>
                    </div>
                    <div className={s.divH5}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" className={s.icons}/>
                    <h5 className={s.h5}>CSS</h5>
                    </div>
                    </div>
                    <div className={s.divIcons}>
                    <div className={s.divH5}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" className={s.icons}/>
                    <h5 className={s.h5}>Javascript</h5>
                    </div>
                    <div className={s.divH5}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className={s.icons}/>
                    <h5 className={s.h5}>Bootstrap</h5>
                    </div>
                    </div>
                    <div className={s.divIcons}>
                    <div className={s.divH5}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className={s.icons}/>
                    <h5 className={s.h5}>TailWindCss</h5>
                    </div>
                    <div className={s.divH5}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className={s.icons}/>
                    <h5 className={s.h5}>React</h5>
                    </div>
                    </div>
                    <div className={s.divIcons}>
                    <div className={s.divH5}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" className={s.icons}/>
                    <h5 className={s.h5}>Redux</h5>
                    </div>
                    </div>
                    </div>
                </div>
                <div data-aos-once="true" data-aos-delay="150" data-aos-duration="1000" data-aos="flip-up" className={s.divSkills}>
                    <h2 className={s.subtitle} ><FormattedMessage id="skills.subtitle2" defaultMessage="Back End" /></h2>
                    <div className={s.conteinerIcons} >
                    <div className={s.divIcons}>
                    <div className={s.divH5}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className={s.icons}/>
                    <h5 className={s.h5}>Node JS</h5>
                    </div>
                    <div className={s.divH5}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className={s.icons}/>
                    <h5 className={s.h5}>Express</h5>
                    </div>
                    </div>
                    <div className={s.divIcons}>
                    <div className={s.divH5}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" className={s.icons}/>
                    <h5 className={s.h5}>MongoDB</h5>
                    </div>
                    <div className={s.divH5}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className={s.icons}/>
                    <h5 className={s.h5}>PostgreSQL</h5>
                    </div>
                    </div>
                    <div className={s.divIcons}>
                    <div className={s.divH5}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" className={s.icons}/>
                    <h5 className={s.h5}>Sequelize</h5>
                    </div>
                    </div>
                    </div>
                </div>
                <div data-aos-once="true" data-aos-delay="150" data-aos-duration="1000" data-aos="flip-left" className={s.divSkills}>
                    <h2 className={s.subtitle} ><FormattedMessage id="skills.subtitle3" defaultMessage="Tools" /></h2>
                    <div className={s.conteinerIcons} >
                    <div className={s.divIcons}>
                    <div className={s.divH5}>
                    <DiScrum className={s.npm}/>
                    <h5 className={s.h5}>SCRUM</h5>
                    </div>
                    <div className={s.divH5}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className={s.icons}/>
                    <h5 className={s.h5}>GIT</h5>
                    </div>
                    </div>
                    <div className={s.divIcons}>
                    <div className={s.divH5}>
                    <FaNpm className={s.npm}/>
                    <h5 className={s.h5}>NPM</h5>
                    </div>
                    <div className={s.divH5}>
                    <SiPostman className={s.postman} />
                    <h5 className={s.h5}>Postman</h5>
                    </div>
                    </div>
                    <div className={s.divIcons}>
                    <div className={s.divH5}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className={s.icons} />
                    <h5 className={s.h5}>VS Code</h5>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}