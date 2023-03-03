import './Navbar.css'
const Navbar = () => {
    const displayMenu = () => {
        let menu=document.getElementsByClassName("menu")[0]
        if(menu.style.display==="none" || menu.style.display===""){
            menu.style.display="block"
        }
        else {
            menu.style.display="none"
        }
        
    }
    return (
        <header>
            <nav className="nav">
                <svg onClick={displayMenu} id='menubtn' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z"/>
                </svg>
                <h1>chat app</h1>
            </nav>
        </header>
    );
}
export default Navbar;

