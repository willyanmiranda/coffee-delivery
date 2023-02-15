import { Formik, Field, Form } from 'formik';
import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank } from "phosphor-react";
import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../redux/slices/orderSlice';
import { useNavigate } from 'react-router-dom';
import { adressContext } from '../../context/adressContext';

const CartForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { modifyAdress } = useContext(adressContext)

    const [paymentMethod, setPaymentMethod] = useState("Cartão de crédito");

    const onSubmit = (values, actions) => {
        modifyAdress({
            city: values.city,
            uf: values.state
        })
        values.payment = paymentMethod;
        dispatch(addOrder(values)); 
        navigate("/confirm")
    }
    
    return (
            
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
    )
}

export default CartForm;