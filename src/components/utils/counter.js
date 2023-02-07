import { Plus, Minus} from "phosphor-react";

const Counter = (props) => {
    return(
        <div style={{height: props.height}} className="card-counter rounded-2 d-flex align-items-center justify-content-center me-2">
            <Minus size={14} weight="fill" color="#8047F8" onClick={props.subtrair} />
            <span className="card-counter-value px-1">{props.counter}</span>
            <Plus size={14} weight="fill" color="#8047F8" onClick={props.somar} />
        </div>
    )
}

export default Counter;