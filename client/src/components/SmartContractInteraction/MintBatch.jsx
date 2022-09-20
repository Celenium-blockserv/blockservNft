import { useRef, useEffect } from "react";

function MintBatch({ jsonFilesList }) {
  const spanEle = useRef(null);

  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [jsonFilesList]);

  return (
    <code>
      {`File to mint: `}

      <span className="secondary-color" ref={spanEle}>
        <strong>{jsonFilesList.map(file => file.ipfs)}</strong>
      </span>


    </code>
  );
}

export default MintBatch;
