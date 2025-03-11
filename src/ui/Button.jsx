import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: `${base} px-4 py-3 md:px-6 md:py-3`,
    secondary: `inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-1.5 md:px-6 md:py-2.5`,
    small: `${base} px-4 py-2 sm:px-5 sm:py-2.5 text-xs`,
    full: `${base} w-full sm:w-auto px-4 py-3 sm:px-5 sm:py-2.5 text-md sm:text-xs rounded-none sm:rounded-full text-center`,
    round: `${base} px-2.5 py-1 sm:px-3.5 sm:py-2 text-sm`,
    logout: `inline-block text-sm rounded-full bg-stone-600 font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-stone-500 focus:bg-stone-500 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-3 py-2 sm:px-3.5 sm:py-2`,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
