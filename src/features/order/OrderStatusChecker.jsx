import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderStatus, getOrders } from "../../features/order/orderSlice";

function OrderStatusChecker() {
  const orders = useSelector(getOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      orders.forEach((order) => {
        if (
          (order.status === "ongoing" || order.status === "preparing") &&
          now >= new Date(order.estimatedDelivery).getTime()
        ) {
          dispatch(updateOrderStatus({ id: order.id, status: "fulfilled" }));
        }
      });
    }, 60000);
    return () => clearInterval(interval);
  }, [orders, dispatch]);

  return null;
}

export default OrderStatusChecker;
