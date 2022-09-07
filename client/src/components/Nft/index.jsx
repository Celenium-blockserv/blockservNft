import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";



const { NFTStorage } = require("nft.storage/dist/bundle.esm.min.js");

function Nft() {
  const { state } = useEth();
  const [value, setValue] = useState("?");
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [urlArr, setUrlArr] = useState([]);

  let NFTStorageClient = {};


  const [apiKeyValue, setApiKeyValue] = useState("");

  const handleInputChange = e => {

    setApiKeyValue(e.target.value);
    NFTStorageClient = new NFTStorage({ token:apiKeyValue });
  };

  const retrieveFile = (e) => {
    console.log('retrieveFile');

    const data = e.target.files[0];

    setData(data);
    console.log(data);


    // const reader = new window.FileReader();
    // reader.readAsArrayBuffer(data);
    // reader.onloadend = () => {
    //   console.log("Buffer data: ", Buffer(reader.result));
    //   setFile(Buffer(reader.result));
    // }
    //
    // e.preventDefault();
  }




  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Handle submit');
    console.log(data)
    const image = data;

    const cid = await NFTStorageClient.storeDirectory([new File([image], "NFT")]);

    console.log(cid);

    // e.preventDefault();
    // try {
    //   //const created = await client.add(file);
    //   //const url = `https://ipfs.infura.io/ipfs/${created.path}`;
    //   const url = `https://ipfs.infura.io/ipfs/`;
    //   setUrlArr(prev => [...prev, url]);
    //   console.log('handleSubmit')
    // } catch (error) {
    //   console.log(error.message);
    // }
  };



  const demo =
    <>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input type="file" name="data" onChange={retrieveFile} />
          <button type="submit" className="btn">Upload file</button>
        </form>
      </div>
      <input
        type="text"
        placeholder="nft storage api key"
        value={apiKeyValue}
        onChange={handleInputChange}
      />
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
