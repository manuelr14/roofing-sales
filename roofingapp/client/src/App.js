import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customer from './pages/customer';
import Newcustomer from './pages/newcustomer';
import Allcustomers from './pages/allcustomers';
import Login from './pages/login';


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />

					 <Switch>
						<Route exact path={[ '/' ]}>
							<Newcustomer />
						</Route>
						 <Route exact path={[ '/newcustomer' ]}>
							<Newcustomer />
						</Route>
						<Route exact path={[ '/allcustomers' ]}>
							<Allcustomers />
						</Route> 
						<Route exact path={[ '/login' ]}>
							<Login />
						</Route> 
						
					</Switch> 
				</div>
		 </Router>
		);
	}
}

export default App;
