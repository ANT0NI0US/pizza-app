import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button
      AriaLabel="delete item"
      type="danger"
      Styles="!px-4 !py-2 md:!px-5 md:!py-2.5 !text-xs"
      onClick={() => dispatch(deleteItem(pizzaId))}
    >
      Delete
    </Button>
  );
}
