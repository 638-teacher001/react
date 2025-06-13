import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Top = () => {
    const [message, setMessage] = useState("");

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    
    const navigate = useNavigate();

    const login = async () => {
        const auth = {
            email: email,
            pass: pass,
        };

        try {
            const res = await axios.post("https://localhost:51256/diary/login", auth);
            const id = res.data.id;

            if (id !== undefined) {
                localStorage.setItem("id", id);
                navigate("/diary");
                return;
            }

            setMessage("ログインできません");

        } catch {
            setMessage("エラー");
        }
    }

    return (
        <div>
            <h1>ログイン</h1>
            <hr/>

            メールアドレス：<input type="text" onChange={e => setEmail(e.target.value)} />
            <br/>
            パスワード：<input type="password" onChange={e => setPass(e.target.value)} />
            <br/>
            <button onClick={login}>ログイン</button>
            <p>{message}</p>
        </div>
    )
}

export default Top
