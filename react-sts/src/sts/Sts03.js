import { useState } from 'react'

const Sts03 = () => {

  const [age, setAge] = useState(0);

  const kansu = () => {
    age >= 18 || window.alert("未成年");

    //age >= 18 && window.alert("成人");

    // const result = age >= 18 ? "成人" : "未成年";
    // window.alert(result);

    // if (age >= 18) {
    //   window.alert("成人");
    // } else {
    //   window.alert("未成年");
    // }
  }

  return (
    <div>
      <h1>年齢チェック</h1>
      <hr/>
      <input type="text" name="age" onChange={e => setAge(e.target.value)}></input> 
      <button onClick={kansu}>判定</button>
      <br/>
      {age}
    </div>
  )
}

export default Sts03
