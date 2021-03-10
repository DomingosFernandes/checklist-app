import {useState} from 'react';
import {Button} from 'carbon-components-react';
import {PinFilled16} from '@carbon/icons-react';
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
            <Button 
                renderIcon={PinFilled16}
                iconDescription="Save Item"
                type="submit"
            >Save item !</Button>

        </form>
    )
}

export default AddItem
