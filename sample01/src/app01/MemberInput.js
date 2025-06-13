import { useState } from 'react'

const MemberInput = ({ addMember }) => {
    const [name, setName] = useState('')

    const regist = () => {
        if (name.length === 0) {
            return;
        }

        addMember(name)
        setName('')
    }

    return (
        <div>
            名前：<input type="text" name="name"
                value={name} onChange={e => setName(e.target.value)} />
            <br/>
            <button onClick={regist}>登録</button>
        </div>
    )
}

export default MemberInput
