import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreateProducts2 = () => {

  const [fname, setFName] = useState("");

  const [file, setFile] = useState("");

  const history = useNavigate();

  const setdata = (e) => {
    const { value } = e.target;
    setFName(value);
  }

  const setimgfile = (e) => {
    setFile(e.target.files[0])
  }

  // adduser data

  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", file);     
    formData.append("fname", fname);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    console.log(formData,config)    

    const res = await axios.post("http://localhost:8000/api/v1/product/register", formData, config);
    console.log(res)

    if (res.data.status === 401 || !res.data) {
        console.log("errror")
    } else {
      history("/")
    }
  }

  return (
    <>
      <div className="container mt-3">
        <h1>Upload Your Img Here</h1>

        <Form className='mt-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" name='fname' onChange={setdata} placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select Your Image</Form.Label>
            <Form.Control type="file" onChange={setimgfile} name='photo' placeholder="" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={addUserData}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default CreateProducts2