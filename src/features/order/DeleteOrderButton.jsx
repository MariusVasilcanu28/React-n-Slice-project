import React from "react";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../services/apiRestaurant";
import { clearOrder } from "../../features/order/orderSlice";
import Button from "../../ui/Button";

function DeleteOrderButton({ orderId }) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await deleteOrder(orderId);
      dispatch(clearOrder(orderId));
      alert("Order deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete order.");
    }
  };

  return <Button onClick={handleDelete}>Delete Order</Button>;
}

export default DeleteOrderButton;
