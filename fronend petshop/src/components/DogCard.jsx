import { useContext,useState } from "react";
import { CartContext } from "./CartContext";
const DogCard = (props) => {
  const { addToCart, total, setTotal } = useContext(CartContext);
  const { id, name, breed, description, price, imageUrl } = props;
  const [isAdded, setAdded] = useState(false);
  const handleClick = () => {
    setAdded(true);
    const newItems = {
      name: name,
      price: price,
      imageUrl:imageUrl,
    };
    addToCart((myCart) => [...myCart, newItems]);
    setTotal((total) => (total += Number(price)));
  };
  return (
    <>
      <section className="dogs">
        <div className="dogs-info">
          <p>{name}</p>
          <p> {breed} </p>
        </div>
        <div className="dogs-img-container">
          <img className="dog-img" src={imageUrl} alt={`picture of: ${name}`} />
        </div>
        <div className="dogs-desc">{description}</div>
        <div className="dogs-price">{price}$</div>
        {isAdded ? (
          <button disabled className="dogs-btn-disabled" onClick={handleClick}>
            ADDED
          </button>
        ) : (
          <button className="dogs-btn" onClick={handleClick}>
            ADD TO CART
          </button>
        )}
      </section>
    </>
  );
};
export default DogCard;