import React from "react";
import Carousel from "./Carousel/Carousel.jsx";
import { FormattedMessage } from "react-intl";
import imgFood1 from '../img/FOOD1.png'
import imgFood2 from '../img/FOOD2.png'
import imgFood3 from '../img/FOOD3.png'
import imgDog1 from '../img/DOG1.png'
import imgDog2 from '../img/DOG2.png'
import imgDog3 from '../img/DOG3.png'
import imgGame1 from '../img/GAME1.png'
import imgGame2 from '../img/GAME2.png'
import imgGame3 from '../img/GAME3.png'
import imgMundi1 from '../img/MUNDI1.png'
import imgMundi2 from '../img/MUNDI2.png'
import imgMundi3 from '../img/MUNDI3.png'


 const slides= [{title: 'Dogs APP',
    img1:imgDog1, img2:imgDog2,img3:imgDog3,obj:"Create a SPA (single page application) with information brought from an API that shows us the types of breeds that exist and detailed information about them, in which application you must have ordering, filtering, a search bar and be able to create your own dog ." ,obj1: 'dog',  deploy: 'https://pi-dogs-tau-lovat.vercel.app/', repo:'https://github.com/enzolarrosa/PI-Dogs',tech: 'HTML5, CSS3, React, Javascript, Nodejs, Redux, MySql, Express JS, PostgreSQL.'},{title: 'Food API',
    img1:imgFood1, 
    img2:imgFood2,img3:imgFood3, 
 obj:"Create a SPA (single page application) with information brought from an API that shows us the types of recipes that exist and detailed information about them, in which application you must have ordering, filtering, a search bar and be able to create your own recipe." ,obj1: 'food', deploy: 'https://food-larrosa.vercel.app/', repo:'https://github.com/enzolarrosa/Food',tech: 'HTML5, CSS3, React, Javascript, Nodejs, Redux, MySql, Express JS, PostgreSQL.'},
{title: 'Todo Games',
img1:imgGame1, img2:imgGame2,img3:imgGame3,obj:"Create a SPA (single page application) with information brought from an API that shows us the types of video games that exist and detailed information about them, in which application you must have ordering, Dark mode, filtering, a search bar and be able to create your own video game",obj1: 'game',  deploy: 'https://todogames.vercel.app/', repo:'https://github.com/enzolarrosa/Todogames', tech: 'HTML5, CSS3, React, Javascript, Nodejs, Redux, MySql, Express JS, PostgreSQL.'},{title: 'Mundi APP',
img1:imgMundi1, img2:imgMundi2,img3:imgMundi3,obj:"Create an Ecommerce where your products are objects related to the Qatar 2023 World Cup where the user can create their account and be able to buy through a payment gateway (we use the payment market) and on the administrator's side to be able to upload, edit and/or delete users or products, whose application has ordering, filtering, a search bar, login, payment gateway among others.",obj1: 'mundi',  deploy: 'https://mundi-app.tk', repo:'https://github.com/nicoese/mundial-app', tech: 'HTML5, CSS3, React, Javascript, Nodejs, Redux, Mongodb, TailwindCSS, Express JS, mongoose, Auth0, Mercado Pago.' }]

 function Proyects() {




    return(
        <div id="proyects">
            <h1 className="title"><FormattedMessage id="projects.title" defaultMessage="Projects" /></h1>
                <Carousel>
                        {slides}
                </Carousel>
        </div>
    )
}

export {Proyects,slides};

