import {useState} from 'react'
import axios from 'axios'

const DataBase02 = () => {
    const [data, setData] = useState({});
    const [message, setMessage] = useState("");
 
    const send = async () => {
        try {
            const res = await axios.post("https://localhost:51256/db/db02", data);

            const result = res.data.id === undefined
            ? <p>レコードがありません。</p>
            :
            <table border="1">
                <tr>
                <th>ID</th>
                <th>名前</th>
                <th>価格</th>
                </tr>
                <tr>
                    <td>{res.data.id}</td>
                    <td>{res.data.name}</td>
                    <td>{res.data.price}</td>
                </tr>
            </table>

            setMessage(result);
        } catch {
            setMessage("エラー");
        }
    }

    return (
        <div>
            <h1>DBプロフラム02（単一検索）</h1>
            <hr/>
            ID:<input type="text" value={data.id} onChange={e => setData({...data, id: e.target.value})} /><br/>
            <button onClick={send}>検索</button>

            <p>検索結果：{message}</p>
        </div>
  )
}

export default DataBase02
