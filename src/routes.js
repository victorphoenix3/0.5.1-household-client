/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  Router,
  Route as DefaultRoute,
  Switch,
  Redirect,
} from "react-router-dom";

import { createBrowserHistory } from "history";
import HouseList from "./HouseList";

export const history = createBrowserHistory();

// would add actual logic for checking if a user is authenticated soon

const isAuthenticated = () => true;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <DefaultRoute
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      )
    }
  />
);

const Route = ({ component: Component, ensureNonAuth, ...rest }) => (
  <DefaultRoute
    {...rest}
    render={(props) =>
      ensureNonAuth && isAuthenticated() ? (
        <Redirect
          to={{
            pathname: "/profile",
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);
export default () => (
  <Router history={history}>
    <Switch>
      {/* you just import your component and add it here to be rendered */}
      <Route exact path="/" component={() => <h2>Home page!!</h2>} />
      <Route path="/login" component={() => <h2>login</h2>} />
      <PrivateRoute exact path="/houses" component={HouseList} />
      <PrivateRoute
        path="/houses/:id"
        component={() => <h2>House Detail Page</h2>}
      />
      <PrivateRoute
        path="/profile"
        component={() => (
          <h3>You should only see this page if you're authenticated</h3>
        )}
      />
      <Route component={() => <h3>404!</h3>} />
    </Switch>
  </Router>
);
