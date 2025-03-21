import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => (
    <BrowserRouter basename="/">
        <Route path="/" element={<Main />}>
        </Route>
    </BrowserRouter>
);