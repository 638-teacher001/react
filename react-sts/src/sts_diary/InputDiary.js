import { useState } from 'react'

const InputDiary = ({ addDiary }) => {
    //日記内容の保存用
    const [content, setContent] = useState("");

    return (
        <div>
            日記内容：<input type="text" onChange={e => setContent(e.target.value)} />
            <button onClick={() => addDiary(content)}>日記登録</button>
        </div>
    )
}

export default InputDiary
