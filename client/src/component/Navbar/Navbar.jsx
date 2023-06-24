import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import AccountMenu from "../AccountMenu/AccountMenu";

function CollapsibleExample() {
  const navigate = useNavigate();
  const signUp = () => {
    navigate("/user/register");
  };
  const login = () => {
    navigate("/user/login");
  };

  return (
    <>
      <div className="">
        <Navbar
          collapseOnSelect
          expand="lg"
          className="Navbar"
          fixed="top"
          style={{ width: "100%", margin: "auto" }}
        >
          <Container>
            <Navbar.Brand href="/" className="homeicon">
              <img className="navlogo" src="winnow.png" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <div className="hovereffect">
                  <Link to="/comingsoon" className="textdecoration">
                    <p className="textcolorfont">HOW_IT_WORKS</p>
                  </Link>
                </div>
                <div className="hovereffect">
                  <Link to="/comingsoon" className="textdecoration">
                    <p className="textcolorfont">STRATEGIES</p>
                  </Link>
                </div>
                <div className="hovereffect">
                  <Link to="/comingsoon" className="textdecoration">
                    <p className="textcolorfont">RESEARCH&INSIGHT</p>
                  </Link>
                </div>
                <div className="hovereffect">
                  <Link to="/comingsoon" className="textdecoration">
                    <p className="textcolorfont">ABOUTUS</p>
                  </Link>
                </div>
                {/* <div className='hovereffect'><Link className='textdecoration'><p className='textcolorfont'>STUDENTS</p></Link></div> */}
              </Nav>
              {false ?
                <Nav>
                  <Button
                    style={{ marginRight: "20px" }}
                    variant="light"
                    onClick={login}
                  >
                    LogIn
                  </Button>
                  <Button
                    onClick={signUp}
                    style={{ color: "white", backgroundColor: "#554284" }}
                  >
                    Create Account
                  </Button>
                  <Navbar.Brand>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </Navbar.Brand>

                </Nav> :
                <Nav><AccountMenu /></Nav>
              }
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default CollapsibleExample;
