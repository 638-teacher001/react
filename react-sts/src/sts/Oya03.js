import Kodomo03 from './Kodomo03';
import { useState } from 'react';

const Oya03 = () => {
    const [name, setName] = useState("");

    const call = (namae) => {
        setName(namae);
    }

    return (
        <div>
            <h1>システムサポート</h1>
            <hr/>
            {name}から呼び出しがありました。
            <Kodomo03 name="杉林" call={call} />
            <Kodomo03 name="佐藤" call={call} />
            <Kodomo03 name="吉田" call={call} />
        </div>
    )
}

export default Oya03
