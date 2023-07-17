import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import AccountMenu from "../AccountMenu/AccountMenu";

function CollapsibleExample() {
  const token = localStorage.getItem("auth")
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
          style={{ width: "100%", margin: "auto",backgroundColor:"#f27c22" }}
        >
          <Container>
            <Navbar.Brand href="/" className="homeicon">
              <img className="navlogo" src="https://lh3.googleusercontent.com/pw/AIL4fc9lmDodZvth-Il18ugIqocgdWGHaZ77w2rXqhNH25QyPUwijfjWAl2pVIIxyFTQjPp6HpECV-796bl16nH2fKA4e_7yk0Hr0Je-H5INRqVwZsBJWe2UJl-5Y4nxJDmuijIrXFP1iofkYyDJ7KdGWirTJhZkVC9JvIeASanXw-wJh5tOUc903Zz6xX_Qs1zeYW3z6tGQLj6ekZeEnGNpBeYC-Edo8XfcDXn1qd_zinfuwb6Zl8FCX1z93CYEjpgAZhj2NGM5ZAevPxq0SNmuzjakdzUB7H3koBclNsLt1sg4vFApP1Y6hj5Gq1wFxscnqk2GgFwSGs-mSp5EyVVm6gbEsp4RtVD6xO7D4ghaAGPlLHyqmgsCF75H7yj1It9WDXK-6p9kovAtUFhLeg3Ar7ki939Y0N8jX5zVpd7a_1jywKacsQvXA1_iA4pksB9zu3IGD6hr7OpjriaKomyoD0DdbdF9wYR0eG_OCxmgPgDk-8zTtAKUI8j2-xgD-JRnbQxWvXWp-3TDn5iPzI0YXtypoH68NM7nRgWKF2_un7bKpKZ8qhYZBg1AAomsxF97nyBvfu93n2pyjCIbW0ocE0YCs25X2Q2FxcPnxP8iP3PB03k0jDRsJcP4GsmuDlvf17-Aw8VfXL1A9cLDl95_S9sGIdUo94iRn9pCi9fwdNAyLftfoHD8-WgS9CKVvaAFiGPQD5wgMP3UpBdVWk6FsYKmVyJTLuYDjg_4vAFKMTybC6_0tUuU_l2dw9QRcmcccjsqCxRdF7rIISXW1_o2YWIGj4Md2qOW48eEsOisjnho-QZSbyGlSawnSzeWNLZgtOyhF5RnqijwjSHaE4JzHOGMRR2KRHKNNMNeXyfTbmH53Ji-lrmcS29KCL3TZfqwz2EFX6DHW6fOUcei=w204-h80-s-no?authuser=0" alt="winnow logo" />
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
              {!token ?
                <Nav>
                  <Button
                    // style={{ marginRight: "10px" }}
                    variant="light"
                    onClick={login}
                    style={{backgroundColor: "white", color:"black", borderRadius:"20px", fontSize:"15px", padding:"10px"}}

                  >
                    LogIn
                  </Button>
                  <Button style={{backgroundColor: "#ed802d",color:"#ed802d",border:"1px solid #ed802d",padding:"1px"}} >hello</Button>
                  <Button
                    onClick={signUp}
                    style={{ color: "white", backgroundColor: "#554284", borderRadius:"20px", fontSize:"15px",padding:"10px"}}
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
