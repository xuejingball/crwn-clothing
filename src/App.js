import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.action';

class App extends React.Component {

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch> {/* render the first found path */}
          <Route exact path='/' component={HomePage} /> {/* without exact, renders every page with a match in it */}
          <Route path='/shop' component={ShopPage} /> {/* do not use exact here, renders things like /shot/hats */}
          <Route exact path='/signin' render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
                <SignInAndSignUpPage />)} 
          />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
