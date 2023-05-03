import React ,{useState, useEffect} from "react";
import p from '../style/Proyects.module.css'
import {AiOutlineLeft ,AiOutlineRight} from "react-icons/ai"

export default function Carousel({children: slides}){

    const [index, setIndex] = useState(0)
    
    let autoSlide= true

    useEffect(() =>{
        if(!autoSlide) return;
        const slideInterval = setInterval(next, 2000)
        return () => clearInterval(slideInterval)
    })

    function next (){
        if(index == slides.length -1){
            setIndex(0)
        }
        
        else {
            setIndex(index +1)
        }
    }

    function indexBtn(i) {
    setIndex(i)
    }

    function prev (){
        if(index === 0){
            setIndex(slides.length - 1)
        } else {
            setIndex(index -1)
        }
        }

    return(
        <div className={p.conteiner}>
            {index === slides.length -1? <div className={p.divCarousel}>
            <img src={slides[index -1].img}/>
            <img className={p.img} src={slides[index].img}/>
            <div className={p.divButton}>
            <button  onClick={prev}>
            <AiOutlineLeft className={p.icon}/>
            </button>
            <button  onClick={next}>
            <AiOutlineRight className={p.icon}/>
            </button>
            </div>
            <img src={slides[0].img}/>
            </div>:
            index === 0 ? <div className={p.divCarousel}>
            <img src={slides[slides.length -1].img}/>
            <img className={p.img} src={slides[index ].img}/>
            <div className={p.divButton}>
            <button  onClick={prev}>
            <AiOutlineLeft className={p.icon}/>
            </button>
            <button  onClick={next}>
            <AiOutlineRight className={p.icon}/>
            </button>
            </div>
            <img src={slides[index + 1].img}/>
            </div> : 
            <div className={p.divCarousel}>
            <img src={slides[index -1].img}/>
            <img className={p.img} src={slides[index ].img}/>
            <div className={p.divButton}>
            <button  onClick={prev}>
            <AiOutlineLeft className={p.icon}/>
            </button>
            <button  onClick={next}>
            <AiOutlineRight className={p.icon}/>
            </button>
            </div>
            <img src={slides[index + 1].img}/>
            </div>
            }
            <div className={p.divSecond}>
            <img src={slides[index ].img}/>
            <div className={p.divButton}>
            <button  onClick={prev}>
            <AiOutlineLeft className={p.icon}/>
            </button>
            <button  onClick={next}>
            <AiOutlineRight className={p.icon}/>
            </button>
            </div>
            </div>
            <div id="hola" className={p.divInfo}>
            <h2>{slides[index].title}</h2>
            </div>
            <div className={p.slidePosition}>
            {slides.map((e,i) => index==i? (
                <button onClick={() => indexBtn(i)} className={p.index}></button>
            ) : (<button onClick={() => indexBtn(i)} className={p.indexButton}></button>))}
            </div>
        </div> 
    )
}