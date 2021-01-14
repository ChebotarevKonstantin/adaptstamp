import React from 'react';
import StringInStamp from './StringInStamp';

function Stamp({ heading, string, newstring }) {
  return (
    <div>
      <div>
        {heading}
      </div>
      <div>
        {newstring && newstring.map((item, index) => <StringInStamp key={(index + 2) * Math.random()} item={item} />)}
        {string && string.map((item, index) => <StringInStamp key={(index + 1) * Math.random()} item={item} />)}
      </div>
    </div>
  );
}

export default Stamp;
