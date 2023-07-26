import AllRoutes from "./component/AllRoutes/AllRoutes";
import "./App.css";
import Whatsapp from "./component/Whattsapp/Whatsapp";

function App() {
  return (
    <div className="mainRoute">
      <AllRoutes />
      <Whatsapp/>
    </div>
  );
}

export default App;
