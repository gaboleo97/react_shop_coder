import "./CartWidget.css";

import { BsFillCartFill } from 'react-icons/bs';


const CartWidget = () => {


  return (
    <div className="cartWidget">
      <BsFillCartFill />
      <p>{1}</p>
    </div>
  );
};

export default CartWidget;