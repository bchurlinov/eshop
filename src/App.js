import React from 'react';
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUp from "./pages/authentication/sign-in-and-sign-up";

import { auth, createUserProfileDocument } from "./firebase/firebase";

import "./App.scss";

class App extends React.Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });

      } else {
        this.setState({
          currentUser: userAuth
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.state.currentUser);
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
