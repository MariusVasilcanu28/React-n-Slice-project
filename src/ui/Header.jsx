import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { logOut } from "../features/user/userSlice";
import { clearOrders } from "../features/order/orderSlice";

function Header() {
  const { username } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/");
    }
  }, [username, navigate]);

  const handleLogout = () => {
    dispatch(logOut());
    dispatch(clearOrders());
  };

  return (
    <header
      className={`flex flex-col items-center justify-between gap-3 border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:flex-row sm:px-6`}
    >
      <Link to="/" className="tracking-widest">
        React 'n' Slice
      </Link>
      <div
        className={`flex justify-between gap-5 sm:gap-10 ${!username && "py-5"}`}
      >
        {username && (
          <>
            <SearchOrder />
            <div className="flex items-center gap-5">
              <Username />

              <Button type="logout" onClick={handleLogout}>
                Log Out
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
