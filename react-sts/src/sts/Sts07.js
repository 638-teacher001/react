import { useState } from 'react'

const Sts07 = () => {
  const [input, setInput] = useState({message: ""});

  function kansu(e) {
    setInput({...input, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <h1>テキストエリア</h1>
      <hr/>
      <textarea name="message" onChange={kansu}></textarea>
      <br/>
      入力文字：{input.message}
    </div>
  )
}

export default Sts07
