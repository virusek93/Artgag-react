import React from 'react';


const SinglePost = (props) => {   
    var post = props.data.posts.find( p => p.post_id == props.routeProps.match.params.id)
    if(post){
    return(
        <div>
            <h3>{post.title}</h3>
            <img src={post.content} alt={post.title} />
        </div>
    )}
    else {
        return (
        <h1>This post dosent exist!</h1>
        );
    }
};

export default SinglePost;