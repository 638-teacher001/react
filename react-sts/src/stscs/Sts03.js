import { useState } from 'react'
import axios from "axios"

const Sts03 = () => {
    //表示メッセージ
    const [message, setMessage] = useState("");

    //サーバアクセス用関数
    const send = async() => {
        try { //エラーが発生する可能性がある処理を記述するブロック
            const res = await axios.get("https://localhost:51256/sts/kansu03/123/山田太郎");
             
            setMessage(res.data.name);
        } catch { //エラーが発生したら呼び出されるブロック
            setMessage("通信エラー");
        }
   }

    return (
        <div>
            <h1>サーバアクセス03</h1>
            <hr/>
            <p>戻り値：{message}</p>
            <button onClick={send}>送信</button>
        </div>
    )
}

export default Sts03
