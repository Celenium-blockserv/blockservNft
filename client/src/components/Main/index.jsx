import SmartContractInteraction from "../SmartContractInteraction";
import Gallery from "../Gallery";
import Workflow from "../Workflow";
import NftImagesUpload from "../NftImagesUpload";
import NftJsonFilesUpload from "../NftJsonFilesUpload";
import EmployeesUpload from "../EmployeesUpload";
import IpfsImagesGallery from "../IpfsImagesGallery";
import Header from "./Header";

import React, {useEffect} from 'react';
import {useState} from "react";
import useEth from "../../contexts/EthContext/useEth";

function Main() {
    const { state: { contract } } = useEth();
    const [collectionName, setCollectionName] = useState("");
    const [lastId, setLastId] = useState(0);

    const [cid, setCid] = useState("");
    const [ipfsImagesList, setIpfsImagesList] = useState([]);
    const [jsonFilesList, setJsonFilesList] = useState([]);
    const [employeesList, setEmployeesList] = useState([]);


    useEffect(() => {
        if (contract) {
            const getNameAndLastId = async () => {
                const value = await contract.methods.name().call();
                setCollectionName(value)
                const lastId = await contract.methods.lastId().call();
                setLastId(lastId)
            };
            getNameAndLastId()
        }
    }, [contract]);

    const  setUploadedIpfsImagesList = async (childData) => {
       setIpfsImagesList(childData);
        if (childData[0]) {
            setCid(childData[0].cid)
        }
    }

    const setUploadedJsonFilesList = (childData) => {
        setJsonFilesList(childData);
        console.log('jsonFilesList');
        console.log(childData);
    }

    const setUploadedEmployeesList = (childData) => {
        setEmployeesList(childData);
        console.log('employeesList');
        console.log(childData);
    }

    return (<>
            <Header collectionName={collectionName}></Header>

            <div className="container">
                <Workflow/>
                <hr/>
                <Gallery lastId={lastId} />
                <hr/>
                <NftImagesUpload setUploadedIpfsImagesList={setUploadedIpfsImagesList}/>
                <hr/>
                <IpfsImagesGallery images={ipfsImagesList}/>
                <hr/>
                <NftJsonFilesUpload setUploadedJsonFilesList={setUploadedJsonFilesList} cid={cid}/>
                <hr/>
                <EmployeesUpload setUploadedEmployeesList={setUploadedEmployeesList} cid={cid}/>
                <hr/>
                <SmartContractInteraction  jsonFilesList={jsonFilesList} employeesList={employeesList}/>
            </div>
    </>

    );
}

export default Main;
