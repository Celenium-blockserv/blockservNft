import {EthProvider} from "./contexts/EthContext";
import "./App.css";
import React from 'react';
import Main from "./components/Main"

function App() {
    return (
        <EthProvider>
            <div id="App">
                <Main />
            </div>
        </EthProvider>
    );
}

export default App;
