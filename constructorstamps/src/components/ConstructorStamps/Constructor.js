import React, { useEffect, useRef, useState } from 'react';
import Template from './Template';
import style from './Constructor.module.css'
import ConstructorString from './ConstructorString';


function Constructor({ setHeading, setString, setNewstring }) {
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  const [newString, setNewString] = useState([])


  const strings = [{
    title: "Универсальный шаблон",
    content: 'Текст',
    subcontent: ""
  },
  {
    title: "Подпись с расшифровкой",
    content: "______/_______",
    subcontent: "наименование"
  },
  {
    title: "Должность и подпись",
    content: "Гл.Бухгалтер_______",
    subcontent: ""
  },
  {
    title: "Дата",
    content: '"__"_______20___г.',
    subcontent: ""
  },
  {
    title: "Дата и подпись",
    content: '"__"_______20___г. Подпись_______',
    subcontent: ""
  },
  {
    title: "ФИО",
    content: 'ФИО_____________',
    subcontent: ""
  },
  {
    title: "Свободная строка",
    content: '_____________',
    subcontent: "наименование"
  },

  ]
  const addToStamp = (item) => {
    if (item.title == "Универсальный шаблон") {
      setNewString((prev) => [...prev, Math.random()])
    } else {
      setString((prev) => [...prev, item])
    }
  }
  return (
    <div>
      Заголовок
      <div>
        <input ref={inputRef} onChange={(e) => setHeading(e.target.value)} placeholder='К производству работ' />
      </div>
      {newString && newString.map((item, index) => <ConstructorString key={(index + 4) * Math.random()} setNewstring={setNewstring} />)}
      Добавить строку
      <div className={style.contanerr}>
        {strings && strings.map((item, index) => <Template key={(index + 5) * Math.random()} onClick={() => addToStamp(item)} item={item} />)}
      </div>
    </div>
  );
}

export default Constructor;
