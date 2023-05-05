import React from "react";
// import Carousel from "./Carousel";
import CarouselTwo from "./CarouselTwo";
import { FormattedMessage } from "react-intl";
import imgFood from '../img/Food Api.png'
import imgDogs from '../img/PI-DOGS.png'
import imgGames from '../img/TodoGames.png'
import imgMundiApp from '../img/MundiApp.png'

export default function Proyects() {

    const slides= [{title: 'Dogs APP',
        img:`${imgDogs}`},{title: 'Food API',
        img:`${imgFood}`},
    {title: 'Todo Games',
    img:`${imgGames}`},{title: 'Mundi APP',
    img:`${imgMundiApp}`}]



    return(
        <div id="proyects">
            <h1 className="title"><FormattedMessage id="projects.title" defaultMessage="Projects" /></h1>
                <CarouselTwo>
                        {slides}
                </CarouselTwo>
        </div>
    )
}