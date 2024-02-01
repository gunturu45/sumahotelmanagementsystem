
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
 85 changes: 85 additions & 0 deletions85  
README.md
@@ -0,0 +1,85 @@
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


(get) hotels>         https://developerfunnel.herokuapp.com/hotels
(get) hotelwrtcity >  https://developerfunnel.herokuapp.com/hotels?city=6
(get) hoteldetails >  https://developerfunnel.herokuapp.com/hotelsdetails/1
(get) onbasisoftrip > https://developerfunnel.herokuapp.com/hotellist/1

(get) roomfilter >    https://developerfunnel.herokuapp.com/hotellist/4?roomtype=1

(get) costfilter >    https://developerfunnel.herokuapp.com/hotellist/1?hcost=1000&lcost=500
(get) cityname >      https://developerfunnel.herokuapp.com/location
(get) rooms >         https://developerfunnel.herokuapp.com/rooms
(get) triptype>       https://developerfunnel.herokuapp.com/booking
(get) bookingdetails> https://developerfunnel.herokuapp.com/allBooking
(post)placebooking >  https://developerfunnel.herokuapp.com/placeBook
 16 changes: 16 additions & 0 deletions16  
Register.json
@@ -0,0 +1,16 @@
{
  "Users": [
    {
      "id": 2792,
      "name": "Rupesh Macherla",
      "phone": "+449441078923",
      "email": "rupesh.talend@gmail.com",
      "password": "123456",
      "cpassword": "123456",
      "role": "",
      "nameError": "",
      "emailError": "",
      "cpwdError": ""
    }
  ]
}
 132 changes: 132 additions & 0 deletions132  
db.json
@@ -0,0 +1,132 @@
{
  "orders": [
    {
      "id": 3215,
      "hotel_name": "Hometel Chandigarh",
      "name": "charan",
      "phone": "1234567890",
      "email": "tejamacharla1997@gmail.com",
      "cost": "2419"
    },
    {
      "id": 6587,
      "hotel_name": "Rodas - An Ecotel Hotel",
      "name": "rupesh",
      "phone": "7894561230",
      "email": "rupesh.talend@gmail.com",
      "cost": "4254"
    },
    {
      "id": 3157,
      "hotel_name": "Amanora The Fern Hotels",
      "name": "Teja",
      "phone": "456789123",
      "email": "tejamacharla1997@gmail.com",
      "cost": "3455"
    },
    {
      "id": 3445,
      "hotel_name": "The Orchid Hotel",
      "name": "gayatri",
      "phone": "123456",
      "email": "tejamacharla1997@gmail.com",
      "cost": "5170"
    },
    {
      "id": 1384,
      "hotel_name": "The Orchid Hotel",
      "name": "Macharla Teja",
      "phone": "09985030991",
      "email": "iamrupeshtechie@gmail.com",
      "cost": "5170"
    },
    {
      "id": 7495,
      "hotel_name": "Snow Bliss",
      "name": "aaaaa",
      "email": "aaaa@gmail.com",
      "phone": "123456",
      "cost": "2704"
    },
    {
      "id": 5376,
      "hotel_name": "Snow Bliss",
      "name": "charan",
      "email": "charan@gmail.com",
      "phone": "789456",
      "cost": "2704"
    },
    {
      "id": 4449,
      "hotel_name": "DoubleTree by Hilton",
      "name": "",
      "email": "",
      "phone": "",
      "cost": "2419"
    },
    {
      "id": 9643,
      "hotel_name": "The Park Baga River Goa",
      "name": "",
      "email": "",
      "phone": "",
      "cost": "4924"
    },
    {
      "id": 5682,
      "hotel_name": "Hometel Chandigarh",
      "name": "",
      "email": "",
      "phone": "",
      "cost": "2419"
    },
    {
      "id": 1167,
      "hotel_name": "Westwood Residence",
      "name": "navi",
      "email": "navi@gmail.com",
      "phone": "123456",
      "cost": "3455"
    },
    {
      "id": 1632,
      "hotel_name": "Snow Bliss",
      "name": "Macharla Teja",
      "email": "iamrupeshtechie@gmail.com",
      "phone": "09985030991",
      "cost": "2704"
    },
    {
      "id": 3387,
      "hotel_name": "ITC Maratha",
      "name": "Macharla Teja",
      "email": "tejamacharla1997@gmail.com",
      "phone": "09985030991",
      "cost": "8399"
    },
    {
      "id": 6357,
      "hotel_name": "The Leela Goa",
      "name": "ramana",
      "email": "ramana@gmail.com",
      "phone": "123456",
      "cost": "6599"
    },
    {
      "id": 9178,
      "hotel_name": "Hotel Sayaji",
      "name": "ramana",
      "email": "ramana@gmail.com",
      "phone": "1234567894",
      "cost": "3479"
    },
    {
      "id": 1643,
      "hotel_name": "ITC Maratha",
      "name": "Macharla Teja",
      "email": "tejamacharla1997@gmail.com",
      "phone": "09985030991",
      "cost": "8399"
    }
  ]
}
 16,335 changes: 16,335 additions & 0 deletions16,335  
package-lock.json
Large diffs are not rendered by default.

 41 changes: 41 additions & 0 deletions41  
package.json
@@ -0,0 +1,41 @@
{
  "name": "fifthapp",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.21.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react-tabs": "^3.2.2",
    "web-vitals": "^1.1.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
 Binary file addedBIN +3.78 KB 
public/favicon.ico
Binary file not shown.
 Binary file addedBIN +760 KB 
public/images/loader.gif

 12 changes: 12 additions & 0 deletions12  
public/index.html
@@ -0,0 +1,12 @@
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  </head>
  <body class="container">
    <div id="root"></div>
  </body>
</html>
 Binary file addedBIN +5.22 KB 
public/logo192.png

 Binary file addedBIN +9.44 KB 
public/logo512.png

 13 changes: 13 additions & 0 deletions13  
src/Footer.js
@@ -0,0 +1,13 @@
import React from 'react'
const Footer=()=>{
    return(
        <div>
            <hr/>
            <center><h2>&copy;Hotel Booking Management System </h2></center>


        </div>

    )
}
export default Footer;
 63 changes: 63 additions & 0 deletions63  
src/Header.js
@@ -0,0 +1,63 @@
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class Header extends Component{
  constructor(){
    super()
    this.state={
      username:''
    }
  }

  conditionalHeader = () => {
   if(sessionStorage.getItem('username')!==null){
    return(
      <li>
          <a>
          Hi {sessionStorage.getItem('username')}
          </a>
      </li>
  )
    }else{
      sessionStorage.removeItem('username')
    }
}
render(){
  return(
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        {/* <img class="navbar-brand" src="https://tse2.mm.bing.net/th?id=OIP.dinwxvjJN55OtoM827c2BwHaIg&pid=Api&P=0&w=300&h=300" style={{height:70,width:70}}/> */}
      </div>
      <ul class="nav navbar-nav">
        <li><Link to="/">Home</Link></li>

      </ul>
      <ul class="nav navbar-nav navbar-right">
      {this.conditionalHeader()} 
        {/* <li><a href="#">Link</a></li> */}
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Menu <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><Link to="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
            <li><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
            <li><Link to="/profile"><span class="glyphicon glyphicon-user"></span> Profile</Link></li>
            {/* <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li> */}
          </ul>
        </li>
      </ul>
      {/* <ul class="nav navbar-nav navbar-right">
      <li><Link to="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
      <li><Link to="/profile"><span class="glyphicon glyphicon-log-in"></span> Profile</Link></li> 
           
  
      </ul> */}
    </div>
  </nav>
)

}

}
export default Header;
 34 changes: 34 additions & 0 deletions34  
src/Routing.js
@@ -0,0 +1,34 @@
import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Home from './component/Home/Home'
import Header from './Header'
import Footer from './Footer'
import ListingApi from './component/Listing/ListingApi'
import HotelDetails from './component/Detail/HotelDetails'
import PlaceBooking from './component/Booking/PlaceBooking'
import BookingApi from './component/Booking/BookingApi'
import Register from './component/Login/Register'
import Login from './component/Login/Login'
import Profile from './component/Login/Profile'
import UserBookingDetails from './component/Booking/UserBookingDetails'
import UserApi from './component/Login/UserApi'

const Routing=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/listing/:id" component={ListingApi}/>
        <Route path="/details/:id" component={HotelDetails}/>
        <Route path="/booking/:hotel_name" component={PlaceBooking}/>
        <Route path="/viewBooking" component={BookingApi}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/userBookingDetails" component={UserBookingDetails}/>
        <Route path="/userinfo" component={UserApi}/>
        <Footer/>
        </BrowserRouter>
    )
}
export default Routing;
 28 changes: 28 additions & 0 deletions28  
src/component/Booking/BookingApi.js
@@ -0,0 +1,28 @@
import React,{Component} from 'react'
import axios from 'axios'
import ViewBooking from './ViewBooking'
const viewUrl="http://localhost:1700/orders"

class BookingApi extends Component{
    constructor(){
        super()
        this.state={
            view:''
        }
    }
    render(){
        if(sessionStorage.getItem('ltk')!==null && sessionStorage.getItem('rtk')!=='Admin'){
            this.props.history.push('/profile')

        }
        return(
            <ViewBooking viewdata={this.state.view}/>
        )
    }
    componentDidMount(){
        axios.get(viewUrl)
        .then((res)=>{this.setState({view:res.data})})

    }
}
export default BookingApi;
 79 changes: 79 additions & 0 deletions79  
src/component/Booking/PlaceBooking.js
@@ -0,0 +1,79 @@
import React,{Component} from 'react'
const PlaceUrl=" http://localhost:1700/orders"

class PlaceBooking extends Component{
    constructor(props){
        super(props)
        this.state={
            id:Math.floor(Math.random()*10000),
            hotel_name:this.props.match.params.hotel_name,
            name:'',
            email:'',
            phone:'',
            cost:sessionStorage.getItem('cost')


        }
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit=()=>{
        console.log(this.state)
        sessionStorage.setItem('bid',this.state.id)
        sessionStorage.setItem('name',this.state.name)
        sessionStorage.setItem('hotelname',this.state.hotel_name)

        fetch(PlaceUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                "Content-type":'application/json'

            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/userBookingDetails'))
    }
    render(){
        if(sessionStorage.getItem('ltk')==null){
            this.props.history.push('/login')
        }
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">Booking Form</div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label> Order ID</label>
                            <input name='id' className="form-control" value={this.state.id} readOnly/>
                        </div>
                        <div className="form-group">
                            <label>Hotel Name</label>
                            <input name='hotel_name' className="form-control" value={this.state.hotel_name} readOnly/>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input name='name' className="form-control" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input name='email' className="form-control" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input name='phone' className="form-control" value={this.state.phone} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Cost</label>
                            <input name='cost' className="form-control" value={this.state.cost} readOnly/>
                        </div>
                        <btn className="btn btn-success" onClick={this.handleSubmit}>Submit</btn>
                    </div>

                </div>
            </div>
        )
    }
}
export default PlaceBooking
 35 changes: 35 additions & 0 deletions35  
src/component/Booking/UserBookingDetails.js
@@ -0,0 +1,35 @@
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class UserBookingDetails extends Component{
    render(){
        if(sessionStorage.getItem('ltk')==null){
            this.props.history.push('/login')
        }
        return(
            <div className="panel panel-success">
                <div className="panel-heading">
                    Booking Details
                </div>
                <div className="panel-body">
                <div class="jumbotron">
                <div class="alert alert-success" role="alert">
               <p className="alert-link"> Well done! You Successfully Booked Your Hotel.
               </p>
               </div>
               <div className="alert alert-info" role="alert">
               <p className="alert-link"><u>Your Booking Details:</u><br/>ID: {sessionStorage.getItem('bid')}<br/>Name: {sessionStorage.getItem('name')}<br/>Hotel Name: {sessionStorage.getItem('hotelname')}<br/>Cost: {sessionStorage.getItem('cost')}
               </p>
               <Link className="btn btn-danger" to="/">OK</Link>

                </div>


            </div>
                </div>

            </div>
        )
    }

}
export default UserBookingDetails
 45 changes: 45 additions & 0 deletions45  
src/component/Booking/ViewBooking.js
@@ -0,0 +1,45 @@
import React from 'react'

const ViewBooking=(props)=>{

    const renderView=({viewdata})=>{
        if(viewdata){
            return viewdata.map((item)=>{
                return(
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.hotel_name}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>Rs.{item.cost}</td>

                </tr>

                )
            })
        }

    }
    return(
        <div className="container">
            <center><h3>Booking List</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Hotel</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {renderView(props)}
                </tbody>
            </table>
        </div>
    )
}
export default ViewBooking
 72 changes: 72 additions & 0 deletions72  
src/component/Detail/HotelDetails.js
@@ -0,0 +1,72 @@
import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const detailUrl=" https://developerfunnel.herokuapp.com/hotelsdetails"

class HotelDetails extends Component{
    constructor(){
        super()
        this.state={
            details:''
        }
    }
    render(){
        if(sessionStorage.getItem('ltk')==null){
            this.props.history.push('/login')
        }
        let {details}=this.state
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{this.state.details.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className='row'>
                            <div className="col-md-12">
                                <img className="img-responsive" src={details.thumb} style={{height:400,width:1500}}/>
                            </div>
                            <div className="col-md-6">
                                <h3>{details.name}</h3>
                                <h3>{details.locality}</h3>
                                <h3>{details.address}</h3>
                                <h4>{details.cost}</h4>
                            </div>
                        </div>
                        <hr/>
                        <Tabs>
                                <TabList>
                                <Tab>Details</Tab>
                                <Tab>Contact</Tab>
                                </TabList>

                                <TabPanel>
                                <h2>{details.name}</h2>
                                <h5>{details.name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a </h5>
                                </TabPanel>
                                <TabPanel>
                                <h2>{details.name}</h2>
                                <h4>Phone no: 123456789</h4>
                                <p>{details.address}</p>
                                </TabPanel>
                            </Tabs>

                        <Link to="/" className="btn btn-danger">Back</Link> &nbsp;
                        <Link to={`/booking/${details.name}`} className="btn btn-success">Proceed</Link>
                    </div>
                </div>
            </div>

        )
    }
    async componentDidMount(){
      let  tripId=this.props.match.params.id
        let response=await axios.get(`${detailUrl}/${tripId}`)
        sessionStorage.setItem('cost',response.data[0].cost)
        this.setState({details:response.data[0]})

    }
}
export default HotelDetails
 44 changes: 44 additions & 0 deletions44  
src/component/Filter/costFilter.js
@@ -0,0 +1,44 @@
import React, { Component } from 'react'
import axios from 'axios'

const url='https://developerfunnel.herokuapp.com/hotellist'
class CostFilter extends Component{
    filterCost=(event)=>{
        let cost=(event.target.value).split('-')
       let lcost=cost[0]
       let hcost=cost[1]
        let tripid=sessionStorage.getItem('tripid')
        let CostUrl
        if(cost==""){
            CostUrl=`${url}/${tripid}`
        }else{
            CostUrl=`${url}/${tripid}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(CostUrl).then((response)=>{this.props.costPerType(response.data)})
    }
    render(){
        return(
            <React.Fragment>
                <center>Cost Type</center>
                <div onChange={this.filterCost}>
                    <label className="radio">
                    <input type="radio" name="room" value=''/>All
                    </label>
                    <label className="radio">
                    <input type="radio" name="room" value='1000-3000'/>1000-3000
                    </label>
                    <label className="radio">
                    <input type="radio" name="room" value='3001-6000'/>3001-6000
                    </label>
                    <label className="radio">
                    <input type="radio" name="room" value='6001-9000'/>6001-9000
                    </label>
                    <label className="radio">
                    <input type="radio" name="room" value='9001-12000'/>9001-12000
                    </label>
                </div>
            </React.Fragment>
        )
    }
}
export default CostFilter
 42 changes: 42 additions & 0 deletions42  
src/component/Filter/roomFilter.js
@@ -0,0 +1,42 @@
import React, { Component } from 'react'
import axios from 'axios'

const url='https://developerfunnel.herokuapp.com/hotellist'
class RoomFilter extends Component{
    filterRoom=(event)=>{
        let roomid=event.target.value
        let tripid=sessionStorage.getItem('tripid')
        let roomUrl
        if(roomid==""){
            roomUrl=`${url}/${tripid}`
        }else{
            roomUrl=`${url}/${tripid}?roomtype=${roomid}`
        }
        axios.get(roomUrl).then((response)=>{this.props.roomPerType(response.data)})
    }
    render(){
        return(
            <React.Fragment>
                <center>Room Type</center>
                <div onChange={this.filterRoom}>
                    <label className="radio">
                    <input type="radio" name="room" value=''/>All
                    </label>
                    <label className="radio">
                    <input type="radio" name="room" value='1'/>Deluxe Room
                    </label>
                    <label className="radio">
                    <input type="radio" name="room" value='2'/>Premium Rooms
                    </label>
                    <label className="radio">
                    <input type="radio" name="room" value='3'/>Travel
                    </label>
                    <label className="radio">
                    <input type="radio" name="room" value='4'/>Semi Deluxe Room
                    </label>
                </div>
            </React.Fragment>
        )
    }
}
export default RoomFilter
 13 changes: 13 additions & 0 deletions13  
src/component/Home/Home.js
@@ -0,0 +1,13 @@
import React from 'react'
import Search from './Search'
import QuickSearch  from './QuickSearch'

const Home=()=>{
    return(
        <div>
        <Search/>
        <QuickSearch/>
        </div>
    )
}
export default Home
 35 changes: 35 additions & 0 deletions35  
src/component/Home/QuickDisplay.js
@@ -0,0 +1,35 @@
import React from 'react'
import {Link} from 'react-router-dom'
import'./QuickSearch.css'
const QuickDisplay=(props)=>{
   // console.log(props)
const renderTrip=({tripdata})=>{
    if(tripdata){
        return tripdata.map((item)=>{
            return(
                <Link to={`/listing/${item.trip}`}>
                <div className="tileContainer">
                    <div className="tileComponent1"><img src={item.image}/></div>
                    <div className="tileComponent2">
                        <div className="componentHeading">{item.name}</div>
                        <div className="componentSubHeading">Start Your {item.name} Trip With Us</div>
                    </div>
                </div>
                </Link>
            )
        })
    }

}

    return(
        <div className="quickSearchContainer">
            <p className="quickSearchHeading">QuickSearch</p>
            <p className="quickSearchSubHeading">Discover Trip by Type</p>
            <br/>
            {renderTrip(props)}
        </div>
    )

}
export default QuickDisplay
 65 changes: 65 additions & 0 deletions65  
src/component/Home/QuickSearch.css
@@ -0,0 +1,65 @@
.quickSearchContainer{
    margin-left:115px;
    margin-top:50px
}

.quickSearchHeading{
    text-align: left;
    color: #192f60;
    font-size:30px;
    line-height: 1.5;
    font-weight: bold;
    font-family:Georgia, 'Times New Roman', Times, serif;
}

.quickSearchSubHeading{
    text-align: left;
    color: gray;
    line-height: .01;
    letter-spacing: normal;
    font-size:18px;
    font-weight: normal;
    font-family:Georgia, 'Times New Roman', Times, serif;
}


.tileContainer{
    box-shadow: 15px 15px 10px black;
    margin-right: 30px;
    margin-bottom: 30px;
    width:400px;
    height: 150px;
    background-color: white;
    display: inline-block;

}

.tileComponent1{
    width:50%;
    float: left;
}

.tileComponent1>img{
    height:150px;
    width:160px
}
.tileComponent2{
    width:50%;
    float: left;
    margin-top: 20px;
}


.componentHeading{
    text-align: left;
    color:#192f60;
    font-size:18px;
    font-weight: bold;

}

.componentSubHeading{
    text-align: left;
    color:gray;
    font-size:14px
}
 22 changes: 22 additions & 0 deletions22  
src/component/Home/QuickSearch.js
@@ -0,0 +1,22 @@
import React, { Component } from 'react'
import QuickDisplay from './QuickDisplay'
const tripUrl='https://developerfunnel.herokuapp.com/booking'
class QuickSearch extends Component{
    constructor(){
        super()
        this.state={
            triptype:''
        }
    }
    render(){
        return(
            <QuickDisplay tripdata={this.state.triptype}/>
        )
    }
    componentDidMount(){
        fetch(tripUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{this.setState({triptype:data})})
    }
}
export default QuickSearch
 54 changes: 54 additions & 0 deletions54  
src/component/Home/Search.css
@@ -0,0 +1,54 @@
.imageContainer{
    background: url('https://i.ibb.co/Cv6Y9NL/bg.jpg');
    border-style: solid ;
    border-color: white;
    background-repeat: no-repeat;
    background-size: cover;

}
body{
    margin: auto;
}
#logo{
    text-align: center;
    color:rgb(11, 168, 196);
    font-weight: bold;
    font-size: 90px;
    background-color:white;
    height:150px;
    width:150px;
    margin:auto;
    border-radius:80%;
    margin-top: 80px;
    margin-bottom: 80px;
}

.heading{
    text-align:center;
    color:rgb(245, 40, 3);
    font-size:36px;

}

.locationSelector{
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: center;
}

.locationDropDown{
    width:250px;
    height:60px;
    border-radius: 0%;
    font-size: 20px;
    border: none;
}

.reataurantsinput{
    border: none;
    width:370px;
    height:60px;
    border-radius:0%;
    font-size: 20px;
    margin-left:5px
}
 76 changes: 76 additions & 0 deletions76  
src/component/Home/Search.js
@@ -0,0 +1,76 @@
import React,{Component} from 'react'
import './Search.css'
import {withRouter} from 'react-router-dom'
const cityUrl='https://developerfunnel.herokuapp.com/location'
const hotelUrl="https://developerfunnel.herokuapp.com/hotels?city="


class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            location:'',
            hotels:''
        }
    }
    renderCity=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.city}>{item.city_name}</option>
                )

            })
        }

    }
    renderHotel=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item._id}>{item.name} || {item.locality}</option>
                )

            })
        }

    }

    handleCity=(event)=>{
        console.log(event.target.value)
        fetch(`${hotelUrl}${event.target.value}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{this.setState({hotels:data})})
    }
    handleHotel=(event)=>{
        this.props.history.push(`/details/${event.target.value}`)
    }
    render(){
        console.log(this.props)
        return(
            <div className="imageContainer">
                <div id="logo">M!</div>
                <div className="heading">Trip With Us</div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>-----SELECT CITY----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput" onChange={this.handleHotel}>
                        <option>-----SELECT HOTEL----</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>

        )
    }
    componentDidMount(){
        fetch(cityUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{this.setState({location:data})})


    }
}
export default withRouter(Search);
 266 changes: 266 additions & 0 deletions266  
src/component/Listing/Listing.css
@@ -0,0 +1,266 @@
.logo-header {
    font-family: Poppins;
    font-size: 50px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.51;
    letter-spacing: normal;
    text-align: left;
    color: #eb2929;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: white;
    vertical-align: middle;
    text-align: center;
    margin-left: 20%;
    line-height: 65px;
}

.header {
    height: 80px;
    padding-top: 5px;
    background-color: #ce0505;
}

.login {
    width: 44px;
    height: 23px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 4.56;
    letter-spacing: normal;
    color: #ffffff;
    margin-left: 31%;
}

.rectangle {
    width: 160px;
    height: 40px;
    border-radius: 7px;
    border: solid 1px #ffffff;
    float: right;
    margin-right: 20%;
    margin-top: -2%;
}

.account {
    width: 152px;
    height: 23px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.56;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
}

.main-heading {
    height: 70px;
    font-family: Poppins;
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: normal;
    text-align: left;
    color: #192f60;
    margin: 2%;
}

.Rectangle-5 {
    height: 700px;
    -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    margin-left: 10%;
}

.Filters {
    height: 25px;
    font-family: Poppins;
    font-size: 22px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #192f60;
    padding-left: 6%;
}

.Select-Location {
    height: 40px;
    font-family: Poppins;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    text-align: left;
    color: #192f60;
    margin-left: 7%;
}

.textbox {
    width: 208px;
    height: 35px;
    border-radius: 3px;
    border: solid 1px #8c96ab;
    margin-right: 13%;
}

.Cost-For-Two {
    height: 45px;
    font-family: Poppins;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.5;
    letter-spacing: normal;
    text-align: left;
    color: #192f60;
    margin-left: 7%;
}

.Sort {
    height: 45px;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.5;
    letter-spacing: normal;
    text-align: left;
    color: #192f60;
    margin-left: 7%;
}

.item {
    width: 875px;
    height: 320px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    margin-bottom: 20px;
}

.option-item {
    font-family: Poppins;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: normal;
    text-align: left;
    color: #8c96ab;
    margin-right: 100px;
}

.block {
    display: block;
}

.inline-block {
    display: inline-block;
}

.pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {
    z-index: 3;
    color: #fff;
    cursor: default;
    background-color: #8c96ab;
    border-color: #8c96ab;
}

.hotel_name {
    width: 100%;
    height: 43px;
    font-family: Poppins;
    font-size: 25px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #192f60;
}

.Image {
    width: 280px;
    height: 220px;
    border-radius: 23px;
    background-color: #ea6060;
    margin-left:5%;
}

.city_name {
    width: 100%;
    height: 23px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.4;
    letter-spacing: normal;
    text-align: left;
    color: #192f60;
}

.address-text {
    width: 100%;
    height: 23px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.88;
    letter-spacing: normal;
    text-align: left;
    color: #636f88;
}

.row-height {
    height: 60%;
    padding-top: 4%;
}

.cuisine {
    font-family: Poppins;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
    text-align: left;
    color: #636f88;
    padding-left: 25%;
}

.cuisine_data {
    font-family: Poppins;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
    text-align: left;
    color: #192f60;
}
 37 changes: 37 additions & 0 deletions37  
src/component/Listing/ListingApi.js
@@ -0,0 +1,37 @@
import React,{Component} from 'react'
import axios from 'axios'
import ListingDiplay from './ListingDisplay'
import RoomFilter from '../Filter/roomFilter'
import CostFilter from '../Filter/costFilter'
const listUrl="https://developerfunnel.herokuapp.com/hotellist"

class ListingApi extends Component{
    constructor(){
        super()
        this.state={
            list:''
        }
    }
    setDataPerFilter=(sortedData)=>{
        this.setState({list:sortedData})
    }
    render(){
        if(sessionStorage.getItem('ltk')==null){
            this.props.history.push('/login')
        }
        return(
            <div className="row">
                <div className="col-md-2"><RoomFilter roomPerType={(data)=>{this.setDataPerFilter(data)}}/>
                <CostFilter costPerType={(data)=>{this.setDataPerFilter(data)}}/></div>
                <div className="col-md-10"><ListingDiplay listdata={this.state.list}/></div>
            </div>
        )
    }
    componentDidMount(){
        let tripId=this.props.match.params.id
        sessionStorage.setItem('tripid',tripId)
        axios.get(`${listUrl}/${tripId}`)
        .then((res)=>{this.setState({list:res.data})})
    }
}
export default ListingApi
 69 changes: 69 additions & 0 deletions69  
src/component/Listing/ListingDisplay.js
@@ -0,0 +1,69 @@
import React from 'react'
import {Link} from 'react-router-dom'
import './Listing.css'
const ListingDiplay=(props)=>{
    console.log(props)
    const renderList=({listdata})=>{
        if(listdata){
            if(listdata.length>1){
                return listdata.map((item)=>{
                    return(
                        <div className="item">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <img className="Image" src={item.thumb}/>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="hotel_name">
                                            <Link to={`/details/${item._id}`}>{item.name}</Link>
                                            <div className="city_name">{item.city_name}</div>
                                            <div className="city_name">{item.locality}</div>
                                            <div className="city_name">{item.address}</div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="cuisine">Room Type</div>
                                        <div className="cuisine">Cost For Night</div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="cuisine_data">
                                            {item.type[0].name}
                                        </div>
                                        <div className="cuisine_data">Rs. {item.cost}</div>
                                    </div>
                                </div>
                        </div>
                    )
                })

            }else{
                return(
                    <div className="item">
                        <h2>No Data Found</h2>
                    </div>
                )
            }
        }else{
            return(
                <div className="item">
                    <img src="/images/loader.gif"/>
                </div>
            )
        }

    }
    return(
        <div className='container-fluid'>
        <div className="main-heading">
            <div className='col-md-12'>
                {renderList(props)}
            </div>
        </div>
    </div>

    )
}
export default ListingDiplay
 74 changes: 74 additions & 0 deletions74  
src/component/Login/Login.js
@@ -0,0 +1,74 @@
import React,{Component} from 'react';
const loginUrl="http://localhost:7800/api/auth/login"
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            message:''


        }
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit=()=>{
        console.log(this.state)
        fetch(loginUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.auth==false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push("/profile")
            }
        })
    }
    render(){
        if(sessionStorage.getItem('ltk')!==null){
            this.props.history.push('/profile')
        }
        return(
            <div className="container">
                <div className="panel panel-success">
                    <h2 style={{color:'red'}}>{this.state.message}</h2>
                    <div className="panel-heading">
                        Login
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" value={this.state.email} className="form-control"
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" type='password' value={this.state.password} className="form-control"
                            onChange={this.handleChange}
                            />
                        </div>


                        <button className="btn btn-success"
                        onClick={this.handleSubmit}>
                            Login
                        </button>
                        <p>If you don't have any account Please <a class="btn btn-primary" href="/register" role="button">Sign Up</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;
 1,125 changes: 1,125 additions & 0 deletions1,125  
src/component/Login/PROJECT.JS
Large diffs are not rendered by default.

 68 changes: 68 additions & 0 deletions68  
src/component/Login/Profile.js
@@ -0,0 +1,68 @@
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const url="http://localhost:7800/api/auth/userinfo"

class Profile extends Component{
    constructor(){
        super()
        this.state={
            user:''
        }
    }
    handleLogout=()=>{
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('username')
        this.props.history.push('/login')
    }
    conditionalRender=()=>{
        if(this.state.user.role){
            if(this.state.user.role==="Admin"){
                return(<>
                    <Link className="btn btn-success" to="/userinfo">All Users</Link>
                    <Link className="btn btn-success" to="/viewBooking">BookingList</Link>
                    </>
                )
            }
        }
    }
    render(){
        if(sessionStorage.getItem('ltk')==null){
            this.props.history.push('/login')
        }
        sessionStorage.setItem('rtk',this.state.user.role)
        sessionStorage.setItem('username',this.state.user.name)
        return(
            <div>
            <div className="panel panel-success">
                <div className="panel-heading">
                   <h3> User Profile</h3>
                </div>
                <div className="panel-body">
                    <h3>Hi {this.state.user.name}</h3>
                    <h3>Your Mail Id is {this.state.user.email}</h3>
                    <h4> Your Role is {this.state.user.role}</h4>
                    {this.conditionalRender()}
                    <btn className="btn btn-danger" onClick={this.handleLogout}>LogOut</btn>

                </div>
            </div>
        </div>

        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token': sessionStorage.getItem('ltk')
            }
        })
        .then((res)=>res.json())
        .then((data)=>{this.setState({user:data})})


    }
}
export default Profile
 133 changes: 133 additions & 0 deletions133  
src/component/Login/Register.js
@@ -0,0 +1,133 @@
import React from 'react';
const registerUrl="http://localhost:7800/api/auth/register"
const intialState={
            id:Math.floor(Math.random()*10000),
            name:'',
            phone:'',
            email:'',
            password:'',
            cpassword:'',
            role:'',
            nameError:'',
            emailError:'',
            cpwdError:'',

}
export default class Register extends React.Component{
    state=intialState
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    validate=()=>{
           let nameError="";
            let emailError="";
            let pwd=this.state.password
            let cpwd=this.state.cpassword
           let cpwdError="";
           if(!this.state.name){
               nameError='Name can not be blank'
           }
           if(!this.state.email.includes('@')){
               emailError='Invalid Email'
           }
           if(pwd!==cpwd){
               cpwdError="Confirm password does not match"
             }
           if(emailError || nameError || cpwdError){
               this.setState({emailError,nameError,cpwdError})
               return false
           }
           return true


    }
    handleSubmit=event=>{
       // console.log(this.state)
       event.preventDefault();

        const isValid=this.validate();
        if(isValid){
            console.log(this.state)
            //clear form
        this.setState(intialState)
        let name=this.state.name
        fetch(registerUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/login'))
         sessionStorage.setItem('username',name)

        }


    }
    render(){
        if(sessionStorage.getItem('ltk')!==null){
            this.props.history.push('/profile')
        }
        return(

            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        Register
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>User ID</label>
                            <input name="name" value={this.state.id} className="form-control" readOnly

                            />

                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input name="name" value={this.state.name} className="form-control"
                            onChange={this.handleChange}
                            />
                            <div style={{color:"red"}}>{this.state.nameError}</div>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input name="phone" value={this.state.phone} className="form-control"
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" value={this.state.email} className="form-control"
                            onChange={this.handleChange}
                            />
                             <div style={{color:"red"}}>{this.state.emailError}</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" type='password' value={this.state.password} className="form-control"
                            onChange={this.handleChange}
                            />

                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input name="cpassword" value={this.state.cpassword} type='password' className="form-control"
                            onChange={this.handleChange}
                            />
                            <div style={{color:"red"}}>{this.state.cpwdError}</div>
                        </div>
                        <button className="btn btn-success" type="submit"
                        >
                            Register
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
 29 changes: 29 additions & 0 deletions29  
src/component/Login/UserApi.js
@@ -0,0 +1,29 @@
import React,{Component} from 'react'
import axios from 'axios'
import UserInfo from './UserInfo'
const url="http://localhost:7800/api/auth/users"
class UserApi extends Component{
    constructor(){
        super()
        this.state={
            users:''
        }
    }
    render(){
        if(sessionStorage.getItem('ltk')==null){
            this.props.history.push('/login')
        }
        if(sessionStorage.getItem('ltk')!==null && sessionStorage.getItem('rtk')!=='Admin'){
            this.props.history.push('/profile')

        }
        return(
            <UserInfo userdata={this.state.users}/>
        )
    }
    componentDidMount(){
        axios.get(url)
        .then((res)=>this.setState({users:res.data}))
    }
}
export default UserApi;
 51 changes: 51 additions & 0 deletions51  
src/component/Login/UserInfo.js
@@ -0,0 +1,51 @@
import React from 'react';

const UserInfo = (props) => {

    const renderUser = ({userdata}) => {

        if(userdata){

            return userdata.map((item,index) => {
                return(
                    <tr>
                        <td>{index}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                )
            })
        }

    }

    return(
        <div className="container">
            <center>
                <h2>List Of Users</h2>
            </center>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>

                    {renderUser(props)}
                </tbody>

            </table>
        </div>
    )
}



export default UserInfo;
 4 changes: 4 additions & 0 deletions4  
src/index.js
@@ -0,0 +1,4 @@
import React from 'react'
import ReactDom from 'react-dom'
import Routing from './Routing'
ReactDom.render(<Routing/>,document.getElementById('root'))