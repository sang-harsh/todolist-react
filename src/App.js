import './App.css';
import React,{useEffect,useState} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import InputContainer from './components/InputContainer';
import{ db } from './firebase';
// import firebase from "firebase";
import { collection, getDocs, addDoc , deleteDoc ,doc, serverTimestamp, orderBy,query} from "firebase/firestore"; 

export default function App() {
  const [taskList,setTaskList] = useState([]);
  const colRef = collection(db, 'allTasks');
  const q = query(colRef,orderBy('createdAt'));

  useEffect(()=>{
    getData();
  },[]);

   function getData(){
    let temp = [];
    getDocs(q) 
      .then(snapshot => {
        snapshot.docs.forEach(element => {
          console.log(element.data().task);
          console.log();
          temp.push({
            task: element.data().task,
            id: element.id,
            status: element.data().inProgress,
          });    
        });
        setTaskList(temp);
      }).catch((error)=>console.error(error)); 
  }

  function addItem(newItem){
     if(newItem===""){
       alert("Task cannot be a empty String");
     }else{ 
        addDoc(colRef,{
          task:newItem,
          inProgress: true,
          createdAt: serverTimestamp(),
        }).then(()=>{
          document.getElementById('clear').reset();
          getData();
        })
     }
  }
  function removeItem(index){
      const docRef= doc(db,'allTasks',index);
      deleteDoc(docRef).then(()=>{
        console.log("deleted");
        getData();
      });
  }
    return (
      <div className="App">
        <Header/>
        {console.log(taskList)}
        <div className="container">
        <InputContainer addItem={addItem} />
        <List items={taskList} removeItem={removeItem} getData={getData}/>
        </div>
        <Footer/>      
      </div>
    );
}