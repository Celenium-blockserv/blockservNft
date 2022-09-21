import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import MintBatch from "./MintBatch";
import MintBatchBtn from "./MintBatchBtn";

function SmartContractInteraction({jsonFilesList, employeesList}) {
  const { state } = useEth();
    const [collectionName, setCollectionName] = useState("?");
    const [tokenIds, setTokenIds] = useState('No token ids');

  const demo =
    <>
      <div className="contract-container">
        <Contract collectionName={collectionName} />
        <ContractBtns setCollectionName={setCollectionName} />
      </div>
        <br/>
        <div className="contract-container">
            <MintBatch jsonFilesList={jsonFilesList} />
            <MintBatchBtn jsonFilesList={jsonFilesList} setTokenIds={setTokenIds} employeesList={employeesList}/>
        </div>
        <div><strong>{tokenIds}</strong></div>
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
