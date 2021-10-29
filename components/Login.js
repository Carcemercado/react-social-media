import React from "react";

function Login({ setUser }){
   const[username, setUsername] = React.useState('');

    // On form submit setUser to username
   let handleSubmit = (event) =>{
       event.preventDefault();
       setUser(username);
   }


    return (
    <div>
        <h2>Login</h2>
        {/* Call function that setUser to username */}
        <form onSubmit = {handleSubmit}>
            <input 
                // SetUsername to form target value
                onChange = {event => setUsername(event.target.value)}
                placeholder = "input username"
            />
            <button type = "submit">Submit</button>
        </form>
    </div>
    );
}

export default Login;
