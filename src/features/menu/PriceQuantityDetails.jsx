import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import { formatCurrency } from '../../utils/helpers';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import DeleteItem from '../cart/DeleteItem';
import Button from '../../ui/Button';

export default function PriceQuantityDetails({ id, name, unitPrice, soldOut }) {
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <div className="mt-auto flex flex-col items-start justify-between gap-1 pt-[5px] sm:flex-row sm:items-center">
      {!soldOut ? (
        <p className="text-sm">{formatCurrency(unitPrice)}</p>
      ) : (
        <p className="text-sm font-medium uppercase text-secondary line-through">
          Sold out
        </p>
      )}

      {isInCart && (
        <div className="flex items-center gap-3 sm:gap-8">
          <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
          <DeleteItem pizzaId={id} />
        </div>
      )}

      {!soldOut && !isInCart && (
        <Button
          AriaLabel="add to cart"
          onClick={handleAddToCart}
          Styles="!px-4 !py-2 md:!px-5 md:1py-2.5 !text-xs"
        >
          Add to cart
        </Button>
      )}
    </div>
  );
}
