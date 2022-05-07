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
    const navigate = useNavigate();

    useEffect(() => {
            const promise = axios.get("http://localhost:5000/mainpage", {
                headers: {"Authorization": `Bearer ${token}`}
            });
            promise.then(res => {
                if(res.data.length > 0){
                setRegisters(res.data)}});
            promise.catch(e => console.log('Erro na página principal', e));
        }, [token])
        

    function mainData(){

        return(
            
                (registers.length === 0) ? (
                    <div><p> Não há registros de entrada ou saída</p></div>
                ) : (
                    <> {registers[0].map((register, item) => {
                        return (<Registers>{register.day} <p>{register.description}</p> <span color={register.type}>{register.value}</span></Registers>)
                    })} </>
                )
        )
    }

    function logout(){
        navigate("/");
    }

    const infosMainData = mainData();
    return(
        <>
        <Container>
            <Header>
                <h1>Olá, {userName}</h1>
                <span onClick={() => logout()}><ion-icon name="exit-outline"></ion-icon></span>
            </Header>
                    <Main>
                                {infosMainData}
                                <h3>Saldo <span type={registers[1] >= 0 ? true : false}>{registers[1]}</span></h3>
                        
                    </Main>
            <Footer>
                <StyledLink to="/inflow"><ion-icon name="add-circle-outline"></ion-icon> Nova entrada</StyledLink>
                <StyledLink to="/outflow"><ion-icon name="remove-circle-outline"></ion-icon> Nova saída</StyledLink>
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
`;

const StyledLink = styled(Link)`

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
`;

const Main = styled.main`
    display: flex;
    // align-items: center;
    width: 80vw;
    height: 70vh;
    background: #FFFFFF;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
    flex-direction: column;

    h4 {
        display: flex;
    }

    h3 {
        display: flex;
        height: 100%;
        align-items: flex-end;
        justify-content: space-between;
        margin: 1% 3%;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }

    span {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        //color: ${props => console.log((props.type))};
    }
`;

const Registers = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
   // height: 100%;
    flex-direction: initial;
    justify-content: space-around;
    padding-top: 8%;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

color: #C6C6C6;

    p {
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }

    span{
        color: ${props => console.log(props.color)};
    }
`;