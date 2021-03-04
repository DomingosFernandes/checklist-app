import {useState} from 'react';
import Header from './components/Header';
import Checklist from './components/Checklist';
import './App.css';
import AddItem from './AddItem';


function App() {
  const [showAddItem,setShowAddItem] = useState(false);

  const [items,setItems] = useState([
    {id : 1,todo : 'Create a repo for the project',done : true,},
    {id : 2,todo : 'Build a basic React app',done : false,},
    {id : 3,todo : 'Populate React app with data using an API',done : false,}
])

const addItem = (item) => {
  const id = items.length+1;
  const newItem = {todo:item,id,done:false};
  setItems([...items,newItem]);
}

const toggleComplete = (id) =>{
  //setItems(items.filter((item)=>item.id!==id));
  setItems(items.map((item)=> item.id === id ? {...item,done : !item.done} : item));
}
  return (
    <div className="App">
      <Header onClick={()=> setShowAddItem(!showAddItem)} showAdd={showAddItem}/>
      {showAddItem && <AddItem onAdd={addItem}/>}
      { items.length ? <Checklist items = {items} toggleComplete={toggleComplete}/> : <h4>No items to display !</h4>} 
    </div>
  );
}

export default App;
