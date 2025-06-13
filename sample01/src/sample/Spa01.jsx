import {useState} from 'react'
import axios from 'axios'

const Spa01 = () => {
    const [message, setMessage] = useState("");
 
    const send = async () => {
        try {
            const res = await axios.get("https://localhost:51256/sample/m01");
            setMessage(res.data);
        } catch {
            setMessage("エラー");
        }
    }

    return (
        <div>
            <h1>SPAプロフラム01</h1>
            <hr/>
            <button onClick={send}>サーバへ送信</button>

            <p>サーバからの返信メッセージ：{message}</p>
        </div>
  )
}

export default Spa01
