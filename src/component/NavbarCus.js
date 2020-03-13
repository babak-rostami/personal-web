import React,{Component} from 'react';
import { Navbar,Nav } from 'react-bootstrap';

export default class NavbarCus extends Component{
    render(){
        return(
            <Navbar expand="lg" className="navCus">
                <Navbar.Brand href="/home">بابک رستمی</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-auto">
                    <Nav.Link href="/home">خانه</Nav.Link>
                    <Nav.Link href="/contact" >تماس با ما</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
      );
    }
}