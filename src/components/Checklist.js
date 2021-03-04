import Item from "./Item"
const Checklist = ({items,toggleComplete}) => {
    return (
        <div>
            {items.map(item =>
            <Item key={item.id} item={item} toggleComplete={toggleComplete}/>)}
        </div>
    )
}

export default Checklist
