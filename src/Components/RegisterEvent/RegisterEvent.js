
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Row } from 'reactstrap';
import { userContext } from '../../App';
import Header from '../Header/Header';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const RegisterEvent = () => {
const[loggedInUser, setLoggedInUser] = useContext(userContext)
const [selectedDate, setSelectedDate] = useState({
    startDate:new Date() 
});
const handleDateChange = (date) => {
    const newDates = {...selectedDate}
    newDates.startDare=date;
  setSelectedDate(newDates);
};
const [description , setDescription] = useState({})
    const {id}=useParams();
    const [Item,setItem]=useState([]);
    const history = useHistory()

    const [add,setAdd]=useState(1);

    useEffect(()=>{
        fetch('http://localhost:5000/eventcollection/'+id)
        .then(res => res.json())
        .then(result=> setItem(result))

    },[])

    const handleRegister=()=>{
        const newRegistration = {...loggedInUser , ...selectedDate , ...Item , ...description}
        fetch('http://localhost:5000/addregister',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(newRegistration)
        })
        history.push("/events")
    }
    return (
        <div>
            <Header></Header>
           
            <Container>
            <Row>
            <Col md={6}>
          
            <Form>
            
            <Form.Group>
            
            
            <Form.Label>Name</Form.Label>
                        <Form.Control type="text"  value={loggedInUser.name}/>

                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"  value={loggedInUser.email}/>

                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" value={Item.description}/>

                        <Form.Label>Event Name</Form.Label>
                        <Form.Control type="text" value={Item.eventName} />
            </Form.Group>
            
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate.startDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
                            
                    
    <Button onClick={handleRegister} variant="primary" type="submit">
        Submit
    </Button>
            </Form>
            
            
            </Col>
            <Col md={{span:5,offset:1}} style={{marginTop:"50px"}}>
                    <div>
                        <img src={Item.img} height="440px" width="100%" alt=""/>
                    </div>
                </Col>
            </Row>
            
            </Container>
        </div>
    );
};

export default RegisterEvent;
