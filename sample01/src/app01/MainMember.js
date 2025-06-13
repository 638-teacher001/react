import { useState } from 'react'
import MemberInput from './MemberInput'
import MemberList from './MemberList'

const MainMember = () => {
    const [id, setId] = useState(1)
    const [members, setMembers] = useState([])

    const addMember = (name) => {
        setMembers([...members, {id: id, name: name}]);
        setId(id + 1);
    }

    return (
        <div>
            <MemberInput addMember={addMember} />
            <MemberList members={members} />
        </div>
    )
}

export default MainMember
