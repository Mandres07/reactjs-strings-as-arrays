import React from 'react';

const ValidationComponent = ({ length }) => {

   const text = length < 5 ? 'Text too short' : 'Text long enough'

   return (
      <div>
         <span>{text}</span>
      </div>
   );
}

export default ValidationComponent;