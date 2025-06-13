import { useState } from 'react'

const Sts09 = () => {
  const [input, setInput] = useState({gender: "男性"});

  function kansu(e) {
    setInput({...input, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <h1>ラジオボタン</h1>
      <hr/>
      <input type="radio" name="gender" value="男性" onChange={kansu} defaultChecked="checked"></input>男性
      <input type="radio" name="gender" value="女性" onChange={kansu} />女性
      <br/>
      性別：{input.gender}
    </div>
  )
}

export default Sts09
