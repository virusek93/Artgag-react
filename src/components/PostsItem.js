import React from 'react';

export default (props) => (
    <div>
        <h3>{props.posts.title}</h3>
        <img src={props.posts.content} alt=""/>
    </div>
);
