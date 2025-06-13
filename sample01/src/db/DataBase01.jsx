import {useState} from 'react'
import axios from 'axios'

const DataBase01 = () => {
    const [message, setMessage] = useState("");
 
    const send = async () => {
        try {
            const res = await axios.get("https://localhost:51256/db/db01");

            const result = res.data.length === 0
            ? <p>レコードがありません。</p>
            :
            <table border="1">
                <tr>
                <th>ID</th>
                <th>名前</th>
                <th>価格</th>
                </tr>
                {
                    res.data.map(product =>
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    )
                }
            </table>

            setMessage(result);
        } catch {
            setMessage("エラー");
        }
    }

    return (
        <div>
            <h1>DBプロフラム01（全件検索）</h1>
            <hr/>
            <button onClick={send}>全件検索</button>

            <p>検索結果：{message}</p>
        </div>
  )
}

export default DataBase01
