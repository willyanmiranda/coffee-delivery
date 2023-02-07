import Card from "../card";
import Data from "../../data/data.js"

const CoffeeList = () => {

    return(
        <div className="container" id="coffee-container">
            <span className="list-title">Nossos cafés</span>
            <div className="coffee-list mt-5 pt-3">
                {Data.map(item => { 
                    return(
                        <Card
                        especial={item.especial}
                        alcoolico={item.alcoolico}
                        gelado={item.gelado} 
                        leite={item.leite}
                        tradicional={item.tradicional}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        img={item.img}
                        id={item.id}
                    />
                    )
                })}
            </div>
        </div>
    )
} 

export default CoffeeList;