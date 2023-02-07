import { Trash } from "phosphor-react";

const Coffee = (props) => {

    return (
        <div className='resume-card-content'>
            <div className='row d-flex align-items-center'>
                <div className='col'>
                    <img className='resume-img' src={props.img} alt="cafe"></img>
                </div>
                <div className='col'>
                    <div className='row me-0'>
                        <div className='col mb-2'>
                            <span className='card-resume-title'>{props.name}</span>
                        </div>
                        <div className='col d-flex align-items-center'>
                            <div className="coffee-quantity rounded-2 d-flex align-items-center justify-content-center me-2">
                                <span className="coffee-quantity-text">Qnt: {props.quantity}</span>
                            </div>
                            <div className='remove-button d-flex align-items-center justify-content-center rounded-2 text-uppercase'
                                 onClick={ () => props.remove(props.id)} 
                            >
                                <Trash className='pe-1' size={16} color='#8047F8' />
                                remover
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <span className='resume-price me-2'>R$ {props.price}</span>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Coffee;