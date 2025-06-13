import React from 'react'
import Diary from "./Diary";

const ListDiary = ({ diaries, editDiary, deleteDiary }) => {
    return (
        <div>
            【日記一覧】<br/>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>日付</th>
                    <th>日記内容</th>
                    <th>編集</th>
                    <th>削除</th>
                </tr>
                {
                    diaries.map(diary =>
                        <Diary diary={diary} editDiary={editDiary} deleteDiary={deleteDiary} />
                    )
                }
            </table>
        </div>
    )
}

export default ListDiary
