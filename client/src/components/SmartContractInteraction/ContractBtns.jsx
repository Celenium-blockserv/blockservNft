import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setCollectionName }) {
  const { state: { contract, accounts } } = useEth();

  const name = async () => {
    const value = await contract.methods.name().call({ from: accounts[0] });
    setCollectionName(value);
  };



  return (
    <div className="btns">

      <button onClick={name}>
        name()
      </button>

    </div>
  );
}

export default ContractBtns;
