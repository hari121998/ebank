import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  ImageContainer,
  LoginImage,
  LoginHeading,
  FormContainer,
  Label,
  Input,
  ErrorMsg,
  LoginButton,
} from './styledComponents'

class Login extends Component {
  state = {userId: '', pin: '', errorMsg: ''}

  getLoginCredentials = async () => {
    const {userId, pin} = this.state
    const userAndPin = {
      user_id: userId,
      pin,
    }
    const userDetails = JSON.stringify(userAndPin)
    const loginUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: userDetails,
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 1})
      const {history} = this.props
      history.replace('/')
      return this.setState({userId: '', pin: '', errorMsg: ''})
    }
    return this.setState({errorMsg: data.error_msg})
  }

  onSubmitLoginPage = event => {
    event.preventDefault()
    this.getLoginCredentials()
  }

  onChangeUserId = event => this.setState({userId: event.target.value})

  onChangePin = event => this.setState({pin: event.target.value})

  render() {
    const {userId, pin, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginContainer>
        <ImageContainer>
          <LoginImage
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <FormContainer onSubmit={this.onSubmitLoginPage}>
            <LoginHeading>Welcome Back!</LoginHeading>
            <Label htmlFor="userId">User ID</Label>
            <Input
              id="userId"
              type="text"
              placeholder="Enter User ID"
              value={userId}
              onChange={this.onChangeUserId}
            />
            <Label htmlFor="pin">PIN</Label>
            <Input
              id="pin"
              type="password"
              placeholder="Enter PIN"
              value={pin}
              onChange={this.onChangePin}
            />
            <LoginButton type="submit">Login</LoginButton>
            {errorMsg !== '' && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </FormContainer>
        </ImageContainer>
      </LoginContainer>
    )
  }
}
export default Login
