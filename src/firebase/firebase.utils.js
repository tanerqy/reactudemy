import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import SHOP_DATA from '../context/collection/shoppingdata'

const config = {
  apiKey: 'AIzaSyCQIAOUOtTdu6uRkaj73trlHs87NPaFmjg',
  authDomain: 'react-62af3.firebaseapp.com',
  databaseURL: 'https://react-62af3.firebaseio.com',
  projectId: 'react-62af3',
  storageBucket: 'react-62af3.appspot.com',
  messagingSenderId: '769988285884',
  appId: '1:769988285884:web:00a8fbde28971eedd787b9',
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

export const updateCollections = (setCollections) => {
  const collectionRef = firestore.collection('collections').get()
  let data = {}
  collectionRef
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data())
        // console.log(doc.id)
        data[doc.data().title.toLowerCase()] = doc.data()
      })
    })
    .catch((err) => {
      console.log(err)
    })
  setCollections(data)
}
