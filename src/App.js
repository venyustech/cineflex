import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FinishRequest from './pages/FinishRequest';
import SelectMovie from "./pages/SelectMovie";
import SelectPlace from "./pages/SelectPlace";
import SelectSchedule from "./pages/SelectSchedule";

export default function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SelectMovie />} > </Route>
                <Route path="/sessoes/:movieId" element={<SelectSchedule />}></Route>
                <Route path="/assentos/:placeId" element={<SelectPlace />}></Route>
                <Route path="/sucesso" element={<FinishRequest />}></Route>
            </Routes>
        </BrowserRouter>

    );
}  