import { useState, useEffect } from 'react'
import InputDiary from "./InputDiary";
import ListDiary from "./ListDiary";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const MainDiary = () => {
    const navigate = useNavigate();

     //日記一覧を管理する
    const [diaries, setDiaries] = useState([]);

    //結果表示を管理する
    const [message, setMessage] = useState("");

    //ログインユーザ表示を管理する
    const [user, setUser] = useState({});

    //日記登録用関数
    const addDiary = async content => {
        const record = {
            id: -1,
            uid: localStorage.getItem("id"), //ローカルストレージのidを設定
            date: new Date().toLocaleDateString('sv-SE'),
            content: content
        };

        try {
            const res = await axios.post("https://localhost:51256/diary/diary02", record);
            setMessage(res.data === true ? "登録成功" : "登録失敗");

            // const res2 = await axios.get("https://localhost:51256/diary/diary01");
            // setDiaries(res2.data)
        } catch {
            setMessage("エラー");
        }

        displayDiary();
    }

    const displayDiary = async () => {
        try {
            const res = await axios.post("https://localhost:51256/diary/diary01", {id: user.id});
            setDiaries(res.data)
        } catch {
            setMessage("エラー");
        }
    }

    const logout = () => {
        if (localStorage.getItem("id") !== null) {
            localStorage.removeItem("id")
        }
        
        navigate("/");
    }

    const auth = async () => {
       if (localStorage.getItem("id") === null) {
            navigate("/");
            return;
        }

        const auth_data = {
            id: localStorage.getItem("id")
        }

        try {
            const res1 = await axios.post("https://localhost:51256/diary/auth", auth_data);
            const id = res1.data.id;

            if (id === undefined) {
                navigate("/");
                return;
            }

            setUser(res1.data);

            const res2 = await axios.post("https://localhost:51256/diary/diary01", {id: localStorage.getItem("id")});
            setDiaries(res2.data)

        } catch {
            window.alert("エラー");
        }
    }

    const editDiary = async (diary) => {
        try {
            const res = await axios.post("https://localhost:51256/diary/edit",diary);
            setMessage(res.data === true ? "編集成功" : "編集失敗");

            // const res2 = await axios.get("https://localhost:51256/diary/diary01");
            // setDiaries(res2.data)
        } catch {
            setMessage("エラー");
        }

        displayDiary();
    }
    const deleteDiary = async (id) => {
        const json = {
            id: id
        }
        
        try {
            const res = await axios.post("https://localhost:51256/diary/delete",json);
            setMessage(res.data === true ? "削除成功" : "削除失敗");
        } catch {
            setMessage("エラー");
        }

        displayDiary();
    }

    useEffect(
        () => {
            auth(); //認証
            displayDiary(); //日記一覧表示
        },[]
    )

    return (
        <div>
            <h1>日記アプリ３</h1>
            ユーザ名：{user.name}<br/>
            <button onClick={logout}>ログアウト</button>
            <hr/>
            <InputDiary addDiary={addDiary} />
            <ListDiary diaries={diaries} editDiary={editDiary} deleteDiary={deleteDiary} />
            {message}
        </div>
    )
}

export default MainDiary
