import React, { Component } from 'react';
import './App.css';
import logo from './muzzle.png';
import AppNavbar from './AppNavbar';
import { NavLink } from 'react-router-dom';
import { Container} from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <NavLink to="/cats" className="Centered">
                        <a href="" ><img className="App-logo Centered" src={logo} alt="logo" /></a>
                    </NavLink>
                </Container>
            </div>
        );
    }
}
export default Home;