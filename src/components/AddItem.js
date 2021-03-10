import {useState} from 'react';

const AddItem = ({onAdd}) => {
    const [taskName,setTaskName] = useState('');

    const saveItem = (e) =>{
        e.preventDefault();
        if (!taskName){
            alert('Task name cannot be empty !');
            return;
        }
        onAdd(taskName);
        setTaskName('');
    }
    return (
        <form className="form-container" onSubmit={saveItem}>
            <input className="form-control" 
                type='text' 
                placeholder="Enter a task"
                value = {taskName}
                onChange={(e)=> setTaskName(e.target.value)}
            />
            <button className="submit-btn" type="submit">Save Item</button>
        </form>
    )
}

export default AddItem
