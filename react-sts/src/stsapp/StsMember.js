import { useState } from 'react'

const StsMember = ({ member, deleteMember, editMember }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState(member.name);


    //編集ボタンの状態を管理する関数
    const edit = () => {
        // if (isEdit === true) {
        //     editMember(member.id, name);
        // }

        //isEdit === true && editMember(member.id, name);
        isEdit && editMember(member.id, name);
        
        setIsEdit(!isEdit);
    }

    return (
        <tr>
            <td>{member.id}</td>
            <td>
                {
                    !isEdit
                    ? <span onClick={edit}>{member.name}</span>
                    : <input type="text" name="name" defaultValue={name}
                        onChange={e => setName(e.target.value)} />
                }
            </td>
            <td><button onClick={edit}>編集</button></td>
            <td><button onClick={() => deleteMember(member.id)}>削除</button></td>
        </tr>
    )
}

export default StsMember
