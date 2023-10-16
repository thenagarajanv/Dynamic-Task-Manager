import { useState } from 'react';
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import Task from './Task';
import { info } from './TaskControl';
function TaskUpdate(){
    const [dt,setDt]=useState(info);
    const [dis,setDis]=useState(true);

    function UpdateDetails(){
      let name=document.getElementById("ser").value;
      let new_name=document.getElementById("up").value;
      if(name!==""&&new_name!=="")
      {
        let fil=info.filter(x=>x.name===name);
        const index=info.findIndex(x=>x.name===name);
        console.log(index);
        if(fil!==""&&index!==-1)
        {
           if(name!==new_name)
           {
            info[index].name=new_name;
            setDis(true);
            setDt(info);
          }
          else
          {
            alert("Both task are Same...")
          }
        }
        else
        {
          alert("Sorry No such Task exist!");
        }
      }
      else
      {
        alert("Empty Mention any Task");
      }
    }
    function displayDetails()
    {
      let name=document.getElementById("ser").value;
      const index=info.findIndex(x=>x.name===name);
      const filterData=info.filter(x=>x.name===name);
      console.log(index);
      if(name!=="")
      {
        if(index!==-1)
          {
            if(dis){
            setDis(false);
            setDt(filterData);
            }
            else
            {
              setDis(true);
            }
          }
          else
          {
            alert("Sorry No such Task exist!");
          }
      }
      else{
        alert("Empty");
      }
    }
    return(
        <Container>
         <InputGroup className="mb-3">
        <InputGroup.Text>Name </InputGroup.Text>
        <Form.Control   id='ser' placeholder='Enter Task'/>
        <Button variant="danger" id="button-addon2" onClick={displayDetails}>Status</Button>
        </InputGroup>
        <InputGroup className="mb-3">
        <InputGroup.Text>Update</InputGroup.Text>
        <Form.Control   id='up' placeholder='Updated Task'/>
        <Button variant="danger" id="button-addon2" onClick={UpdateDetails}>Update</Button>
        </InputGroup>
      <div hidden={dis}>
      <Task name={dt.map(x=>x.name)}/>
      </div>
      </Container>
    );
}
export default TaskUpdate;