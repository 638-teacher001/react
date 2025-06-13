import React, { useState } from 'react'

const DiaryInput = ({addDiary}) => {
    const [content, setContent] = useState("");

    return (
        <div>
            内容：<input type="text" onChange={e => setContent(e.target.value)} />
            <button onClick={() => addDiary(content)}>登録</button>
        </div>
    )
}

export default DiaryInput
