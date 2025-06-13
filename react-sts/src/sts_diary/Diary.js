import { useState } from 'react'

const Diary = ({ diary, editDiary, deleteDiary }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [date, setdate] = useState(diary.date.slice(0,10));
    const [content, setContent] = useState(diary.content);

    const edit = () => {
        if (isEdit) {
            editDiary(
                {
                    id: diary.id,
                    uid: diary.uid,
                    date: date,
                    content: content,
                }
            )
        }

        setIsEdit(!isEdit);
    }
    
    return (
        <tr>
            <td>{diary.id}</td>
            <td>
            {
                !isEdit
                ? diary.date.slice(0,10)
                : <input type="date" value={date} onChange={e => setdate(e.target.value)} />
            }
            </td>
            <td>
            {
                !isEdit
                ? diary.content
                :<textarea onChange={e => setContent(e.target.value)}>{content}</textarea>
            }
            </td>
            <td><button onClick={edit}>編集</button></td>
            <td><button onClick={() => deleteDiary(diary.id)}>削除</button></td>
        </tr>
    )
}

export default Diary
