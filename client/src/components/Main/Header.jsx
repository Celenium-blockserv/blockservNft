import logo from '../../assets/LogoCeleniumWeb3.png';


function Header({collectionName}) {
    return (<>
        <div className="header">
            <img  src={logo} height="100px" width="100px" alt="Celenium"/>
            <h1>Gestion de la collection</h1>
            <h2 >{collectionName}</h2>
        </div>
    </>);
}

export default Header;

