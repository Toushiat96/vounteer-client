import React from 'react';
import { Card } from 'react-bootstrap';
import { Button, Col } from 'reactstrap';

const EventCollection = (props) => {
const{title,img,startDate,id} =props.item;
const deleteItem = (id) => {
    fetch('http://localhost:5000/deleteitem/'+id,{
        method:'DELETE'
    })
    .then(res=> res.json())
    .then(result=>console.log("success"))

}
    return (
        <div>
        <Col md='3'className="p-2 bd-highlight col-example">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                   {startDate}
                    </Card.Text>
                    <Button onClick={()=>deleteItem( id)} variant="primary">cancel</Button>
                </Card.Body>
                </Card>
                </Col>
        </div>
    );
};

export default EventCollection;