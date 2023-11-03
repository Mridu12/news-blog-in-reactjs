import React from 'react';
import './footer.css';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const Footer = () => {
  return (
    <div className='footer'>
    
<div className='textbox'>
Bring global news straight to your inbox. Sign up for our weekly newsletter.
</div>

<Form.Control id='mail' size="lg" type="text" placeholder="Email*" />
<Button id='btn' >Get Subscibe</Button>





    </div>
  )
}

export default Footer;