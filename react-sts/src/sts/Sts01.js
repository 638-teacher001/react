import { useState } from 'react';

function Sts01() {
    const name = "山田太郎";
    const age = 23;
    const url = "https://www.yahoo.co.jp";

    const attr = {
        type: "text",
        name: "test",
        placeholder: "文字を入力してください",
    };

    const style = {
        color: "red",
        fontSize: 50
    };

    const [fruits, setFruits] = useState([])

    const kansu = (e) => {
        const record = e.target.value;

        if (fruits.includes(record) === false) {
            setFruits([...fruits, record]);
        } else {
            setFruits(fruits.filter(fruit => fruit !== record));
        }
    }

    const list = [10, 20, 30];
    const list2 = list.map(data => 2 * data)

    return(
        <div>
            <span style={style}>{name}</span><br />
            <span>{age}歳</span>
            <div>
                <a href={url}>システムサポート</a>
            </div>

            <input {...attr} defaultValue="山田太郎"></input>
            <br/>

            <input type="radio" name="abc" value="男性"/>男性
            <input type="radio" name="abc" value="女性"/>女性


            <hr/>
            {list}
            {list2}











            <input type="checkbox" name="fruits" value="りんご" onChange={kansu}/>りんご
            <input type="checkbox" name="fruits" value="いちご" onChange={kansu}/>いちご
            <input type="checkbox" name="fruits" value="みかん" onChange={kansu}/>みかん
            <br/>
            {fruits}

        </div>
    );
}

export default Sts01