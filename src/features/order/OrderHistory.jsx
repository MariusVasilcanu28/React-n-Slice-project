import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders, clearOrder } from "../../features/order/orderSlice";
import { formatCurrency, formatDate } from "../../utils/helpers";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";

function OrderHistory() {
  const orders = useSelector(getOrders);
  const dispatch = useDispatch();

  const handleDelete = (orderId) => {
    dispatch(clearOrder(orderId));
  };

  const ongoingOrders = orders.filter(
    (order) => order.status === "ongoing" || order.status === "preparing",
  );
  const fulfilledOrders = orders.filter(
    (order) => order.status === "fulfilled",
  );

  return (
    <div className="order-history px-4 py-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mb-4 mt-7 text-xl font-semibold">Order History</h2>

      <section className="mb-6">
        <h3 className="mb-2 font-medium">Ongoing Orders</h3>
        {ongoingOrders.length ? (
          <ul className="flex flex-col gap-3">
            {ongoingOrders.map((order) => (
              <li
                key={order.id}
                className="flex flex-row items-center justify-between rounded bg-stone-200 px-6 py-5"
              >
                <div>
                  <Link
                    to={`/order/${order.id}`}
                    className="font-bold hover:underline"
                  >
                    Order #{order.id}
                  </Link>{" "}
                  {order.priority && (
                    <span className="ml-2 rounded bg-red-500 px-2 py-1 text-xs text-white">
                      Priority
                    </span>
                  )}
                  <p className="text-sm font-medium text-stone-600">
                    Total: {formatCurrency(order.orderPrice)}
                  </p>
                  <p className="text-sm font-medium text-stone-600">
                    Expected Delivery: {formatDate(order.estimatedDelivery)}
                  </p>
                </div>
                <Button type="primary" onClick={() => handleDelete(order.id)}>
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No ongoing orders.</p>
        )}
      </section>

      <section>
        <h3 className="mb-2 font-medium">Fulfilled Orders</h3>
        {fulfilledOrders.length ? (
          <ul className="flex flex-col gap-3">
            {fulfilledOrders.map((order) => (
              <li
                key={order.id}
                className="flex flex-row items-center justify-between rounded border-2 border-green-600 bg-stone-200 px-6 py-5"
              >
                <div>
                  <Link
                    to={`/order/${order.id}`}
                    className="font-bold hover:underline"
                  >
                    Order #{order.id}
                  </Link>{" "}
                  {order.priority && (
                    <span className="ml-2 rounded bg-red-500 px-2 py-1 text-xs text-white">
                      Priority
                    </span>
                  )}
                  <p className="text-sm font-medium text-stone-600">
                    Total: {formatCurrency(order.orderPrice)}
                  </p>
                  <p className="text-sm font-medium text-stone-600">
                    Delivered: {formatDate(order.estimatedDelivery)}
                  </p>
                </div>
                <Button type="primary" onClick={() => handleDelete(order.id)}>
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No fulfilled orders yet.</p>
        )}
      </section>
    </div>
  );
}

export default OrderHistory;
