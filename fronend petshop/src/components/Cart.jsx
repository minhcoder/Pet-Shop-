import { CartContext } from "./CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
const Cart = () => {
  const { myCart, total, addToCart, setTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckout= ()=>{
    setTotal(0);
    addToCart([{}]);
  }
  const handleGoHome = ()=>{
    navigate("/");
  }
  return (
    <>
      <section className="cart-container">
        <div className="cart-header">CHECKOUT:</div>
        <div className="cart-items">
          {myCart.slice(1).map((item) => {
            return (
              <>
                <div className="cart-item">
                  <img className="cart-item-img" src={item.imageUrl} alt="" />
                  {item.name} : {item.price}$
                </div>
              </>
            );
          })}
          <div className="cart-total"> TOTAL: {total}$ </div>
        </div>
        <button className="cart-checkout" onClick={handleCheckout}> DONE </button>
        <button className="cart-gohome" onClick={handleGoHome}> Go back home </button>
      </section>
    </>
  );
};

export default Cart;