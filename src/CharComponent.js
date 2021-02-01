import React from 'react';

const CharComponent = ({ letter, deleteItem }) => {
   return (
      <div onClick={deleteItem} style={{ display: 'inline-block', padding: '16px', textAlign: 'center', margin: '16px', border: '1px solid black' }}>
         <span>{letter}</span>
      </div>
   );
}

export default CharComponent;