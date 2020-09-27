import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import LoginPage from '../pages/login/components/LoginPage';
import ChatPage from '../pages/chat/components/ChatPage';

import routes from './routes'
import useAppStateSelector from "../hooks/useAppStateSelector";
import PageContainer from "../components/PageContainer";

const AppRouter = () => {
  const {isLoggedIn} = useAppStateSelector(({login}) => login);

  return (
    <PageContainer>
      <Router>
        <Switch>
          <Route exact path={routes.login}>
            {isLoggedIn ? <Redirect to={routes.chat}/> : <LoginPage/>}
          </Route>
          <Route exact path={routes.chat}>
            {!isLoggedIn ? <Redirect to={routes.login}/> : <ChatPage/>}
          </Route>
        </Switch>
      </Router>
    </PageContainer>
  )
};

export default AppRouter;