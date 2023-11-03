import React from 'react'
import './sign.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const Sign = () => {
  return (
    <div className='signin'>

<p id='Emails'>Email</p>
        <Form.Control id='namef'
            required
            type="text"
            placeholder="Email"
            defaultValue=""
          />

<p id='Password'>Password</p>
        <Form.Control id='namef'
            required
            type="text"
            placeholder="Password"
            defaultValue=""
          />

<Button className='btnlast' variant="success">Sign In</Button>{' '}

    </div>
    
  )
}

export default Sign;