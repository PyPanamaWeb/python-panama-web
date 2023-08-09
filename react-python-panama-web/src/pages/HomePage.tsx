import "../css/HomePage.css"

import { MenuComponent } from "../components/common/MenuComponent";
import { FooterComponent } from "../components/common/FooterComponent";
import { HomePageBodyComponent } from "../components/home/HomePageBodyComponent";
import { ContactPageBodyComponent } from "../components/contact/ContactPageBodyComponent";
import { Navigate, Route, Routes } from "react-router-dom";

export function HomePage() {
    return (
        <>
            <div className="body">
                <MenuComponent/>
                <Routes>
                    <Route path="/" element={<HomePageBodyComponent/>} />
                    <Route path="/contacto" element={<ContactPageBodyComponent/>} />
                    <Route path="/*" element={ <Navigate to="/"/> }/>
                </Routes>
                <FooterComponent/>
            </div>
        </>
    )
}