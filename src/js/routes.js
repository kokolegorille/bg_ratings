import React from 'react'
import { Route, Switch } from 'react-router-dom';

import App from './components/app'
import HomePage from './components/home_page'
import NoMatchPage from './components/no_match_page'

import AboutPage from './components/about_page';

// import Signin from './components/session/sign_in';
// import Signout from './components/session/sign_out';
// import Signup from './components/registration/sign_up';
//
// import Authentication from './components/hoc/authentication';
// import WithChannel from './components/hoc/with_channel';
//
// import LobbyPage from './components/lobby_page';
// import GamePage from './components/game_page';
// import ArchivesPage from './components/archives_page';

// http://stackoverflow.com/questions/42095600/nested-routes-in-v4

// export default (
//   <App>
//     <Switch>
//       <Route exact path="/" component={HomePage} />
//
//       <Route path="/sign_in" component={Signin} />
//       <Route path="/sign_up" component={Signup} />
//       <Route path="/sign_out" component={Signout} />
//
//       <Route path="/lobby"
//         component={Authentication(
//           WithChannel({topic: "lobby"})(LobbyPage)
//         )} />
//       <Route path="/games/:id"
//         component={Authentication(
//           WithChannel({topic: "game"})(GamePage)
//         )} />
//       <Route path="/archives" component={Authentication(ArchivesPage)} />
//
//       <Route component={NoMatchPage} />
//     </Switch>
//   </App>
// );

export default (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NoMatchPage} />
    </Switch>
  </App>
);