import React, {useEffect} from "react";
import {FiGithub , FiLinkedin, FiMail, FiInstagram} from 'react-icons/fi'
import c from '../style/Contact.module.css'
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactMe(){

    useEffect(() =>{
      efect()
    },[])
    
    AOS.init()

    function efect(){
        const input = document.querySelector('#input')
        const labelEmail = document.querySelector('#labelEmail')
        const labelSubject = document.querySelector('#labelSubject')
        const text = document.querySelector('#textarea')

        text.onfocus = () =>{
            labelSubject.classList.add('textarea')
         }
         text.onblur = () =>{
            text.value= text.value.trim( )
            if(text.value == 0){
                labelSubject.classList.remove('textarea')
            }
         }

        input.onfocus = () =>{
            labelEmail.classList.add('email')
        }
        input.onblur = () =>{
            input.value= input.value.trim( )
            if(input.value == 0){
                labelEmail.classList.remove('email')
            }
         }
    }
    

    return(
        <div id="contact">
            <div className={c.divTitle}>
            <h2 className='title'><FormattedMessage id="contact.title" defaultMessage="Contact" /></h2>
            </div>
            <div className={c.conteiner}>
            <form className={c.form} action="https://formsubmit.co/enzolarrosa@gmail.com" method="post">
            <div className={c.divOne}>
                <h3><FormattedMessage id="contact.subtitle1" defaultMessage="Contact me and let's work together !" /></h3>
            </div>
            <div  className={c.divTwo}>
            <label id="labelEmail" className={c.labelEmail}>Email</label>
            <input autocomplete="off" required id="input" type='email' name='email' />
            </div>
            <div  className={c.divThree}>
            <label id="labelSubject">Subject</label>
            <textarea id="textarea" type='text' name='subject' />
            </div>
            <div  className={c.divFour}>
            <button type="submit"><span><FormattedMessage id="contact.submit" defaultMessage="Submit" /></span></button>
            </div>
            </form>
            <div className={c.contRedes}>
            <div  className={c.divSubtitle}>
            <p><FormattedMessage id="contact.subtitle2" defaultMessage="You can also contact me through my social networks :" /></p>
            </div>
            <div  className={c.divIcons}>
            <a data-aos-once="true" data-aos-delay="50" data-aos-duration="1200" data-aos="fade-down" className={c.icons} target="_blank" href="mailto:enzolarrosa@gmail.com"><FiMail/></a>
            <a data-aos-once="true" data-aos-delay="150" data-aos-duration="1200" data-aos="fade-down" className={c.icons} target="_blank" href="https://github.com/enzolarrosa"><FiGithub/></a>
            <a data-aos-once="true" data-aos-delay="250" data-aos-duration="1200" data-aos="fade-down" className={c.icons} target="_blank" href="https://www.linkedin.com/in/larrosanicolas/"><FiLinkedin/></a>
            <a data-aos-once="true" data-aos-delay="350" data-aos-duration="1200" data-aos="fade-down" className={c.icons} target="_blank" href="https://www.instagram.com/nico_larrosaa/"><FiInstagram/></a>
            </div>
            </div>
            </div>
        </div>
    )
}