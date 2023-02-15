import CartForm from "../cart-form";
import CartList from "../cart-list";

const Cart = () => {
    return(
        <div className="container mt-4 pt-1" id='cart'>
            <div className="row">
                <CartForm />
                <CartList />
            </div>
        </div>
    )
}

export default Cart;