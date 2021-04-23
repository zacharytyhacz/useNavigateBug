import React from "react"
import * as ReactDOM from "react-dom"
import {
    BrowserRouter, Routes, Route
} from "react-router-dom"

import Home from "./Home";
import Dashboard from "./Dashboard";

const App = React.memo(() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/otherpage" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
})

ReactDOM.render(
    <App />,
    document.getElementById("app"),
)
