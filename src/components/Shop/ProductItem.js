import classes from './ProductItem.module.css'
import Card from '../UI/Card'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

export default function ProductItem(props) {
    const dispatch = useDispatch()
    const {title, price, description, id} = props

    const addToCartHandler = () =>{
        dispatch(cartActions.addItemToCart())
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
                <button>Add to Cart</button>
            </div>
        </Card>
    </li>
  )
}
