import { useRef, useEffect } from "react";

function Contract({ collectionName }) {
  const spanEle = useRef(null);

  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [collectionName]);

  return (
    <code>
      {`Collection name = `}

      <span className="secondary-color" ref={spanEle}>
        <strong>{collectionName}</strong>
      </span>


    </code>
  );
}

export default Contract;
