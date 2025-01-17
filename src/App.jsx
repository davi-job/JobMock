import React from "react";

import Display from "./interface/layout/display.jsx";
import Controls from "./interface/layout/controls.jsx";

function App() {
    return (
        <>
            <main className="app_main">
                <Display />
                <Controls />
            </main>
        </>
    );
}

export default App;
