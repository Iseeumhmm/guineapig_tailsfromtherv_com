import React, { useEffect }from 'react';
// import { Link } from "gatsby"
import PropTypes from "prop-types"
import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button';


function Header({ siteTitle }) {
  useEffect(() => {
    var nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if ( window.pageYOffset > 10 ) {
        nav.classList += ' hidden';
      } else {
        nav.classList = 'temp-padding navbar-dark navbar navbar-expand-lg navbar-light';
      }
    });
  }, []);
    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);
    
    return (

        <header>
            <Navbar className="navbar-dark temp-padding" expand="lg">
            <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
            {/* <Navbar.Toggle style={{borderColor: "transparent"}} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link  className="mr-auto" href="/#blog">Blog</Nav.Link> */}
                {/* <Nav.Link style={{color: "white"}} className="ml-auto" href="#link">Link</Nav.Link> */}
              {/* </Nav>
            </Navbar.Collapse> */}
            </Navbar>   
        </header>
)};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
  }
 

export default Header
