import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { App } from "../app/App";
import { ROUTE_PATHS } from "../../constants/routes";
import { DeveloperPage } from "../developerPage/DeveloperPage";

export const Main = () => {
    return (
        <Router>
            <Routes>
                <Route element={<App />} path={ROUTE_PATHS.HOME} />
                <Route element={<DeveloperPage />} path={ROUTE_PATHS.ADVOCATE_PAGE} />
            </Routes>
        </Router>
    )
}