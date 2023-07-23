import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import AccountMenu from "../AccountMenu/AccountMenu";

function CollapsibleExample() {
  const token = localStorage.getItem("auth");
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
          style={{ width: "100%", backgroundColor: "#f27c22" }}
        >
          <Container>
            <Navbar.Brand href="/" className="homeicon">
              <img className="navlogo" src="winnow.png" alt="winnow logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <div className="hovereffect">
                  <Link to="/comingsoon" className="textdecoration">
                    <p className="textcolorfont">How_it_works</p>
                  </Link>
                </div>
                <div className="hovereffect">
                  <Link to="/comingsoon" className="textdecoration">
                    <p className="textcolorfont">Strategies</p>
                  </Link>
                </div>
                <div className="hovereffect">
                  <Link to="/comingsoon" className="textdecoration">
                    <p className="textcolorfont">Research&Insights</p>
                  </Link>
                </div>
                <div className="hovereffect">
                  <Link to="/comingsoon" className="textdecoration">
                    <p className="textcolorfont">AboutUs</p>
                  </Link>
                </div>
                {/* <div className='hovereffect'><Link className='textdecoration'><p className='textcolorfont'>STUDENTS</p></Link></div> */}
              </Nav>
              {!token ? (
                <Nav>
                  <Button
                    // style={{ marginRight: "10px" }}
                    variant="light"
                    onClick={login}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "20px",
                      fontSize: "15px",
                      padding: "10px",
                    }}
                  >
                    LogIn
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#ed802d",
                      color: "#ed802d",
                      border: "1px solid #ed802d",
                      padding: "1px",
                    }}
                  >
                    hello
                  </Button>
                  <Button
                    onClick={signUp}
                    style={{
                      color: "white",
                      backgroundColor: "#554284",
                      borderRadius: "20px",
                      fontSize: "15px",
                      padding: "10px",
                    }}
                  >
                    Create Account
                  </Button>
                  <Navbar.Brand>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </Navbar.Brand>
                </Nav>
              ) : (
                <Nav>
                  <AccountMenu />
                </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default CollapsibleExample;
