import React from 'react';
import style from './Template.module.css'

function Template({ item, onClick }) {
  return (

    <div className={style.template} onClick={onClick}>
      <div>{item.content}</div>
      <div>{item.subcontent}</div>
      <div>{item.title}</div>
    </div>

  );
}

export default Template;
