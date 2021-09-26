import React,{useState} from "react";

//css 

import  './Registro.css';

//components
import Title from "../../commons/Title/Title"
import Label from "../../commons/Label/Label"
import Input from "../../commons/Input/Input"
import Img from "../../commons/Img/Img"

const Registro = () => {

    const [email,setEmail] = useState('');
    const [nombre,setName] = useState('');
    const [password,setPassword] = useState('');
    const [pass2,setPass2] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError,setHassError] = useState(false);

    function handleChange(name, value){
        if (name ==='nombre') {
            setName(value);
            setHassError(false);
        } 
        else {
            if (name === 'email') {
                setEmail(value);
                setHassError(false);
            }else {
                if(value.length < 6) {
                    setPasswordError(true);
                    setHassError(false);
                }else {
                        setPasswordError(false);
                        setPassword(value);
                        setPass2(value);
                        setHassError(false);
                    } 
            }          
            

        }
        
    };


    function ingreso(param){
        
            if (param.password.length > 0 && param.pass2.length > 0 && param.email.length > 0 && param.nombre.length > 0)
         {
                if (param.password.value === param.pass2.value){

                    const  { nombre, email,  password} = param;
                    let re = {nombre, email, password};
                    let register = JSON.stringify(re);
                    localStorage.setItem('registro', register);
                    window.location.href="/"
                    } else {
                        setPasswordError(true);
                    }
        } else {
            setHassError(true);
        }
        
    }

    function handleSubmit(){

        let register = { nombre, email, password, pass2}
        if (register) {
            ingreso(register);
        }

    };

    return (
        <div>
            <div className='registro-container'>
                <div className='registro-content'>           
                    <Img/>

                    {hasError &&
                        <label className='label-alert'>
                                Los campos no deben estar vacios
                        </label>
                    }
                    <Title text="Registro"/>

                    <Label text="Nombre"/>
                    <Input 
                    attribute={{
                        id: 'nombre',
                        name: 'nombre',
                        type:'text', 
                        placeholder: 'Ingrese su nombre',  
                    }}
                    handleChange = {handleChange}
                    />
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

                    <Label text="Respita la contraseña"/>
                    <Input 
                    attribute={{
                        id: 'contraseña2',
                        name: 'contraseña2',
                        type:'password', 
                        placeholder: 'Ingrese su Contraseña'
                    }}
                    handleChange = {handleChange}
                    param={passwordError}
                    required
                    />

                    {passwordError &&
                        <label className='label-error'>
                            Las contraseña no coinciden
                        </label>
                    }

                    <div className="submit-button-container">  
                        <button onClick={handleSubmit} className='submit-button'>
                            Resgistrarme
                        </button>
                    </div>
                </div>
                    
            </div>
                
        </div>
    );

}

export default Registro