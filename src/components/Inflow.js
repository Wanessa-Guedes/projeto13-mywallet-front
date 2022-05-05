import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

function Inflow(){

    const [inflowInInfo, setInflowInInfo] = useState({ value: "", description: "" });

    //TODO: MUDAR ESSA FUNÇÃO E O NOME DELA
    async function postSignIn (e) {
        e.preventDefault();
        try {
            const data = { value: inflowInInfo.value, description: inflowInInfo.description};
            await axios.post("http://localhost:5000/sign-in", data);
            //TODO: navigate("Para a tela 3 ou 6 --> Depende dos dados cadastrados!")
        } catch (e) {
            console.log("Erro ao efetuar ao registrar entrada.")
        }
    } 

    //TODO: Tem que colocar um onClick no botão Entrar
    function montarFormularioInflow(){
        return (
            <>
                <input type="text" id="value" value={inflowInInfo.value} placeholder="Valor" required
                    onChange={(e) => setInflowInInfo({ ...inflowInInfo, value: e.target.value })} />

                <input type="text" id="description" value={inflowInInfo.description} placeholder="Descrição" required
                    onChange={(e) => setInflowInInfo({ ...inflowInInfo, description: e.target.value })} />

                <div>
                    <button>Salvar entrada</button>
                </div>
            </>
        )
    }

    const formularioInflow = montarFormularioInflow();
    //TODO: Olhar track it: Cadastro e login

    return(
        <>
            <Main>
                <h1> Nova entrada </h1>
            <FormularioCompra onSubmit={postSignIn}>
                    {formularioInflow}
            </FormularioCompra>
            </Main>
        </>
    )
}

export default Inflow;

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

` ;


