import Header_Navbar from "./Header_Navbar";
import Header_Bg from './Header_bg';
import Header_Product from './Header_product'
import './Header.scss';
function Header() {
    return (
        <div className="Header">
            <Header_Navbar />
            <Header_Bg />
            <Header_Product />
        </div>
    )
}

export default Header;