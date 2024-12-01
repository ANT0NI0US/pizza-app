import { Link, useNavigate } from 'react-router-dom';

export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';

  if (to === '-1')
    return (
      <button
        aria-label="navigate to the previous page"
        className={className}
        onClick={() => navigate(-1, { replace: true })}
      >
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
