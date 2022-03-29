import { updateDoc ,doc} from 'firebase/firestore';
import React from 'react';
import {db} from '../firebase';
export default function List({items,removeItem,getData}) {
  function toggleStatus(index,status){
    const docRef= doc(db,'allTasks',index);
     updateDoc(docRef,{
       inProgress: !status,
     });
     getData();
    }
    return(
      <div className='list-container'>
          {items.map((item,i)=> (
          
          <div className='task-container'>
            <div className='task-entry'>
              <div className="task-title">
                ({i+1}) {item.task}
              </div>
              <div className="task-status">
                {item.status?"Currently in progress":"Completed"}
              </div>
            </div>
            <div className="btn-div">
                <button className ="btn-done"onClick={()=>toggleStatus(item.id,item.status)}>
                {item.status?"Mark as Complete":"Not complete"}
                
                </button>
                <button className ="btn-delete"onClick={()=>removeItem(item.id)}>
                Delete
                </button>
            </div>
            
          </div>
          ))} 
      </div>
    )
  }