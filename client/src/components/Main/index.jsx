import SmartContractInteraction from "../SmartContractInteraction";
import Gallery from "../Gallery";
import Workflow from "../Workflow";
import NftImagesUpload from "../NftImagesUpload";
import NftJsonFilesUpload from "../NftJsonFilesUpload";
import IpfsImagesGallery from "../IpfsImagesGallery";

import React from 'react';
import {useState} from "react";

function Main() {
    const [cid, setCid] = useState("");
    const [ipfsImagesList, setIpfsImagesList] = useState([]);
    const [jsonFilesList, setJsonFilesList] = useState([]);


    const  setUploadedIpfsImagesList = async (childData) => {
       setIpfsImagesList(childData);
        if (childData[0]) {
            setCid(childData[0].cid)
        }

    }

    const setUploadedJsonFilesList = (childData) => {
        setJsonFilesList(childData);
        console.log(jsonFilesList)
    }

    return (
                <div className="container">
                    <Workflow/>
                    <hr/>
                    <Gallery />
                    <hr/>
                    <NftImagesUpload setUploadedIpfsImagesList={setUploadedIpfsImagesList}/>
                    <hr/>
                    <IpfsImagesGallery images={ipfsImagesList}/>
                    <hr/>
                    <NftJsonFilesUpload setUploadedJsonFilesList={setUploadedJsonFilesList} cid={cid}/>
                    <hr/>
                    <SmartContractInteraction/>
                </div>
    );
}

export default Main;
