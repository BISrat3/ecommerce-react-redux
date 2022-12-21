// if we need to select data from Redux when need to useSelector from Redux
import { useSelector } from "react-redux"
import CartItem from "./CartItem"
import Card from "../UI/Card"
import classes from './Cart.module.css'

export default function Cart(props) {
    const cartItems = useSelector((state) => state.cart.items)

  return (
    <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
            {cartItems.map((item) => (
                <CartItem 
                    key={item.id}
                    item= {{
                    id: item.id,
                    title: item.name, 
                    quantity: item.quantity, 
                    total: item.totalPrice,
                    price: item.price}}
                />
            ))}
        </ul>
    </Card>
  )
}
