import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

export default function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flexBetween bg-textColor px-4 py-8 text-sm uppercase text-light sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-light sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link
        to="/cart"
        className="transition-all duration-300 hover:text-yellow-500"
      >
        Open cart &rarr;
      </Link>
    </div>
  );
}
