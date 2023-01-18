import { useEffect, useState } from "react"
//import { BsChevronDoubleLeft } from "react-icons/bs"
import { getProductById} from "../../service/asyncMock"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);

    let params = useParams();

    function handleAddToCart(count) {
        console.log(
            `Agregaste al carrito ${count} unidades del producto ${producto.title}`
        );
    }

    useEffect(() => {
        getProductById(params.itemid)
            .then((respuesta) => {
                setProducto(respuesta);
            })
            .catch((error) => alert(error));
    }, []);

    console.log(producto.img);
    return (
        <ItemDetail
            onAddToCart={handleAddToCart}
            title={producto.name}
            img={producto.img}
            category={producto.category}
            price={producto.price}
            description={producto.description}
        />
    );
}

