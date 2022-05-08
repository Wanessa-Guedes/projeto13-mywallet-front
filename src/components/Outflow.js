import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import Context from "./contexts/Context";
import { useNavigate } from 'react-router';

function Outflow(){

    const [outflowInInfo, setOutflowInInfo] = useState({ value: "", description: "" });
    const {token, setToken} = useContext(Context);
    const navigate = useNavigate();
    async function postOutflow(e) {
        e.preventDefault();
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const data = { value: outflowInInfo.value, description: outflowInInfo.description};
            await axios.post("http://localhost:5000/outflow", data, config);
                setOutflowInInfo({ value: "", description: "" });
                navigate("/mainpage");
        } catch (e) {
            console.log("Erro ao efetuar ao registrar entrada.");
            setOutflowInInfo({ value: "", description: "" });
        }
    } 

    //TODO: Tem que colocar um onClick no botão Entrar
    function montarFormularioOutflow(){
        return (
            <>
                <input type="text" id="value" value={outflowInInfo.value} placeholder="Valor" required
                    onChange={(e) => setOutflowInInfo({ ...outflowInInfo, value: e.target.value })} />

                <input type="text" id="description" value={outflowInInfo.description} placeholder="Descrição" required
                    onChange={(e) => setOutflowInInfo({ ...outflowInInfo, description: e.target.value })} />

                <div>
                    <button>Salvar saída</button>
                </div>
            </>
        )
    }

    function back(){
        navigate("/mainpage");
        setOutflowInInfo({ value: "", description: "" });
    }

    const formularioOutflow = montarFormularioOutflow();

    return(
        <>
            <Main>
                <Header>
                <h1> Nova saída </h1>
                <span onClick={() => back()}><ion-icon name="arrow-redo-outline"></ion-icon></span>
                </Header>
            <FormularioCompra onSubmit={postOutflow}>
                    {formularioOutflow}
            </FormularioCompra>
            </Main>
        </>
    )
}

export default Outflow;

const FormularioCompra = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    
    input {
        height: 8vh;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000; 
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 5px;
    }

    button {
        height: 8vh;
        background: #A328D6;
        border-radius: 5px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        width: 100%;
        cursor: pointer;
        border: none;
    }
`;

const Main = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 50vh;


    h1 {
        width: 90vw;
        display: flex;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF 
    }

    ion-icon {
        color: #FFFFFF;
        font-size: 26px;
    }
` ;

const Header = styled.header`
    display: flex;
    width: 80vw;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }

    ion-icon {
        color: #FFFFFF;
        font-size: 26px;
    }
`;