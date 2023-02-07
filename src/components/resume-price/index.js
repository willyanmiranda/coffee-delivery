const ResumePrice = (props) => {
    return (
        <div className='row gap-3 d-flex flex-column'>
            <div className='col d-flex justify-content-between'>
                <div className='resume-itens'>Total de itens</div>
                <div className='resume-itens-price'>R$ {props.price}</div>
            </div>
            <div className='col d-flex justify-content-between'>
                <div className='resume-itens'>Entrega</div>
                <div className='resume-itens-price'>{props.price > 0 ? "R$ 5" : "R$ 0"} </div>
            </div>
            <div className='col d-flex justify-content-between'>
                <div className='resume-total'>Total</div>
                <div className='resume-total-price'>R$ {props.price > 0 ? props.price + 5 : 0}</div>
            </div>
        </div>
    )
}

export default ResumePrice;