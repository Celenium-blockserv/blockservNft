import React, { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import MintBatch from "./MintBatch";
import MintBatchBtn from "./MintBatchBtn";
import {QRCodeSVG} from 'qrcode.react';

function SmartContractInteraction({jsonFilesList, employeesList}) {
    const { state } = useEth();

    const [collectionName, setCollectionName] = useState("?");


    const demo =
    <>
      <div className="contract-container">
        <Contract collectionName={collectionName} />
        <ContractBtns setCollectionName={setCollectionName} />
      </div>
        <br/>
        <div className="contract-container">
            <MintBatch jsonFilesList={jsonFilesList} />
            <MintBatchBtn jsonFilesList={jsonFilesList}  employeesList={employeesList}/>
        </div>
        {
            state.contract ? <QRCodeSVG
                    value={'https://testnets.opensea.io/fr/assets/rinkeby/' + state.contract.options.address + '/1'}
                    size={128}
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level={"L"}
                    includeMargin={false}
                /> :
                    'no contract'
        }



    </>;

  return (
    <div className="demo">
      <Title />
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            demo
      }
    </div>
  );
}

export default SmartContractInteraction;
