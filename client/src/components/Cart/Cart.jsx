import "./Cart.scss";

import { MdClose } from "react-icons/md"
import { BsCartX } from "react-icons/bs"
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";

const Cart = ({ setShowCart }) => {
    const { cartItems, cartSubTotal } = useContext(Context)
    return (
        <div className="cart-pannel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={() => setShowCart(false)}>
                        <MdClose />
                        <span className="text">close</span>
                    </span>
                </div>

                {!cartItems?.length && <div className="empty-cart">
                    <BsCartX />
                    <span>No product in cart</span>
                    <button className="return-cta">RETURN TO SHOP</button>
                </div>}

                {!!cartItems?.length && <>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Total: </span>
                            <span className="text total">{cartSubTotal}&#36;</span>
                        </div>
                        <div className="button">
                            <button className="checkout-cta">Buy online</button>
                        </div>
                    </div>
                </>}

            </div>
        </div>
    )
};

export default Cart;
