import {useState} from 'react'
import axios from 'axios'

const Spa07 = () => {
    const [message, setMessage] = useState("");

    const data = {
        id: 3,
        name: "鈴木次郎",
    }
 
    const send = async () => {
        try {
            const res = await axios.post("https://localhost:51256/sample/m07", data);
            setMessage("【ID:" + res.data.id + "　名前：" + res.data.name + "】");
        } catch {
            setMessage("エラー");
        }
    }

    return (
        <div>
            <h1>SPAプロフラム07</h1>
            <hr/>
            <button onClick={send}>サーバへ送信</button>

            <div>サーバからの返信メッセージ：{message}</div>
        </div>
  )
}

export default Spa07
