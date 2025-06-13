import { useNavigate } from "react-router-dom";

const Top = () => {
    const navigate = useNavigate();

    return (
        <div>
            トップページ<br/>
            <button onClick={() => navigate("/sub")}>ページの切り替え</button>
        </div>
    )
}

export default Top
