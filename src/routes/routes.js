import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import ScreenHome from "../screens/home";
import ScreenCart from "../screens/cart";
import ScreenConfirm from "../screens/confirm";

const Rotas = () => {
    return(
        <>
            <BrowserRouter>
                        <Navbar />
                    <Routes>
                        <Route path="/" element={<ScreenHome />} />
                        <Route path="/cart" element={<ScreenCart />} />
                        <Route path="/confirm" element={<ScreenConfirm />} />
                    </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rotas;