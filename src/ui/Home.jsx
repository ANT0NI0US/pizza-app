import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

export default function Home() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);

  function handleNavigateToMenu() {
    navigate('/menu');
  }

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The Best Pizza
        <br />
        <span className="text-secondary">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button AriaLabel="continue ordering" onClick={handleNavigateToMenu}>
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}
