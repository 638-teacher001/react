import { useState } from 'react'
import StsInput from "./StsInput"
import StsList from "./StsList"

const StsMain = () => {
    //メンバー管理
    const [members, setMembers] = useState([]);

    //ID管理
    const [id, setId] = useState(1);

    //メンバー登録用関数
    function addMember(name) {
        const member = {
            id: id,
            name: name,
            work: true,
        };

        setMembers([...members, member]);
        setId(id + 1);
    }

    //メンバー削除用関数
    const deleteMember = (id) => {
        setMembers(members.filter(member => member.id !== id))
    }

    //メンバー編集用関数
    // const editMember = (id, name) => {
    //     setMembers(
    //         members.map(member => {
    //             if (member.id === id) {
    //                 return {...member, name: name}
    //             } else {
    //                 return member;
    //             }
    //         })
    //     );
    // }
    const editMember = (id, name) => {
        setMembers(
            members.map(member => 
                member.id === id
                ? {...member, name: name}
                : member
            )
        );
    }

    return (
        <div>
        <h1>社員管理アプリ</h1>
        <hr/>
        <StsInput addMember={addMember} />
        <StsList members={members} deleteMember={deleteMember} editMember={editMember} />
        </div>
    )
}

export default StsMain
