import React from 'react'
import style from "./CardStatus.module.css"
export default function CardStatus({counter,title,icon}) {
  return (
      <div className={`${style.cardStatus} ms-2 d-flex align-items-center `}>
                  <div className={`${style.icon} {icon} d-flex w-100 align-items-center justify-content-center `}>
                    <i className={icon}></i>
                  </div>
                  <div className={`${ style.info } w-100 d-flex flex-column align-items-center gap-2`}>
                    <span className={`${style.counter}`}>{counter}</span>
                    <span className={`${style.title}`}>{title}</span>
    
                  </div>
                </div>
  )
}
