import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"

import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import { Context } from "../../utils/context"

import "./Header.scss";
const Header = () => {

    const [scrolled, setScrolled] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const { cartCount } = useContext(Context)
    const navigate = useNavigate()

    const handleScroll = () => {
        const offsett = window.scrollY
        if (offsett > 100) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        {/* <li>About</li>
                        <li>Categories</li> */}
                    </ul>

                    <div className="center">Jewelry Mersanka</div>

                    <div className="right">
                        <TbSearch onClick={() => { setShowSearch(true) }} />
                        <span className="cart-icon" onClick={() => { setShowCart(true) }}>
                            <CgShoppingCart />
                            <span>{cartCount}</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setSearchModal={setShowSearch} />}
        </>
    )
}

export default Header;
