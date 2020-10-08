
import React, { useEffect, useState } from 'react';
import { Col, Container,Row } from 'reactstrap';
import Header from '../Header/Header';
import Adminadd from './Adminadd';
import Adminshow from './Adminshow';

const Admin = () => {
const [dataLoad , setResult] = useState([])
useEffect(()=>{
fetch('http://localhost:5000/admingetregisterdata')
.then(res => res.json())
.then(data => setResult(data))

})
    return (
    
        <Container>
        
        <Header></Header>
        
        
        <h1>Admin page</h1>
        <Row>
        {
        
        dataLoad.map(data =><Adminshow data ={data}></Adminshow>)
        
        }
        
      
        </Row>
        <Adminadd></Adminadd>
        </Container>
        
    );
};

export default Admin;