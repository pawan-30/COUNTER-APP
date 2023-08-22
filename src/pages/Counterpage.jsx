import { Message } from "../components/Message"
import {Button} from "../components/Button"
import { useState } from "react";
export const Counterpage=()=>{
    console.log('Counter fn call');
const [count,setCount]=useState(0); 
    const UpdateCount=(val)=>{
        if(val==="+"){
           setCount(count+1);
        }
        else{
            setCount(count-1);
        
        }
        console.log("Count is ",count);
        
    }
return(<div className='container'>
    <Message classname='alert alert-secondary' msg="Counter App"/>
    <Message  value={count} classname='alert alert-light' msg="Counter Value is :"/>
    <center>
    <Button fn={UpdateCount} val="+" classname='btn btn-success me-3' />
    <Button fn={UpdateCount} val="-" classname='btn btn-danger me-3' />
    </center>

    
</div>
)
}