import React from "react";
import { UserContext } from '../App';


function Post({ image, content, user}){
    const currentUser = React.useContext(UserContext);
    const isCurrentUser = currentUser === user;


    return (
        
    <>
        {image && (
            <img 
                style = {{ height: 100, width: 200, objectFit: 'cover'}}
                src = {URL.createObjectURL(image)}
                alt = 'Post cover'
            />
        )}
        <p>{content}</p>
        <p>{currentUser}</p>
        <p>{user}</p>
        <div style={{color: isCurrentUser === user && 'green'}}><p>{user}</p></div>
    </>
    );
}

export default Post;