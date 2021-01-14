import React, { useState } from 'react';

function NewSubString() {
  const [subtext, setSubtext] = useState('')

  return (
    <div>
      Подстрока
      <div>
        <input onChange={(e) => setSubtext(e.target.value)} placeholder='Содержание подстроки' />
      </div>
    </div>
  );
}

export default NewSubString;
