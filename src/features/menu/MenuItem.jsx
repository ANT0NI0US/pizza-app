import PriceQuantityDetails from './PriceQuantityDetails';

export default function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex items-center gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-28 ${soldOut ? 'grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-secondary">
          {ingredients.join(', ')}
        </p>
        <PriceQuantityDetails
          id={id}
          name={name}
          unitPrice={unitPrice}
          soldOut={soldOut}
        />
      </div>
    </li>
  );
}
