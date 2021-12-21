import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FinishRequest from './pages/FinishRequest';
import SelectMovie from "./pages/SelectMovie";
import SelectPlace from "./pages/SelectPlace";
import SelectSchedule from "./pages/SelectSchedule";

export default function App() {
    const [reserve, reservePost] = useState()
    // const reservePost = {};
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SelectMovie />} > </Route>
                <Route path="/sessoes/:movieId" element={<SelectSchedule />}></Route>
                <Route path="/assentos/:placeId" element={<SelectPlace reservePost={reservePost} />}></Route>
                <Route path="/sucesso" element={<FinishRequest reservePost={reserve} />}></Route>
            </Routes>
        </BrowserRouter>

    );
}  