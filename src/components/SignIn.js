import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SignIn () {

    const [userSignInInfo, setUserSignInInfo] = useState({ email: "", password: "" });
    //const navigate = useNavigate();

    async function postSignIn (e) {
        e.preventDefault();
        try {
            const data = { email: userSignInInfo.email, password: userSignInInfo.password};
            await axios.post("http://localhost:5000/sign-in", data);
            //TODO: navigate("Para a tela 3 ou 6 --> Depende dos dados cadastrados!")
        } catch (e) {
            console.log("Erro ao efetuar o log-in.")
        }
    } 
//TODO: Tem que colocar um onClick no botão Entrar
    function montarFormularioSignIn(){
        return (
            <>
                <input type="email" id="email" value={userSignInInfo.email} placeholder="E-mail" required
                    onChange={(e) => setUserSignInInfo({ ...userSignInInfo, email: e.target.value })} />

                <input type="password" id="password" value={userSignInInfo.password} placeholder="Senha" required
                    onChange={(e) => setUserSignInInfo({ ...userSignInInfo, password: e.target.value })} />

                <div>
                    <button>Entrar</button>
                </div>
            </>
        )
    }

    const formularioSignIn = montarFormularioSignIn();
    //TODO: Olhar track it: Cadastro e login
    return (
        <>
            <Main>
                <h1> MyWallet </h1>
            <FormularioCompra onSubmit={postSignIn}>
                    {formularioSignIn}
            </FormularioCompra>
            <StyledLink to="/register"> Primeira vez? Cadastre-se! </StyledLink>
            </Main>
        </>

    )
}

export default SignIn;

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

    button {
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


