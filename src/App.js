import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    //checks when mounting if someone is signed in
    auth.onAuthStateChanged((user) => {
      setUser(user)
      console.log('USER is', user)
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        {user ? 'logged in' : 'not logged in'}
        <Header user={user} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
