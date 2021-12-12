import React from 'react';


function Blog() {
    const onClcikMessage = () => {
        alert("This button does nothing.");
    };


    return (
        <div className="blog-container" id="blog">
            <h2>Find out more about how we work</h2>
            <button className="btn" onClick={onClcikMessage}>How we work</button>
        </div>            
    )
}

export default Blog;