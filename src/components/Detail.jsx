import React from "react";
import {FormattedMessage} from "react-intl"
import d from '../style/Detail.module.css'

export default function Detail({title, img1,img2,img3,obj,tech,deploy,repo}){

    return(
        <div className={d.contDetail}>
            <div className={d.divTitle}>
                <h1>{title}</h1>
            </div>
            <div className={d.divImg}>
                <img src={img1} alt="img1" />
                <img src={img2} alt="img2" />
                <img src={img3} alt="img3" />
            </div>
            <div className={d.divInfo}>
                <div className={d.divObj}>
                    <h2><FormattedMessage id={`obj.obj`}/></h2>
                    <p><FormattedMessage id={`obj.${obj}`}/></p>
                </div>
                <div className={d.divTech}>
                <h2><FormattedMessage id={`obj.tech`}/></h2>
                    <p>{tech}</p>
                </div>
            </div>
            <div className={d.divLinks}>
                <a className={d.btn} href={deploy}><span>Deploy</span></a>
                <a className={d.btn} href={repo}><span>Repository</span></a>
            </div>
        </div>
    )
}