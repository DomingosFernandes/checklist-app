import { useState, useEffect} from 'react';
import Header from './Header';
import Checklist from './Checklist';
import AddItem from './AddItem';
import {Button} from 'carbon-components-react';
import {Power16} from '@carbon/icons-react';
export default function Main({userID,setUserID,setSignInOrSignUp,setSignedIn}) {
    const [showAddItem,setShowAddItem] = useState(false);
    const [items,setItems] = useState([]);

    useEffect(()=>{
        async function getData(userID) {
        let response = await fetch(`http://localhost:9000/users/${userID}`);
        let result = await response.json();
        let list = result.data;
        let data = [];

        for (let index=0;index<list.length;index++){
            let {ITEM_DONE,ITEM_NAME} = list[index];
            data.push({id:index+1,todo:ITEM_NAME,done:ITEM_DONE});
        }
        setItems(data);
        }
        getData(userID);
        
    },[userID]);


    const addItem = (item) => {
        const id = items.length+1;
        const newItem = {todo:item,id,done:0};
        fetch(`http://localhost:9000/users/${userID}`,{
        method:'POST',
        cors:'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({ITEM_NAME:item,ITEM_DONE:0}),
        });
        setItems([...items,newItem]);
    }

    const toggleComplete = (id) =>{
        setItems(items.map((item)=> item.id === id ? {...item,done : !item.done} : item));
    }
    return (
        <div className="main">
            <Header onClick={()=> setShowAddItem(!showAddItem)} showAdd={showAddItem}/>
            {showAddItem && <AddItem onAdd={addItem}/>}
            { items.length ? <Checklist items = {items} toggleComplete={toggleComplete}/> : <h4 className="inline">Please wait,loading...</h4>} 
            <Button kind="danger--tertiary" renderIcon = {Power16} iconDescription="Sign Out" onClick={()=>{setSignInOrSignUp(0);setSignedIn(false);}}>Sign Out</Button>
        </div>
    )
}

//->https://www.carbondesignsystem.com/components/loading/usage/
//->https://react.carbondesignsystem.com/?path=/docs/components-loading--default
//->https://www.carbondesignsystem.com/developing/react-tutorial/step-1
//->https://www.carbondesignsystem.com/guidelines/icons/library