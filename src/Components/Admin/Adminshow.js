import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const Adminshow = (props) => {
const{name,email,id,title,startDate,img} =props.data;
const history = useHistory()
const deleteItem = () =>{
    fetch('http://localhost:5000/admindeleteitem/'+id,{
        method:'DELETE'
    })
    .then(res=> res.json())
    .then(result=>console.log("success"))
    history.push('/admin')

}
    return (
        <div>
           <Col md='3'className="p-2 bd-highlight col-example">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                   {name}
                    </Card.Text>
                    <Card.Text>
                   {email}
                    </Card.Text>
                    <Card.Text>
                   {startDate}
                    </Card.Text>
                    <Button onClick={()=>deleteItem( id)} variant="primary">Delete</Button>
                </Card.Body>
                </Card>
                </Col>
        </div>
    );
};

export default Adminshow;