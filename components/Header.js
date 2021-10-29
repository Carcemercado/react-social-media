import React from "react";

// Header with user props
function Header({ user, setUser }){
    return (
    <div>
        Welcome, {user}!
        <button onClick = {()=> setUser('')}>Log out</button>
    </div>
    );
}

export default Header;