import React from 'react'
import style from "./EditProfile.module.css"
import CollapsibleExample from '../Navbar/Navbar'
import Form from 'react-bootstrap/Form';
// import Avatar from '@mui/material/Avatar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import DeviceUnknownOutlinedIcon from '@mui/icons-material/DeviceUnknownOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import Settings from '@mui/icons-material/Settings';

const EditProfile = () => {

  return (
    <>
      <div className={style.mainbox}>

        <CollapsibleExample />

        <div className={style.secondbox}>
          <div className={style.sidebar}>
            <ul>
              <div style={{ display: "flex", gap: "10px" }}>
                <AccountCircleOutlinedIcon /> <a href=""><li>Profile</li></a>
              </div>
              <br />
              <div style={{ display: "flex", gap: "10px" }}>
                <ModeEditOutlinedIcon /> <a href=""><li>Notification</li></a>
              </div>
              <br />
              <div style={{ display: "flex", gap: "10px" }}>
                <SecurityOutlinedIcon /><a href=""><li>Security</li></a>
              </div>
              <br />
              <div style={{ display: "flex", gap: "10px" }}>
                <Settings /><a href=""><li>Settings</li></a>
              </div>
              <br />
              <div style={{ display: "flex", gap: "10px" }}>
                <DeviceUnknownOutlinedIcon fontSize="small" /><a href=""><li>Help</li></a>
              </div>
            </ul>
          </div>
          <div className={style.general_details_box}>
            <p>Edite Profile</p>
            <hr />
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className={style.text_bold}>Full Name</Form.Label>
                <Form.Control className="border-opacity-200" type="text" placeholder="Enter Your Full Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className={style.text_bold}>Email address</Form.Label>
                <Form.Control type="email" placeholder="winnow@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className={style.text_bold}>Address</Form.Label>
                <Form.Control as="textarea" rows={2} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className={style.text_bold}>Contact Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Your Mobile Number" />
              </Form.Group>
              <div style={{ display: "flex", gap: "300px" }}>
                <div>
                  <Form.Label className={style.text_bold} htmlFor="inputPassword5">City</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Patna</option>
                    <option value="2">Delhi</option>
                    <option value="3">Shivahar</option>
                  </Form.Select>
                </div>
                <div>
                  <Form.Label className={style.text_bold} htmlFor="inputPassword5">State</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Bihar</option>
                    <option value="2">Delhi</option>
                    <option value="3">UP</option>
                  </Form.Select>
                </div>
              </div>
              <br />
              <Form.Label className={style.text_bold} htmlFor="inputPassword5">Password</Form.Label>
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
            </Form>
            <button className={style.create_account_btn}>Save Changes</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile