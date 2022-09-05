import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";
import Cta from "./Cta";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import Desc from "./Desc";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

import * as Constants from "../../config"
//import { create } from "ipfs-http-client";

//const client = create('https://ipfs.infura.io:5001/api/v0');



function Nft() {
  const { state } = useEth();
  const [value, setValue] = useState("?");
  const [file, setFile] = useState(null);






  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      console.log("Buffer data: ", Buffer(reader.result));
      setFile(Buffer(reader.result));
    }

    e.preventDefault();
  }



  const [urlArr, setUrlArr] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //const created = await client.add(file);
      //const url = `https://ipfs.infura.io/ipfs/${created.path}`;
      const url = `https://ipfs.infura.io/ipfs/`;
      setUrlArr(prev => [...prev, url]);
      console.log('handleSubmit')
      console.log(Constants.NFS_STORAGE_API_KEY)
    } catch (error) {
      console.log(error.message);
    }
  };



  const demo =
    <>
      <Cta />
      <div className="contract-container">
        <Contract value={value} />
        <ContractBtns setValue={setValue} />
      </div>
      <Desc />
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input type="file" name="data" onChange={retrieveFile} />
          <button type="submit" className="btn">Upload file</button>
        </form>
      </div>
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

export default Nft;
