import React,{useState , useEffect} from "react";
import { Link } from "react-router-dom"
import c from './Carousel.module.css'
import {FiChevronLeft ,FiChevronRight} from "react-icons/fi"

export default function Carousel({children: slides}){
    
    const [index, setIndex] = useState(0)
    const [title, setTitle] = useState(slides[0].title)

    useEffect(() =>{
        const slideInterval = setInterval(next, 3000)
        return () => clearInterval(slideInterval)
    })

    function next(){ 
      setIndex(slides.length -1 == index? 0 : index +1)
      setTitle(slides.length -1 == index? slides[0].title : slides[index +1].title)
    }

    function indexSlide(i) {
        setIndex(i)
        setTitle(slides[i].title)
    }

    function prev(){ 
        setIndex(index == 0? slides.length -1 : index -1)
        setTitle(index == 0? slides[slides.length -1].title : slides[index -1].title)
    }

    return (
        <div className={c.slider}>
            <div id="carousel" style={{margin: `0% -${index*100}%`}} className={c.slides}>
          {slides.map(e => (
              <div className={c.slide}>
                <Link to={`/proyect/${e.title}`}>
                <img src={e.img1} alt='proyect'/>
                </Link>
            </div>
          ))}
            </div>
            <p className={c.titleProj}>{title}</p>
            <div className={c.divBtn}>
                <button className={c.btnLeft} onClick={() => prev()}><FiChevronLeft/></button>
                <button className={c.btnRight} onClick={() => next()}><FiChevronRight/></button>                
            </div>
            <div className={c.divIndex}>
                {slides.map((e,i) => index === i? (
                    <button onClick={() => indexSlide(i)} className={c.index}></button>
                ) : (<button onClick={() => indexSlide(i)} className={c.btnIndex}></button>))}
            </div>
        </div>
    )
}