import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ordersList: [],
  currentPriority: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCurrentPriority(state, action) {
      state.currentPriority = action.payload;
    },
    addOrder(state, action) {
      state.ordersList.push(action.payload);
    },
    updateOrderStatus(state, action) {
      const { id, status, priority } = action.payload;
      const order = state.ordersList.find((o) => o.id === id);
      if (order) {
        order.status = status;
        if (priority !== undefined) {
          order.priority = priority;
        }
      }
    },
    clearOrder(state, action) {
      state.ordersList = state.ordersList.filter(
        (order) => order.id !== action.payload,
      );
    },
    clearOrders(state) {
      state.ordersList = [];
    },
  },
});

export const {
  setCurrentPriority,
  addOrder,
  updateOrderStatus,
  clearOrder,
  clearOrders,
} = orderSlice.actions;
export default orderSlice.reducer;

export const getOrders = (state) => state.order.ordersList;
export const getCurrentPriority = (state) => state.order.currentPriority;
