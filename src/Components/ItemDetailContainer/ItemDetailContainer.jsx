import { useEffect, useState } from "react"
import { BsChevronDoubleLeft } from "react-icons/bs"
import { getProductById, getProducts, getProductos , getCity} from "../../service/asyncMock"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {
    const [city, setCity] = useState({ title: "loading", price: "--,--" });

    let params = useParams();

    function handleAddToCart(count) {
        console.log(
            `Agregaste al carrito ${count} unidades del producto ${city.title}`
        );
    }

    useEffect(() => {
        getCity(params.itemid)
            .then((respuesta) => {
                setCity(respuesta);
            })
            .catch((error) => alert(error));
    }, []);

    return (
        <ItemDetail
            onAddToCart={handleAddToCart}
            title={city.title}
            imgurl={city.imgurl}
            category={city.category}
            price={city.price}
        />
    );
}

export default ItemDetailContainer;

