import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import n from '../style/Nav.module.css'
import logo from '../img/logo.png'
import es from '../img/spanish.png'
import en from '../img/english.png'
import {SlArrowRight} from 'react-icons/sl'
import { langContext } from '../context/context.jsx';

export default function Nav() {
     
    const lang = useContext(langContext);
    const langStorage= localStorage.getItem('lang')

    const [idioma, setIdioma ] = useState(() =>{
        if(langStorage){
            if(langStorage==='es-ES'){return(
                {
                    img: es,
                    p: 'ES'
                }
            )
            }else if(langStorage === 'en-US'){return(
                {
                    img: en,
                    p: 'EN'
                }
            )
            }
        } else {
            return(
                {
                    img: en,
                    p: 'EN'
                }
            )
        }
    })
    
    function selectIdioma(){
        const arrow = document.querySelector('.dropArrow')
        const menu = document.querySelector('.dropDiv')
        if(!menu.id.length){
            arrow.id= 'dropArrow'
            menu.id= 'drop'
        } else {
            arrow.id= ''
            menu.id= ''
        }

        arrow.classList.toggle('.act')
    }
    
    function language(leng){
        const menu = document.querySelector('.dropDiv')
       if ( leng === 'es-ES'){
       setIdioma({
        img: es,
        p: 'ES'
       })
       menu.id= ''
       } else {
        setIdioma({
            img: en,
            p: 'EN'
           })
        menu.id= ''
    }
    lang.selectLanguage(leng)
    }

    return(
        <div className={n.nav}>
            <div className={n.contLogo}>
                <Link className={n.link} to='/'>
                <img className={n.logo} src={logo} alt='logo'/>
                </Link>
            </div>
            <div className={n.contMode}>
                <button onClick={() => selectIdioma()} className={n.mode}>
                    <img src={idioma.img} alt='idioma' />
                    <p>{idioma.p}</p>
                    <SlArrowRight className='dropArrow'/>
                </button>
                <div className='dropDiv' > 
                    <button onClick={() => language('es-ES')} className={n.btnEs}>
                        <p>ES</p>
                        <img src={es} alt='español' />
                    </button>
                    <button onClick={() => language('en-US')} className={n.btnEn}>
                        <p>EN</p>
                        <img src={en} alt='ingles' />
                    </button>
                </div>
            </div>
        </div>
    )
}