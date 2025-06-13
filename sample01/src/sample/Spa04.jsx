import {useState} from 'react'
import axios from 'axios'

const Spa04 = () => {
    const [message, setMessage] = useState("");
 
    const send = async () => {
        try {
            const res = await axios.get("https://localhost:51256/sample/m04/山田太郎/23");
            setMessage(res.data);
        } catch {
            setMessage("エラー");
        }
    }

    return (
        <div>
            <h1>SPAプロフラム04</h1>
            <hr/>
            <button onClick={send}>サーバへ送信</button>

            <div>サーバからの返信メッセージ：{message}</div>
        </div>
  )
}

export default Spa04
