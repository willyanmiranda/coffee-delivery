import Illustration from "../../assets/Illustration.png"
import Circle from "../utils/circle";
import { MapPin, CurrencyDollar, Timer } from "phosphor-react";
import { store } from "../../store";
import { useState } from "react";

const Confirm = () => {

    const [adress] = useState(store.getState().order.adress)
    const [number] = useState(store.getState().order.number)
    const [city] = useState(store.getState().order.city)
    const [state] = useState(store.getState().order.state)
    const [neighborhood] = useState(store.getState().order.neighborhood)
    const [payment] = useState(store.getState().order.payment)

    return(
        <div className="container confirm-container">
            <div className="row d-flex align-items-end">
            <div className="col">
                <div className="row d-flex flex-column">
                    <div className="col d-flex flex-column mb-4">
                        <span className="confirm-title">Uhu! Pedido confirmado</span>
                        <span className="confirm-subtitle">Agora é só aguardar que logo o café chegará até você</span>
                    </div>
                    <div className="col mt-3">
                        <div className="container m-0 confirm-card">
                            <div className="row mb-4">
                                <div className="col d-flex pb-2">
                                    <Circle color={"#8047F8"} icon={<MapPin weight="fill" color="#FFFFFF" size={16} />} />
                                    <div className="d-flex flex-column ms-2">
                                        <span className="adress-title ps-1">Entrega em <span className="adress">{adress}, {number}</span></span>
                                        <span className="city ps-1">{neighborhood} - {city}, {state}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col d-flex pb-2">
                                    <Circle color={"#DBAC2C"} icon={<Timer weight="fill" color="#FFFFFF" size={16} />} />
                                    <div className="d-flex flex-column ms-2">
                                        <span className="time-title ps-1">Previsão de entrega</span>
                                        <span className="time ps-1">20 min - 30 min </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex">
                                    <Circle color={"#C47F17"} icon={<CurrencyDollar weight="fill" color="#FFFFFF" size={16} />} />
                                    <div className="d-flex flex-column ms-2">
                                        <span className="payment-title ps-1">Pagamento na entrega</span>
                                        <span className="payment ps-1">{payment}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <img className="confirm-img" src={Illustration} alt="illustration"></img>
            </div>
        </div>
        </div>
    )
}

export default Confirm;