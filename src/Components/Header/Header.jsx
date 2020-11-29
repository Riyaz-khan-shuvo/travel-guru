import React, { useContext } from "react";
import { Button, Form, FormControl, Media, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import logo from '../../Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { signOutFromAccount } from "../Login/loginManager";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { destinationName } = useParams();

    const handleSignOut = () => {
        signOutFromAccount().then((res) => {
            setLoggedInUser(res);
        });
    };

    const history = useHistory();
    const location = useLocation();

    const headerStyleChange =
        location.pathname === "/login" ||
        location.pathname === `/hotel/${destinationName}`;

    const handleLogin = () => {
        history.push("/login");
    };


    return (
        <div className="sticky-top">
            <Navbar bg="dark" collapseOnSelect expand="lg">

                <Navbar.Brand href="#home" style={{ marginLeft: '140px' }}>

                    <img style={{ width: '100px', color: 'white', filter: 'contrast(0%) brightness(500%)' }}
                        src={logo}

                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ fontSize: "25px", color: "#fff", background: "black" }} > <FontAwesomeIcon icon={faBars} /> </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" >



                    <Form inline style={{ weight: '70px' }}>
                        <FormControl type="text" placeholder="Search Your  Destination" className="mr-sm-2 col-sm-12 col-12 pl-5 pr-5" />

                    </Form>
                    <Nav>

                        <Nav.Link
                            style={{ color: 'white', fontWeight: '600' }}
                            className="nav-link pl-5 pr-5"
                        >
                            <Link to="/home" style={{ color: "#fff" }}>News</Link>
                        </Nav.Link>


                        <Nav.Link to="/destination" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-5 pr-5">
                            <Link to="/home" style={{ color: "#fff" }}>Destination</Link>
                        </Nav.Link>

                        <Nav.Link to="/blog" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-5 pr-5">
                            <Link to="/blog" style={{ color: "#fff" }}>Blog</Link>
                    </Nav.Link>
                        <Nav.Link to="/contact" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-5 pr-5">
                            Contact
                    </Nav.Link>
                        {loggedInUser.isSignedIn ? (
                            <div>
                                <span
                                    className={
                                        headerStyleChange
                                            ? "text-light font-weight-bold"
                                            : "text-light font-weight-bold"
                                    }
                                >
                                    {loggedInUser.displayName}
                                </span>
                                <button
                                    className="btn btn-warning ml-2"
                                    onClick={handleSignOut}
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                                <button className="btn btn-warning" onClick={handleLogin}>
                                    Login
                                </button>
                            )
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;





{/* <Link to="/login"><Button style={{ marginLeft: '50px', width: '80px', height: '40px', borderRadius: '10px', fontWeight: '600' }} variant="warning">
    Login</Button>
</Link> */}