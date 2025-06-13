import React from 'react'
import StsMember from "./StsMember"

const StsList = ({ members, deleteMember, editMember }) => {
    // const members = [
    //     {id: 1, name: "ナラ", work: true},
    //     {id: 2, name: "齋藤", work: true},
    //     {id: 3, name: "根岸", work: true},
    // ]

    return (
        <div>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>名前</th>
                    <th>編集</th>
                    <th>削除</th>
                </tr>
                {
                    members.map(member => 
                        <StsMember member={member} deleteMember={deleteMember} editMember={editMember} />
                    )
                }
            </table>
        </div>
    )
}

export default StsList
