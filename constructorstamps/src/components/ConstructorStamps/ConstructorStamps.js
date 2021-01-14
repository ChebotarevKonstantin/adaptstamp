import React, { useState } from 'react';
import ButtonSave from './ButtonSave';
import Constructor from './Constructor';
import Stamp from './Stamp';
import style from './ConstructorStamp.module.css'

function ConstruktorStamps(props) {
  const [heading, setHeading] = useState('')
  const [string, setString] = useState([])
  const [newstring, setNewstring] = useState([])



  return (
    <div className={style.contaner}>
      <div >
        Предпросмотр штампа
      <div className={style.stamp}>
          <Stamp heading={heading} string={string} newstring={newstring}/>
        </div>
        <div className={style.button}>
          <ButtonSave heading={heading} string={string} newstring={newstring}/>
        </div>
      </div>

      <div>
        <Constructor setHeading={setHeading} setString={setString} setNewstring={setNewstring}/>
      </div>
    </div>
  );
}

export default ConstruktorStamps;
