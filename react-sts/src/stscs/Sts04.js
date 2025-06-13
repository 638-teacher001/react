import { useState } from 'react'
import axios from "axios"

const Sts04 = () => {
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
            const res = await axios.get(`https://localhost:51256/sts/tasu/${x}/${y}`);
             
            setMessage(res.data);
        } catch { //エラーが発生したら呼び出されるブロック
            setMessage("通信エラー");
        }
   }

    return (
        <div>
            <h1>加算プログラム</h1>
            <hr/>
            <input type="text" onChange={e => setX(e.target.value)} />
            ＋
            <input type="text" onChange={e => setY(e.target.value)} />
            <br/>
            <button onClick={send}>加算</button>
            <p>加算結果：{message}</p>
        </div>
    )
}

export default Sts04
