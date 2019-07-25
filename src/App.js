import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      building: '',
      data: '',
      token: '',
      user: {
        username: '',
        email: '',
        password: '',
        susername: '',
        semail: '',
        spassword: '',
        sconfirm: '',
        building_name: '',

      },
      redirect: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this);

  }



  componentDidMount = () => {
    this.checkAcessToken()


  }
  checkAcessToken = () => {
    const existingToken = sessionStorage.getItem('token');
    const accessToken = (window.location.search.split("=")[0] === "?api_key") ? window.location.search.split("=")[1] : null;
    if (!accessToken && !existingToken && window.location.pathname !== "/sign-in") {
      window.location.replace(`http://localhost:3000/sign-in`)
    }
    if (accessToken) {
      sessionStorage.setItem("token", accessToken);
      this.setState(
        {
          token: accessToken,
          redirect: true
        }
      )

    }

    if (existingToken) {
      this.setState(
        {
          token: existingToken,

        })

    }
  }

  handleChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
    event.preventDefault();
  }
  handleSubmit = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
    event.preventDefault();
    this.loginUser(this.state.user.username, this.state.user.password, this.statetoken)
  }
  handleSubmitRegister = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
    event.preventDefault();
    this.registerUser(this.state.user.susername, this.state.user.spassword, this.state.user.sconfirm, this.state.user.semail)
  }
  registerUser = (susername, spassword, sconfirm, semail, building_name) => {
    fetch('https://127.0.0.1:5000/user/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "sname": susername, 'spassword': spassword, 'sconfirm': sconfirm, 'semail': semail, 'building_name': building_name })
    }).then(res => res.json())
      .then(res => {if(res ==="success!"){
        alert('success sign-up! You will log in now')
        this.loginUser(susername, spassword)
       }        else{console.log(res)}})
    
  }
  loginUser = (username, password) => {
    alert('token login')
    fetch('https://127.0.0.1:5000/user/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      body: JSON.stringify({ "username": username, 'password': password })
    }).then(res => res.json())
      .then(res => {
        if (res.status === 'ok') {
          alert('Login!!!!!!!!!!!')
          return window.location.replace(`http://localhost:3000/sign-in?api_key=${res.token}`)
        } else return alert('Fail')
      })
  }
  getUserinfor = (token) => {
    fetch('https://127.0.0.1:5000/user/data', {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
    }).then(results => results.json())
      .then(data => this.setState({
        data: data.data,
        user: {
          username: data.data.name,
          email: data.data.email,
          password: data.data.password,
          profile: data.data.profiles
        }
      }))
      .catch(function (error) { console.log(error) });
  }
  logoutUser = (token) => {
    fetch('https://127.0.0.1:5000/logout', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify({ logout: 'logout' })
    }).then(res => res.json())
      .then(res => alert(res))
  }
  logout = (token) => {
    this.logoutUser(token)
    window.location.replace('http://localhost:3000/sign-in')
    sessionStorage.clear()

  }
  bookLot = (token, idx) => {
    fetch('https://127.0.0.1:5000/booking', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify({ booking: token, idx: idx })
    }).then(res => res.json())
      .then(this.setState({}, this.getUserinfor(token)))
  }
  checkIn = (token, idx) => {
    fetch(`https://127.0.0.1:5000/parking/checkin/${idx}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify({ booking: token, idx: idx })
    }).then(res => res.json())
      .then(this.setState({}, this.getUserinfor(token)))
  }
  checkOut = (token, park_id, trans_id) => {
    fetch(`https://127.0.0.1:5000/parking/${park_id}/checkout/${trans_id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify({ booking: token, park_id: park_id, trans_id: trans_id })
    }).then(res => res.json())
      .then(this.setState({}, this.getUserinfor(token)))
  }
  addMoreParkingLot = (token, building_id , price) => {
    alert('Success add...')
    fetch('https://127.0.0.1:5000/addparking', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify({ "building_id": building_id  , "price": price})
    }).then(res => res.json())
      .then(this.setState({}, this.getUserinfor(token)))
  }
  deleteParkingLot = (token, parking_id) => {
    fetch('https://127.0.0.1:5000/deleteparking', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify({ "parking_id": parking_id })
    }).then(res => res.json())
      .then(this.setState({}, this.getUserinfor(token)))
  }
  render() {
    return (
     <Router basename={process.env.REACT_APP_BASENAME || ""}>
        <div>
          {this.state.redirect && <Redirect to="/blog-overview" />}
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                {...this.state}
                render={() =>
                  <route.layout {...this.state} logout={this.logout}>
                    <route.component
                      handleSubmit={this.handleSubmit}
                      handleChange={this.handleChange}
                      getUserinfor={this.getUserinfor}
                      addMoreParkingLot={this.addMoreParkingLot}
                      {...this.state}
                      facebookLogin={this.facebookLogin}
                      bookLot={this.bookLot}
                      deleteParkingLot={this.deleteParkingLot}
                      checkAcessToken={this.checkAcessToken}
                      handleSubmitRegister={this.handleSubmitRegister}
                      getParkinginfor={this.getParkinginfor}
                      checkIn = {this.checkIn}
                      checkOut = {this.checkOut}
                    />

                  </route.layout>
                }
              />
            )
          })}
        </div>
      </Router>
    )
  }
}
export default App;