function AddToCart({ product, cart, increment, decrement }) {
  // inc
  // dec
  function increase() {
    increment(product);
  }
  function decrease() {
    decrement(product);
  }
  const quantity = cart[product.id] ? cart[product.id].quantity : 0;
  if (quantity === 0) {
    return (
      <div>
        <button onClick={increase}>Add To Cart</button>
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
