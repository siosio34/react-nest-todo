import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../Home';
import AuthPage from '../Auth';
import TodoPage from '../Todo';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;


class App extends React.Component {
    render() {
        return (
            <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/todo" component={AuthPage} />
        <Route path="/todo" component={TodoPage} />
      </Switch>

    </AppWrapper>
            )
    }
}

export default App;