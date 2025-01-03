'use client'

import React from 'react'
import style from "./Card.module.css"

export default function Card({width = 100, height = 10, content = "Card"}) {
  const card = React.useRef(); 
  let delta = { x: 0, y: 0 };

  function handleMouseDown(event) {
    delta = { x: event.clientX, y: event.clientY };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }
  
  function onMouseMove(event) {
    const deltaX = event.clientX - delta.x;
    const deltaY = event.clientY - delta.y;

    delta = { x: event.clientX, y: event.clientY };

    card.current.style.top = (card.current.offsetTop + deltaY) + "px"; 
    card.current.style.left = (card.current.offsetLeft + deltaX) + "px"; 
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }


  return (
    <div onMouseDown={handleMouseDown} ref={card} className={style.basic_card} >
     Hello
    </div>
  )
}
