import AllRoutes from "./component/AllRoutes/AllRoutes";

import Winow from "./component/HomemainPage/Winow";
import Wallet from "./component/MyWallet/Wallet";
import CollapsibleExample from "./component/Navbar/Navbar";
// import { PieChart } from "./component/Portfoio/Piacharts";
import Portfolio from "./component/Portfoio/Portfolio";
import ProductDescription from "./component/ProductDescriptionPage/ProductDescription";
// import ProgressBar  from "./component/ProgressBar/ProgressBar";




  
import "./App.css"

function App() {
  return (
    <div className="mainRoute">
      <AllRoutes />

    </div>
  );
}

export default App;
