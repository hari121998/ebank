import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {HomeCon, Button, NavCon, HeadingCon} from './styledComponents'

const Home = props => {
  const {history} = props

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  return (
    <HomeCon>
      <NavCon>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <Button onClick={onClickLogout} type="button">
          Logout
        </Button>
      </NavCon>
      <HeadingCon>
        <h1>Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png "
          alt="digital card"
        />
      </HeadingCon>
    </HomeCon>
  )
}

export default Home
