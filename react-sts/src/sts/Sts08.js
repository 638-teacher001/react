import { useState } from 'react'

const Sts08 = () => {
  const [input, setInput] = useState({pref: ""});

  function kansu(e) {
    setInput({...input, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <h1>セレクトボックス</h1>
      <hr/>
      <select name="pref" onChange={kansu}>
        <option value="北海道">北海道</option>
        <option value="東京">東京</option>
        <option value="愛知">愛知</option>
        <option value="大阪">大阪</option>
        <option value="沖縄">沖縄</option>
      </select>
      <br/>
      都道府県：{input.pref}
    </div>
  )
}

export default Sts08
