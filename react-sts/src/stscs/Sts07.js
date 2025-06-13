import { useState } from 'react'
import axios from "axios"

const Sts07 = () => {
    //表示メッセージ
    const [message, setMessage] = useState("");

    //サーバアクセス用関数
    const send = async() => {
        const record = {
            id: 1,
            company: "システムサポート",
            name: "山田太郎",
            age: 23,
        }

        try { //エラーが発生する可能性がある処理を記述するブロック
            const res = await axios.post("https://localhost:51256/sts/kansu07", record);
             
            setMessage(`${res.data.id} ${res.data.company} ${res.data.name} ${res.data.age}` );
        } catch { //エラーが発生したら呼び出されるブロック
            setMessage("通信エラー");
        }
   }

    return (
        <div>
            <h1>サーバアクセス07</h1>
            <hr/>
            <p>戻り値：{message}</p>
            <button onClick={send}>送信</button>
        </div>
    )
}

export default Sts07
