import React from 'react';
import Styles from "./child.module.css";
import { ArrowForwardIcon } from '@chakra-ui/icons'
const Child = (props) => {
  return (
      <div className={Styles.box} style={{backgroundColor:props.bgColor}}>
        <div className={Styles.top}>
          <p className={Styles.p}>{props.date}</p>
          <img src={props.src} alt="amazon" />
        </div>
        <div className={Styles.text} style={{ backgroundColor:props.bg}}>
            <p style={{ paddingTop:"5px" }}>{props.text}</p>
        </div>
        <div className={Styles.head}>
            <h1 style={{ marginTop:"-1px" }}>{props.heading}</h1>
        </div>
        <div className={Styles.head}>
          <h1 style={{ marginTop:"-1px" }}>{props.pay}</h1>
        </div>
        <div className={Styles.mode}>
            <p style={{marginTop:"-1px"}}>{props.mode}</p> 
           <b><ArrowForwardIcon style={{ fontSize:"17px" }} /></b>
        </div>
      </div>
  )
}

export default Child