import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const signin = await auth.signInWithEmailAndPassword(email, password)

      console.log('tried logging in', signin)
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={(event) => {
            setEmail(event.target.value)
          }}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={(event) => {
            setPassword(event.target.value)
          }}
          required
        />
        <CustomButton onClick={handleSubmit}>Sign In</CustomButton>
        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
          Sign In with Google
        </CustomButton>
      </form>
    </div>
  )
}

/*class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      console.log('tried logging in')
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target

    //event.target.name and event.targt.value
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </form>
      </div>
    )
  }
}*/

export default SignIn
