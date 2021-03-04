import Button from './Button';
const Header = ({onClick,showAdd}) => {
    return (
        <div className="inline">
            <h1>Checklist App</h1>
            <Button onClick={onClick} text={showAdd ?  'Close' : 'Add Items'} />
        </div>
    )
}

export default Header
