//import Button from './Button';
import {Button} from 'carbon-components-react';
import {EditOff16,Edit16} from '@carbon/icons-react';
const Header = ({onClick,showAdd}) => {
    const buttonStyling = {
        "backgroundColor":"rgb(60, 73, 194)",
        "fontSize":"14px"
    }
    return (
        <div className="inline">
            <h1>Checklist App</h1>
            { showAdd ? 
                <Button onClick={onClick} renderIcon={EditOff16} iconDescription="Add Items" style={buttonStyling}>Close</Button> : 
                <Button onClick={onClick} renderIcon={Edit16} iconDescription="Add Items" style={buttonStyling}>Add Items</Button>
                //<Button onClick={onClick} text={showAdd ?  'Close' : 'Add Items'} />
            }
        </div>
    )
    
}

export default Header
