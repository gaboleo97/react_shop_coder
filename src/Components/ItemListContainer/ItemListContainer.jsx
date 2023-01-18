
/*export const ItemListContainer = (greeting) => {


    return (
        <>
        <p>{greeting.text}</p>
        </>
    )
}
*/

import { useEffect, useState } from "react"
import { listProducts, getProductos, getProductByCategory } from "../../service/asyncMock"
//import { ItemList } from "../ItemList/ItemList"
import { Item } from "../Item/Item"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    let { categoryid } = useParams();

    console.log("Renderizmos ILC");

    useEffect(() => {
        if (!categoryid) {
            getProductos()
                .then((respuesta) => {
                    setItems(respuesta);
                })
                .catch((error) => alert(error));
        } else {
            getProductByCategory(categoryid).then((respuesta) => {
                setItems(respuesta);
            });
        }
    }, [categoryid]);
    // console.log(categoria);
    // const categoria = "remeras"
    useEffect(() => {
        getProductos()
            .then(res => setItems(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    {items.map((itemIterado) => {
                        return <Item key={itemIterado.id} item={itemIterado} />;
                    })}
                </div>
            </div>

        </>
    )
}
