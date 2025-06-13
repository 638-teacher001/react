import { useState } from 'react'
import axios from "axios"

const Sts09 = () => {
    //マーク（＋、－、×、÷）
    const [mark, setMark] = useState(1);

    //データ
    const [x, setX] = useState();
    const [y, setY] = useState();

    //表示メッセージ
    const [message, setMessage] = useState("");

    //サーバアクセス用関数
    const send = async() => {
        if (x.length === 0 || y.length === 0) {
            setMessage("データが入力されていません");
            return;
        }

        try { //エラーが発生する可能性がある処理を記述するブロック
            const res = await axios.get(`https://localhost:51256/sts/calc/${mark}/${x}/${y}`);
             
            setMessage(res.data);
        } catch { //エラーが発生したら呼び出されるブロック
            setMessage("通信エラー");
        }
   }

    return (
        <div>
            <h1>計算プログラム</h1>
            <hr/>
            <p>
                <input type="radio" name="mark" onChange={() => setMark(1)} defaultChecked />足し算
                <input type="radio" name="mark" onChange={() => setMark(2)}/>引き算
                <input type="radio" name="mark" onChange={() => setMark(3)}/>掛け算
                <input type="radio" name="mark" onChange={() => setMark(4)}/>割り算
            </p>
            <input type="text" onChange={e => setX(e.target.value)} />
            <span>{mark === 1 ? "＋" : (mark === 2 ? "ー" : (mark === 3 ? "×" : "÷"))}</span>
            <input type="text" onChange={e => setY(e.target.value)} />
            <br/>
            <button onClick={send}>計算</button>
            <p>結果：{message}</p>
        </div>
    )
}

export default Sts09
