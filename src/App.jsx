import React from 'react'
import './App.css';
import HomepageComponent from './pages/homepage/homepage'
import ShopPage from './pages/shopPage/shopPage'
import CheckoutPage from './pages/checkoutPage/CheckoutPage'
import Header from './components/header/Header'
import SignInSignUp from './pages/sign-in-and-up-page/SignInSignUp';
import { Route, Switch, Redirect } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from './redux/user/userSelectors'
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/userActions'

function App() {

  const { currentUser } = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
  }))
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomepageComponent} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signIn' render={() => currentUser ? (<Redirect to='/' />) : (<SignInSignUp />)} />
      </Switch>
    </div>
  );
}

export default App;
