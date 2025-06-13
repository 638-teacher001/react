import { useState } from 'react'

const Sts10 = () => {
  //const [input, setInput] = useState({fruits:[]});
  const [fruits, setFruits] = useState([]);

  function kansu(e) {
    const fruit = e.target.value;

    if (fruits.includes(fruit) === false) { //配列の中になければ追加
      setFruits([...fruits, fruit]);
    } else { //配列の中にあれば除外する
      setFruits(fruits.filter(fr => fr !== fruit));
    }
  }

  // function kansu(e) {
  //   const fruit = e.target.value;

  //   setInput({...input, [e.target.name]: [...input.fruits, fruit]});
  // }

  return (
    <div>
      <h1>チェックボックス</h1>
      <hr/>
      <input type="checkbox" name="fruits" value="みかん" onChange={kansu} />みかん
      <input type="checkbox" name="fruits" value="りんご" onChange={kansu} />りんご
      <input type="checkbox" name="fruits" value="いちご" onChange={kansu} />いちご
      <br/>
      好きなフルーツ：{fruits}
    </div>
  )
}

export default Sts10
