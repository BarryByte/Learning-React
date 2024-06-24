import { UseDispatch, useDispatch, useSelector } from "react-redux";
function AddToCart({ product }) {
  console.log("add to cart", product.id);
  let dispatch = useDispatch();
  function increase() {
    //dispatch({type: , payload: })

    dispatch({ type: "Add_to_cart", payload: product.id });
  }
  function decrease() {
    //dispatch({type: , payload: })
    dispatch({ type: "Remove_from_cart", payload: product.id });
  }

  let cart = useSelector((state) => {
    return store.cart;
    
  })

  const quantity = cart[product.id] ? cart[product.id].quantity : 0;
  if (quantity === 0) {
    return (
      <div>
        <button onClick={increase}>AddToCart</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={decrease}>-</button>
        <span>{quantity}</span>
        <button onClick={increase}>+</button>
      </div>
    );
  }
}
export default AddToCart;
