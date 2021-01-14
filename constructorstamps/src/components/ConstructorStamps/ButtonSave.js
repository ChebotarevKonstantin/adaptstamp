import React from 'react';

function ButtonSave({heading, string, newstring}) {

const saveStamp =()=>{
    const stamp ={
    heading,
    string,
    newstring
  }
  console.log(stamp)
}

  return (
    <div onClick={saveStamp}>
      Сохранить
    </div>
  );
}

export default ButtonSave;
