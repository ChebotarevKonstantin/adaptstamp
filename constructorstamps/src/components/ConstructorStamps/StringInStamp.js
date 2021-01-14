import React from 'react';

function StringInStamp({ item }) {
  return (
    <div>
      <div>{item.content}</div>
      <div>{item.subcontent}</div>
      {/* <div>{item.title}</div> */}
    </div>
  );
}

export default StringInStamp;
