import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./Top";
import MainDiary from "./MainDiary";

const Sample01 = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/`} element={<Top />} />
                <Route path={`/diary`} element={<MainDiary />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Sample01
