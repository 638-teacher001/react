import {useState} from 'react'
import axios from 'axios'

const Spa08 = () => {
    const [data, setData] = useState({id: -1, name: ""});
    const [message, setMessage] = useState("");
 
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
            <h1>SPAプロフラム08</h1>
            <hr/>
            ID:<input type="number" value={data.id}  onChange={e => setData({...data, id: e.target.value})} /><br/>
            名前:<input type="text" value={data.name} onChange={e => setData({...data, name: e.target.value})} /><br/>
            
            <button onClick={send}>サーバへ送信</button>

            <div>サーバからの返信メッセージ：{message}</div>
        </div>
  )
}

export default Spa08
