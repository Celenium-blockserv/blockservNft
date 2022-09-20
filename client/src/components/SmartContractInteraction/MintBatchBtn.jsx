import {useEffect, useState} from "react";
import useEth from "../../contexts/EthContext/useEth";

function MintBachBtns({ jsonFilesList, setTokenIds }) {
  const { state: { contract, accounts } } = useEth();
  const [ipfsJsonFilesList, setIpfsJsonFilesList] = useState([]);

  useEffect(() => {
   setIpfsJsonFilesList(jsonFilesList.map(file => file.ipfs))
  }, [jsonFilesList]);


  const batchMint = async () => {
    const tokenIds = await contract.methods.batchMint(accounts[0], ipfsJsonFilesList,).send( { from: accounts[0] });
    setTokenIds(tokenIds);
  };



  return (
    <div className="btns">

      <button onClick={batchMint}>
        name({accounts[0]}, {ipfsJsonFilesList})
      </button>

    </div>
  );
}

export default MintBachBtns;
