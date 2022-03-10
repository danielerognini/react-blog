import React, {useEffect} from 'react';
import {Switch, Route, useLocation, useHistory, useRouteMatch} from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NewPost from './pages/newPost/NewPost';
import ViewPost from './pages/viewPost/ViewPost';
import useAuth from "./pages/common/hooks/useAuth";
import EditPost from "./pages/editPost/editPost";

function App(): JSX.Element {
    const { user } = useAuth()
    const { pathname } = useLocation()
    const history = useHistory()

    useEffect(() => {
        // Qui non si aggiorna automaticamente ma lo farà quando ci sarà Redux
        // In breve, se sei loggato e sei su /login redirect a / altrimenti redirect a login se non sei loggato e sei su una pagina diversa da /login
        if(!!user && pathname === '/login') {
            history.push('/')
        }
        else if(!user && pathname !== '/login') {
            history.push('/login')
        }
    }, [history, user, pathname])

    return (
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:post" component={NewPost} />
          <Route exact path="/view/:id" component={ViewPost}/>
          <Route exact path="/edit/:id" component={EditPost}/>
          <Route exact path="/login" component={Login} />
      </Switch>
  )
}

export default App;