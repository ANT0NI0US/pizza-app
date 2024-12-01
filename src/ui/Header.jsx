import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

export default function Header() {
  return (
    <header className="flexBetween bg-yellow-500 px-4 py-3 uppercase shadow-md sm:px-6">
      <Link to="/" className="font-bold tracking-widest">
        Fast Pizza
      </Link>
      <div className="flex items-center gap-2">
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
}
