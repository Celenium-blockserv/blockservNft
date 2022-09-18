import {EthProvider} from "./contexts/EthContext";
import SmartContractInteraction from "./components/SmartContractInteraction";
import Gallery from "./components/Gallery";
import Workflow from "./components/Workflow";
import NftImagesUpload from "./components/NftImagesUpload";
import "./App.css";
import React from 'react';

function App() {



    return (

        <EthProvider>
            <div id="App">
                <div className="container">
                    <Workflow/>
                    <hr/>
                    <Gallery />
                    <hr/>
                    <NftImagesUpload/>
                    <hr/>
                    <IpfsImagesGallery/>
                    <hr/>
                    <SmartContractInteraction/>

                </div>

            </div>
        </EthProvider>


    );
}

export default App;
