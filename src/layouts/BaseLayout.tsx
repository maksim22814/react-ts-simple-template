// src/layouts/BaseLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "../widgets/header/Header";
import Footer from "../widgets/footer/Footer";

export default function BaseLayout() {
    return (
        <>
            <Header />
            <main style={{ padding: "25px", margin: "10px" }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}