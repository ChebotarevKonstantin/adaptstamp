import React, { useEffect, useState } from 'react';
import style from './ConstructorString.module.css'
import NewString from './NewString';
import NewSubString from './NewSubString';


function ConstructorString({ setNewstring }) {
  const [text, setText] = useState('')
  const [subtext, setSubtext] = useState('')
  const [substr, setSubstr] = useState([])

  const newSubstring = {
     subcontent: subtext
  }

  const addSubString = () => {
    setSubstr((prev) => [...prev, newSubstring])
    console.log('***')
  }

  // useEffect(() => {
  //   setNewstring((prev) => [newSubstring])
  // }, [subtext])

  return (
    <div className={style.contaner}>
      <NewString setText={setText} />
      {substr && substr.map((item) => <NewSubString key={Math.random()} setSubtext={setSubtext} />)}
      {/* <div>
        {newstr && newstr.map((item) => <NewString item={item} setText={setText} setSubtext={setSubtext} key={Math.random()}/>)}
      </div> */}
      <button onClick={addSubString} className={style.button}>+Добавить подстроку</button>
    </div>
  );
}

export default ConstructorString;
