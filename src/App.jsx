import React from 'react'
import { GlobalStyle } from './globalStyles'
import Header from './components/header/Header'
import Spinner from './components/spinner/Spinner'
import { Route, Switch, Redirect } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from './redux/user/userSelectors'
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/userActions'
import ErrorBoundry from './components/errorBoundry/ErrorBoundry'

const HomePage = React.lazy(() => import('./pages/homepage/homepage'))
const CheckoutPage = React.lazy(() => import('./pages/checkoutPage/CheckoutPage'))
const ShopPage = React.lazy(() => import('./pages/shopPage/shopPage'))
const SignInSignUp = React.lazy(() => import('./pages/sign-in-and-up-page/SignInSignUp'))


function App() {

  const { currentUser } = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
  }))
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <div >
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundry>
          <React.Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signIn' render={() => currentUser ? (<Redirect to='/' />) : (<SignInSignUp />)} />
          </React.Suspense>
        </ErrorBoundry>
      </Switch>
    </div>
  );
}

export default App;
