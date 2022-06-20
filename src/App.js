import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.scss';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import PreciosBerger from "./Components/Home/PreciosBerger";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar><Home/></NavBar>}/>
        <Route path="/PreciosBerger" element={<NavBar><PreciosBerger/></NavBar>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
