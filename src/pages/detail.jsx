import React from "react";
import Footer from '../components/Footer';
import Detail from '../components/Detail';
import Nav from '../components/Nav'
import d from '../style/Detail.module.css'


export default function HomePage({title, img1,img2,img3,obj,tech,deploy,repo}){

    return(
        <div className={d.conteiner}>
            <Nav/>
            <Detail title={title} img1={img1} img2={img2} img3={img3} obj={obj} tech={tech} deploy={deploy} repo={repo}/>
            <Footer/>
        </div>
    )
}