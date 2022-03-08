import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { data } from './data';

import Home from './Pages/Home/Home.component';
import Login from './Pages/Login/Login.component';
import NewPost from './Pages/NewPost/NewPost.component';
import EditPost from './Pages/EditPost/EditPost.component';


function App() {

  const [articlesList, setArticlesList] = useState<Array<any>>([]);

  function getData() {
    var arr:Array<any> = [];
    data.articles.map(article => arr.push(article));
    console.log('getData called')
    return(arr);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"> <Home articlesList={articlesList} getData={getData} /> </Route>
        <Route path="/login" component={Login} />
        <Route path="/new" component={NewPost} />
        <Route path="/edit" component={EditPost} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;