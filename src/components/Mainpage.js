import styled from "styled-components";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import Context from "./contexts/Context";

//TODO: iON-ICON EXIT REDIRECIONAR PARA A PÁGINA PRINCIPAL E LIMPAR USUÁRIO E SENHA
//TODO: Não há registros de Entrada ou saída --> Ai tem que fazer uma lógica com os estados provavelmente
//TODO: Botões Nova entrada e Nova saída tem que levar para as próximas rotas
function Mainpage (){

    const {token, setToken} = useContext(Context);
    const {userName, setUserName} = useContext(Context);
    const [registers, setRegisters] = useState("");

    console.log(userName);
    
    useEffect(() => {

            const promise = axios.get("http://localhost:5000/mainpage", {
                headers: {"Authorization": `Bearer ${token}`}
            });
            promise.then(res => {
                console.log(res.data)
                setRegisters(res.data)});
            promise.catch(e => console.log('Erro na página principal', e));
        }, [])

    function mainData(){
        return(
            
                (registers.length === 0) ? (
                    <div><p> Não há registros de entrada ou saída</p></div>
                ) : (
                    <div> {registers.map((register, item) => {
                        return <p>{register.description}, {register.value}</p>
                    })} </div>
                )
                
        )
    }
        
    

    const infosMainData = mainData();
    return(
        <>
        <Container>
            <Header>
                <h1>Olá, {userName}</h1>
                <ion-icon name="exit-outline"></ion-icon>
            </Header>
                    {infosMainData}
            <Footer>
                <button><ion-icon name="add-circle-outline"></ion-icon> Nova entrada</button>
                <button><ion-icon name="remove-circle-outline"></ion-icon> Nova saída</button>
            </Footer>
        </Container>
        </>
    )
}

export default Mainpage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: space-evenly;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        width: 80vw;
        height: 70vh;
        background: #FFFFFF;
        border-radius: 5px;
    }

    p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
`;

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

const Footer = styled.footer`
    display: flex;
    width: 80vw;
    justify-content: space-between;
    align-items: center;

button {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 35vw;
    height: 17vh;
    background: #A328D6;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    border: none;
}

`;