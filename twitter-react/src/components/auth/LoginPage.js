import { useState } from "react";
import Button from "../shared/Button";
import { login } from "./service";


function LoginPage (onLogin) {
    //const [isLogged, setIsLogged] = useState(false)   Lo queremos arriba de Apps
    const [credentials, setCredentials] = useState(
        {username: '',
        password: '',
    });

    const handleSubmit = async event => {
        event.preventDefault(credentials);         //No recarga la página, que es lo que hace por defecto
        
        await login({  //Hacer el login
            username: event.target.username.value,
            password: event.target.password.value,
        });
      
        //To be Logged. Es un estado
        onLogin(true)
    }

    const handleChange = event => {
        console.log(event.target.value, event.target.name) //capturamos los datos del input
    
        if (event.target.name === 'username') {
            setCredentials({ ...credentials, username: event.target.value });
        }
        if (event.target.name === 'password') {
            setCredentials({ ...credentials, password: event.target.value})
        }
    };

    const buttonDisabled = !credentials.username || !credentials.password; //Habilita que aparezca el botón
    return <div>
        <h1>Log in to Twitter</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange}/>
            <input type="password" name="password" onChange={handleChange}/>   
            <Button type="submit" variant="primary" disabled={buttonDisabled}>
                Log in
            </Button>
        </form>
    </div>
}

export default LoginPage