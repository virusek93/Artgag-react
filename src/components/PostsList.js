import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostsItem from './PostsItem';


class PostsList extends Component {

  renderPostsList = () => {
    var postsList = this.props.data.posts.map((post) => {
      return (
        <div key={post.post_id}>
          <Link to={`${this.props.routeProps.match.url}posts/${post.post_id}`}>
            <PostsItem posts={post}/>
          </Link>
        </div>
      )
    })
    return postsList;
  }

  render() {
    return (
      <div>
        {this.renderPostsList()}
      </div>
    )
  }
}

export default PostsList;