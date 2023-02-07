import { ShoppingCart } from "phosphor-react";

const CartIcon = (props) => {

    return (
        <div className="cart-container d-flex" onClick={ () => props.addCoffeeToCart(props.id) }>
            <div className={props.class}>
                <ShoppingCart color={props.color} weight="fill" size={22} />
                {props.content}
            </div>
        </div>
    )
}

export default CartIcon;