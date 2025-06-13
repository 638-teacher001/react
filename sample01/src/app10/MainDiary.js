import React, { useState } from 'react'
import DiaryInput from "./DiaryInput"
import DiaryList from "./DiaryList"

const MainDiary = () => {
    const [diaries, setDiaries] = useState([{date:"2025-01-01", content:"あああ"}]);

    const addDiary = (content) => {
        setDiaries([...diaries, {date:"2025-01-01", content:content}]);
    }

    // useEffect(
    //     () => {
    //         const kansu = () => {
    //             alert("登録完了")
    //         }
            
    //         kansu()
    //     }
    // )

    return (
        <div>
            <DiaryInput addDiary={addDiary} />
            <DiaryList diaries={diaries} />
        </div>
    )
}

export default MainDiary
