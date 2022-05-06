import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Context from "../contexts/Context";

import SignIn from "../SignIn";
import Register from "../Register";
import Mainpage from "../Mainpage";
import Inflow from "../Inflow";
import Outflow from "../Outflow";

function App (){

    const [token, setToken] = useState("");
    const [userName, setUserName] = useState("");

    return(
            <BrowserRouter>
            <Context.Provider value = {{token, setToken, userName, setUserName}}>
                <Routes>
                    <Route path="/" element={<SignIn />}></Route> 
                    <Route path="/register" element={<Register />}></Route> 
                    <Route path="/mainpage" element={<Mainpage />}></Route> 
                    <Route path="/inflow" element={<Inflow />}></Route> 
                    <Route path="/outflow" element={<Outflow />}></Route> 
                </Routes>
            </Context.Provider>
            </BrowserRouter>
    )
}

export default App;