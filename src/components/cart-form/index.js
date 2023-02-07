import { Formik, Field, Form } from 'formik';
import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank } from "phosphor-react";
import { useState } from 'react';
import Coffee from '../coffee';
import { useDispatch } from 'react-redux';
import { addCep, addAdress, addNumber, addComplement, addCity, addState, addNeighborhood, addPayment } from '../../redux/slices/orderSlice';
import { removeCoffee } from '../../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import { store } from '../../store';
import ResumePrice from '../resume-price';

const CartForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState("Cartão de crédito");
    const [coffeesList, setCoffeeList] = useState(store.getState().cart.coffees);
    const [price, setPrice] = useState( coffeesList.length >= 1 ? coffeesList.map(item => item.price * item.quantity).reduce((acc, current) => acc += current) : 0);
    console.log(price)


    const onSubmit = (values, actions) => {
        dispatch(addCep(values.cep));
        dispatch(addAdress(values.adress));
        dispatch(addNumber(values.number));
        dispatch(addComplement(values.complement));
        dispatch(addCity(values.city));
        dispatch(addState(values.state));
        dispatch(addNeighborhood(values.neighborhood));
        dispatch(addPayment(paymentMethod)); 
        navigate("/confirm")
    }

    const remove = (id) => {
        let coffeesToAdd = coffeesList.filter(item => item.id !== id);
        setCoffeeList(coffeesToAdd);
        dispatch(removeCoffee(id));
        let coffee = coffeesList.filter(item => item.id === id);
        setPrice(price - coffee[0].price);
    }
    
    return (
        <div className="container mt-4 pt-1" id='cart'>
            <div className='row'>
                <div className='col'>
                    <span className="cart-title">Complete seu pedido</span>
                    <div className="container rounded-3 mt-3 mb-0  me-0 ms-0 cart-form-container">
                        <div className="cart-nav d-flex">
                            <MapPinLine color="#C47F17" size={22} />
                            <div className="cart-text-container d-flex flex-column ps-2">
                                <span className="cart-text-title"> Endereço de Entrega</span>
                                <span className="cart-text-subtitle">Informe o endereço onde deseja receber seu pedido</span>
                            </div>
                        </div>
                        <Formik
                            onSubmit={onSubmit}
                            initialValues={{
                                cep: '',
                                adress: '',
                                number: '',
                                complement: '',
                                neighborhood: '',
                                city: '',
                                state: '',
                            }}>

                                <Form id='my-form' class="row g-3 mt-3">
                                    <div class="col-md-4">
                                        <Field name="cep" type="number" placeholder="CEP" class="form-control" id="input" required/>
                                    </div>
                                    <div class="col-12">
                                        <Field name="adress" type="text" class="form-control" id="input" placeholder="Rua" required />
                                    </div>
                                    <div class="col-4">
                                        <Field name="number" type="number" class="form-control" id="input" placeholder="Número" required />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="input-group mb-0">
                                            <Field name="complement" type="text" class="form-control" id="input" placeholder="Complemento" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <span class="input-group-text" id="input-span">Opcional</span>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <Field name="neighborhood" type="text" class="form-control" id="input" placeholder="Bairro" required/>
                                    </div>
                                    <div class="col-md-6">
                                        <Field name="city" type="text" class="form-control" id="input" placeholder="Cidade" required/>
                                    </div>
                                    <div class="col-md-2">
                                        <Field name="state" type="text" class="form-control" id="input" placeholder="UF" required/>
                                    </div>
                                </Form>
                            </Formik>
                    </div>
                    <div className='container cart-payment rounded-3 mt-3'>
                        <div className="text-payment d-flex">
                            <CurrencyDollar size={22} color="#8047F8" />
                            <div className="payment-text-container d-flex flex-column ps-2">
                                <span className="title-payment">Pagamento</span>
                                <span className="subtitle-payment">O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                            </div>
                        </div>
                        
                        <div className='row payment-options-container justify-content-center gap-2'>
                            <div className='col-4 payment-option d-flex align-items-center justify-content-center rounded-3 p-3'
                            onClick={() => setPaymentMethod("Cartão de crédito")}
                            id={paymentMethod === "Cartão de crédito" ? 'payment-selected' : ""}
                            >
                                <CreditCard size={16} color="#8047F8" />
                                <span className='option-text text-uppercase ps-2'>Cartão de crédito</span>
                            </div>
                            <div className='col-4 payment-option d-flex align-items-center justify-content-center rounded-3 p-3'
                            onClick={() => setPaymentMethod("Cartão de débito")}
                            id={paymentMethod === "Cartão de débito" ? 'payment-selected' : ""}
                            >
                                <Bank size={16} color="#8047F8" />
                                <span className='option-text text-uppercase ps-2'>Cartão de débito</span>
                            </div>
                            <div className='col-4 payment-option d-flex align-items-center justify-content-center rounded-3 p-3'
                            onClick={() => setPaymentMethod("Dinheiro")}
                            id={paymentMethod === "Dinheiro" ? 'payment-selected' : ""}
                            >
                                <Money size={16} color="#8047F8" />
                                <span className='option-text text-uppercase ps-2'>Dinheiro</span>
                            </div>
                        </div>
                    </div>
                    <div>....</div>
                </div>
                <div className='col'>
                    <span className="cart-title">Cafés selecionados</span>
                    <div className='container cart-resume-card d-flex flex-column justify-content-end mt-3 mb-0 me-0 ms-0'> 

                        {price > 0 ? 
                        <div className='overflow-container mb-2'>
                            {coffeesList.map(item => {
                                return(
                                    <Coffee img={item.img} name={item.name} price={item.price} quantity={item.quantity} id={item.id} remove={remove} />
                                )
                            })}
                        </div> : <div className='cart-message'>Carrinho vazio</div>}

                        <div className='row d-flex align-items-center justify-content-center flex-column'>
                            <div className='col'>
                                <ResumePrice price={price} />
                            </div>
                            <div className='col d-flex align-items-center justify-content-center'>
                                <button type='submit' form='my-form' className='w-100 resume-button-container mt-4 rounded-2 border-0'>Confirmar pedido</button>  
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartForm;