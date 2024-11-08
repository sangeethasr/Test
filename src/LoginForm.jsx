import React, {useState} from "react"
const LoginForm = () =>{

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);


    const onSubmitLoginForm = () =>{
        
        console.log("username: ",username);
        console.log("password: ",password)
        if(username !== "admin" || password !== "admin" ){
            setError(true)
        }else{
            setError(false)
        }
    }

    return(<>
        <form onSubmit={onSubmitLoginForm}>
            <label htmlFor="username">username</label>
            <input type="text" name="username" value={username} onChange={(e)=> setUsername(e.target.value)} />
            <label htmlFor="password">password</label>
            <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        {error && <p>Incorrect username or password</p>}
    </>)
}
export default LoginForm;