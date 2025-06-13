import { useState } from 'react'

const StsInput = ({ addMember }) => {
    const [name, setName] = useState("");

    const add = () => {
        if (name === "") { //name.length === 0
            return;
        }

        addMember(name)
        setName("")
    }

    return (
        <div>
            名前：<input type="text" name="name" value={name}
                    onChange={e => setName(e.target.value)} />
            <br/>
            <button onClick={add}>登録</button>
         </div>
    )
}

export default StsInput
