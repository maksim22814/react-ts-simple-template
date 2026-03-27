// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CityProvider } from "./contexts/CityContext";
import BaseLayout from "./layouts/BaseLayout";
import { CityListPage } from "./pages/cities/CityListPage";
import { CityDetailsPage } from "./pages/cities/CityDetailsPage";
import { AddCityPage } from "./pages/cities/AddCityPage";
import { EditCityPage } from "./pages/cities/EditCityPage";

function App() {
    return (
        <CityProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BaseLayout />}>
                        <Route index element={<CityListPage />} />
                        <Route path="add" element={<AddCityPage />} />
                        <Route path="city/:id" element={<CityDetailsPage />} />
                        <Route path="edit/:id" element={<EditCityPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CityProvider>
    );
}

export default App;