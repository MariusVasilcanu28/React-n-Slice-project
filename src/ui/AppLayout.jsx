import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import OrderStatusChecker from "../features/order/OrderStatusChecker";
import Button from "./Button";
import { useSelector } from "react-redux";
import LinkButton from "./LinkButton";
import { getTotalCartQuantity } from "../features/cart/cartSlice";

function AppLayout() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isLoading = navigation.state === "loading";
  const location = useLocation();
  const showOrderHistoryButton = location.pathname !== "/orders";
  const { username } = useSelector((state) => state.user);

  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <div className="relative grid h-screen grid-rows-[auto_1fr_auto]">
      {/* Always run the status checker */}
      <OrderStatusChecker />

      {isLoading && <Loader />}
      <Header />

      <div className="overflow-y-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />

      {showOrderHistoryButton && username && (
        <div
          className={`sm:absolute sm:right-10 ${!totalCartQuantity ? "sm:bottom-10" : "sm:bottom-20"}`}
        >
          <Button to="/orders" type="full">
            Order History
          </Button>
        </div>
      )}
    </div>
  );
}

export default AppLayout;
