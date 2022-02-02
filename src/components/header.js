
const Header = ({changePage})=>{
    return (
        <div className="header">
        <div onClick={()=>{changePage(1)}} className="tab">one</div>
        <div onClick={()=>{changePage(2)}} className="tab">two</div>
        </div>
    )
}

export default Header;