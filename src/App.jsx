import React from 'react'
import './App.css';
import HomepageComponent from './pages/homepage/homepage'
import ShopPage from './pages/shopPage/shopPage'
import CheckoutPage from './pages/checkoutPage/CheckoutPage'
import Header from './components/header/Header'
import SignInSignUp from './pages/sign-in-and-up-page/SignInSignUp';
import { Route, Switch, Redirect } from 'react-router-dom'

import { auth, createUserProfileDocument, } from './firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelectors'
import { createStructuredSelector } from 'reselect';

function App() {

  const dispatch = useDispatch()
  const { currentUser } = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
  }))

  React.useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {

          dispatch(setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }))

        })

      } else {
        dispatch(setCurrentUser(userAuth))
      }
    })
    return () => {
      unsubscribe()
    }
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
