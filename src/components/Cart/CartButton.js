import React from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
import classes from './CartButton.module.css'

export default function CartButton(props) {
    const dispatch = useDispatch()
    //   add another function handler - toggle handler- for hiding and showing the cart
     
    const toggleCartHandler = ()=> {
        // when we execute this action operators they return action objects - then this return action object dispatch as follow
        dispatch(uiActions.toggle())
    }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
        <span>
            My Cart
        </span>
        <span className={classes.badge}>1</span>
    </button>
  )
}
