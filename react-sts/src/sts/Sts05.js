import { useState } from 'react'

const Sts05 = () => {
  const [str, setStr] = useState("");

  // function kansu(e) {
  //   setStr(e.target.value);
  // }

  return (
    <div>
      <h1>テキストボックス</h1>
      <hr/>
      {/* <input type="text" name="str" onChange={kansu} /> */}
      <input type="text" name="str" onChange={e => setStr(e.target.value)} />
      <br/>
      入力文字：{str}
    </div>
  )
}

export default Sts05
