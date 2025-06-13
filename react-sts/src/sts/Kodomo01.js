import React from 'react'

const Kodomo01 = ({name, age, kansu}) => {
  return (
    <div>
        <h1>子コンポーネント</h1>
        <hr />
        名前：{name}<br/>
        年齢：{age}<br/>
        <button onClick={kansu}>子ボタン</button>
    </div>
  )
}

export default Kodomo01
