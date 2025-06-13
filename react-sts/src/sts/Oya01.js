import Kodomo01 from './Kodomo01';

const Oya01 = () => {
    const kansu = (e) => {
        window.alert("こんにちは！" + e.target.innerHTML);
    }
    const kansu2 = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <h1>親コンポーネント</h1>
            <hr/>
            <input type="text" onChange={kansu2}></input>
            <button onClick={kansu}>親ボタン</button>
            <Kodomo01 name="山田太郎" age={23} kansu={kansu} />
        </div>
    )
}

export default Oya01
