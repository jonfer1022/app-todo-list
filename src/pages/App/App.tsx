import React, { Fragment } from "react";
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import generateStore, { history } from "../../redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import Layout from "../Layout/Layout";
import Register from "../Register/Register";
import MyProfile from "../MyProfile/MyProfile";
import Backlog from "../Backlog/Backlog";

const App = () => {

  const { store, persistor } = generateStore();

  return (
    <Fragment>
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <header>
              <Navbar/>
            </header>
            <body>
              <Layout>
                <Switch>
                  <Route exact path ="/login" children={<Login/>} />
                  <Route exact path ="/register" children={<Register/>} />
                  <Route exact path ="/my-profile" children={<MyProfile/>} />
                  <Route exact path ="/backlog" children={<Backlog/>} />
                  <Redirect from="/" to="/login" />
                </Switch>
              </Layout>
            </body>
          </Router>
        </PersistGate>
      </Provider>
    </Fragment>
  )
}

export default App;