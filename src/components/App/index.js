import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "../SignIn";
import Register from "../Register";
import Mainpage from "../Mainpage";
import Inflow from "../Inflow";
import Outflow from "../Outflow";

function App (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />}></Route> 
                <Route path="/register" element={<Register />}></Route> 
                <Route path="/mainpage" element={<Mainpage />}></Route> 
                <Route path="/inflow" element={<Inflow />}></Route> 
                <Route path="/outflow" element={<Outflow />}></Route> 
            </Routes>
        </BrowserRouter>
    )
}

export default App;