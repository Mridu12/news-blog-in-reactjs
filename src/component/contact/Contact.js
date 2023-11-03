import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './contact.css';

const Contact = () => {
  return (
    <div className='contactb'>
        <h1 id='cont'>Contact Us</h1>

        <p id='name'>Name.</p>
        <Form.Control id='namef'
            required
            type="text"
            placeholder="Your name"
            defaultValue=""
          />


<p id='name'>Email</p>
        <Form.Control id='namef'
            required
            type="text"
            placeholder="Email"
            defaultValue=""
          />

<p id='name'>Message</p>
        <Form.Control id='msg'
            required
            type="text"
            placeholder="Your Message..."
            defaultValue=""
          />

<Form.Check id='check'
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />

<Button id='btnf' type="submit">Submit form</Button>



    </div>
  )
}

export default Contact;