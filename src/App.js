import { useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch
  const showCart = useSelector((state)=> state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)
// we need to select notification
const notification = useSelector((state) => state.ui.notification)

  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(uiActions.showNotification({
  //       status: 'pending',
  //       title: 'Sending...',
  //       message:'Sending cart data!',
  //     }))
      // const response = await 
      // // this data re-execute when ever our cart is changed 
      // fetch('https://ecommerce-fefd2-default-rtdb.firebaseio.com/cart.json',
      // // use post method to store new data
      // {
      //   // we use  put method to overwrite with the existing data
      //   method: 'PUT',
      //   body: JSON.stringify(cart),
      // })
      // if(!response.ok){
      //   throw new Error("Sending cart data failed")
      // //  or
      //   // dispatch(uiActions.showNotification({
      //   //   status: 'error',
      //   //   title: 'Error',
      //   //   message:'Sending cart data failed!',
      //   // }))
      // }
      // const responseData = await response.json()
      // dispatch(uiActions.showNotification({
      //   status: 'success',
      //   title: 'Success!',
      //   message:'Sent cart data successfully!',
      // }))
    // }
    // // if it is true will not sendcart data
    // if(isInitial){
    //   isInitial = false
    //   return
    // }
    // lets execute the data 
  //   sendCartData().catch((error)=>{
  //   //   dispatch(uiActions.showNotification({
  //   //       status: 'error',
  //   //       title: 'Error',
  //   //       message:'Sending cart data failed!',
  //   //     }))
  //   // })
  // },[cart, dispatch])

  useEffect(()=>{
    // used to fetch any cart data from the firebase 
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(()=> {
    if(isInitial){
        isInitial = false
        return
      }
      // dispatch cartdata
      dispatch(sendCartData(cart))
  }, [cart, dispatch()])

  return (
    <Fragment>
      {notification && 
        <Notification 
            status= {notification.status} 
            title={notification.title} 
            message={notification.message}
        /> }
      <Layout>
        {showCart && <Cart />}
        <Products/>
      </Layout>
    </Fragment>
  );
}

export default App;
