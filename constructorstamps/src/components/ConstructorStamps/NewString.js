import React from 'react';

function NewString({setText}) {
  return (
    <div>
       Текст
      <div>
        <input onChange={(e) => setText(e.target.value)} placeholder='Содержание строки' />
      </div>
      {/* Подстрока
      <div>
        <input onChange={(e) => setSubtext(e.target.value)} placeholder='Содержание подстроки' />
      </div> */}
    </div>
  );
}

export default NewString;
