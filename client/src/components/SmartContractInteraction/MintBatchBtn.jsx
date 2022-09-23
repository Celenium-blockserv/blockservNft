import {useEffect, useState} from "react";
import useEth from "../../contexts/EthContext/useEth";

function MintBachBtns({ jsonFilesList,  employeesList}) {
  const { state: { contract, accounts } } = useEth();
  const [ipfsJsonFilesList, setIpfsJsonFilesList] = useState([]);



  useEffect(() => {
   setIpfsJsonFilesList(jsonFilesList.map(file => file.ipfs))
  }, [jsonFilesList]);


  const batchMint = async () => {
      let recipients= [];
      for(let i=0;i<ipfsJsonFilesList.length;i++){
          recipients[i]=employeesList[i].address;
      }
    await contract.methods.batchMint(recipients, ipfsJsonFilesList,).send( { from: accounts[0] });

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
