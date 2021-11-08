import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Security } from '@okta/okta-react';

import App from './App';
import * as serviceWorker from './serviceWorker';

const oktaConfig = {
  issuer: `https://dev-9211166.okta.com/oauth2/default`,
  redirect_uri: `${window.location.origin}/implicit/callback`,
  client_id: '0oa2d0j7c7VeFr0Sf5d7',
};

ReactDOM.render(
  <BrowserRouter>
    <Security {...oktaConfig}>
      <App />
    </Security>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) module.hot.accept();
