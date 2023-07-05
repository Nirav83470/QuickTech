import { Button, Container, Form, Nav, Navbar, NavDropdown ,Carousel  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CgMail } from "react-icons/cg";
import { TiStarburst } from "react-icons/ti";
import './Home.css';


const Home = () => {
    return (
        <>
            {/* Frist Conten Start */}
                <div className='bg_con'>
                    <div className='row container'>
                        <div className='col'>
                            <div className='row'>
                            <div className='col'>
                                    <i><CgMail /></i> niravvaghasiya90@gmail.com
                                </div>
                                <div className='col'>
                                    <i><TiStarburst /></i> Verify Certificate
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                        </div>
                    </div>
                </div> 
            {/* Frist Conten End */}


            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1"><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link href="#action2"><Link to="/About">About</Link></Nav.Link>
                            <Nav.Link href="#action3"><Link to="/Services">Services</Link></Nav.Link>
                            <Nav.Link href="#action4"><Link to="/Projects">Projects</Link></Nav.Link>
                            <NavDropdown title="Blog" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3"><Link to="/Blog">Blog </Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action4"><Link to="/Projects">Projects</Link></Nav.Link>
                            <Nav.Link href="#action4"><Link to="/Contact">Contact</Link></Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Silders Owl */}

            {/* <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./img/img1.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./img/img1.jpg')}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./img/img1.jpg')}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}

        </>
    )
}
export default Home;