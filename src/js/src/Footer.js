import React from 'react';
import Container from './Container';
import {Button, Avatar} from 'antd';
import './Footer.css';

const Footer = (props) => (
  <div className = 'footer'>
    <Container>
      {props.numberOfphones ?
        <Avatar 
          style={{backgroundColor: '#daac71', marginRight: '5px'}}
          size='lagre'>
            {props.numberOfPhones}
        </Avatar> : null}
      <Button onClick ={()=> props.handleAddPhoneClickEvent()} type = 'primary'> Add new phone +</Button>
    </Container>
  </div>
)

export default Footer;

