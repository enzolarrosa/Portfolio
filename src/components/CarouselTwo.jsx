import React,{useState , useEffect} from "react";
import { Link } from "react-router-dom"
import c from '../style/Carousel.module.css'
import {FiChevronLeft ,FiChevronRight} from "react-icons/fi"

export default function CarouselTwo({children: slides}){
    
    const [index, setIndex] = useState(0)



    useEffect(() =>{
        const slideInterval = setInterval(next, 3000)
        return () => clearInterval(slideInterval)
    })

    function next(){ 
      setIndex(slides.length -1 == index? 0 : index +1)
    }

    function indexSlide(i) {
        setIndex(i)
    }

    function prev(){ 
        setIndex(index == 0? slides.length -1 : index -1)
      }

    return (
        <div className={c.slider}>
            <div style={{margin: `0% -${index*100}%`}} className={c.slides}>
          {slides.map(e => (
              <div className={c.slide}>
                <Link to={`/proyect/${e.title}`}>
                <img src={e.img} alt='proyect'/>
                </Link>
            </div>
          ))}
            </div>
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