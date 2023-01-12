import {useState} from "react";
import "./ItemCount.css";

export const ItemCount = ({ onAddToCart }) => {
    const [count, setCount] = useState(0);

    function handleAdd() {
        // count < stock
        setCount(count + 1);
    }

    function handleSubstract() {
        // validar -1 -2
        setCount(count - 1);
    }

    return (
        <div className="itemcount_container">
            <small>Agregá la cantidad deseada al carrito</small>
            <div className="itemcount_control">
                <a className="btn btn-primary" onClick={handleSubstract}>-</a>
                <span className="itemcount_count">{count}</span>
                <a className="btn btn-primary"  onClick={handleAdd}>+</a>
            </div>

            <div className="itemcount_btns">
                <a className="btn btn-primary" onClick={() => onAddToCart(count)}>Agregar al carrito</a>
            </div>
        </div>
    );
}
