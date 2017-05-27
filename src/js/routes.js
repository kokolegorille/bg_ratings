import React from 'react'
import { Route, Switch } from 'react-router-dom';

import App from './components/app'
import HomePage from './components/home_page'
import NoMatchPage from './components/no_match_page'

import Signin from './components/sign/sign_in';
import Signout from './components/sign/sign_out';

import Authentication from './components/hoc/authentication';

import AboutPage from './components/about_page';
import UsersPage from './components/users_page';
import TournamentsPage from './components/tournaments_page';
import RankingPage from './components/ranking_page';

// http://stackoverflow.com/questions/42095600/nested-routes-in-v4

export default (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      
      <Route path="/sign_in" component={Signin} />
      <Route path="/sign_out" component={Signout} />
      
      <Route path="/users" component={Authentication(UsersPage)} />
      <Route path="/tournaments" component={Authentication(TournamentsPage)} />
      <Route path="/ranking" component={Authentication(RankingPage)} />
  
      <Route path="/about" component={AboutPage} />
      <Route component={NoMatchPage} />
    </Switch>
  </App>
);