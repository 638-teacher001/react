import {useState} from 'react'
import axios from 'axios'

const DataBase05 = () => {
    const [data, setData] = useState({id: "", name: "", price: 0});
    const [message, setMessage] = useState("");
 
    const send = async () => {
        try {
            const res = await axios.post("https://localhost:51256/db/db05", data);
            setMessage(res.data === true ? "削除成功" : "削除失敗");
        } catch {
            setMessage("エラー");
        }
    }

    return (
        <div>
            <h1>DBプロフラム05（削除）</h1>
            <hr/>
            ID:<input type="text" value={data.id} onChange={e => setData({...data, id: e.target.value})} /><br/>
            <button onClick={send}>削除</button>

            <p>結果：{message}</p>
        </div>
  )
}

export default DataBase05
