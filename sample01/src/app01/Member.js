import React from 'react'

const Member = ({ member }) => {
    return (
        <tr>
            <td>{member.id}</td>
            <td>{member.name}</td>
        </tr>
    )
}

export default Member
