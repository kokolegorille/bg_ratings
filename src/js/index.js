import 'babel-polyfill';

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