import { Timer, Package, Coffee, ShoppingCart } from "phosphor-react";
import image from "../../assets/Imagem.png"
import Circle from "../utils/circle";

const Home = () => {
    return(
        <div className="container" id="home">
            <div className="row">
                <div className="col me-2">
                    <div className="row d-flex flex-column">
                        <div className="col mb-5">
                            <div className="container-title pb-3">
                                <span className="home-title">
                                Encontre o café perfeito para qualquer hora do dia
                                </span>
                            </div>
                            <div className="container-subtitle">
                                <span className="home-subtitle">
                                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                                </span>
                            </div>
                        </div>

                        <div className="col mt-4">
                            <div className="row">
                                <div className="col">
                                    <div className="item-container pb-4">
                                        <Circle color={"#C47F17"} icon={<ShoppingCart color="white" weight="fill" size={16} />}/>
                                       <span className="text-item">Compra simples e segura</span>
                                    </div>
                                    <div className="item-container">
                                        <Circle color={"#DBAC2C"} icon={<Timer color="white" weight="fill" size={16} />}/>
                                        <span className="text-item">Entrega rápida e rastreada</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="item-container pb-4">
                                        <Circle color={"#574F4D"} icon={<Package color="white" weight="fill" size={16} />}/>
                                        <span className="text-item">Embalagem mantém o café intacto</span>
                                    </div>
                                    <div className="item-container">
                                        <Circle color={"#8047F8"} icon={<Coffee color="white" weight="fill" size={16} />}/>
                                        <span className="text-item">O café chega fresquinho até você</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col ms-5">
                    <img src={image} alt="imagem" className="home-img"></img>
                </div>
            </div>
        </div>
    )
}

export default Home;