import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./Top";
import Sub from "./Sub";

const Sample01 = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/`} element={<Top />} />
                <Route path={`/sub`} element={<Sub />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Sample01
