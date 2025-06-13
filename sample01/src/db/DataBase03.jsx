import {useState} from 'react'
import axios from 'axios'

const DataBase03 = () => {
    const [data, setData] = useState({id: "", name: "", price: 0});
    const [message, setMessage] = useState("");
 
    const send = async () => {
        try {
            const res = await axios.post("https://localhost:51256/db/db03", data);
            setMessage(res.data === true ? "登録成功" : "登録失敗");
        } catch {
            setMessage("エラー");
        }
    }

    return (
        <div>
            <h1>DBプロフラム03（登録）</h1>
            <hr/>
            ID:<input type="text" value={data.id} onChange={e => setData({...data, id: e.target.value})} /><br/>
            商品名:<input type="text" value={data.name} onChange={e => setData({...data, name: e.target.value})} /><br/>
            価格:<input type="text" value={data.price} onChange={e => setData({...data, price: e.target.value})} /><br/>
            <button onClick={send}>登録</button>

            <p>結果：{message}</p>
        </div>
  )
}

export default DataBase03
