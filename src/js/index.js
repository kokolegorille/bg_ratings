import 'babel-polyfill';
import 'semantic-ui-css/semantic.min.css';

import '../css/app.css';

import React from 'react';
import { render } from 'react-dom';

import Root from './components/root';

main();

function main() {
  const app = document.getElementById('app');
  render(
    <Root/>, 
    app
  );
}