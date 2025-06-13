import { useState } from 'react'

const Sts06 = () => {
  const [input, setInput] = useState({message: "", test: "abc"});

  function kansu(e) {
    setInput({...input, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <h1>テキストボックス２</h1>
      <hr/>
      <input type="text" name="message" onChange={kansu} defaultValue="abc" />
      {/* <input type="text" name="message" onChange={e => setStr(e.target.value)} /> */}
      <br/>
      入力文字：{input.message}
      <br/>
      テスト：{input.test}
    </div>
  )
}

export default Sts06
