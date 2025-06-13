import { useState } from 'react'

const Sts02 = () => {

  const [count, setCount] = useState(1);

  const kansu = (data) => {
    if (data < 0 || data > 10) {
      return;
    }
    
    setCount(data);
  }

  return (
    <div>
      <h1>Stateフック</h1>
      <hr/>
      <button onClick={() => kansu(count + 1)}>＋</button>
      <button onClick={() => kansu(count - 1)}>－</button>
      <br/>
      カウント値：{count}
    </div>
  )
}

export default Sts02
