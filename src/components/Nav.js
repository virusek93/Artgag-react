import React from 'react';
import {
    Route,
    Link,
    Switch,
    Redirect,
  } from 'react-router-dom';
import PostsList from './PostsList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import SinglePost from './SinglePost';
import UploadForm from './UploadForm';

const Nav = (props) => {
    const PrivateRoute = ({ component: Component, authed, ...rest}) => {
        return (
            <Route
                {...rest}
                render={(props) => authed === true ?
                <Component {...props} /> :
                <Redirect to={{pathname: '/login', state: {from: props.location }}} />
                } 
            />
        )
    }
    return (
          <div>
                <ul>
                    <li><Link to="/">Hot</Link></li>
                    <li><Link to="/upload">Upload post</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>    
                </ul>
            <Switch>
                <Route exact path="/" render={ (routeProps) => <PostsList routeProps={routeProps} {...props}/>} />
                <Route path="/login" render={ (routeProps) => <LoginForm {...routeProps} data={props} />}/>
                <Route path="/signup" component={SignupForm} />
                <Route path="/posts/:id" render={(routeProps) => <SinglePost routeProps={routeProps} {...props} />}/>
                <PrivateRoute path="/upload" authed={props.data.isLogged} component={UploadForm} />
            </Switch>
          </div>
        )
}
export default Nav;