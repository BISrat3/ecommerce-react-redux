import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
import classes from './CartButton.module.css'

const CartButton =(props) => {
    const dispatch = useDispatch()
    const cartQuantity = useSelector((state)=> state.cart.totalQuantity)
    //   add another function handler - toggle handler- for hiding and showing the cart
     
    const toggleCartHandler = () => {
        // when we execute this action operators they return action objects - then this return action object dispatch as follow
        dispatch(uiActions.toggle())
    }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
        <span>
            My Cart
        </span>
        <span className={classes.badge}>{cartQuantity}</span>
    </button>
  )
}

export default CartButton