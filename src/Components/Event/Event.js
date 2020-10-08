import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'reactstrap';
import { userContext } from '../../App';
import Header from '../Header/Header';
import EventCollection from './EventCollection';

const Event = () => {
const[readItem, setreadItem] = useState([])
const[loggedInUser, setLoggedInUser] = useContext(userContext)
useEffect(() =>{

fetch('http://localhost:5000/readregister?email='+loggedInUser.email)
.then(res => res.json())
.then(data => setreadItem(data))

})
    return (
        <div>
           <Header></Header>
          <Container>
          
          <Row>
          {
          
          readItem.map(item =><EventCollection item={item}></EventCollection>)
          
          }
          
          </Row>
          </Container>
        </div>
    );
};

export default Event;