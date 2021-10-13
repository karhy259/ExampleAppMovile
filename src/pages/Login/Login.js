import React,{useState} from "react";

//css 

import  './Login.css';

//components
import Title from "../../commons/Title/Title"
import Label from "../../commons/Label/Label"
import Input from "../../commons/Input/Input"
import Img from "../../commons/Img/Img"

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError,setHassError] = useState(false);


    const data = JSON.parse(localStorage.getItem('registro'));

    function handleChange(name, value){
        if (name === 'email') {
            setEmail(value);
            setHassError(false);
        }else {
            if (value.length < 6 ){
                setPasswordError(true);
                setHassError(false);
            } else {
                setPasswordError(false);
                setPassword(value)
                setHassError(false);
            }           
        }
    };

    function ifMatch(param){ 


        if (param.email.length > 0 && param.password.length > 0){
            if(param.email === data.email  && param.password === data.password ){
                const  { email,  password} = param;
                let ac = {email, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
                window.location.href="/home"

            } else {
                if(param.email === 'Karhy259@ejemplo.com'  && param.password === '0904Alicia' ){
                    const  { email,  password} = param;
                    let ac = {email, password};
                    let account = JSON.stringify(ac);
                    localStorage.setItem('account', account);
                    setIsLogin(true);
                    window.location.href="/home"
    
                } else {
                        setIsLogin(false);
                        setHassError(true);
                    }    
                }     
            } else {
                setIsLogin(false);
                setHassError(true);
        }    

    }

    function handleSubmit(){

        let account = { email, password}
        if (account) {
           ifMatch(account);
        }

    };

    function Registrarme(){
        window.location.href="/registro"
    }

    return (
        <div className='login-container'>
            <div className='login-content'>

                <Img/>
                <Title text="¡Welcome!"/>


                {hasError &&
                    <label className='label-alert'>
                            Su contraseña o usuario son incorrectos
                            o no existen en nuestra plataforma
                    </label>
                }

                <Label text="Correo"/>
                <Input 
                attribute={{
                    id: 'email',
                    name: 'email',
                    type:'email', 
                    placeholder: 'Ingrese su Correo',  
                }}
                handleChange = {handleChange}
                />

                <Label text="Contraseña"/>
                <Input 
                attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type:'password', 
                    placeholder: 'Ingrese su Contraseña'
                }}
                handleChange = {handleChange}
                param={passwordError}
                />

                {passwordError &&
                    <label className='label-error'>
                        Contraseña invalida o incompleta
                    </label>
                }

                <div className="submit-button-container">  
                    <button onClick={handleSubmit} className='submit-button'>
                        Login
                    </button>
                </div>

                <div className="submit-button-container">  
                <button onClick={Registrarme} className='submit-button'>
                        ¿ No tienes cuenta? 
                    </button>
                </div>
            </div>
        </div>
    );

}

export default Login;