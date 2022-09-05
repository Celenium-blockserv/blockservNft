import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Nft from "./components/Nft";
import Footer from "./components/Footer";
import "./App.css";

function App() {








  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          <Intro />
          <hr />
          <Setup />
          <hr />
          <Demo />
          <hr />
          <Nft />
          <hr />
          <Footer />
        </div>

      </div>
    </EthProvider>
  );
}

export default App;
