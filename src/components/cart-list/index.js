import React from 'react';
import { useState, useEffect, useContext } from 'react';
import ResumePrice from '../resume-price';
import Coffee from '../coffee';
import { store } from '../../store';
import { removeCoffee } from '../../redux/slices/cartSlice';
import { countContext } from '../../context/countContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const CartList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { decrementCount } = useContext(countContext);

    const [coffeesList, setCoffeeList] = useState(store.getState().cart.coffees);
    const [price, setPrice] = useState(coffeesList.length >= 1 ? coffeesList.map(item => item.price * item.quantity).reduce((acc, current) => acc += current) : 0);

    const remove = (id) => {
        dispatch(removeCoffee(id));
        setCoffeeList(store.getState().cart.coffees)
        decrementCount()
    }

    useEffect(() => {
    setPrice(coffeesList.length >= 1 ? 
            coffeesList.map(item => item.price * item.quantity)
            .reduce((acc, current) => acc += current) : 0)
    }, [coffeesList])

    return (
        <div className='col'>
            <span className="cart-title">Cafés selecionados</span>
            <div className='container cart-resume-card d-flex flex-column justify-content-end mt-3 mb-0 me-0 ms-0'>

                {price > 0 ?
                    <div className='overflow-container mb-2'>
                        {coffeesList.map(item => {
                            return (
                                <Coffee img={item.img} name={item.name} price={item.price} quantity={item.quantity} id={item.id} remove={remove} />
                            )
                        })}
                    </div> : <div className='cart-message'>Carrinho vazio</div>}

                <div className='row d-flex align-items-center justify-content-center flex-column'>
                    {price > 0 ?
                        <>
                            <div className='col'>
                                <ResumePrice price={price} />
                            </div>
                            <div className='col d-flex align-items-center justify-content-center'>
                                <button type='submit' form='my-form' className='w-100 resume-button-container mt-4 rounded-2 border-0'>Confirmar pedido</button>
                            </div>
                        </>
                        :
                        <div className='col mt-5 d-flex align-items-center justify-content-center'>
                            <button onClick={() => navigate("/")} className='w-100 resume-button-container mt-4 rounded-2 border-0'>Adicionar produtos</button>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default CartList