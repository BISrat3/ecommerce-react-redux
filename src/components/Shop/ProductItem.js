import classes from './ProductItem.module.css'
import Card from '../UI/Card'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cart-slice'
import classes from './ProductItem.module.css'

const ProductItem =(props) => {
    // useSelector to select the entire cart from cart
    // const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch()
    const { title, price, description, id } = props

    const addToCartHandler = () =>{
        dispatch(
            cartActions.addItemToCart({
            id,
            title,
            price,
        }))
        // const newTotalQuantity = cart.newTotalQuantity + 1;
        // // create copy via slice to avoid mutatng
        // const updatedItems = cart.items.slice();
        // const existingItem = updatedItems.find((item) => item.id === id)
        // if(existingItem){
        //     // new object + copy exiting properties 
        //     const updatedItem = {...existingItem}
        //     updatedItem.quantity++;
        //     updatedItem.price = updatedItem.price + price;
        //     const existingItemIndex = updatedItems.findIndex(
        //         (item) => item.id === id
        //     )
        //     updatedItems(existingItemIndex) = updatedItem
        // }else {
        //     updatedItems.push ({
        //         id:id,
        //         price:price,
        //         quantity:1,
        //         totalPrice:price,
        //         name:title,
        //     })
        // }
        // const newCart ={
        //     totalQuantity: newTotalQuantity,
        //     items: updatedItems,
        // }
        // dispatch(cartActions.replaceCart(newCart))
    }

  return (
    <li className={classes.item}>
        <Card>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>${price.toFixed(2)}</div>
            </header>
            <p>{description}</p>
            <div className={classes.actions}>
                <button onClick={addToCartHandler}>Add to Cart</button>
            </div>
        </Card>
    </li>
  )
}

export default ProductItem