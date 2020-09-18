import React, { useState, useEffect, useContext } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CollectionPage from './pages/collection/collection.component'
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import CurrentUserContext from './context/current-user/current-user.context'
import CartProvider from './context/cartProvider/cart.provider'

function App() {
  const [currentUser, setCurrentUser] = useState({ currentUser: null })

  useEffect(() => {
    console.log(
      `%c ## Checking for User-Authentification ##`,
      'background: orange; color: black; display: block;'
    )
    let unsub
    //checks when mounting if someone is signed in and setCurrentUser to current signed in user
    unsub = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
        })
      }
      setCurrentUser({ currentUser: userAuth })
    })

    return () => {
      //unsubscribing
      console.log(
        `%c ## unsubscribing User-Listener ##`,
        'background: red; color: white; display: block;'
      )
      unsub()
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <CartProvider>
          <CurrentUserContext.Provider value={currentUser}>
            <Header />
          </CurrentUserContext.Provider>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route path="/collection/:collectionID" component={CollectionPage} />
            <Route exact path="/signin">
              {currentUser.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />}
            </Route>
          </Switch>
        </CartProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
