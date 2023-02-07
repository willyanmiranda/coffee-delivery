import { useState } from "react";
import Cart from "../utils/cart";
import Counter from "../utils/counter";
import { useDispatch } from "react-redux";
import { addCoffee, addQuantity } from "../../redux/slices/cartSlice";

const Card = (props) => {

    const [counter, setCounter] = useState(1);
    const dispatch = useDispatch();

    const somar = () => {
        let value = counter;
        setCounter(value += 1)
    }

    const subtrair = () => {
        let value = counter;
        if(counter >= 2) {
            setCounter(value -= 1)
        } else {
            setCounter(1)
        }
    }

    const addCoffeeToCart = (id) => {
        dispatch(addQuantity(counter))
        dispatch(addCoffee(id))
        changeAlert()
    }

    const [alert, setAlert] = useState(false);

    const changeAlert = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 3000)
    }

    return (
        <div class="card mb-5 border-0 text-center d-flex justify-content-center align-items-center">
            <img className="coffee-img m-0" src={props.img} alt="cafe expresso" />
            <div class="card-body d-flex justify-content-center align-items-center flex-column mt-5">
                <div className="tag-container d-flex align-items-center justify-content-center mt-3 gap-2">        
                    {props.especial ? <p class="card-text rounded-5 mt-5 py-1 px-2">ESPECIAL</p> : ""}
                    {props.alcoolico ? <p class="card-text rounded-5 mb-3 mt-5 py-1 px-2">ALCOÓLICO</p> : ""}
                    {props.tradicional ? <p class="card-text rounded-5 mt-5 py-1 px-2">TRADICIONAL</p> : ""}
                    {props.leite ? <p class="card-text rounded-5 mt-5 mb-3 py-1 px-2">COM LEITE</p> : ""}
                    {props.gelado ? <p class="card-text rounded-5 mt-5 mb-3 py-1 px-2">GELADO</p> : ""}
                </div>
                <h5 class="card-title pt-2">{props.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted pt-2">{props.description}</h6>
            </div>
            <div className="card-footer border-0 d-flex mb-2 d-flex justify-content-center">
                <div className="price-container d-flex align-items-center me-4">
                    <span className="real pe-1">R$</span>
                    <span className="price">{props.price},00</span>
                </div>

                <Counter counter={counter} somar={() => somar()} subtrair={() => subtrair()} />
                
                <Cart id={props.id} addCoffeeToCart={addCoffeeToCart}  class={"card-cart d-flex align-items-center justify-content-center rounded-2"} color={"#F3F2F2"} />

            </div>
            {alert ? <span className='alert'>Adicionado ao carrinho</span> : "" }
        </div>
    )
}

export default Card;