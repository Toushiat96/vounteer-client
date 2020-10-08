import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Header from '../Header/Header';
import fakedata from '../../fakedata/index.js'
import { Container, Row, Col } from 'reactstrap';
import './Home.css'
import EventItem from '../EventItem/EventItem';

const Body = () => {

const[data ,setData]=useState(fakedata);
const [cart,setCart] = useState([])

const addevent = () => {
    fetch('http://localhost:5000/eventadd',{
        method: 'POST',
       headers:{'Content-Type': 'application/json'},
       body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data=> console.log(data))
}

useEffect(()=>{
fetch('http://localhost:5000/eventcollection')
.then(res => res.json())
.then(data=>setCart(data))

})

    return (
    
  
    <div>
        {/* <button onClick={addevent}>Add event</button> */}
        <div className="homeimage">
        <div>
            <Header></Header>
            <div>
            
            <div className="search">
            
            <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                <input type="text" placeholder="search your need"/>
                <Button style={{borderRadius:'45px'}} variant="primary">Search</Button>
            </div>
            </div>
            </div>
            <div className="container">
            <div className="col-md-12 d-flex flex-wrap bd-highlight example-parent">
            {
            
            cart.map(pd =><EventItem item={pd}></EventItem>)
            
            }
            
            </div>
            
            </div>
            
        </div>
        </div>
    );
};

export default Body;