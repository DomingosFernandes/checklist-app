import { FcCheckmark } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
const Item = ({item,toggleComplete}) => {
    return (
        <div className={`inline item ${item.done ? 'done' : ''}`}>
            <h3>{item.id}.{item.todo}</h3>
            { 
               item.done ? 
               <FaTimes onClick={() => toggleComplete(item.id)} style = {{ cursor : "pointer"}}/>:
               <FcCheckmark onClick={() => toggleComplete(item.id)} style = {{ cursor : "pointer"}}/> 
            }
            
        </div>
    )   
}

export default Item
