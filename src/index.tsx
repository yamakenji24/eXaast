import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import { Header } from './ui/Header';
import TopPageContainer from './ui/toppage/TopPageContainer';
import {TestContainer} from './ui/testpage/TestContainer';
import { rootStore, rrfProps } from './stores/root-stores';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Provider store={rootStore}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Header />
          <Switch>
            <Route exact path="/" component={TopPageContainer} />
            <Route path="/test" component={TestContainer} />
          </Switch>
        </ReactReduxFirebaseProvider>
      </Provider>
    </Router>,
    document.getElementById('root')
  );
})

