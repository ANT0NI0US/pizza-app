export default function Button({
  children,
  disabled,
  type = 'primary',
  onClick,
  AriaLabel,
  Styles,
}) {
  const base =
    'inline-block text-sm rounded-full font-semibold uppercase tracking-wide transition-all duration-300 px-4 py-2.5 md:px-6 md:py-3.5 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary:
      'text-textColor bg-yellow-500 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300',
    danger:
      'text-red-400 hover:text-white hover:bg-red-400 focus:bg-red-400 focus:text-white focus:ring-red-400 border-2 border-red-400',
  };

  return (
    <button
      aria-label={AriaLabel}
      disabled={disabled}
      className={`${base} ${styles[type]} ${Styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
