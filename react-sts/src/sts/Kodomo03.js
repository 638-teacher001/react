import React from 'react'

const Kodomo03 = ({ name, call }) => {
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={() => call(name)}>本社へ連絡</button>
        <hr />
   </div>
  )
}

export default Kodomo03
