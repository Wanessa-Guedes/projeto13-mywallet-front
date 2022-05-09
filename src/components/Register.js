import axios from "axios";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from 'react-router';

function Register(){
    const [userRegisterInfo, setUserRegisterInfo] = useState({ name: "", email: "", password: "", confirm: ""});
    const navigate = useNavigate();

    async function postRegister (e) {
        e.preventDefault();
        try {
            
            if(userRegisterInfo.password === userRegisterInfo.confirm){
                const data = { name: userRegisterInfo.name, email: userRegisterInfo.email, password: userRegisterInfo.password, confirm: userRegisterInfo.confirm};
                console.log(data)
                await axios.post("http://localhost:5000/signUp", data);
                    navigate("/");
            } else {
                alert("As senhas não são iguais! Tente novamente.");
                setUserRegisterInfo({ name:"", email: "", password: "", confirm:""});
            }
        } catch (e) {
            alert(e.response.data);
            setUserRegisterInfo({ name:"", email: "", password: "", confirm:""});
        }
    } 

    function montarFormularioSignIn(){
        return (
            <>
                <input type="text" id="name" value={userRegisterInfo.name} placeholder="Nome" required
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, name: e.target.value })} />

                <input type="email" id="email" value={userRegisterInfo.email} placeholder="E-mail" required
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, email: e.target.value })} />

                <input type="password" id="password" value={userRegisterInfo.password} placeholder="Senha" required
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, password: e.target.value })} />

                <input type="password" id="confirm" value={userRegisterInfo.confirm} placeholder="Confirme a senha" required
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, confirm: e.target.value })} />

                <div>
                    <Button type="submit">Cadastrar</Button>
                </div>
            </>
        )
    }

    const formularioSignIn = montarFormularioSignIn();

    return (
        <>
            <Main>
                <h1> MyWallet </h1>
            <FormularioCompra onSubmit={postRegister}>
                    {formularioSignIn}
            </FormularioCompra>
            <StyledLink to="/"> Já tem uma conta? Entre agora! </StyledLink>
            </Main>
        </>

    )
}

export default Register;

const FormularioCompra = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    
    input {
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

`;

const Main = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 40%;
    height: 50vh;


    h1 {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF; 
    }

` ;

const StyledLink = styled(Link)`
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: none;
`;

const Button = styled.button`

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

`;

