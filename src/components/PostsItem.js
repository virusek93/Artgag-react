import React from 'react';


const PostsItem = (props) => (      
    <div>
        <h3>{props.posts.title}</h3>
        <img src={props.posts.content} alt=""/>
    </div>
);

export default PostsItem;