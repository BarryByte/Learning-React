import { useSelector } from "react-redux";

function Cart() {
    let cart = useSelector((state) => {
        return state.cart.items;
    })
    return (
        <div>
          <h2>Cart Items</h2>
          <ul>
            {Object.keys(cart).map((productId) => (
              <li key={productId}>
                {cart[productId].title} - Quantity: {cart[productId].quantity} Category: {cart[productId].category}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Cart;