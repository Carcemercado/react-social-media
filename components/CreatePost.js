import React from "react";

function CreatePost({ handleAddPost }){
    const[content, setContent] = React.useState('');
    const[image, setImage] = React.useState(null);
    const imageInputRef = React.useRef();

    let handleSubmit = (event) =>{
        event.preventDefault();
        const post = { content, image };
        handleAddPost(post);
        setContent('');
        imageInputRef.current.value = '';
    }

    return <div>
            <h1>Create Post</h1>
            <form onSubmit = {handleSubmit} >
                <input
                    type = 'text'
                    placeholder = 'Add post content'
                    onChange = {event => setContent(event.target.value)}
                    value = {content}
                />
                <input
                    type = 'file'
                    onChange = {event => setImage(event.target.files[0])}
                    ref = {imageInputRef}
                />
                <button type = 'submit' >Submit Post</button>
            </form>
        </div>
}

export default CreatePost;