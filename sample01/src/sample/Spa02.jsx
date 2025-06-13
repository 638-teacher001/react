import {useState} from 'react'
import axios from 'axios'

const Spa02 = () => {
    const [message, setMessage] = useState("");
 
    const send = async () => {
        try {
            const res = await axios.get("https://localhost:51256/sample/m02/10");
            setMessage(res.data);
        } catch {
            setMessage("エラー");
        }
    }

    return (
        <div>
            <h1>SPAプロフラム02</h1>
            <hr/>
            <button onClick={send}>サーバへ送信</button>

            <div>サーバからの返信メッセージ：{message}</div>
        </div>
  )
}

export default Spa02
