import React from 'react'

const DiaryList = ({diaries}) => {
    return (
        <div>
            <table border="1">
                <tr>
                    <th>日付</th>
                    <th>内容</th>
                </tr>
                {
                    diaries.map(diary => 
                        <tr>
                            <td>{diary.date}</td>
                            <td>{diary.content}</td>
                        </tr>
                    )
                }
            </table>
        </div>
    )
}

export default DiaryList
