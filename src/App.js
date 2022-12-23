import { useSelector } from "react-redux";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector((state)=> state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)


  useEffect(() => {
    const sendCartData = async () => {
      const response = await 
      // this data re-execute when ever our cart is changed 
      fetch('https://ecommerce-fefd2-default-rtdb.firebaseio.com/cart.json',
      // use post method to store new data
      {
        // we use  put method to overwrite with the existing data
        method: 'PUT',
        body: JSON.stringify(cart),
      })
      if(!response.ok){
        throw new Error("Sending cart data failed")
      }
      const responseData = await response.json()
    }
  },[cart])

  return (
    <Layout>
      {showCart && <Cart />}
      <Products/>
    </Layout>
  );
}

export default App;
