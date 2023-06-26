import React from "react";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

/**Simple app that just renders the Routes. */

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
    );
}

export default App;