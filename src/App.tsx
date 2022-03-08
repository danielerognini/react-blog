import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { data } from './data';

import Home from './Pages/Home/Home.component';
import Login from './Pages/Login/Login.component';
import NewPost from './Pages/NewPost/NewPost.component';
import EditPost from './Pages/EditPost/EditPost.component';


function App() {

  const [ currentUser, setCurrentUser ] = useState<number>();

  function getArticles() {
    var arr:Array<any> = [];
    data.articles.map(article => arr.push(article));
    return(arr);
  }

  function getUsers() {
    var arr:Array<any> = [];
    data.users.map(user => arr.push(user));
    return(arr);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> <Home user={currentUser} getArticles={getArticles} /> </Route>
        <Route exact path="/login"> <Login user={currentUser} getUsers={getUsers} setUser={setCurrentUser} /> </Route>
        <Route exact path="/new"> <NewPost /> </Route>
        <Route exact path="/edit/:number"> <EditPost /></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;