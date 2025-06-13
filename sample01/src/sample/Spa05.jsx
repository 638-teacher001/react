import {useState} from 'react'
import axios from 'axios'

const Spa05 = () => {
    const [message, setMessage] = useState("");
 
    const send = async () => {
        try {
            const res = await axios.get("https://localhost:51256/sample/m05");
            setMessage("【ID:" + res.data.id + "　名前：" + res.data.name + "】");
        } catch {
            setMessage("エラー");
        }
    }

    return (
        <div>
            <h1>SPAプロフラム05</h1>
            <hr/>
            <button onClick={send}>サーバへ送信</button>

            <div>サーバからの返信メッセージ：{message}</div>
        </div>
  )
}

export default Spa05
