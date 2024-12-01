import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { clearCart, getCart } from './cartSlice';

export default function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleNavigateToNewOrder() {
    navigate('/order/new');
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-secondary/20 border-b border-b-secondary/20">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-center space-x-2 sm:justify-start">
        <Button AriaLabel="order new pizza" onClick={handleNavigateToNewOrder}>
          Order pizzas
        </Button>

        <Button
          AriaLabel="clear the cart"
          type="danger"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}
