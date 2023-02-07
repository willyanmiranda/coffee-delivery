const Circle = (props) => {
    return(
        <div className="circle rounded-circle d-flex align-items-center justify-content-center" style={{backgroundColor: props.color, color: props.color}}>{props.icon}</div>
    )
}

export default Circle;