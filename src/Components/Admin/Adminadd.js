import React from 'react';
import { useHistory } from 'react-router-dom';
const Adminadd = () => {
const history = useHistory();

    return (
        <form action="http://localhost:5000/addadmin" method="post">
        <h1>Add Event</h1>
            <input type="text" class="form-control" placeholder="Event Name" name="eventName"></input>
            <br/>
            <input type="text" placeholder="Event Description" class="form-control" name="description"></input>
            <br/>
            <input type="date" placeholder="input date" class="form-control" name="startDate"></input>
             <br/>
            <input type="submit"></input>
          
        </form>
    
    );
};

export default Adminadd;