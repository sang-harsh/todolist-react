import React,{useState} from 'react';

export default function InputContainer({addItem}) {
    const [ip,setIp]=useState("");
    return(
      <div className='inputContainer'>
        <form id='clear'>
          <input className="InputBox" placeholder='Enter Your Task Here...'
          onChange={(e)=>setIp(e.target.value)}/>
        </form>
        <button className ="btn-add"
        onClick={()=>{  
          addItem(ip);
        }}
        >Add Task</button>
      </div>
    )
  }